---
date: 2017-06-09T21:31:28.000Z
redirects:
  - /post/161633971373/documentation-driven-development
  - /post/161633971373
slug: documentation-driven-development
tags:
  - oss
  - coding
  - writing
title: Documentation Driven Development
tumblrid: 161633971373
type: text
---
<p>I&rsquo;ve used the term &ldquo;Documentation Driven Development&rdquo; in conversation a few times over the years, and people usually seem to just get what I&rsquo;m talking about.  It&rsquo;s like &ldquo;test driven development&rdquo;, and every bit as disciplined, but for docs instead of tests.  I <a href="https://www.google.com/search?q=%22documentation+driven+development%22">certainly did not invent this concept</a>, and it&rsquo;s very simple.</p>

<p>I also don&rsquo;t think that many folks realize just how serious I am about this.  And the repeated truism that <a href="https://medium.com/@mikeal/docs-docs-docs-1e06d17fa06f">bad documentation is the worst thing in open source</a> seems to indicate that it&rsquo;s not being evangelized enough.</p>

<p>Here&rsquo;s the process in a nutshell.  This is how I usually write JavaScript modules, but it&rsquo;s also how I approach designing product changes at npm, from small tweaks to entire new product lines.</p>

<ol><li><p><strong>Before anything else</strong>, write down what the thing is in <code>README.md</code>.  I use markdown, but any portable plain-text format will do.  This takes three parts:</p>

<ol><li>The name of the thing.</li>
<li>The 1-sentence description of what the thing is.</li>
<li>If necessary, a few paragraphs describing the thing.</li>
<li>Example code demonstrating how to use the thing.</li>
</ol><p>Note: the thing doesn&rsquo;t exist yet.  You do this <em>before</em> it exists.</p></li>
<li><p>Copy the example code into a test file.  (Basically just do <code>const t = require('tap')</code> and throw some asserts around it.)  For things bigger than a single JavaScript module, you can also copy the various points of the description into user story issues for QA or whatever process you use to verify that the thing you built is actually what the docs say it is.</p></li>
<li><p>Now you are ready to write the code that does that thing.  Whenever it seems like the usage example was wrong, update it.  As it becomes more clear what it is and how it works, keep the docs in sync with the code and the tests.  The goal is to maintain 100% test coverage <em>and</em> 100% documentation coverage.</p></li>
<li><p>When you want to make a change to the thing, first update the docs <em>and then</em> write the code and the test.  It doesn&rsquo;t matter if the test comes along with the code or if you write the code and then the test, but the docs should <em>absolutely</em> be written before any implementation or test code.</p></li>
</ol><p>If you ever find yourself thinking &ldquo;It&rsquo;s done, I just need to update the docs&rdquo;, then you&rsquo;ve violated this process by even having that thought.  Not only is it not done, but you might&rsquo;ve done the wrong thing.</p>

<p>It&rsquo;s fine to write some code to try to figure out what the thing should be.  But that is experimental scaffolding, and should not be thought of as anything other than useful garbage, like a sketch on a napkin.  Maybe it can be turned into something enduring, but that starts with docs.</p>

<p>Writing clear prose about software is an unreasonably effective way to increase productivity by reducing both the frequency and cost of mistakes.  Just as with good tests, it helps ensure that your program does what you think it does, and that you&rsquo;ve thought it all the way through.</p>

<p>This unreasonable effectiveness of writing things down comes from the fact that a human brain&rsquo;s working memory size is absurdly small.  While it seems that we can hold a lot of things in our mind at once, it&rsquo;s only by constantly swapping to long-term storage and ignoring increasing numbers of trees in order to see the forest.  A written document does not have that problem.  We can fully off-load significant chunks of thought with hardly any data-loss, allowing us to think slower and more carefully while still covering a huge semantic surface.</p>

<p>I don&rsquo;t like using inline comments to generate interface documentation, for the simple reason that my sole focus must be on the user mental model when writing docs, and that should lead the creation of the thing.  If I&rsquo;m writing documentation and implementation at the same time (or even in the same format), I&rsquo;m naturally inclined to create a &ldquo;nice implementation&rdquo;, which may or may not be an interface that meshes well with the user&rsquo;s mental model.</p>

<p>The design of how a thing is used limits the implementations available, <em>and vice versa</em>, so whichever is done first will tend to limit the scope of the other.  It can be a bit of extra work wrestling the code to fit into the constraints of a user&rsquo;s mental model.  But it&rsquo;s work you only have to do once, as opposed to the ongoing slog of handling bugs and issues that result from trying to shape user expectations to fit an implementation.</p>
