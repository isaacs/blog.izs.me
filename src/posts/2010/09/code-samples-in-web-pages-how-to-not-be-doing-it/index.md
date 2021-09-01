---
layout: layouts/post.njk
date: 2010-09-07T23:06:17.000Z
redirect_from:
  - /post/1083343526/code-samples-in-web-pages-how-to-not-be-doing-it/
  - /post/1083343526/
  - /post/1083343526/code-samples-in-web-pages-how-to-not-be-doing-it
  - /post/1083343526
slug: code-samples-in-web-pages-how-to-not-be-doing-it
title: 'Code Samples in Web Pages: How to Not be Doing It Wrong.'
tumblrid: 1083343526
type: text
---
<p>Observe:</p>

<blockquote><p>To list files, do this:</p>
<pre><code>$ ls -laF</code></pre></blockquote>

<p>Compare that to this:</p>

<blockquote><p>To list files, do this:</p>
<pre><code class="dollar">ls -laF</code></pre></blockquote>

<p>You spot the difference?  The second one is much more user friendly, because you won&rsquo;t pick up the <code>$</code> when you copy and paste, and only takes a teeny bit of CSS.</p>
