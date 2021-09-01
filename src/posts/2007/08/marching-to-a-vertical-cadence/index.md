---
layout: layouts/post.njk
date: 2007-08-01T17:39:31.000Z
redirect_from:
  - /post/146671732/marching-to-a-vertical-cadence/
  - /post/146671732/
  - /post/146671732/marching-to-a-vertical-cadence
  - /post/146671732
slug: marching-to-a-vertical-cadence
tags:
  - css
  - colophon
title: Marching to a Vertical Cadence
tumblrid: 146671732
type: text
---
<p>Regular readers will notice that this blog got a bit of a face-lift today.  The obvious change is the addition of a background texture, but actually the biggest change is that I updated all of the elements to fit into a vertical em grid.  Actually, I&rsquo;m not all that thrilled with the background image, but it was killing me having such a bland vanilla design, so I whipped up something as fast as possible.  (For comparison, <a href="http://?version=1.0">here&rsquo;s the old version</a>.)</p>

<p>If you <a href="http://?show_lines">turn on the lines</a>, you can see how each line of text, every heading and block, is now lined up so that it will &ldquo;resonate&rdquo; with a consistent vertical spacing.  I&rsquo;m certainly <a href="http://24ways.org/2006/compose-to-a-vertical-rhythm">not the first one</a> to <a href="http://alistapart.com/articles/settingtypeontheweb">do something like this</a>.  However, in the process of figuring out how this could be done, I came up with a few shortcuts to make the math easier.  You&rsquo;ll probably need to have a calculator handy, and building a decent grid tile graphic is key.</p>

<h3>First step: Build the grid image</h3>

