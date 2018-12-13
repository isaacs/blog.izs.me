---
date: 2011-02-14T19:43:01.000Z
redirect_from:
  - /post/3295261330/on-npm-and-homebrew/
  - /post/3295261330/
  - /post/3295261330/on-npm-and-homebrew
  - /post/3295261330
slug: on-npm-and-homebrew
title: On npm and Homebrew
tumblrid: 3295261330
type: text
---
<p><a href="https://github.com/mxcl/homebrew">Homebrew</a> is a Mac OS X package
manager created by <a href="https://github.com/mxcl">Max Howell</a>.</p>

<p>It&rsquo;s git-based, somewhat opinionated, and managed by a handful of
volunteers that review patches sent in by community members.  Its
purpose is to install unix programs and shared libraries, but Homebrew is designed with OS X in mind: by limiting the
scope of the problem, they manage significant gains in performance and
functionality.  Homebrew&rsquo;s featureset and politics reflect that problem set well.</p>

<p>I&rsquo;ve said before that writing a package manager is easy.  It is.
Maintaining one, and managing the community using it?  Whoa, boy, that
gets tricky fast.  The Homebrew guys have done an admirable job of
steering that ship through a tricky bit of sea that few dare to deal
with.</p>

<p>Almost as soon as npm was unleashed on the Node community, some helpful
folks helpfully decided to help us all by putting npm into the Homebrew
index.  I was so thankful to be helped in this way!  I love Homebrew,
and now my program is in it?  Oh, Joy of Joys!</p>

<p>And thus began the great wailing and gnashing of teeth.</p>

<h2>The Problem</h2>

<p>npm is a package manager.  It is not git-based, it is as opinionless as
I could manage, and anyone can publish anything.  (I
do maintain autocratic powers over the registry, but I am a very lazy
dictator.)</p>

<p>npm is designed to install NodeJS programs and module libraries.  While you
could in theory install anything with npm, that&rsquo;d be a little dumb.  It
still lacks (and will likely lack forever) some features you&rsquo;d really
want for that purpose, and has a bunch of features that are specifically
designed for node programs.  It makes no assumptions about pre-existing
operating systems, libraries, and so on.</p>

<p>I&rsquo;m not sure one could say whether or not npm&rsquo;s approach is
<em>better</em> than Homebrew&rsquo;s.  For its use case, certainly.  But
Homebrew is a perfectly lovely package manager that fills an important
niche very nicely.</p>

<p>Better or worse, the Homebrew model is not very amenable to npm&rsquo;s way of
doing things, and the shoehorning caused some of the worst sorts of
bugs: The kind where &ldquo;It works&rdquo;, and then 2 months later &ldquo;It doesn&rsquo;t
work.&rdquo;  What&rsquo;s worse, the error was reported to the user as an npm
problem, so I frequently found myself dealing with confusing debugging
information, and giving users solutions that didn&rsquo;t fix the issue.</p>

<p>The standard response quickly became, &ldquo;It doesn&rsquo;t work with
Homebrew.  Remove it, and install it using the instructions in the
README.&rdquo;  What&rsquo;s worse, the changes that caused these issues were in the
Homebrew index, and not in npm.  Even if I&rsquo;d wanted to code around the
problems, I couldn&rsquo;t just do that in npm itself.</p>

<p>It was not easily fixable, and very frustrating.  I had more than enough work to do on npm itself, so it was always pretty easy to just blame the other guy, and go back to work.  But this was not the right course of action.</p>

<h2>The Solution</h2>

<p>One day, in a fit of frustration over the situation, having just painfully
explained to two users in a row that their most beloved package managers have
both been lying to them, I managed to raise the ire and
disappointment of <a href="http://jan.prima.de/">Jan Lenhardt</a>.  Luckily for us
all, he had the pre-existing notion that I&rsquo;m an ok chap, and decided to
give me a swift kick in the ass rather than
<a href="http://c2.com/cgi/wiki?SetTheBozoBit">setting the bozo bit</a>.  He deserves a lot of credit for stepping in when and how he did.</p>

<p>I opened up an issue on the Homebrew github page, started a pull
request, and <a href="https://github.com/mikemcquaid">Mike McQuaid</a> and I duked
it out for a while.</p>

<p>We all knew at the start of the discussion that just removing
npm from the Homebrew index was a potential course of action that would
solve a lot of problems with very little cost to everyone.  But none of
us wanted to do so capriciously, without at least riding the solution
train to its logical end.</p>

<p>Mike and I eventually got to a rewrite of the npm
recipe that we could both live
with.  It wasn&rsquo;t great, but it was much better.  And, really, there wasn&rsquo;t
any way to improve upon it further, without rewriting major chunks of one or
both of our programs.</p>

<p>Max made the call to remove it.  I agree with him.  Better for a feature
to be intentionally lacking rather than subtly broken.</p>

<h2>Takeaways, and The Future</h2>

<p>The debate was fruitful, and helped inform the development of
npm and node.  I&rsquo;d like to think it was somewhat profitable for Mike
and Max, as well.</p>

<p>There may one day be an npm recipe in Homebrew again.  But at least not
until npm 1.0, when things settle out a bit.</p>
