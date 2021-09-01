---
layout: layouts/post.njk
date: 2007-11-19T18:06:33.000Z
redirect_from:
  - /post/146672448/cross-browser-support-for-inline-block-styling/
  - /post/146672448/
  - /post/146672448/cross-browser-support-for-inline-block-styling
  - /post/146672448
slug: cross-browser-support-for-inline-block-styling
tags:
  - css
  - code beauty
title: Cross Browser Support for inline-block Styling
tumblrid: 146672448
type: text
---
<p>I learned a new CSS trick from <a href="http://blog.hedgerwow.com/">one of the best insane inventor webdevs I know</a>.  The pieces have been <a href="http://www.google.com/search?q=display%3A-moz-inline-stack%3B+display%3Ainline%3B+display%3Ainline-block%3B+zoom%3A1%3B">out there for some time</a>, it seems, but I hadn&rsquo;t ever seen this spelled out as simply and elegantly as he did it.</p>

<p>Inline-block layout solves a lot of problems.  It lets you do some cool stuff previously thought impossible with CSS.  It makes vertical alignment work properly.  And sadly, it&rsquo;s supported pretty badly.</p>

<p>Mozilla doesn&rsquo;t support inline-block at all, but they have -moz-inline-stack which is about the same.  Fair enough, since no one else understands -moz-inline-block, you can just do this:</p>

<p><code class="block css">display:-moz-inline-stack;
display:inline-block;</code></p>

<p>If you put inline-block after -moz-inline-stack, then Moz will start using the &ldquo;right&rdquo; one <a title="That is, with version 3" href="http://developer.mozilla.org/en/docs/Firefox_3_for_developers">when it supports it</a>.</p>

<p>IE supports inline-block, but only for elements that are natively inline.  So, if you really want to use inline-block, you&rsquo;re restricted to spans and strongs and ems, when a list or paragraph would perhaps make more semantic sense (and also degrade more nicely for non-CSS users.)</p>

<p>However, if you trigger <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">hasLayout</a> on a block element, and then set it to display:inline, it magically becomes an inline-block in IE!  By using the *property hack (which I love so well), you can hide the display:inline from all non-IE browsers effortlessly.</p>

<p>Here&rsquo;s the code, in all its brief loveliness:</p>

<p><code class="css block">display:-moz-inline-stack;
display:inline-block;
zoom:1;
*display:inline;</code></p>

<p>From there, it pays to learn a thing or two about <a href="http://www.w3.org/TR/CSS21/visudet.html#propdef-vertical-align">the vertical-align property</a>.  It lets you do lovely things like <a href="http://foohack.com/tests/vertical-align/image-labels.html">this</a>.</p>

<h3>Benefits</h3>

<p>Inline block elements can be vertically centered like display:table-cell, but they wrap when they get to the end of their parent.  Also, it&rsquo;s supported across browsers using this hack, whereas display:table-cell is not supported in IE.</p>

<p>This technique allows for some very interesting layout approaches that would have required a lot of very tricky use of floats previously.</p>

<h3>Caveats</h3>

<p>If an element is inside of an inline block, and lies outside the <a href="http://www.w3.org/TR/REC-CSS2/visuren.html#inline-formatting">line box</a>, then it won&rsquo;t be clickable in Mozilla.  Give the child element <code>position:relative</code> to correct the problem.</p>

<p>Elements treated this way will have <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">hasLayout</a> set in MSIE.  This is a weird and esoteric aspect of MSIE&rsquo;s CSS engine that has potentially unforeseen consequences.  Beware.</p>

<p>If an IMG element is directly inside an inline block element in Mozilla, it will stretch to the full width of that element.  Wrap all IMG tags in a block-level container element to avoid the problem.</p>

<p>Since inline block elements wrap and flow like inline content, that means that they also respect white space like words on a page would.  That is, if there is <em>any</em> whitespace between two inline-block elements, then a single space will be added between two inline-block elements.  If this causes a problem, you can either remove the whitespace or comment it out like so:</p>

