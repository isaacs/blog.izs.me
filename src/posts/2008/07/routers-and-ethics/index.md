---
layout: layouts/post.njk
date: 2008-07-25T17:35:46.000Z
redirect_from:
  - /post/146672761/routers-and-ethics/
  - /post/146672761/
  - /post/146672761/routers-and-ethics
  - /post/146672761
slug: routers-and-ethics
tags:
  - broken
  - in the minds of users
title: Routers and Ethics
tumblrid: 146672761
type: text
---
<p>I just moved into a new apt, and my neighbor has a wireless router that is completely open (no MAC whitelist, not even WEP or WPA).  <a href="http://192.168.1.1">192.168.1.1</a> shows me the Netgear login screen, and the default Netgear password works.  Curious and a little concerned, I logged in and poked around.</p>

<p>They have all the default settings, and the logs just show the same two computers connecting over and over again.  Clearly, they bought it, plugged it in, it worked, and so they stopped caring.</p>

<p>We all know what the <em>un</em>ethical course of action would be.  You could easily route every bank&rsquo;s IP address to a phishing site.  Or, just install a packet sniffer on the router that will faithfully log any POST requests that they make, then look for anything looking like a password.  If they use the same password twice, try that password everywhere.  Once you have access to their email, game over.</p>

<p>If you just wanted to be annoying, you could block access to all the most popular websites for the 15 minutes when they always seem to connect, so that it&rsquo;ll start working seemingly randomly just about the time that they&rsquo;re calling the cable or DSL company in a huff.  Or, expose their computer to the internet and just wait for various bits of malware to wriggle in.</p>

<p>Those are all of course completely evil.  The real question is, do you protect them from their own ignorance?  Do you leave their wifi network completely open, or lock it down?  And, do you change the password?</p>

<p>I decided to leave their network open.  If they want to share their internet connection with the world, far be it from me to tell them they can&rsquo;t.  That&rsquo;s a lovely thing to do for the universe.  And I don&rsquo;t see a problem with using it once in a while until I get my own set up.</p>

<p>I did change their password.  Clearly, that doesn&rsquo;t matter to them.  I know better, they don&rsquo;t, I&rsquo;d want someone to do that kind of thing for me.  It&rsquo;s a little presumptuous, but it also might keep them from being victimized by identity theft.</p>

<p>There&rsquo;s an interesting lesson here.  <strong>No one likes your control panel.  Most users will use the defaults, always.</strong>  These kinds of things are nice when you really want fine-grained control, but completely annoying, complicated, and tedious for most users.  They just wanna check their email, play some scrabulous, download some porn, and go back to their normal non-technical lives.</p>

<p>We can of course blame the victim.  <q>How could they be so stupid to have their router open to the world.  Don&rsquo;t people think?!?</q>  But it would be very hypocritical for me to say that, and I don&rsquo;t think I&rsquo;m unusual.</p>

<ul><li>I have never read the owner&rsquo;s manual of a car I&rsquo;ve driven.  </li>
    <li>I have only a few times read the full drug information on any medications I&rsquo;ve been prescribed, and then only because I was <em>really</em> bored.</li>
    <li>I plug it in.  I turn it on.  I only mess with it if it&rsquo;s broken (or interesting.)</li>
</ul><p>The difference is that, in any of these cases, the <em>default</em> value is not likely to be harmful.  If you don&rsquo;t change your oil at the right time, your car&rsquo;s performance will suffer; but as long as you change it once in a while, it&rsquo;ll keep moving.  If a doctor is prescribing a medication, it&rsquo;s probably not going to kill you, and if there&rsquo;s any serious risk, they&rsquo;ll usually tell you what to watch out for.  Most electronic devices don&rsquo;t have access to your bank accounts.</p>

<p>As software and hardware engineers, if our <em>defaults</em> put users in an unsafe situation, where their credit and savings are placed at risk, then we&rsquo;ve failed them, and we&rsquo;ve acted unethically.</p>
