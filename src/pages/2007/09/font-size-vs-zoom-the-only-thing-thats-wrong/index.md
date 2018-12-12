---
date: 2007-09-10T17:00:54.000Z
redirects:
  - /post/146672166/font-size-vs-zoom-the-only-thing-thats-wrong
  - /post/146672166
slug: font-size-vs-zoom-the-only-thing-thats-wrong
tags:
  - Broken
  - CSS
  - In the Minds of Users
title: Font Size vs Zoom --- The only thing that's wrong with YUI's grids.css
tumblrid: 146672166
type: text
---
<p>In the course of a recent code review, I got into a discussion with fellow Yahoo Webdev <a href="http://nate.koechley.com">Nate Koechley</a>, the engineer behind the <a href="http://developer.yahoo.com/yui/grids/">YUI grids CSS</a>.</p>

<p>YUI Grids is designed to give the developer a few microformat-style grid layouts that can be easily mixed and matched to create many different types of pages.  It does something like what Blueprint does, but without a lot of <a href="http://foohack.com/2007/08/blueprint-css-framework-vs-yui-grids/">Blueprint&rsquo;s problems</a>.  I&rsquo;ve been using it since it was released for internal use back when I was first hired here, and have really come to love the skeleton that it provides for building a page.</p>

<p>However, there&rsquo;s one mistake about it that I routinely alter in my pages&rsquo; CSS.  Standard or not, I have a personal gripe with flexible layout pages.</p>

<p>As someone with just-correctible-enough-to-drive vision <small>(and maybe not even&mdash;I have a lot of trouble with street signs at night)</small>, I frequently bump up the font size in my browser.  A big selling point that got me to use the very buggy beta Firefox 0.2 was that it could increase the font size of ANY web page, whether the designer &ldquo;allowed&rdquo; it or not.</p>

<p>People like me don&rsquo;t browse from page to page with the font size increased.  I scan through headings and links, and when I find something interesting, I increase the size to read it, and then zoom back out when I&rsquo;m done.  (Sort of like the iPhone: zoom into the newspaper article, read it, and then zooms back out to see the whole page.)</p>

<p>When I do this, I can&rsquo;t stand for the columns to change widths.  It drives me crazy.  I add this to my CSS almost every time:</p>

<p><code class="block css">#doc {
  width:950px;
}</code></p>

<p>When I say that it&rsquo;s the &ldquo;only thing that&rsquo;s wrong with grids.css,&rdquo; I really mean it.  I can&rsquo;t praise it enough, and highly recommend that every developer use it on every page they build.  But fix the width.</p>

<blockquote><cite class="hcard">On Aug 10, 2007, at 9:15 AM, <a class="fn" href="http://nate.koechley.com">Nate Koechley</a> wrote:</cite>
Tell me more about this. In general you prefer the page width to be fixed even as the text within it grows? I definitely understand that the introduction of a horizontal scroll is bad, but you dislike expansion even before it exceeds the vierport&rsquo;s size? <i>[sic]</i></blockquote>

<p>Short Answer: Yes and yes.</p>

<p>Long Answer:</p>

<p>This is a tricky issue that the hardware and software worlds just don&rsquo;t address very well.  (Hopefully they will someday.)  To make things more complicated, every user thinks that they&rsquo;re 100% dead-on right, and we all seem to have a slightly different opinion about how it should work.  I don&rsquo;t claim to be an expert typesetter, but it is an ergonomic issue that I regularly run into and think about quite often.</p>

<h3>Line Length Measurement</h3>

<p>You hear stuff like, <q>Lines of text should be about 4 inches (500px, 50%, etc.) wide at the most to be readable.</q>  Really, that&rsquo;s not the case.  Look at a billboard&mdash;the ideal text width there is about 30 feet, some 10000pt font-size, or a skywriter which is even longer and bigger.  Just consider how many millenniums it took for hand-written text to reach a good state, and then how many centuries it took to really apply those learnings to machine-printed text.  If you want to see text layout done very very well, look at the print world.</p>

<p>Visually, size is measured in degrees.  A column of text should be about 10-15 visual degrees.  (10 degrees is about the width of your fist at full arm&rsquo;s length.)  The font size just needs to be big enough that you can make out the letters at whatever distance away you have to move the page to get it to that 10-15 degree width.</p>

