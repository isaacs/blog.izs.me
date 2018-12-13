---
date: 2007-09-24T17:00:03.000Z
redirect_from:
  - /post/146672251/fix-for-vis-broken-arrow-key-support-in-iterm/
  - /post/146672251/
  - /post/146672251/fix-for-vis-broken-arrow-key-support-in-iterm
  - /post/146672251
slug: fix-for-vis-broken-arrow-key-support-in-iterm
tags:
  - Broken
  - Tools of the Trade
title: Fix for Vi's broken arrow key support in iTerm
tumblrid: 146672251
type: text
---
<p><cite>I originally posted this at <a href="http://isaacschlueter.com/2007/04/fix-for-vis-broken-arrow-key-support-in-iterm/">isaacschlueter.com</a> on <abbr class="date" title="2007-04-17T11:45:36-7:00">Tuesday, April 17th, 2007</abbr>.  I&rsquo;ve incorporated the info from the comments into the main post.  Special thanks to: radius, benstiglitz, and Higgaion for helping to provide more information.</cite></p>

<p>So, I got turned on to <a href="http://iterm.sourceforge.net/">iTerm</a>, a prettier and more user-friendly alternative to Apple&rsquo;s native Terminal.app.</p>

<p>However, for some reason, I got the following error message whenever I tried to use arrow keys in Vi:</p>

<p><code>Usage: [[</code></p>

<p>The problem is that Vi is faithfully responding to the TERM variable that iTerm is sending.  (I&rsquo;m not sure why Terminal.app and PuTTY don&rsquo;t suffer from this issue, but c'est la vie.)  So, I thought, you <em>should</em> keep the terminal setting in iTerm to xterm-color, since this is great for most things, but then add this setting to your .exrc file to tame Vi:</p>

<p><code>set term=linux</code></p>

<p>I wasn&rsquo;t sure why that fixed it, but it did.  <code>set term=cons25</code> was another fix that I found, but it seemed to break when I had line numbers turned on, because all tab characters are turned into backticks (<code>`</code>).</p>

<p>Of course, that&rsquo;ll break if you use a different terminal setting on another program, so Higgaion suggested putting this into your .vimrc or .exrc instead:</p>

<p><code class="block rc">if $TERM_PROGRAM == 'iTerm.app'
set term=linux
endif</code></p>

<p>However, the same problem occurs when using the <code>more</code> and <code>less</code> commands&mdash;the arrow keys are broken, but the hjkl keys worked just like they do in Vi. Since there&rsquo;s no <code>.morerc</code> or <code>.lessrc</code> to set the term variable, I was dismayed.</p>

<p>According to <a href="http://isaacschlueter.com/2007/04/fix-for-vis-broken-arrow-key-support-in-iterm/#comment-3960">benstiglitz</a>:</p>

<blockquote cite="http://isaacschlueter.com/2007/04/fix-for-vis-broken-arrow-key-support-in-iterm/#comment-3960">The default termcap on Mac OS X specifies that applications should enter application-specific cursor mode when capturing the display. iTerm is faithfully sending the application-mode sequences, but most terminal emulators just ignore the app-mode escape sequences and send normal key sequences instead.</blockquote>

<p>So, this is being determined by iTerm&rsquo;s behavior, so should be fixable in iTerm&rsquo;s settings.  I poked around in iTerm&rsquo;s menus.  Under Bookmarks &gt; Manage Profiles &gt; Terminal Profiles &gt; Default, you can set the default terminal type to <code>linux</code>.  Then you can enjoy proper arrow key support in every situation under iTerm, without futzing with config files in your home directory.  Incidentally, it seems that <code>linux</code> has the same color support as <code>xterm-color</code>, so nothing is lost.</p>
