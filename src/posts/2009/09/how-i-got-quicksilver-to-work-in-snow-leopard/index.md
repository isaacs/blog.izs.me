---
layout: layouts/post.njk
date: 2009-09-11T20:29:00.000Z
redirect_from:
  - /post/185543052/how-i-got-quicksilver-to-work-in-snow-leopard/
  - /post/185543052/
  - /post/185543052/how-i-got-quicksilver-to-work-in-snow-leopard
  - /post/185543052
slug: how-i-got-quicksilver-to-work-in-snow-leopard
tags:
  - snow leopard
  - quicksilver
  - how to
  - broken
title: How I Got Quicksilver to Work in Snow Leopard
tumblrid: 185543052
type: text
---
<p>When I installed Snow Leopard, Quicksilver stopped responding.  This is not acceptable.</p>

<h2 id="quit_quicksilver">Quit Quicksilver</h2>

<p>It was probably nice enough to quit for you.  If not, you probably don’t need to do this.  But still, duh, quit it if it’s running.</p>

<h2 id="move_the_settings_away">Move the Settings Away</h2>

<pre><code>mv ~/Library/Application\ Support/Quicksilver{,~}
</code></pre>

<p>That’ll move all your Quicksilver settings out of the way, so that it’ll be like a brand new install.  This means that you’ll <em>temporarily</em> lose all your customizations and trained shortcuts, but we’ll get them (mostly) back.</p>

<h2 id="install_the_newest_beta">Install the Newest Beta</h2>

<p>Get the latest beta from <a href="http://code.google.com/p/blacktree-alchemy/downloads/list">blacktree-alchemy’s google code project</a>.</p>

<p>Drag to Applications, start it up, put it on the Dock, you know the drill.</p>

<p>This will create a new ~/Library/Application\ Support/Quicksilver folder. So, now you have two.  The old (broken) one that ends in ~, and the new (empty) one that doesn’t have any plugins or preferences.</p>

<p>Start it just to make sure it works.  Then close it.  We’re gonna tinker in its brains a little.</p>

<h2 id="copy_mnemonics">Copy Mnemonics</h2>

<pre><code>cp ~/Library/Application\ Support/Quicksilver{~,}/Mnemonics.plist
</code></pre>

<p>This will “retrain” Quicksilver with all your learned behaviors.  However, chances are, most of the things that it points do don’t exist yet, because the Catalogs are empty.</p>

<h2 id="carefully_enable_plugins">Carefully Enable Plugins</h2>

<p>Open up Quicksilver, and make sure that <kbd>⌘space</kbd> (or <kbd>⌃space</kbd> or whatever) launches it like it did before.</p>

<p>Go into the settings with <kbd>⌘,</kbd> and set everything the way you had it.  This is tedious.</p>

<p>Enable plugins one-by-one.  When Quicksilver crashes, you’ll know that you enabled something you shouldn’t have.  Remove the folder in ~/Library/Application\ Support/Quicksilver/Plugins associated with the offensive thing.  The “File” stuff is mostly broken, so hopefully you weren’t too in love with setting file attributes from Quicksilver.</p>

<p>Same for Catalogs.</p>

<h2 id="get_the_new_snow_compatible_bezelhud_display">Get the New Snow-Compatible BezelHUD Display</h2>

<p>If you don’t already use <a href="http://code.bencochran.com/bezelhud/">BezelHUD</a>, you should have been.  It is the win.</p>

<h2 id="bonus_markdown_in_textmate">Bonus! Markdown in Textmate!</h2>

<p>Not sure why, but Textmate bundles got a bit stupid in Snow Leopard, and can’t find their scripts.  If you add <code>"$HOME/Library/Application Support/TextMate/Support/bin"</code> to the $PATH environment variable, and then restart Textmate, it seems to work.  (I just added this to my .bashrc goodies.)</p>
