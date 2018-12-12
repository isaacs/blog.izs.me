---
date: 2016-07-15T16:20:57.000Z
redirects:
  - /post/147451253818/among-the-many-hardest-problems-in-computer
  - /post/147451253818
slug: among-the-many-hardest-problems-in-computer
title: Among the Many Hardest Problems in Computer Science Are Such Things As...
tumblrid: 147451253818
type: text
---
<p>There&rsquo;s a saying that the two hardest problems in computer science are caching, naming things, and off-by-one errors.</p>

<p>I think there&rsquo;s just one hard problem: asynchronously shared state.  The others are all instances of it.</p>

<p>Race conditions can only happen when processing happens in multiple places, and they become even more complicated when information is updated by multiple actors and stored in multiple places.</p>

<p>You read a thing from disk, do some stuff to it, write back the result.  Except, while you&rsquo;re doing stuff to the information, some other process reads the same file, does some different stuff to it, and writes its result back.  Whoever takes the longest wins, the other&rsquo;s write is gone.</p>

<p>Where this is more complicated is when the processing is done in human brains, which are notoriously hard to observe, operate in massively parallel fashion, and have extremely distributed and unreliable data storage capabilities.</p>

<p>What do we call this thing?  Is it a cache, or a copy?  A read-through cache?  How often should it be purged?  If it&rsquo;s a copy, is it authoritative?  When does it get synced back?  The problem is not just that words have meaning, but that they have so many meanings.</p>

<p>A word like &ldquo;specification&rdquo; can mean &ldquo;hard and fast set of rules which explicitly limit the scope of work&rdquo; to one person, and &ldquo;the beginning of a conversation which points at the intent of a feature&rdquo; to someone else.  They&rsquo;re probably going to have some unproductive arguments about whether a thing &ldquo;satisfies the spec&rdquo; or not.</p>

<p>And that&rsquo;s just when we&rsquo;re talking about simple things like programming.  Start getting into conflict or culture or strategy, and holy moly, it&rsquo;s so much harder.</p>

<p>It&rsquo;s tempting to say that the solution is &ldquo;more communication&rdquo;, but more <em>bad</em> communication can make the situation worse, and even good communication has a cost.  &ldquo;So write it down!&rdquo; I say to myself in my internal argument, wherein I attempt to reconcile the state I share among the many processes across my brain.  Ok, but write <em>what</em> down?  Where?  How often do you read it back again?  Does anyone know where it&rsquo;s written?  Is it authoritative or suggestive?  How does one edit it when the situation changes?</p>

<p>Turns out hard things are hard.  My past self often assumed that something would not be so hard, and my current self now has to reconcile the new experience of hardness with the cached value of expected ease.</p>

<p>Shared state.  It&rsquo;s one hell of a fucker.  The only easy thing is solipsism, but then it&rsquo;s hard to get much done on your own, isn&rsquo;t it?</p>

<figure class="tmblr-full" data-orig-height="380" data-orig-width="450" data-orig-src="./Monty-Python-Spanish-Inquisition-GIF.gif"><img src="https://66.media.tumblr.com/287c3d03471af837e9c5a1fa3b69dfe5/tumblr_inline_pe360fGION1qzgxun_540.gif" title="NOBODY expects asynchronously shared state problems!" alt="NOBODY expects asynchronously shared state problems! [DIABOLICAL LAUGHTER]" style="width:100%" data-orig-height="380" data-orig-width="450" data-orig-src="./Monty-Python-Spanish-Inquisition-GIF.gif"/></figure>
