---
date: 2007-07-27T00:37:54.000Z
redirect_from:
  - /post/146671636/broken-mac-wireless-driver-in-10410/
  - /post/146671636/
  - /post/146671636/broken-mac-wireless-driver-in-10410
  - /post/146671636
slug: broken-mac-wireless-driver-in-10410
tags:
  - Broken
  - Freebie
  - Tools of the Trade
title: Broken Mac Wireless Driver in 10.4.10
tumblrid: 146671636
type: text
---
<p><em><strong>Note</strong>: This post is regarding an issue that has since been fixed by Apple.  If you&rsquo;ve run this script, then please run the included undo.sh to reverse the changes, and then get the actual patch from the Software Update command in the Apple Menu.</em></p>

<hr><p>If you&rsquo;ve upgraded to 10.4.10, and you use wireless (who doesn&rsquo;t, these days?) and you work off the battery (why else would you have a laptop?), then you&rsquo;ve probably run into issues with kernel panics and fast-dying batteries.</p>

<p><a href="http://discussions.apple.com/thread.jspa?threadID=1017323&amp;tstart=50">The fix</a> is a bit tricky, and involves finding and downloading 3 different files, and then moving stuff around manually.  Not being able to suffer the thought of doing this by hand, I decided to write a fix that&rsquo;s all packaged up in a single download and one step.</p>

<p>Download <a href="http://foohack.com/blog/wp-content/uploads/2007/07/10410_wireless_fix.tgz" title="10.4.10 Wireless Fix">the tgz file</a>.  Unpack it, and run <code>install.sh</code>.  It&rsquo;ll create a backup of the files that are touched, and can be easily reverted to said backup with <code>undo.sh</code>.</p>

<p>Enjoy using wireless on battery power, <abbr title="MacBook Pro">MBP</abbr> lovers!</p>

<p><strong>Like it says in the script:</strong> I make <strong>NO</strong> gaurantees about the quality or reliability of this code.  It worked for me, but it might make your machine explode.  <strong class="warning">Use at your own risk!</strong></p>

<h3>Edit</h3>

<p>Updated the scripts to work when run from Terminal.app.  Sorry for the confusion, guys!</p>
