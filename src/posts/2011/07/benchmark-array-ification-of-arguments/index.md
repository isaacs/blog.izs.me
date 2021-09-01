---
layout: layouts/post.njk
date: 2011-07-18T02:29:00.000Z
redirect_from:
  - /post/7746314700/benchmark-array-ification-of-arguments/
  - /post/7746314700/
  - /post/7746314700/benchmark-array-ification-of-arguments
  - /post/7746314700
slug: benchmark-array-ification-of-arguments
title: 'Benchmark: Array-ification of arguments'
tumblrid: 7746314700
type: text
---
<p>Having really hot paths in your code can be great, but it can also be a little dangerous.</p>

<p>When v8&rsquo;s Crankshaft landed in the Node.js dev build, it immediately resulted in a significant drop in Node&rsquo;s &ldquo;hello world&rdquo; performance benchmark.</p>

<p>This was alarming.  Crankshaft was supposed to be faster, and here it was causing slowdowns.</p>

<p>The cause was tracked down Vyacheslav Egorov (known to many in the Node community as &ldquo;mraleph&rdquo;), and had to do with Node&rsquo;s use of the <code>arguments</code> object in the <code>EventEmitter.prototype.emit</code> function.</p>

<p>Since this function is the hottest code in Node, even a slight decrease in performance is immediately felt.  Vyacheslav discussed <a href="https://github.com/joyent/node/commit/91f1b250ecb4fb8151cd17423dd4460652d0ce97">the commit</a> in <a href="https://plus.google.com/111090511249453178320/posts/ikjTyY6UKcE">a google plus post</a>.</p>

<p>This got me thinking about the best ways to convert the <code>arguments</code> object, or part of it, to a standard JavaScript <code>Array</code>.  I pulled out <a href="https://raw.github.com/isaacs/node-bench">the node benchmarking thing I wrote</a>, and wrote up <a href="https://raw.github.com/isaacs/node-bench/master/examples/array-ify.js">two</a> <a href="https://raw.github.com/isaacs/node-bench/master/examples/array-ify-offset.js">tests</a></p>

<h2>Disclaimers</h2>

<p>This advice is only relevant in the latest v8.  By the time you read it, it&rsquo;s already out of date and incorrect.  Just stop now, run your own tests, and make your own choices.</p>

<p>If node.js is still using v8 version 3.4.12.1, then it <em>might</em> be just a <em>little</em> valid for your node programs, but otherwise, no.  Stop.  Don&rsquo;t even continue reading.</p>

<h2>Results</h2>

<p>First, if your function takes a variable number of arguments, and you don&rsquo;t know how many it will be called with <strong>do not define any named parameters</strong>.  It makes things more complicated, and dramatically slows down the process.</p>

<p>Want to just put all the <code>arguments</code> in an array?  Do this:</p>

<pre><code>function varArgsList () {
  var args = arguments.length === 1
           ? [arguments[0]] : Array.apply(null, arguments)
</code></pre>

<p>It&rsquo;s an order of magnitude faster than <code>Array.prototype.slice.call</code> or <code>[].slice.call</code>.</p>

<p>Want to get all the arguments in a particular slice?  (Like, say, everything after the first, or the second until the second-to-last, etc.)  Well, that&rsquo;s a bit more complicated.  There, as with the patch from Mr. Aleph, you&rsquo;ve gotta walk the list yourself.</p>

<p>For example, to do the equivalent of <code>Array.prototype.slice.call(arguments, 1)</code>, pulling off every argument after the first, the fastest method seems to be this:</p>

<pre><code>function manualMap () {
  var l = arguments.length
  var arr = new Array(l - 1)
  for (var i = 1; i &lt; l; i ++) arr[i - 1] = arguments[i]
</code></pre>

<p>The fastest, if you know exactly which arguments are which, is to refer to them as <code>arguments[i]</code>, and only array-ify if and when it&rsquo;s absolutely necessary.  So, not surprisingly, I was unable to out-perform Mr. Aleph in a v8 benchmark-off.  My goal in this was simply to figure out <em>how much</em> of a difference it makes, and write a script to check it later, in case I find myself in a similar situation again.</p>

<p>Of course, <code>[].slice.call(arguments, 1, 2)</code> is far fewer bytes, and easier to know what&rsquo;s going on.  For most programs, the slight difference is not going to affect your overall program.  But sometimes hot code is hot enough to slow your benchmarks down by 20% because of what seems like a trivial change.</p>

<p>It&rsquo;s only over-optimizing if it doesn&rsquo;t make a significant difference.</p>
