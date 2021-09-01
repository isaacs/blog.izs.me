---
layout: layouts/post.njk
date: 2013-03-12T18:57:00.000Z
redirect_from:
  - /post/45203330061/complex-system-knowledge-is-not-transferrable/
  - /post/45203330061/
  - /post/45203330061/complex-system-knowledge-is-not-transferrable
  - /post/45203330061
slug: complex-system-knowledge-is-not-transferrable
title: Complex System Knowledge is Not Transferrable
tumblrid: 45203330061
type: text
---
<p>Imagine if someone were to say something like:</p>

<p>&gt; Node uses async I/O so that it can read files faster.</p>

<p>While many of the <em>words</em> in this sentence are sensible, and perhaps even somewhat close to the truth, there are several glaring errors with it:</p>

<p>First of all, Node doesn&rsquo;t use AIO. It uses nonblocking I/O for sockets and pipes, but for files, it uses a thread pool.</p>

<p>More subtly, doing fs operations in a worker thread does not make them faster.  Since we&rsquo;re usually limited by the system&rsquo;s fs response anyway, adding the overhead of threads and callbacks makes those operations strictly <em>slower</em> than doing them synchronously.</p>

<p>The point of using an event loop and doing fs operations in a thread pool is so that your <em>server&rsquo;s</em> latency is not affected (as much).  The speed of the fs operation itself is presumably less important than making sure that the server can continue to service requests in the meantime.</p>

<p>If someone said this, and a knowledgeable Node user was around to hear it, the speaker would be promptly corrected.</p>

<p>Now imagine that the person saying this was a very highly educated lawyer, with many years of experience in IP law, international copyright litigation, trademarks, and patents.</p>

<p>Do you have any <em>more</em> belief in their clearly false statement?  Do you now think, &ldquo;Well, this guy&rsquo;s a <strong>lawyer</strong> after all, and he&rsquo;s dealt with some pretty hairy IP and technology issues, so he probably does know a thing or two about technology.&rdquo;  Or do you start to think <em>less</em> of him, and his craft?</p>

<p>My fellow programmers, this is what you sound like when you make authoritative-sounding claims about trademark, copyright, and patent law.</p>

<p>Not only is it more complicated than you probably realize, the complications differ from place to place and from situation to situation.  The law is a giant software program with legacy code going back literally <em>thousands</em> of years, and the hardware it runs on is <em>human brains</em>, which are <a href="http://lesswrong.com">notoriously buggy</a>.</p>

<p>I am so glad IANAL.  Software that runs on computers is so much easier to reason about.</p>
