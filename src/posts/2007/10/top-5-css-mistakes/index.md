---
layout: layouts/post.njk
date: 2007-10-15T17:00:08.000Z
slug: top-5-css-mistakes
tags:
  - 20/20 hindsight
  - broken
  - css
title: Top 5 CSS Mistakes
tumblrid: 146672329
type: text
---
<p>This is not a post about the top 10 mistakes that developers make when they write CSS.  That&rsquo;s boring.</p>

<p>The CSS spec <em>itself</em> is littered with mistakes.  Deep, fundamentally misguided errors.  Real head-slapping WTFs that make you wonder if the people writing the spec had ever created a website in their lives.  I&rsquo;m not exactly following <a href="http://foohack.com/2007/10/real-world-advice-for-fledgling-web-developers/">my own advice</a> by complaining, but I think of these more as the &ldquo;constructive criticism&rdquo; sort of complaints.</p>

<p>I love making web pages.  And, without being immodest, I&rsquo;m pretty good at CSS.  Not the best in the world, but certainly very familiar with it.  I do enjoy what CSS and semantic HTML lets you do with a web page.  But I am repeatedly annoyed by the language itself.</p>

<p>The saving grace, if there is one to be found here, is that browser makers are getting better and better at conforming to the spec with each version. Even IE is starting to catch up with the advent of IE 7.  While there will probably always be discrepancies and differences of opinion about how this or that feature should work, they&rsquo;re getting less obnoxious.  However, when the spec itself is broken, what can browser makers do?</p>

<h3>1. Inheritance</h3>

<p>Listen, CSS.  You have curly braces, why not use them?  The cascade is a nice feature, as is the default <code>inherit</code> value for most properties, but they&rsquo;re not enough.  This would be so lovely:</p>

<p><code class="block css">.some-module {
      font-weight:bold;
      text-align:right;
      p {
            font-weight:normal;
            text-align:center;
      }
      h3 {
            font-size:200%;
      }
}</code></p>

<p>Instead, we have to type <code>.some-module</code> over and over for every bloody rule.</p>

<p><code class="block css">.some-module {
      font-weight:bold;
      text-align:right;
}
.some-module  p {
      font-weight:normal;
      text-align:center;
}
.some-module h3 {
      font-size:200%;
}</code></p>

<p>If you use classes and descendant selectors properly on a sufficiently complicated page, you can get punished with very long selectors like this one from a site I&rsquo;m working on now: <code class="css">.nav .search a, .nav .search input, .nav .search .button, .nav .search label</code>.  Every freaking rule in the file has <code class="css">.nav .search</code> on the selector.  This simple addition to the spec would have made it so much better:</p>

<p><code class="block css">.nav {
  .tabs {
    /* css for the "tabs" section of the .nav module <em>/
  }
  .search {
    /</em> css for the "search" section of the nav module <em>/
    a, input, .button, label {
      /</em> css rules <em>/
    }
    a:hover, a:active {
      /</em> other CSS rules <em>/
      /</em> note the huge reduction in code to be typed! */
    }
  }
}</code></p>

<p>Almost every language supports some version of this kind of semantic inclusion, but for some reason, CSS was created in such a way that every rule lives in its own universe.  Lack of this feature makes CSS far less modular.</p>

<h3 id="p41_vertical_alignment">2. Vertical Alignment</h3>

<p>Almost <a href="http://www.google.com/search?q=vertical+centering+css">2 million pages about centering vertically in CSS</a>.  This was so unbelievably easy back in the bad old days of layout tables.  The browsers knew how to do it.  But as of the second revision, the CSS spec <em>still</em> doesn&rsquo;t even suggest a proper way to consistently vertically align one thing inside another.</p>

<p>Now, I know, there&rsquo;s the <a href="http://www.w3.org/TR/REC-CSS2/visudet.html#propdef-vertical-align"><code>vertical-align</code> property</a>.  But, that only applies to inline, inline-block, and table-cell elements.  If you want to align one box inside another, you&rsquo;re stuck doing all sorts of hacking to make it work.  If the heights are unknown ahead of time, it gets even more complicated.</p>

<p>This wouldn&rsquo;t be such a huge problem, except that:</p>

<h3>3. Table display values should have been done far sooner</h3>

