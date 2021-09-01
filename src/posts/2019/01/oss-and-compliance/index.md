---
layout: layouts/post.njk
title: OSS, Risk, and Compliance
tags:
  - oss
  - the business
date: 2019-01-16T19:32:23.550Z
via:
  name: npmjs
  url: https://blog.npmjs.org/post/182064135060/oss-risk-and-compliance
redirect_from:
  - /post/182064154983/oss-risk-and-compliance/
  - /post/182064154983/oss-risk-and-compliance
  - /post/182064154983/
  - /post/182064154983
---

[npmjs](https://blog.npmjs.org/post/182064135060/oss-risk-and-compliance)

I'm going to tell you a story.

There are no villains in this story.  Just smart people doing their
best, and unfortunately working at cross-purposes through no fault of
their own.

The names and places have been changed, but it is a true story.  I've
heard this story a lot over the years in my role at
npm.

## Once Upon A Time...

Way back in the late 1900s, the once-successful ACME Corporation was
falling behind. Their development of proprietary widgets (on a
proprietary software stack) was unable to keep up with the
competition, who were leveraging Open Source platforms at a much lower
cost.

Many within ACME Corp wanted to adopt the <abbr title="Open Source
Software">OSS</abbr> approach, but they were bound by a multitude of
contracts and agreements with customers and the regulatory rules of
the various countries in which ACME Corp operated.

ACME Corp was in a pickle.  Over a barrel.  Pickled in a barrel of
mixed metaphors, one could say.

## Accepting Open Source Software

Luckily, ACME Corp hit on a solution. They joined some of the
foundations springing up to provide governance structures for popular
OSS projects, and instituted a policy where any employee could use any
Open Source code that they liked, provided it was submitted for review
by their compliance team.

This allowed them to avoid projects that were abandoned, insecure, or
published with an incompatible license. Using a simple form was all it
took, their developers could deliver value using the most up to date
methods and tools.

Life was good.

## Then Life Changed

Shortly after the turn of the 21st century, a series of well-intended
solutions to valid problems ended up causing new problems for ACME
Corp.  All solutions, in solving a problem, reveal new ones.

First, GitHub made it far easier for developers of Open Source to
collaborate with one another. This allowed projects to become quite
popular without any corporate or nonprofit backing.

Next, Node.js brought JavaScript out of the web browser. Prior to
Node, plenty of Server-Side JS platforms had been hacked up as side
projects, or funded projects of promising companies.  But Node was the
first to significantly benefit from GitHub's network effects.

The last piece of this puzzle was an early Node.js contributor, who'd
been working in the SSJS space for a while, and decided to write a
[package manager](https://www.npmjs.com). He'd seen the importance of
package management as a development tool before, and had spent quite a
bit of time thinking about how reducing friction makes great things
happen.

## Impacts

A simple module system and package methodology became ubiquitous.
Suddenly JavaScript was easy to share and compose.  Instead of
JavaScript platforms having to include the kitchen sink, they could be
lightweight toolkits with loose coupling between parts.

This reduction in friction enabled what came to be known as the "small
modules" movement. A number of prolific Open Source enthusiasts began
to conceive of a _single file_ as the default unit of code sharing,
instead of a branded platform backed by a foundation.

## Meanwhile, back at ACME Corp...

With all this distributed sharing, instead of relying on 2 or 3
well-known OSS platforms with clear governance, web applications came
to rely on an interconnected mesh of thousands of tiny modules,
created by an unaffiliated horde of hundreds individual contributors.

At ACME Corp, the process has started to creak. Well, not "creak",
exactly. More like "break". It's broken.

The compliance team insists on only using modules that pass review.
Developers who do write hand-rolled scripts to catalog all of their
dependencies for the requisition forms are laughed at.

"2305 modules? You've gotta be kidding me. Use less, or come back next
year."

The best devs have moved on to companies with less stringent rules.
New developers coming out of school don't even know how to create
websites without npm and React and Babel and a zillion of these
things.

Today, the battle lines are drawn within ACME Corp, forcing developers
to rely on subterfuge. The cost of a security vulnerability or getting
sued for violating a license can be in the millions. But failing to
ship a website is an existential threat.

When compliance complains that the new continuous delivery system is
circumventing their OSS rules, the CTO says "I know, I'm on it", and
then quietly ignores it.

## And they all lived happily ever after...?

I wish that this was pure fiction.

The approach to compliance in almost every industry has not kept up
with the advances in Open Source Software practices. This is a
pressing crisis facing some of the biggest software development teams
in the world right now.

I believe this problem is solvable, but it is not adequately solved
yet.

Most solutions ask an organization to choose between safety and
efficiency; but inefficiency is never safe. The only valid approach is
to reduce friction for development teams, while also helping
compliance teams to do their job.  This is the the only way to bring
peace to the enterprise.
