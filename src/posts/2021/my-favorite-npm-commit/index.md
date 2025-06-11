---
date: 2021-10-05T21:42:49.951Z
title: My Favorite npm Commit
tags:
  - npm
  - oss
  - time travel
  - tar
  - reproducible builds
photos:
  - - ./screenshot.png a screenshot of the commit on github
---

If you are a package manager, it's important to be able to perform a
[reproducible build](https://reproducible-builds.org/).  That is, the same
contents should result in the same artifact, always.

One of the biggest challenges to this is that files have timestamps
indicating when they were changed, created, modified, and so on.  While one
could argue that changing the `ctime` or `mtime` of a file is a "change" to
the contents, git (like most other source control systems) does _not_ view
it that way, gleefully letting the timestamps be whatever the system
decides they should be.

So, if you are packing your artifacts in a format that tracks file times,
you have to filter those out.

npm has used tar forever, and what we used to do is set the `mtime` and
`ctime` fields in the tar header to `0`, ie, `1970-01-01T00:00:00Z`, the
start of the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time).

This was fine, for many years, but people
[complained](https://github.com/npm/npm/issues/19933) that this broke some
zip programs, which became increasingly relevant as Docker uses the zip
archive format.  The zip format does not support any file timestamps with
dates prior to 1980-01-01.

So, instead of just setting all `mtime` and `ctime` values to `0`, we
needed to pick a date after 1980-01-01.

We considered using `1980-01-01T00:00:00Z`.  But since setting file
timestamps to an arbitrary date in the past is, in a way, a form of time
travel, we [did this
instead](https://github.com/npm/cli/commit/58d2aa58d5f9c4db49f57a5f33952b3106778669).

There are, today, billions of files in many millions of artifacts on the
npm registry, each one bearing an homage to one of the greatest films of
all time.  Think of Marty and Doc Brown every time you look in your
`node_modules` folder and wonder why all the file timestamps are from 1985.