<p>To make the process somewhat sane, come up with a font-size that&rsquo;s pretty reasonable, and build a background baseline graphic to hold you to that size.  Since I favor readability over teensy designery text, I chose 16px, and built <a href="http://foohack.com/blog/wp-content/themes/sandbox/line.png">this image</a>.  It&rsquo;s 32px tall, with a horizontal line every 8px.  (The color choices are purely for nostalgic reasons.  I can practically smell the #2 pencil in my hand.)</p>

<p>Going forward, every block element must begin just below a line, and end exactly on a line.  If it&rsquo;s hanging over, there&rsquo;s a problem.  (Adding and removing background colors is a good technique to check things.)</p>

<p>Set the font size to 16px in the HTML element, and add the background image:</p>

<p><code class="block">html {
  background:#fafafa url(line.png) top repeat;
  font-size:16px;
}</code></p>

<p>Once everything works, you can pull out the line and the fixed px font-size, and let it resize to whatever the user has set in their browser.  Since everything will be based on ems, it will all scale up and down to any size.  If you sniff the CSS on this page, you&rsquo;ll see that I apply this rule whenever the &ldquo;show-lines&rdquo; class is on the HTML element.</p>

<h3>The Rules</h3>

<ol><li>Never set font-size without setting line-height (or vice versa.)</li>
    <li>For simplicity, vertical padding and margin should be avoided when they&rsquo;re not needed, or at the very least not set on an element that has an altered font-size, and must be specified in ems.</li>
    <li>Top and bottom borders get hairy.  Use outline instead, and let it be a little broken for IE.</li>
    <li>The horizontal direction is fair game, outside the scope of this article.  Use px or ex or whatever units you want.</li>
    <li>The big one: font-size * (line-height + vertical padding + vertical margin) must be a whole number.  If you&rsquo;re going to use a double-spacing cadence, then it should ideally also be an even number most of the time.</li>
    <li>Go to 5 decimal places when you get numbers that repeat.  Browsers only look at the first 4, but most of them will round rather than truncate, so the additional number is worth having.</li>
</ol><p>So, for example, on the body text, I wanted to have simple double-spacing.  So, this rule was fine:</p>

<p><code class="block">p {
  font-size: 1em;
  line-height:2;
}</code></p>

<p>On some elements, I wanted to drop down the font size a bit, say to 70% of normal body text (or 0.7em.)  If the element had a line-height of 1, and its font-size is 0.7em, then that&rsquo;s a problem, because 0.7 * ( 1 ) = 0.7, which is not a whole number.  If we want to make this element take up 1 row on the baseline grid, then we can say that 0.7 * ( x ) = 1, and solve for x, the line-height.  In this case, 1/0.7 = 1.428571, so we set the line-height to that value, and end up with small text that takes up 1 line on the grid.</p>

<p>The same technique can be done if you wanted to go even smaller.  The table below has values for various font sizes and double- and single-spacing:</p>

<table><thead><tr><th>Font-size (in ems)</th><th>Line-height (single)</th><th>Line-height (double)</th></tr></thead><tbody><tr><td>0.5</td><td>2</td><td>4</td></tr><tr><td>0.6</td><td>1.666667</td><td>3.333333</td></tr><tr><td>0.7</td><td>1.428571</td><td>2.857142</td></tr><tr><td>0.8</td><td>1.25</td><td>2.5</td></tr><tr><td>0.9</td><td>1.111111</td><td>2.222222</td></tr><tr><td>1</td><td>1</td><td>2</td></tr><tr><td>1.1</td><td>0.909090</td><td>1.818181</td></tr><tr><td>1.2</td><td>0.833333</td><td>1.666667</td></tr><tr><td>1.3</td><td>0.769231</td><td>1.538461</td></tr><tr><td>1.4</td><td>0.714285</td><td>1.428571</td></tr><tr><td>1.5</td><td>0.666667</td><td>1.333333</td></tr><tr><td>1.6</td><td>0.625</td><td>1.25</td></tr><tr><td>1.7</td><td>0.588235</td><td>1.176471</td></tr><tr><td>1.8</td><td>0.555555</td><td>1.111111</td></tr><tr><td>1.9</td><td>0.526315</td><td>1.0526315</td></tr><tr><td>2</td><td>0.5</td><td>1</td></tr></tbody></table><p>As you might expect, some of these work better than others.  The funkier looking a decimal is, the greater the chance that it will be improperly rounded.</p>

<h3>Effects on Layout</h3>

<p>As you can see in the table above, without the ability to put pixel borders on the tops and bottoms of things, it presents interesting challenges in some cases.  A gradient image can be a little nicer than borders for table cells, and is certainly a lot nicer than not having any kind of vertical breaks.</p>

<p>Form elements are particularly tricky.  I didn&rsquo;t want to have them borderless, since borderless forms are just visually weird to me.  However, a border on the top and bottom messes with the spacing.  So, I&rsquo;ve used outline, and just passed a border rule to IE 6 via the underscore hack.  It&rsquo;s not a great solution, but it works for now, since outline is drawn outside the element, instead of pushing it further down the page.  When I come up with a more clever way to do this, I&rsquo;ll share it.</p>

<p>Input elements seemed to need just a shade less padding than the math would indicate.  They seemed to work properly using 0.41em instead of the 0.421758em that my formula would have predicted.  Not sure why that is, but I&rsquo;m OK with the hack.</p>

<h3>Margins and Padding</h3>

<p>If you ever have to move something up or down, I find it&rsquo;s useful to figure out how many ems it needs to move, and then convert by the font size.  To keep things easy, you can restrict any font-size changes to inner elements, and apply padding and margin on the container (which always has a font-size of 1em.)  However, some adjustments are just easier to make on an element that has a font size, so the conversion comes in handy.</p>

<p>For example, let&rsquo;s say that we have an element with a font size of 0.6em, and we want to move it down 1.5ems.  (In the baseline graphic, that would be moving it down 1.5 &ldquo;red lines&rdquo;.)  So, the ratio looks like this:</p>

<p><code class="block">1.5 * 1 = x * 0.6
1.5 / 0.6 = x = 2.5</code></p>

<p>so we have to give the element a padding or margin of 2.5em.  The simplified formula is:</p>

<p><code class="block">distance / font-size = correct em measurement</code></p>

<p>I find that, as I have this style live and notice little errors that need correcting, I&rsquo;m using that formula quite a bit.</p>

<h3>Update</h3>

<p>Some browsers do this better than others, of course.  Gecko browsers (Firefox, Camino, etc.) are impeccable with their em-spacing and line-height calculations.  Safari seems to always be a bit off of the lines in the background image, as does MSIE.  Opera is better than those two, but not quite as good as the Geckos.  Even when it&rsquo;s not perfect, though, getting close does seem to feel more &ldquo;right&rdquo; to me.</p>
