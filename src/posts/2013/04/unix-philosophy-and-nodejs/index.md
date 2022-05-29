---
layout: layouts/post.njk
date: 2013-04-18T15:45:00.000Z
slug: unix-philosophy-and-nodejs
title: Unix Philosophy and Node.js
tumblrid: 48281998870
type: text
slideshare: https://www.slideshare.net/IsaacSchlueter/nodejs-patterns-and-opinions
---
<p>At TxJS the other day, I gave a talk where I mentioned that the Unix Philosophy is a crucial part of the patterns, opinions, and culture of Node.js.  As usual, I made my <a href="https://www.slideshare.net/IsaacSchlueter/nodejs-patterns-and-opinions">slides available online</a> well in advance of the talk video being available.</p>

<p>For some reason, this brief mention of &ldquo;Unix Philosophy&rdquo; set off a few peoples&rsquo; ire.  Since I had only 25 minutes, and every slide could probably be its own talk entirely, I was rather light on elaboration.  Chances are, the video won&rsquo;t add all that much context.  But the goal was to pique conversation, so maybe that&rsquo;s a success if it invites criticism.  After all, uninformed trolling is just an invitation for education, so I thought I&rsquo;d explain.</p>

<p>Eric S. Raymond collected a few of the best explanations of the Unix Philosophy in his book, <a href="http://www.catb.org/esr/writings/taoup/html/ch01s06.html">The Art Of Unix Programming</a>.  He elaborates on 17 specific principles, but my favorite formulation of the Unix Philosophy is the terse explanation from Doug McIlroy as quoted by Salus in <em>A Quarter Century of Unix</em>:</p>

<blockquote>
  <p>This is the Unix philosophy:</p>

  <p>Write programs that do one thing and do it well.</p>

  <p>Write programs to work together.</p>

  <p>Write programs to handle text streams, because that is a universal interface.</p>
</blockquote>

<p>McIlroy&rsquo;s slightly longer original 4-point formulation is this:</p>

<blockquote>
  <p>(i) Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new features.</p>

  <p>(ii) Expect the output of every program to become the input to another, as yet unknown, program. Don&rsquo;t clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don&rsquo;t insist on interactive input.</p>

  <p>(iii) Design and build software, even operating systems, to be tried early, ideally within weeks. Don&rsquo;t hesitate to throw away the clumsy parts and rebuild them.</p>

  <p>(iv) Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you&rsquo;ve finished using them.</p>
</blockquote>

<p>Mike Gancarz, who worked on the X Window System, summed up the Unix Philosophy in 9 points:</p>

<blockquote>
  <ol><li>Small is beautiful.</li>
  <li>Make each program do one thing well.</li>
  <li>Build a prototype as soon as possible.</li>
  <li>Choose portability over efficiency.</li>
  <li>Store data in flat text files.</li>
  <li>Use software leverage to your advantage.</li>
  <li>Use shell scripts to increase leverage and portability.</li>
  <li>Avoid captive user interfaces.</li>
  <li>Make every program a filter.</li>
  </ol></blockquote>

<p>That last point really resonates with something that Ryan Dahl has often said, &ldquo;Every program is a proxy.&rdquo;  The first 3 are basically <a href="http://substack.net">James Halliday</a>&rsquo;s rules for living.</p>

<p>All too often, people get hung up on the wrong aspects of the Unix Philosophy, and miss the forest for the trees.  The Unix Philosophy is not about a specific implementation, or anything that is necessarily unique to any Unix operating system or program.  It&rsquo;s not about file descriptors, pipes, sockets, or signals.  Those sorts of complaints are like saying that someone is not a buddhist unless they speak <a href="http://en.wikipedia.org/wiki/Pali">Pali</a>.</p>

<p>Unix Philosophy is an outlook for software development, not any specific technical development in software.  It is an ideal to reach for, and perhaps ironically, it is an ideal that instructs us to occasionally eschew idealism in favor of practicality.</p>

<p>In Node, the basic building block that people share and interact with is not a binary on the command line, but rather a module loaded in by <code>require()</code>.  The universal interface <em>is</em> a text stream, but it&rsquo;s a JavaScript Stream object, rather than a stdio pipe.  (The stdio pipes are of course represented by JavaScript streams, because that is our universal interface, so what else <em>would</em> we use?)</p>

<p>So, in terms of Node.js, here&rsquo;s how I&rsquo;d express the Unix Philosophy.  Alas, I am no McIlroy, and I lack the time or skill to write this any shorter.</p>

<blockquote>
  <p>Write modules that do one thing well.  Write a new module rather than complicate an old one.</p>

  <p>Write modules that encourage composition rather than extension.</p>

  <p>Write modules that handle data Streams, because that is the universal interface.</p>

  <p>Write modules that are agnostic about the source of their input or the destination of their output.</p>

  <p>Write modules that solve a problem you know, so you can learn about the ones you don&rsquo;t.</p>

  <p>Write modules that are small.  Iterate quickly.  Refactor ruthlessly.  Rewrite bravely.</p>

  <p>Write modules quickly, to meet your needs, with just a few tests for compliance.  Avoid extensive specifications.  Add a test for each bug you fix.</p>

  <p>Write modules for publication, even if you only use them privately.  You will appreciate documentation in the future.</p>

  <hr><p>Working is better than perfect.</p>

  <p>Focus is better than features.</p>

  <p>Compatibility is better than purity.</p>

  <p>Simplicity is better than anything.</p>
</blockquote>

<p>The Unix Philosophy is an ideology of pragmatism.  It is about balancing the twin needs of writing <em>good</em> software, and writing <em>any software at all</em>.  It&rsquo;s a practical set of advice for trading a moderate increase in development cost for a much larger reduction in maintenance costs.</p>

<p>In the real world, we are faced with the completely unfair constraint of being human while writing programs and while debugging them, and none of these costs can ever be reduced to zero.  This ideology is contextual, and can be applied at all levels of the stack.  It is an open acknowledgement that we are actually not smart enough to know how to write the software we need the first time around, because we usually can only fully understand our problems once we have finished solving them.</p>

<p><strong>None of these rules are sacrosanct!</strong>  In fact, in many cases, they can be at odds, or even completely contradictory.  However, if we keep our units of programming small, with simple universal interfaces, we can find leverage the piecemeal structure as a quality ratchet, swapping out clumsy parts as we go along.</p>

<p>Nothing about the Unix Philosophy explicitly relates to a culture of software sharing.  However, it should be no mystery that it comes from the software community where we argue at length about the best <em>way</em> to make our programs properly Free.  Software that is developed according to these principles is easier to share, reuse, repurpose, and maintain.</p>