<p>Lines that are shorter than this are easier to scan for relevant details, but harder to &ldquo;savor.&rdquo;  That&rsquo;s why newspapers usually have very narrow columns and text in books takes up almost the whole page.  If the column is too narrow, you&rsquo;ll tend to bring the page closer to your face&ndash;which is why newspapers can get away with very small text.  It&rsquo;s rare that someone reads a newspaper at arm&rsquo;s length.  (As people get older, and the muscles that focus the eyes on items up close start to weaken, many will wear glasses to zoom the text up to a comfortable width for reading at arm&rsquo;s length.)</p>

<h3>Physical Resizing</h3>

<p>So, the width of a column should be about 10-15 degrees for most text (narrower for &ldquo;scannable&rdquo; stuff, like sidebars and alerts, wider when we are being really thoughtful and analyzing the concepts.)  We&rsquo;re unconsciously going to &ldquo;zoom in&rdquo; by moving closer to the target until this ideal width is reached.  The font size should be such that it can be read easily from a distance that brings the visual column width to a comfortable range.  So, you slide your chair until you&rsquo;re at the right width, and then adjust the font size.  Or, you resize the browser until the columns are where you like them, and then move the font around until it&rsquo;s readable.</p>

<p>Most of the time, this is largely unconscious, which is good.  However, you almost never want the line length to scale up with the font size, because the line length is already good&mdash;but the text is too small for the eyeballs to focus on it.  (If it&rsquo;s not, then you really need zoom, not a font-size change.)  When I bump up the font size on a YUI grids page, the line length expands to occupy about 30 degrees of visual space, which is too much.  The natural instinct is to slide my chair back, which means that I can&rsquo;t read the text easily, or more likely, just get annoyed and move on.</p>

<p>This also ties into discussions about wide-screen vs. multi-screen, pixel density, and maximize behavior.  Even if we say that we want to always have a fixed width, what may be perfect on one display may be obnoxious on another.  I have a 24&quot; monitor that is 1920px wide, but my browser window is usually around 1024.  Sites that work well on 1024x768 (or 800x600) will be abusive on a 50&quot; 1080p HD display, and vice versa.  What we really need is a way to easily zoom in and out with one action, and adjust the font-size as a separate action.  Also, it has to be so easy to do both that the user is hardly aware of the work involved&mdash;that&rsquo;s the really hard part.</p>

<h3>Moving Forward</h3>

<p>Browsers tend to blur the distinction between zoom and font-size; they get users and developers to share in the error by frequently saying one when they mean the other.  Opera Mini on my phone has a &ldquo;zoom&rdquo; feature that only changes the font size.  IE 7 zooms images and column widths when you change View &gt; Font Size.  In the 2 seconds here and there that I&rsquo;ve managed to play with it, it seems like Safari on the iPhone is probably the best implementation to date of zoom and font-size both done independently and well.  OSX provides a &ldquo;zoom&rdquo; feature that&rsquo;s pretty easy to use, but it feels klunky to zoom the whole OS just to read a web page.</p>

<p>Kathy Marks wrote up a great list of the <a href="http://www.kathymarks.com/archives/2006/11/best_fonts_for_the_web_1.html">best fonts for the web</a>, and also has some great resources at the bottom of that page about typography.  And of course, there&rsquo;s <a href="http://www.informationarchitects.jp/the-web-is-all-about-typography-period">iA&rsquo;s classic article: Web Design is 95% Typography</a>.</p>

<p>I should point out that full-width designs are good for <a href="http://search.yahoo.com/search?p=full+width+css">some</a> <a href="http://mail.yahoo.com">particular</a> <a href="http://maps.google.com/maps?q=701+1st+ave+94089">cases</a>, but probably wrong for most.  In the cases where it makes sense to size the page to the browser&rsquo;s width, I don&rsquo;t think it falls into this sort of problems.  Flexible-width pages, however, are a nightmare.  Fixed-width isn&rsquo;t perfect either, but it&rsquo;s better.</p>

<p>What we really need is separation between &ldquo;zoom&rdquo; and &ldquo;font resize.&rdquo;</p>
