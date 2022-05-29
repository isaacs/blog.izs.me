---
layout: layouts/post.njk
date: 2009-05-05T06:21:15.000Z
slug: foo-hack-40
tags:
  - css
  - colophon
title: Foo Hack 4.0
tumblrid: 146672998
type: text
---
<p>Partly because I haven’t been writing much CSS these days, and partly because it’s been just over a year since the <a href="http://foohack.com/2008/02/foo-hack-redesign-30/">last redesign</a>, I felt like this site needed a face lift.</p>

<h2 id="fonts">Fonts</h2>

<p>I’ve been getting more and more excited about the impending freedom of the @font-face CSS declaration.  The prospect using any true-type or open-type font in a web page without resorting to flash or images is incredible.  If you’re viewing this site in Safari 4 or the latest beta releases of Firefox, Opera, and MSIE, you’ll have a much improved experience.</p>

<p><del>The body text is set in <a href="http://www.abstractfonts.com/search/bodoni%20svtytwo%20itc%20tt-book">Bodoni SvtyTwo OS</a>, chosen for its beautiful italics <small>(not an oblique, but a true italic)</small>, dramatic hinting, and straightforward lines.  I chose the OS over the regular Bodoni SvtyTwo because of the more stylish “lower case” numerals: 1234567890.</del></p>

<p><ins>Update</ins>: I decided to go with Hoefler Text instead of Bodoni.  Bodoni looks nice, but without the stronger hinting, it was hard to read on some monitors, especially for folks who are crazy enough to browse the web on Windows.  Hoefler Text has a lot of what I liked about Bodoni, and was a strong contender, but it&rsquo;s not free-as-in-speech.  However, it is <a href="http://twitter.com/izs/status/2752553503">free-as-in-MP3</a>, so I&rsquo;ll use it until Hoefler &amp; Frere-Jones send me a <abbr title="Cease and Desist">C&amp;D</abbr>.  I also widened the column a bit to accommodate the wider typeface.</p>

<p>The headings are set in <a href="http://www.fontsquirrel.com/fonts/Qlassik-Medium">Qlassik Medium</a>, by Dimitri Castrigue.  It has just enough fun to make it stand out, but not so much as to be ridiculous.</p>

<p>Code snippets are set in the famous <a href="http://ftp.gnome.org/pub/GNOME/sources/ttf-bitstream-vera/1.10/">Bitstream Vera Sans Mono</a>.  I’d initially planned to set all things monotype in my favorite coding font, <a href="http://www.google.com/search?q=centschbook+mono">Century Schoolbook Mono</a>.  Once you get used to coding with serifs, nothing else feels right.  Unfortunately, it doesn’t include bold and italic versions.  While the OS will “fake” bold and italics with fonts that it has installed, it won’t play ball when asked to manipulate dynamic fonts linked from a CSS file.  I put CentSchBook Mono first, so if you have it <small>(which you should!)</small>, it&rsquo;ll work.  Otherwise, you&rsquo;ll get Bitstream.</p>

<p>If you don’t have a browser that understands dynamic fonts, you can grab them from <a href="http://foohack.com/tpl/fonts/">http://foohack.com/tpl/fonts/</a>.</p>

<h2 id="layout">Layout</h2>

<p>I really wanted to stretch my CSS abilities a bit, and also apply some of the principles of typographic design that I’d been learning about lately.  The single-column is about 66 characters wide in the target font, and feels about “right” for readability.</p>

<p>Despite my best intentions, a lot of feature creep had somehow taken over, prompting the last revamp.  In this version, I put back some features that I’d removed, and removed some things I’d left in.</p>

<p>The vertical measure is set at 30px, with a font-size of 20px.  While that’s a bit large, I’ve always favored erring on the side of “too big”, and the Bodoni just felt too cramped at 16/24.</p>

<p>I’ve also taken a lesson from the print world, and set all my bullets and other adornments off into the margins, such that the text is kept strictly flush left.  The only element that I couldn’t figure out how to do this with is the <code>&lt;q&gt;</code> element when it starts a paragraph.  In that case, it should have a text-indent somewhere around -0.5ex, but I couldn’t manage to do that without borking quotes that start somewhere in the middle of the paragraph.</p>

<p>Since all the major browsers support resizing fonts that are set in pixels, and “zooming” is now preferred over simple font resizing, I went ahead and set everything in pixels so that the math would be easier.  There’s really no benefit to so-called “fluid” layouts that are set in ex or em measurements.  Plus, browsers that support dynamic fonts seem to have a really hard time with ex/em measurements, since the layout is rendered before the font has downloaded.  I do hope that gets fixed at some point, but doing layout in pixels was a welcome return to basics.</p>

<h2 id="supported_browsers">Supported Browsers</h2>

<p>The luxury of a personal site: I didn’t test even once in MSIE, and I don’t plan to.</p>

<p>Also, since a lot of the style is in the typography, anyone with a browser older than 6 months isn’t going to see my beautiful styles.  But they’ll see their own default font settings, I suppose, and that’s probably fine.  </p>

<p>What do you think?</p>
