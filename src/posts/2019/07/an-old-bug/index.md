---
title: An Old Bug
date: 2019-07-10
tags:
  - past
  - self
  - cli
  - git tales
  - design
  - bugs
  - module
  - systems
  - subtle coding
---

Recently, I happened across [weird line in
`read-package-tree`](https://github.com/npm/read-package-tree/blob/4eed760/rpt.js#L88)
while reading through the code to see where I might get started
implementing Workspaces for the npm CLI.

At the time, I was so deep in the flow of reading code and tracing flows
through various parts of the system, it didn't strike me how important it
was.  I just thought "oh, that's obviously wrong" and [fixed
it](https://github.com/npm/read-package-tree/blob/e9cd536/rpt.js#L137)
without a second thought.  When I tried to integrate my changes back to the
mainline CLI with `read-package-tree` version 5.3.0, however, I realized
what I'd found.

It might not seem weird at first, so I'll provide some context.

The `read-package-tree` module reads the tree of packages in a
`node_modules` folder.  It doesn't do dependency resolution, or figure out
how that tree needs to be modified during an install or update, but it
_does_ provide the basic data structure that is subsequently modified
within the npm CLI installer codebase.  Most importantly, it loads `Node`
objects with `parent` and `children` links on them.

Node.js's module loader has a subtle and important property to it, which
makes a lot of npm's magic possible, and has made it such a good choice
over the years as a way to create CLI utilities.  When a module in Node
calls `require('foo')`, Node looks up through the `node_modules` hierarchy
to find the `foo` module.  However, importantly, when a package is
symlinked into another location, the module resolution process runs based
on the _target_ location, not the _link_ location.

This is why, for example, you can have a symlink from `/usr/local/bin/npm`
that points to `/usr/local/lib/node_modules/npm/bin/npm-cli.js`, but the
program doesn't have to be updated to carry all its dependencies along with
it.  This is how you can have multiple different versions of a dependency
loaded in the same Node program at the same time, providing a release valve
on the dependency constraint solver and thus avoiding dependency hell.

So back to this weird line.  In the context of that file, this bit of code
is loading up the children of a given node.  In order to match Node's
module resolution algorithm, that _should_ be reading the target and then
loading the children there, rather than treating the _link_ as the parent.

In the mindset of general code cleanup, I [modified it without even really
noticing](https://github.com/npm/read-package-tree/commit/e9cd536c543a0b722cb3acdee2cf2c7f881a9016#diff-e9a2fce8b6849815821a380c66e2a11aR137)
and then mistakenly let it slip past into a completely unrelated commit.

When I tried to integrate `read-package-tree` (with this change) into the
npm CLI, a bunch of tests broke in really bizarre ways.  That's when it hit
me what was going on, and a _lot_ of strange CLI behavior over the years
started to make a ton of sense.  Like, how occasionally a manually
symlinked module would result in its dependencies being stripped away or
mutated in some way that seemed to make no sense.  (I'm sure most people
don't do this, but as someone who is probably too comfortable with module
systems, I often mess with my projects with reckless abandon.)

Prior to npm v3, there was no deduplication by default, and installation
happened in a very naive "run in parallel, fetch whatever is still needed
at that level" kind of way.  It was dumb, in a mostly good way, but the
result was that occasionally you'd get 15 copies of something when 1 would
do just fine.  It also meant that a proper progress bar was impossible,
since the installer had no way of knowing when it would be done.  (Simple
loop detection helped it know that eventually it _would_ be done, but not
_when_, exactly.)

Over the years, npm has had a lot of bugfixes and logic added to work
around the issues that this one subtle mistake caused.  The result of all
that fixing, however, means that fixing the bug breaks a lot of stuff that
works just fine today.  The good news is that npm v7 will have Workspaces,
and (once the installer is completely refactored into
[@npmcli/arborist](https://github.com/npm/arborist)), it'll be trivial to
implement.

Out of idle curiosity, I tracked down where this bug had snuck in, though I
was pretty sure I already knew the answer.  It dates back to the [original
inception of the `read-package-tree`
module](https://github.com/npm/read-package-tree/commit/d8b7143).  It
really _should_ have been caught and fixed in
[db70482](https://github.com/npm/read-package-tree/commit/db70482) but,
well, it wasn't.

Spotted my past self red-handed, messing with me as usual, sneaking bugs
into my code.  If I ever catch that guy, he'll have quite a few things to
answer for.
