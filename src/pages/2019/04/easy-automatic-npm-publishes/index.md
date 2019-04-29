---
title: Easy Automatic npm Publishes
slug: easy-automatic-npm-publishes
date: 2019-04-30T16:00:00Z
via:
  name: npmjs
  title: The npm Blog
  url: https://blog.npmjs.org/post/184533216740/easy-automatic-npm-publishes
---



One common question from people using npm to publish, especially on CI systems,
is how best to automate the process, especially when dealing with multiple
branches.

For a while now, I've been using a pattern that takes almost all of the human
interaction out of it, since I tend to mess stuff up when I type it with my
fingers.  This works well for automatic publishes from CI or when publishing
manually from a terminal.

I haven't manually typed [`npm
publish`](https://docs.npmjs.com/cli/publish) in a while, which is a good
thing.

## First things first, have good tests

I am a huge fan of running tests with 100% test coverage.  It isn't a perfect
guard against every problem out there, but it does keep me from doing stupid
things, like assuming that I know what my program does.

My go-to test library is [`tap`](https:/www.node-tap.org/), but you can do this
with any testing library that supports code coverage.  If it doesn't support
code coverage out of the box, you can use [`nyc`](https://istanbul.js.org/) to
run any Node.js process with coverage tracking.

To use it, run `npm i tap -D`, and then add this to your `scripts` section in
package.json:

```json
{
  "scripts": {
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

## The `npm version` Command

The [`npm version`](https://docs.npmjs.com/cli/version) command will
figure out what the next version should be, edit your package.json file, and
even check it into git with a signed tag.  The beauty of this is that it also
prevents you from bumping the version when you have untracked changes in your
git working directory, and provides some hook scripts that can do other things
before or after the version bump.

In the `scripts` section of my `package.json` file, I add a `preversion` script
that runs my tests:

```json
{
  "scripts": {
    "preversion": "npm test",
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

Now, before I can bump the version, npm will make sure that my tests pass.  If
the test fails (or if coverage isn't 100%), then it'll fail and the version
command fails.

## Publishing on Version Change

Bumping the version is fine, but then it's time to share it.  Along with
`preversion`, the `postversion` command does actions _after_ the version is
bumped.  So, let's hook onto that to publish the package.

```json
{
  "scripts": {
    "postversion": "npm publish",
    "preversion": "npm test",
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

## Keeping Git and npm in Sync

That's fine for pushing to npm, but then I have to remember to push the changes
to git.  (I have _many times_ forgotten to do this, and gotten issues because
the code on npm is not in GitHub, which is generally a bad sign.)

Thankfully, npm also gives us a way to hook a script around the `publish`
event, so let's use that:

```json
{
  "scripts": {
    "postpublish": "git push origin --all; git push origin --tags",
    "postversion": "npm publish",
    "preversion": "npm test",
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

This runs two commands.  The first pushes all branches, and the second pushes
all the tags (including my newly published version tag).

## Branches and Dist-Tags

Occasionally, I'll find myself working on some big feature for a new release
that is not yet ready for prime time.

In the feature branch, I'll modify the scripts by adding a `--tag` argument to
the npm publish command to put it on a
[dist-tag](https://docs.npmjs.com/cli/dist-tag) other than `latest`.

```json
{
  "scripts": {
    "postversion": "npm publish --tag=next",
    "postpublish": "git push origin --all; git push origin --tags",
    "preversion": "npm test",
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

Now, I can tell people to run `npm install my-module@next` to try out the new
prerelease version.

On the other side, I might want to land a bugfix or backport a feature for a
legacy version.  To do that, I create a git branch with the old version, and
update `package.json` to add a `legacy` tag instead.

```json
{
  "scripts": {
    "postversion": "npm publish --tag=legacy",
    "postpublish": "git push origin --all; git push origin --tags",
    "preversion": "npm test",
    "test": "tap"
  },
  "tap": {
    "check-coverage": true
  }
}
```

## Bonus Points: Sign Your Versions

Git has support for PGP signing tagged commits.  To tell npm to take advantage
of this, set these two config values:

```bash
npm config set sign-git-commit true
npm config set sign-git-tag true
```

If setting up PGP and hooking it up with Git is too much of a pain, you're not
alone.  I'm a nerd who's been computering for a very long time, and I can't
handle it.  Also, I'm always worried about my keys just sitting on my machine
in text files, even if they are encrypted with a passphrase.  And if they _are_
encrypted with a passphrase, then I have to type it in all the time, and that's
just too much work.

I'm a huge fan of [Krypton](https://krypt.co/).  It stores your PGP and SSH
private keys in your mobile device's secure storage vault, and then sends a
push notification to allow it to do things with those keys.  It's dead-simple
to set up, and extremely easy to use, and gives you a hardware second factor
for everything that matters.

Of course, and I don't exactly know if this is a bug or a feature, it does mean
that whenever I run `npm version`, between the commit, the signature, the tag,
and the two SSH connections, my phone does a lot of buzzing.

## Running `npm version` to Test and Publish

From there, I use the [`npm version`](https://docs.npmjs.com/cli/version)
command to do all my publishing.  For bug fixes, I run `npm version patch`.
For new features, I run `npm version minor`.  For breaking changes, I run `npm
version major`.

If you use [Conventional Commits](https://www.conventionalcommits.org/) or
similar tools, you could even automate the detection of what kind of version
bump it should be, though that's left as an exercise for the reader.

This approach of using npm scripts to automate the process works well with any
system where you'll be publishing and committing.  Set it up in your next
project, and trust your human fingers a little bit less :)

## PS: npm Configuration is Very Flexible

You'll note that I did `--tag=<whatever>` in the publish commands above.  You
can also [configure](https://docs.npmjs.com/misc/config) npm in many other
ways.  Any configuration value (including `tag` in the case of `npm publish`)
can be set:

- explicitly on the command line, like `--tag=whatever`
- in the environment, like `NPM_CONFIG_TAG=whatever`
- in a `.npmrc` file in the root of your project, like `tag = whatever`
- in a `.npmrc` file in your home directory
- in `/usr/local/etc/npmrc` (or `/usr/etc/npmrc` on some systems).

This works inheritance-style, so the higher up on that list a setting is, the
higher the priority.

For CI/CD systems, this means that you can sometimes set environment variables
to control the behavior of npm commands, without having to change the code or
inject files into places.  If it's easier to control it with a file (for
example, checking a `.npmrc` file into git), then that's also fine.