<p><code class="html block">&lt;/div&gt;&lt;!--
--&gt;&lt;div&gt;</code></p>

<p>All in all, the caveats are pretty easy to work around, and the benefits allow for some really cool stuff that would be almost impossible or very difficult otherwise.</p>

<h3>The 2 Faces of vertical-align</h3>

<p>In <a href="http://foohack.com/2007/10/top-5-css-mistakes/#p41_vertical_alignment">a classic CSS blunder</a>, vertical-align can mean 2 extremely different things, depending on whether an element is display:inline-block or display:table-cell.</p>

<dl><dt>table-cell</dt>
<dd><p>Align the element&rsquo;s <strong>contents</strong> according to the element&rsquo;s vertical-align property.  IE, if the cell&rsquo;s vertical-align is set to &ldquo;middle&rdquo;, then vertically center the element&rsquo;s contents.  The height and position of the element itself is determined by the containing display:table element.</p></dd>
<dt>inline-block</dt>
<dd><p>Align the <strong>element</strong> according to the element&rsquo;s vertical-align property.  IE, if the inline-block&rsquo;s vertical-align is set to &ldquo;middle&rdquo;, then the element is vertically centered in the line-block.  The height and position of the element&rsquo;s contents are determined by the standard block-level flow rules.</p>
</dd>
</dl><p>While I personally believe that this was a stupendously bad and confusing approach to take, I believe that the reasoning comes from backwards compatibility.  Inline blocks emulate the behavior of the IMG tag, and the vertical-align CSS property thus mimics the old valign attribute.  Table cells emulate the behavior of the TD tag, and the vertical-align CSS property thus mimics the behavior of the valign attribute on TDs.  In other words, in this way, CSS faithfully reproduces the sloppy errors of HTML.  It would have been better to use two different properties to achieve this effect; after all, vertical-align:baseline hardly makes sense for table cells.  Perhaps the inline-block type of vertical alignment would have been better called &ldquo;line-position&rdquo; or some such, since it is less like a vertical version of the text-align property.</p>

<p>But, you write code with the language you have, not the language you wish you had, and CSS is what it is, at least for the foreseeable future.</p>

<p>Recently, I had to achieve <a href="http://foohack.com/tests/vertical-align/dialog-table.html">an effect</a> that was extremely tricky by standard methods, but extremely easy using tables.  I decided to test out a display:table approach, and then try to hack it into place for IE, since it is the only browser that does not support this approach.</p>

<p><a href="http://foohack.com/tests/vertical-align/dialog.html">The result</a> uses a fairly large number of DIVs, but still fewer than the straight table approach, and without the semantic rubble of tables.  The dialog is vertically and horizontally centered, but if you resize the viewport too small, the dialog will not be hidden permanently, due to the &ldquo;collapse to fit&rdquo; nature of the table display style.  Doing this will an inline-block would have been quite a bit more difficult.</p>

<p>For IE, I used the 50/50 hack.  Create a position:absolute element at top:50%.  Then, create a position:relative child at top:-50%.  The negative top rule on the position:relative element will be misinterpreted, and result in a vertically centered box.  The downside is that IE gets a scrollbar if the viewport is less than twice the height of the dialog.  But, that&rsquo;s a pretty acceptable down side, in my opinion.</p>

<p>Sadly, unlike with display:inline-block, it doesn&rsquo;t look like there&rsquo;s any real consistency to support display:table across browsers.  (Except, of course, using table tags.)  You basically just have to hack something for IE that achieves the same effect, and which approach you use varies on the effect you&rsquo;re going for.  In this case, I exploited an IE positioning bug to achieve vertical centering, but other situations would require different approaches.  If you&rsquo;re doing complex layouts using display:table, which in a perfect world would indeed be a great way to do it, you&rsquo;re going to have a lot of work cut out for you hacking away at IE.</p>

<p>Let&rsquo;s pray that IE 8 supports display:table!</p>
