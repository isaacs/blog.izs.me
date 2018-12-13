---
date: 2008-05-07T03:32:22.000Z
redirect_from:
  - /post/146672649/steal-my-bash-profile/
  - /post/146672649/
  - /post/146672649/steal-my-bash-profile
  - /post/146672649
slug: steal-my-bash-profile
tags:
  - Freebie
  - Tools of the Trade
title: Steal My Bash Profile
tumblrid: 146672649
type: text
---
<p><small>Feel free to skip the monologue and just <a href="http://github.com/isaacs/dotfiles/tree/master">get the goodies</a>.</small></p>

<p>I am in love with the <a rev="vote-for" href="http://www.gnu.org/software/bash/manual/bashref.html">Bourne Again Shell</a>.  Bash is a fantastic terminal environment, and a very interesting programming language in its own right.</p>

<p>I grew up using DOS.  Unix shells always seemed scary and foreign, for some reason.  I think a big part of the reason that I stayed on Windows for as long as I did was that I knew DOS, and could always resort to it in times of need.  As a support tech in college, I got very familiar with DOS.  It was comfortable and handy.</p>

<p>When I got into web programming, I had no choice but to learn at least the rudimentary basics of a unix-style environment.  At that time, I was as a support tech at a software company whose product uses VisualBasic ASP over IIS, and had started playing around in that environment.  However, I had no money, and web hosts that support ASP cost money.</p>

<p>By some stroke of luck or persistence, I managed to find a host that was free, <a href="http://beigetower.org">Beigetower</a>. <small>That link doesn&rsquo;t work any more, of course.  I don&rsquo;t know how long that server&rsquo;s been down.  Cuong Nghiem&rsquo;s still listed as the owner on whois, though.)</small>  On top of that, they provided shell access.  Not being able to resist the temptation to tinker with a real live web server, I learned enough Bash to poke around.  As I learned more PHP, I picked up more bits and pieces along the way.</p>

<p>When I started at Yahoo, it was sink or swim to some extent.  I was issued a FreeBSD dev box, and a windows desktop.  I did most of my development in my safe windows world, but there are <em>a lot</em> of things you have to do on your dev box as an engineer at Yahoo that simply can&rsquo;t be done in any other way.  Bash was a regular part of my daily routine almost from the first day.</p>

<p>Eventually, I fell so head over heels in love with Bash that I had to say goodbye to Windows and get a Mac.</p>

<p>There are many good reasons to get a Mac instead of a PC. They&rsquo;re easier and more intuitive in a lot of ways.  They certainly look a lot nicer on almost every level.  But I&rsquo;d be lying if I said that having Bash right there all the time wasn&rsquo;t the ultimate dealmaker.</p>

<p>One of the best things about Bash, in my opinion, is the fact that you can add shortcuts to your <code>.profile</code> (or <code>.bash_profile</code> or <code>.bashrc</code>, of course) that will be loaded every time you log in.  As soon as I learned this, I started adding stuff.</p>

<p>Eventually, I had my profile so tricked out that it was hideously painful to have to work on a machine that didn&rsquo;t have my shortcuts.  Without my customized prompt, I&rsquo;d get really confused about which directory I was currently in, and have to type <code>pwd</code> every three seconds just to not get lost.  The sequence would usually go like this:</p>

<p><code class="block">$ la
-bash: la: command not found
$ la
-bash: la: command not found
$ la
-bash: la: command not found
$ alias la="ls -laF"</code></p>

<p>Those first few entries of <code>la</code> were accompanied by plenty of growling and confusion, <em>every. single. time.</em></p>

<p>So, I got into the habit of using <code>scp</code> or <code>rsync</code> to send my bash profile to any machine that I&rsquo;d have to work on.  However, some machines have <code>vi</code>, and some don&rsquo;t.  I&rsquo;d make a change on the profile on my mac, and forget to sync it to my dev box.  Machines that I didn&rsquo;t log into often would be so far out of date that it was the &ldquo;la&rdquo; situation all over again.  What&rsquo;s worse, I put some stuff in other shell script files that were called by the profile to do other things, so it was no longer straightforward to keep them in sync.  I&rsquo;d send half the package, and then log in, and be inundated with errors all over the place.</p>

<p>When I switched from FreeBSD to a Red Hat Linux box, half my stuff didn&rsquo;t work quite the same way.  Also, I moved Foo Hack to a great <a rev="vote-for" href="http://www.slicehost.com/">new host</a>, which is running Ubuntu.  On the Mac, I use <a href="http://macports.org">MacPorts</a>, and the Ubuntu slice uses <a href="http://www.debian.org/doc/manuals/apt-howto/">apt-get</a>, and the RHEL of course uses yinst, the Yahoo! package management tool that quite simply makes all others look like crap by comparison.  (Sadly, yinst is not open source.  There&rsquo;s <a href="http://svn.marc.abramowitz.info/projects/hacks/yinst">this hack</a> to simulate yinst on top of apt, though.)  The Ubuntu and RHEL environments used vi as the default editor, but I&rsquo;d changed that on the Mac to point to <code>mate</code>, the command-line interface to <a href="http://macromates.com">TextMate</a>.</p>

<p>To say the least, a simple sync wasn&rsquo;t cutting it even a little.</p>

<p>I re-wrote all my bash profile goodies to fit in a single file.  Shell scripts were replaced with functions so that they could all live together.  The <code>edit</code> command was defined to use the first available editor from a list of alternatives.  Then, I put it in a file that was external from the main <code>.profile</code> or <code>.bashrc</code> file, so that it could be synced without overwriting anything that the OS placed in there by default.  The only thing to do on a new server was to add <code>. ~/.extra.bashrc</code> to the bottom of whatever profile script it was already using.</p>

<p>I had already added a command called <code>editprof</code> that would bring my profile up in an editor.  All that was needed then was a <code>pushprof</code> command that would rsync the .extra.bashrc file to a given host.</p>

<p>I&rsquo;m releasing it under the <a href="http://sam.zoy.org/wtfpl/">WTFPL</a>.  There are actually a few files, since some stuff simply didn&rsquo;t make any sense to have in certain environments.  The copy <del>here on foohack.com</del> <ins>on github</ins> is <del>symlinked from my home directory</del> <ins>updated frequently</ins>, so it&rsquo;ll stay pretty up to date.  Feel free to copy, learn, fork, or, like the license says, just do <abbr title="what the fuck">wtf</abbr> you like with it.</p>

<p>A word of warning: like government regulation, this file increases in size but rarely gets revised.  Some stuff may be completely useless or pointless.  Some of it I hardly ever use any more.  Figuring out better solutions to these problems is left as an exercise for the reader.</p>

<p><a href="http://github.com/isaacs/dotfiles/tree/master">Get my bash extras.</a></p>