<p>OK, so step into the wayback machine, and travel to the 90s.  You&rsquo;re looking at an internet that is filled to the brim with poor abused tables.  &ldquo;Web developer&rdquo; basically means &ldquo;someone who knows how to use tables and font tags.&rdquo;</p>

<p>So why did we have to wait until CSS2 before there was <a href="http://www.w3.org/TR/REC-CSS2/visuren.html#display-prop">a way to emulate the behavior of the table tags</a>? If <code class="css">display:table</code> and <code class="css">display:table-cell</code> had been in the first release of CSS, the standards revolution would have gone off without a shot.  That&rsquo;s all it would have taken for the hoards of table masters to be swept up in the semantic content/style division paradigm.  Instead, CSS asked them to grasp &ldquo;floating&rdquo; and &ldquo;position&rdquo; and &ldquo;overflow&rdquo;, which are remarkably non-intuitive concepts when it comes to laying out content on a page.</p>

<p>By contrast, a grid that holds contents is extremely intuitive.  That&rsquo;s how typesetters had been laying out physical documents for millennia.  That&rsquo;s why <code>&lt;table cellspacing="0"&gt;</code> was such a godsend.</p>

<h3 id="p41_zindex">4. <code>z-index</code> is WAY too complicated</h3>

<p>If you know CSS, there&rsquo;s a good chance you know about <code>z-index</code>, or at least, think you do.  Odds are about 4 to 1 that it doesn&rsquo;t work how you think it does.  If you&rsquo;re like most web developers, rather than really understand it, you&rsquo;ve probably just messed with the item in question until the right things showed up.  (It doesn&rsquo;t help that there are tutorials out there that are deeply wrong when it comes to z-index.  If only it was as simple as <a href="http://www.w3schools.com/css/pr_pos_z-index.asp">w3schools makes it out to be</a>!)</p>

<p>A decent summary can be found <a href="http://developer.mozilla.org/en/docs/Understanding_CSS_z-index:The_stacking_context">the Mozilla Developer Center</a>:</p>

<blockquote cite="http://developer.mozilla.org/en/docs/Understanding_CSS_z-index:The_stacking_context">In summary:
<ul><li>Positioning and assigning a z-index value to an HTML element creates a stacking context.</li>
    <li>Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.</li>
    <li>Each stacking context is completly <ins>[sic]</ins> independent from its siblings: only descendant elements are considered when stacking is processed.</li>
    <li>Each stacking context is self-contained: after the element&rsquo;s contents are stacked, the whole element is considered in the stacking order of the parent stacking context. </li>
</ul>

Notes:

<ul><li>The hierarchy of stacking contexts is a subset of the hierarchy of HTML elements, because only positioned and z-indexed elements create stacking contexts. We can say that elements that do not create their own stacking contexts are assimilated by the parent stacking context.</li>
</ul></blockquote>

<p>That&rsquo;s right, this is just the <em>summary</em>.  The full discussion is much longer and more complicated.</p>

<p>So, if element A contains X and Y, and element B contains P and Q, and A is above B, then X and Y are also above P and Q, <em>even if P and Q have a much larger z-index than A, X, or Y.</em>  But, only if A is positioned.  The idea is to keep any stacking &ldquo;local&rdquo; between siblings, so that the stacking of parent elements can be ignored.  I wouldn&rsquo;t be surprised if some browser maker lobbied for this rule because it made their Dom-walking algorithm simpler.  And I can imagine some strange hypothetical super-modular layout situations where it might be handy.  But it&rsquo;s wrong, and exceedingly problematic for the vast majority of situations.  In reality, it leads to newer web developers thinking, <q>What the hell?  I gave this thing z-index 99, and that other thing has z-index:1, and it&rsquo;s above it?</q></p>

<p><strong>Why?</strong> Why make it so complicated? Back when I was doing technical documentation at a software company, I had a saying: if it&rsquo;s hard to explain, it&rsquo;s probably badly designed. Partly out of laziness, and partly out of responsibility, I&rsquo;d submit bugs to the developers when something was just too damn complicated. Here&rsquo;s a better way:</p>

