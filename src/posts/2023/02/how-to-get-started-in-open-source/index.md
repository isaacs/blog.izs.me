---
title: How to Get Started in Open Source (as a Developer)
slug: how-to-get-started-in-open-source
date: 2023-02-28T16:33:43.630Z
tags:
  - oss
  - the business
---

This was an email I wrote a few years ago in response to someone
asking how they can get started in open source, if they're
already a professional software developer. Someone else just
asked a similar question, so rather than copy-paste from my sent
messages, I'm copy-pasting onto my blog.

---

If you already work as a software developer, there's a very good
chance you're interacting with open source dependencies on a
somewhat regular basis. If you want to get involved with
contributing to open source, the simple (but somewhat unhelpful)
answer is: just start doing it.

To explain somewhat what that actually means, there are four main
activities in open source:

- creating new things
- fixing existing things that are broken in some way
- improving existing things with new functionality
- helping users

If you already a professional software developer, then all four
of these are things you can contribute to as part of your normal
work, and ideally it doesn't need to require extra labor (or at
least, not more than you benefit from). Your job is to create and
improve the software your employer uses and/or sells, so it's
only a slight mental frame shift to see how "contributing to open
source" is a part of that work.

For the first, creating things, practice noticing the thought in
the back of your head while working in software, "there should be
a module that just solves this problem for me so it's easier".
Sketch out how you'd use it, think about what it would do. Then
write that module and publish it, and use it to solve the problem
you had.

For the second, fixing things, there's a lot written on how to
improve your debugging and issue reporting skills, but the most
important thing is building the skill of creating small
reproducible test cases (ideally, even by adding a test to a
program's existing test suite that fails due to the bug). As a
maintainer, good reproducible bug reports are always a gift.

Many projects have an ever-increasing list of bugs that have yet
to be addressed, so you can always start in on those. But the
easier approach I've found is to build a practice of noticing
when you think "fuck this, this thing is broken, I'll use xyz
instead", and before you do switch to the other option, make a
small program to _prove_ it's broken in the way you think.  Then
fix the broken thing (or at least, report it to the author with
the small proof you wrote). Surprisingly often, you'll find that
your minimal test program _doesn't_ break in the way you observed
in your actual program, and you learn something interesting about
your own assumptions.

The third, improving existing things with new functionality, is a
blend of the first two. Keep an eye out for cases where you're
using something and find that it's lacking some functionality
that seems to "fit" with what it does, maybe even where you're
surprised it _doesn't_ do what you need. Sketch how you'd use the
added functionality, what it would do, etc. Then add that
functionality, or at least request it as clearly as possible,
with your reasoning and a clear explanation of your use case.
(The author will often have feedback that can be very helpful,
such as workarounds, reasons why it's not a good idea, better
approaches, etc., so it's a good idea to at least request the
feature and see what they say, especially if digging into the
code is challenging.)

For the fourth, helping users, there's a lot of ways that people
mean to help, but some of these are sometimes unhelpful. When
reporting issues you have, you'll be right there in the bug
tracker, and will probably see many open issues that could
benefit from a minimal reproduction case, or where a requested
feature is not fully articulated. Get in the habit of asking
questions and clarifying the limits of what you actually know,
rather than stating authoritative answers, especially if it's not
your project.

There's certainly no moral or ethical requirement that you as a
worker personally contribute your time and attention to open
source just because you use it in your day job. If it's fun and
rewarding for you, if it fills your heart with joy, or if you see
some personal benefits from learning or improving your skills,
then yeah, just do it. If not, don't. But always know that it's
optional, and available to you.

Even if you don't do these kinds of contributions (which is 100%
fine!), it _is_ important to encourage your employer to dedicate
time and money towards the open source projects that their
business depends on. Many companies want to contribute back to
the communities they benefit from (for self-serving as well as
altruistic reasons), but often managers and executives lack an
understanding of specifically which projects matter to the
business, and thus where their contributions should be deployed.
So it's on us to act as technical advisors.

And if your employer has a problem with you improving your skills
by participating in the oss communities that benefit them, and
improving the state of the craft that their business depends on,
well... find another employer, because that's really a misguided
and short-sighted point of view.
