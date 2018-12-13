---
date: 2008-02-04T18:00:41.000Z
redirect_from:
  - /post/146672540/foo-hack-redesign-30/
  - /post/146672540/
  - /post/146672540/foo-hack-redesign-30
  - /post/146672540
slug: foo-hack-redesign-30
tags:
  - CSS
  - Colophon
title: Foo Hack Redesign 3.0
tumblrid: 146672540
type: text
---
<p>So, it started out as just a few font changes.  I&rsquo;d been growing less and less pleased with Trebuchet MS, and had found a few cases where it broke the <a href="http://foohack.com/2007/08/marching-to-a-vertical-cadence/">militant line-height rules</a> I&rsquo;d set for this site.  In general, I felt that it was too crowded, and the gray hash textured background was (in my opinion) a contrived and artless approach.</p>

<p>I&rsquo;m not a very understanding end-user when it comes to this site.  The Foo Hack design team got fed up with my complaints, and decided to give in and make some changes.</p>

<p>Feature creep is a bitch when you have a deadline.  For personal projects, there is no deadline, and so a bit of feature creep is fun, within reason.  That&rsquo;s a big part of the reason why I have so many back-burner projects that are almost finished; just as I near the finish line, I decide that it needs a little more, or another project gets more interesting for a while.  So, on to what changed.</p>

<h3>Fonts</h3>

<p>I was a computer geek first, but when my dad replaced our DOS home computer with a Windows 3.1 box, I fell in love with fonts.  I can waste an afternoon surfing the web downloading fonts that I&rsquo;ll probably rarely (if ever) use.  Web design is about 90% typography, and it is an art that blends strict perfectionism and fluid acceptance in a beautiful way.</p>

<p>For the main body text, I wanted something subtle and easy on the eyes.  Something that would let the writing speak in the voice that I intend, without getting in the way.  For the &ldquo;small&rdquo; items of diminished importance (asides and things in <code>&lt;small&gt;</code> tags) I wanted a serif font with a very thin ex measurement, so that the text could &ldquo;feel&rdquo; smaller without altering the line-height.  For the headings, I wanted a rounder, more open font that could evoke a sense of boldness without being too heavy.  Subheadings and meta items (the date, &ldquo;comment&rdquo; link, etc.) should use the same font, but with less letter space and a subtler color.</p>

<p>For the body text, I decided to go with Helvetica, the classier old-world cousin of Arial.  I was initially pleased with the results.</p>

<p>Cliché though it may be, Times New Roman was the perfect choice for the diminished items.  It&rsquo;s very light, yet still fairly readable, and when italicized, it practically disappears.  I was already using it for that reason, but since I don&rsquo;t love <abbr title="Times New Roman">TNR</abbr> all that much, I was willing to entertain other possibilities.</p>

<h3>If Helvetica is so great, why do I see Arial?</h3>

<p>A problem came up when I noticed that the line-height was getting messed up whenever a TNR inline element would wrap to the next line.  I figured out the problem.</p>

<p>Let&rsquo;s say you have font A and font B.  You create a block-level element using font A.  Then, you have an inline element using font B, which wraps to the next line.</p>

<p>If A and B don&rsquo;t put their letters on exactly the same point in the line-block, then the line-height will <em>adjust</em> up or down, as the next line is set by the position of the letters in B instead of the position of letters in A.  Since the B element isn&rsquo;t a block-level element, it won&rsquo;t create a whole new block, and will have the effect of adding or removing a few pixels from the overall height of the A element.</p>

<p>To correct this problem, and still have 2 fonts sharing the same block-level element, you need to find two fonts that have exactly the same vertical letter placement on the line block.</p>

<p>I&rsquo;m not exaggerating when I say that I created a test page and exhaustively tested every combination of serif and sans-serif fonts on my Mac.  It took about a week.  There was only one combination that worked.</p>

<p>Arial and Times New Roman.</p>

<p>Ah, compromise, my old nemesis. You strike again.  Not willing to give up the line-height strictness, I gave in and decided to use Arial instead of Helvetica.  On the bright side, Windows users were mostly going to see Arial anyway, and they&rsquo;re both tried and true web-safe fonts.  And, at typical screen resolutions, it&rsquo;s hard to tell the difference anyway.  But still, it&rsquo;s a bit of a sore point.</p>

<h3>Gotham, Large and Small</h3>

<p><a href="http://www.typography.com/fonts/font_overview.php?productLineID=100008">Gotham</a>, the masterpiece homage to urban signage by <a href="http://www.typography.com/">Hoefler &amp; Frere-Jones</a>, is quite possibly the best font ever devised.  It&rsquo;s open and confident even when it&rsquo;s not bold, balanced and practical.  I went with this as the headings, and it also was the best candidate for the smaller informational bits.  (After all, it seemed fitting to put navigational links in a font designed for signage.</p>

<p>The downside of such a perfect font is that it&rsquo;s not free.  It would be fantastic if Apple or Microsoft were to license Gotham for their respective operating systems, but I don&rsquo;t see that happening any time soon.  Those that don&rsquo;t want to install Gotham will see Century Gothic (if it&rsquo;s installed, most likely because they got it bundled with Microsoft Office), or something in the Lucida family.</p>

<h3>Accentuate the Important, Diminish the Rest</h3>

<p>I brought down the contrast a bit, and did away with the background graphic.  Some color was sprinkled around to help create a meaningful mental model of each page.  I got the idea for the categories above the titles from <a href="http://randsinrepose.com">Rands in Repose</a>, one of my favorite regular reads.</p>

<p>The default set of post meta info that Wordpress provides is far more than necessary.  I got rid of everything that didn&rsquo;t directly benefit the goals of conversing with the world through this blog.</p>

<h3>Comments</h3>

<p>It seems awkward that my comments should have a blue left border, and reader comments are unadorned.  Simply using random colors wouldn&rsquo;t do.  So, I wrote a function that will hash a string into a color value.  A simpler hash would have sufficed, but I wanted more control over the range of colors that it selects, and <code><a href="http://php.net/rand">rand()</a></code> was a good fit.  So, your comment will always have the same color (unless you use a different email address, of course) and all the colors will be in a particular mid-range of luminosity that is bold, but not overpowering.</p>

<p>I&rsquo;ve already run into a few situations on this blog where I felt that threaded comments would have been helpful. However, the threaded forum-style comments would be complex and counterproductive.  I grabbed a standard threaded-comment plugin, and tweaked it to replace the interface with a few hyperlinks.  Since conversations are more naturally many-to-many, I&rsquo;d like to implement something along the lines of what <a href="http://1976design.com/blog/archive/2003/11/12/comments/">Dunstan Orchard used to have on his blog</a>, but doing that the right way means a bit more investment, and this project was dangerously close to being back-burnered forever.</p>
