---
layout: layouts/post.njk
date: 2015-10-15T17:36:20.000Z
redirect_from:
  - /post/131229814393/phases-of-database-love/
  - /post/131229814393/
  - /post/131229814393/phases-of-database-love
  - /post/131229814393
slug: phases-of-database-love
title: Phases of Database Love
tumblrid: 131229814393
type: text
---
<h3>Infatuation</h3>

<p>This database is just what I&rsquo;ve been looking for!  It has all the features I need!  It&rsquo;s open source, actively maintained, and the documentation is so extensive!</p>

<p>I can&rsquo;t wait to put it into production! &lt;3 &lt;3 &lt;3</p>

<h3>Self Doubt</h3>

<p>Hm.  Well, the first approach to building my app with this thing didn&rsquo;t quite go as I&rsquo;d expected, but that&rsquo;s just because I didn&rsquo;t fully understand its advanced model.  There sure is a lot of documentation, but I don&rsquo;t understand most of it.  Some people in the IRC channel scolded me for thinking in terms of queries, and they&rsquo;re probably right.</p>

<p>I&rsquo;ve checked out some books, and I&rsquo;m reading a lot about the finer points on the internet.  Everyone using this thing is really smart, so I&rsquo;m sure they&rsquo;ve thought this through.</p>

<p>Now that I am starting to get it, though, I see that I was going about my app all wrong.  Once I rewrite it in the complete opposite shape I had before, it&rsquo;ll be great.</p>

<h3>Codependency</h3>

<p>It&rsquo;s in production.  My app is holding up, but it takes a few more servers than I would&rsquo;ve hoped.  At this point, I&rsquo;ve worked around so many of this thing&rsquo;s issues that I can&rsquo;t easily migrate off of it, but each new version that comes out seems to make things a little better.</p>

<p>A few of the APIs are kinda confusing, but I know how they work, and I&rsquo;ve mostly forgotten SQL in favor of its fancy DSL thing.  I can kind of work out what the crash dumps mean now, so that&rsquo;s good.</p>

<p>This is fine.  I am ok with how things are proceeding.</p>

<h3>Rage</h3>

<p>Fuck this thing.  I&rsquo;m spending all my money on servers and all my time on debugging bullshit.  I never had this problem with my last database.  Someone remind me what the fuck was so bad about SQL again?  This &ldquo;community&rdquo; here is just a bunch of neckbeards beating up on hapless n00bs, and I can&rsquo;t figure out which group is more annoying.  The docs are garbage, they&rsquo;re a year out of date, and no one has time to edit them, because the first team (which has fucked off doing YET ANOTHER DATABASE now!  in HASKELL because apparently erlang isn&rsquo;t exotic enough these days!) was so overly enthusiastic about their fucking math project that they wrote more about this ugly baby than the combined works of shakespeare and the gutenberg bible put together, so the docs are highly available, not even remotely consistent, and completely fucking partitioned.  Issues in GitHub say to post them into the project Jira, and bugs in Jira are closed for being assigned to the wrong Story, so I spend half my time tracking down a core maintainer to send a patch to.  I&rsquo;m running a cobbled-together patch-floating garbage barge that sinks every time there&rsquo;s an update.</p>

<p>Fuck this thing.  Never again.  I&rsquo;d stop maintaining it and rebuild it all from scratch if I could afford the downtime.</p>

<h3>Familial Acceptance</h3>

<p>Ok.  I&rsquo;ve rewritten half the app as an SOA, and I&rsquo;m just storing data in the database now.  It&rsquo;s still the main source of truth, but the records all get piped over to a SQL relational database that I can actually run queries against.  It has one or two really nice features, and I&rsquo;m using those.  As long as you ignore most of the API, and never read the docs, it&rsquo;s not so bad.</p>

<p>Kinda like that one weird uncle who gets too drunk and rants about the second amendment, but is ok as long as you just meet in public and keep it short.  We all have our faults.  Uncle Bob&rsquo;s a pretty nice guy, overall.  Helped me build a gokart once.</p>
