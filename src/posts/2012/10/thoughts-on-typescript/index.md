---
layout: layouts/post.njk
date: 2012-10-01T23:18:00.000Z
redirect_from:
  - /post/32697104162/thoughts-on-typescript/
  - /post/32697104162/
  - /post/32697104162/thoughts-on-typescript
  - /post/32697104162
slug: thoughts-on-typescript
title: Thoughts on TypeScript
tumblrid: 32697104162
type: text
---
<p>I&rsquo;ve been through the paces quite a few times trying to optimize the hell out of very hot code. In the last few years, this has been mostly in V8, of course, but the basic principles are not too far off in different JS environments.</p>

<p>It&rsquo;s important to not put too much weight in rules of thumb, and we programmers are particularly bad at that, given our tendencies towards abstraction. But that disclaimer out of the way, I&rsquo;ve found very few exceptions to these two rules:</p>

<ol><li><p>If you have more than one of something, use a class; not a &ldquo;plain old object&rdquo;. I recently changed the &ldquo;url&rdquo; module in node-master, and made it twice as fast by replacing the plain {}-style objects with Url class instances.</p></li>
<li><p>Always put the same kinds of things in the same places. An array of numbers should only ever have numbers; an array of objects should always only have objects. If a FooBar object has a &ldquo;foo&rdquo; member, then set this.foo to <em>something</em> in the constructor.</p></li>
</ol><p>It&rsquo;s really nice writing code in a loosely typed language. Most of the time, these optimizations are not all that relevant, and when they are, the odd exception is probably fine, if it&rsquo;s truly exceptional. But when you really care about maximizing speed, that flexibility can make it surprisingly tricky to track down all the deviations.</p>

<p>I&rsquo;m probably not going to stop using Vim to write code any time soon. I&rsquo;m probably never going to use Windows as my development environment. Code completion sort of annoys me, and I&rsquo;ve usually turned it off when I had editors that did it. But I&rsquo;m actually very excited about <a href="http://www.typescriptlang.org/">TypeScript</a>.</p>

<p>It&rsquo;d be a great idea to write up a TypeScript header file for the API surface in Node. Then, we could automatically test for API deviations, validate and flesh out our documentation, etc. Static typing <em>does</em> confer some very relevant value. Typically it does so at the cost of flexibility, but this brings a lot of the benefits to JavaScript in an optional way, which is very powerful.</p>

<p>Also, it&rsquo;s not reinventing the language. It is JavaScript, mostly. Or JavaScript entirely, if you just write JS and have a separate declaration file, but with the benefits of linting that does more than whine about comma placement and indentation, and <em>actually finds subtle errors</em> in your programs.</p>

<p>There have been a lot of attempts to come up with ways to add type hints and API-auto-documentation to JavaScript. (JSDoc, YUIDoc, AS3/ES4, etc.) Most of those are not very compelling. The fact that Microsoft is doing this, and building products on top of it (which they will inevitably hope to make money on), is very encouraging. It says to me that this is going to be a real thing with real developers working on it, with budgets and timelines, and the whole bit. It&rsquo;s somebody&rsquo;s job.</p>

<p>I had some suggestions that I passed along to the folks at Microsoft:</p>

<ol><li><p>It&rsquo;d be <em>amazing</em> if there was a way to automatically try to guess at the best types, given a set of JavaScript code. Writing a declaration file is insanely tedious. I don&rsquo;t want to do it, and that&rsquo;s a blocker to adoption. I know that this is a hard problem, and totally not what you&rsquo;d expect in a first release, but hey, V8 is guessing types pretty good, so it must be possible. That would make me happy.</p></li>
<li><p>It&rsquo;d be nice to let it put run-time type-checking into exposed functions at the API surface. If this needed to be a dev flag or something, then that&rsquo;s fine. I&rsquo;d go ahead and let it in exported functions, though. We have a lot of that code in Node, and it&rsquo;s tedious to write and maintain.</p></li>
</ol><hr><p>ERRATA: V8 doesn&rsquo;t guess types, it observes them and keeps a cache.  But hey, Microsoft has a few bucks, and some access to smart folks.  They should do this.  Also, I want a pony that poops rainbows and can always pick the optimum path between multiple destinations with ideally packed bags.  So there.</p>