<ul><li>Any element that is not <code>display:none</code> has a z-index.</li>
    <li>Valid z-index values are either an integer, like <code>7</code>, or the word <code>inherit</code> and optionally an integer modifier, such as <code>inherit 2</code> (2 higher than whatever the parent is) or <code>inherit -1</code> (1 lower than the parent).  If <code>inherit</code> is used without a number, it defaults to <code>inherit 0</code>.</li>
    <li>Elements that don&rsquo;t have an explicit z-index are assumed to have the z-index of their parent. (I.e., <code>z-index:inherit 0</code>.)</li>
    <li>Elements stack on the page according to their computed z-index.</li>
</ul><p>How hard is that to understand?  You can still use stacking contexts if you want, by using relative values, but without all the complications of having to trace through your page and figure out which parent needs to get <code>position:relative</code> in order to make your overlay lay over the rest of the page.</p>

<p>The day I grokked z-index is the day I realized that CSS is an insane and over-engineered language.</p>

<p><a href="http://seldo.com">Laurie</a> points out that <q>If you have a drop-in html widget that&rsquo;s all nicely z-ordered, you don&rsquo;t want it to accidentally be interleaving with other elements on that page.</q>  I&rsquo;m sure this was the thinking behind the stacking context in the first place.  However, you would still be able to accomplish this with the <code>inherit</code> values.  Just give each module a <code>z-index</code> in multiples of 100, and then use relative z-indexes within the modules.  With all due respect, Laurie, as far as FooHack is concerned, the existing z-index paradigm is wrong, and CSS is being sent to the corner to think about what it&rsquo;s done.</p>

<h3 id="quirks_is_right">5. The Quirks Box Model is Right</h3>

<p>Let&rsquo;s say that you have a bookshelf that you&rsquo;re going to put in your home.  You measure the space on the wall to know how big of a bookshelf you can fit in the room.  You find that there&rsquo;s a space 34 inches across.  When you go to the store, you get one that says its 33 inches wide, and bring it home, and assemble it, and it doesn&rsquo;t fit!  It&rsquo;s an extra inch too wide, and now your closet door can&rsquo;t open.  You take it back to the store, and the salesperson calmly tells you, <q>Well sir, the edge of the bookshelf is an inch wide.  You see, you can only fit 33 inches of books on this shelf.</q>  You&rsquo;d probably be quite perplexed, annoyed, and begin to wonder what kind of fairy land you&rsquo;ve fallen into where they measure the insides of things first, and the outsides only as an afterthought.</p>

<p>In a rare fit of reasonableness, MSIE 5 did it right (and so does MSIE 6 when in Quirks Mode.)  If you set the width to 100px, then it&rsquo;s 100px.  If you put 10px of padding on the box, then it leaves 80px inside for the text.</p>

<p>CSS disagrees with reason, however, and the spec says that a 100px wide box with 10px of padding will <em>actually</em> be 120px across, because the width of an element specifies the width of the <em>inside</em>, not the width of the <em>element</em>.</p>

<p>For images, this makes sense.  If an image is 50px wide, and has 10px of padding, then you&rsquo;d expect the width to specify the width of the asset itself (the image file) and the padding to get added onto that.  But it would be a far far better decision to make it a little bit tricky for the rare case where you specify the width of images in the CSS rather than tricky for the much more common case where you specify the width of anything else.</p>

<p>The MSIE Quirks width was right.  Too bad its dead and gone.  Now, simply to get around what, in my opinion, is a horrible paradigm, I never set width or height on the same module where I set borders and padding.  Width goes on the parent, and then borders and padding go on a <code class="css">width:auto</code> child.</p>

<h3>Other suggestions that didn&rsquo;t make the list&hellip;</h3>

<ul><li>style block is invalid in the body, just annoying</li>
    <li>min-height and min-width being unsupported</li>
    <li>one background per element</li>
    <li>no background clipping</li>
    <li>no background-opacity distinct from element opacity</li>
    <li>% font sizes being relative to parent, not base</li>
    <li>border treatments</li>
</ul><p>Special thanks to <a href="http://twitter.com/pixelarchitect">my</a> <a href="http://www.linkedin.com/in/geoffreyblair">esteemed</a> <a href="http://www.seldo.com/">colleagues</a> <a href="http://gamaiel.zavala.com">who</a> weighed in on this one.</p>
