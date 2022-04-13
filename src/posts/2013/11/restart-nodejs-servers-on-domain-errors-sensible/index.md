---
layout: layouts/post.njk
date: 2013-11-01T19:22:00.000Z
redirect_from:
  - /post/65712662830/restart-nodejs-servers-on-domain-errors-sensible/
  - /post/65712662830/
  - /post/65712662830/restart-nodejs-servers-on-domain-errors-sensible
  - /post/65712662830
slug: restart-nodejs-servers-on-domain-errors-sensible
title: 'Restart Node.js servers on domain errors: Sensible FUD'
tumblrid: 65712662830
type: text
---
<p>The Node.js documentation about the &ldquo;domain&rdquo; error handling module has a <a href="http://nodejs.org/api/domain.html#domain_warning_don_t_ignore_errors">strongly worded warning imploring you to shut down the process when a domain catches an error</a>.</p>

<p>I was recently asked for a more detailed explanation of why this is, and answered with the following <a href="https://gist.github.com/isaacs/7269994">gist</a>.</p>

<script src="https://gist.github.com/isaacs/7269994.js"></script>

<p>This principle is not unique to JavaScript, of course.  Any language with state, side effects, and exceptions that abandon local context without a way to resume at the throw site, will basically guarantee that unexpected exceptions cannot ever be handled in a way that lets the program proceed normally.  (This also applies, for example, to Ruby, Python, PHP, C++, and many other languages, though of course they&rsquo;re going to have their own set of caveats and workarounds.)</p>

<p>This is not <em>so</em> bad if it&rsquo;s a program that isn&rsquo;t long-lived.  PHP scripts typically run to completion and then get cleaned up, so a missed exception is pretty meh.  Same with command line scripts.</p>

<p>But in a server or some other sort of long-lived daemon, it&rsquo;s completely unacceptable, and will nearly always lead to undesirable system behavior.</p>

<p>Finish up what you&rsquo;re doing, close the active connections or whatever, and GTFO.  Let the system start a new process.</p>

<p>It&rsquo;s the only responsible option.</p>
