---
date: 2007-09-04T21:21:05.000Z
redirect_from:
  - /post/146672090/squish-it-good-code-compression-for-the-masses/
  - /post/146672090/
  - /post/146672090/squish-it-good-code-compression-for-the-masses
  - /post/146672090
slug: squish-it-good-code-compression-for-the-masses
tags:
  - code beauty
  - code ecosystems
title: Squish it good - Code compression for the masses
tumblrid: 146672090
type: text
---
<p>Labor Day came and I completely forgot that it would mean no Monday morning for writing a post.  Hope you all had great beer and burgers, or whatever you were doing.</p>

<p>In the meantime, I&rsquo;d like to mention something cool.  <a href="http://www.julienlecomte.net/">Julien LeComte</a> has released his <a href="http://www.julienlecomte.net/yuicompressor/">YUI Compressor</a> that includes a CSS minification script that I built here for internal use.</p>

<p>Compression is a little more than just minifying.  Julien&rsquo;s compressor also shortens all local variable names, resulting in significant improvements over minification alone, but without the bug-risks of obfuscation.</p>

<p>It&rsquo;s interesting to me that his tests show that compression is actually more effective than obfuscation when the code is gzipped.  I&rsquo;m not enough of a gzip scholar to know why that is, but in my mind at least, it shuts <a href="http://dean.edwards.name/packer/">packer</a>&rsquo;s Base 62 encoding out of the running.  Additionally, in my <small>(non-scientific, not statistically significant, but probably still accurate)</small> tests, packer adds <abbr title="between 100ms and 500ms for any given piece of code">a significant amount</abbr> of run-time due to the convolutions of eval and a needless large Regex.  You need to have pretty big download gains in order to make it worth putting the browser through that extra work.</p>

<p>Say it once, say it forever, say it to yourself at night, teach it to your children: Javascript obfuscation is pointless and dangerous.  You don&rsquo;t get enough download savings to justify the risk of bugs, you can&rsquo;t <em>really</em> hide your code, and when gzipped, compression is better anyhow.</p>

<p>The CSS Compressor that I wrote doesn&rsquo;t do what <a href="http://csstidy.sourceforge.net/">CSS Tidy</a> does.  There are a few steps that could be taken from CSS Tidy, like shortening <code>margin:1px 1px 1px 1px</code> to just <code>margin:1px</code>.  It doesn&rsquo;t merge properties or background properties.  Like JSMin and the YUI Compressor&rsquo;s javascript minifier, it tries to err on the side of not affecting functionality in any relevant way, while attempting at the maximum compression possible within that boundary.</p>
