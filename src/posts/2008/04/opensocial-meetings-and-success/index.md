---
layout: layouts/post.njk
date: 2008-04-03T19:20:41.000Z
slug: opensocial-meetings-and-success
tags:
  - 20/20 hindsight
  - the business
title: 'OpenSocial, Meetings, and Success'
tumblrid: 146672608
type: text
---
<p>It’s a very interesting time for me at Yahoo! right now.  I’d been keeping quiet about what’s going on for two big reasons.  First, I’ve been too busy working to write about it.  Second, it’s secret.</p>

<p>Well, as of 2008 March 25, it <em>was</em> a secret.  <a href="http://yhoo.client.shareholder.com/press/releasedetail.cfm?ReleaseID=301421">This press release</a> broke the news a few days ago, so I doubt I’m giving anything away to say that Yahoo! is busy working on implementing a framework for <a href="http://code.google.com/apis/opensocial/">OpenSocial</a> applications that tie into various sorts of Yahoo! data.</p>

<p><a href="http://buzz.yahoo.com">Buzz</a> was a very fun project to work on.  After games’ mountain of legacy and the brand universe fiascos, it was really great to be able to have a hand in developing a site from scratch and also have enough space and resources to really create quality.  (It has its problems, but they’re being worked out, and overall I’m quite proud of the site we built.)</p>

<p>However, the really interesting parts of Buzz are all behind the scenes.  The front end was an exercise in the complicated and delicate art of engineering simplicity and eliminating redundant effort.  Even in the face of exacting requirements and changing specifications, we ended up releasing a site that performs well and is relatively easy to work on.  On some level, I feel like it was my <dfn title="The kid you have and treat really nicely to make up for their older sibling that turned into a drug addict due to your shoddy parenting">karma baby</dfn> for some of the complicated monstrosities that I’ve left in my wake as a developer.</p>

<p>But, with Buzz behind me, creating and maintaining yet another website has gotten a bit old.  Nothing wrong with that work, but I’m done with it for now.  Time to do something else.</p>

<h2 id="opensocial_and_mash_ups">OpenSocial and Mash-ups</h2>

<p>Douglas Crockford has called mash-ups <a href="http://blog.360.yahoo.com/blog-TBPekxc1dLNy5DOloPfzVvFIVOWMB0li?tag=mashups">One of the most exciting features of WEB 2.x</a>, and I couldn’t agree more.  The vision of the web from the get-go was a distributed platform for innovation.  As client technology and usage advanced, dynamic features followed naturally.  The ability to mix-and-match data and functionality into new applications is a <em>very</em> exciting prospect.</p>

<p>However, like so much potential innovation on the web, this effort is severely hampered by the same system that makes it possible.  The browser Dom was designed by committee, and the committee didn’t actually meet for a while, and the members of the committee were trying to kill one another.  Throughout the browser wars, IE and Netscape introduced features in a frantic arms race to try to shut one another out of the browser market.  Many of those features were not really ready for prime time, and many others probably should have been wiped off the whiteboard and never made it into the code.</p>

<p>On the plus side, browsers and web pages were able to innovate much faster than the w3c’s crawl.  Much of the time, the “official” specs only included a feature because a few browsers had already implemented it and it was in widespread use.  That speed got us to where we are, but lots of important things were sacrificed or forgotten along the way.  Among the missing: a proper permission model.  Same-domain restriction works to some degree, but it makes mashups trickier and there are still big holes.  In particular:</p>

<ul><li>Scripts run with the same access permission as the page that invokes them, even if they’re hosted elsewhere.</li>
<li><abbr title="XML HTTP Request">XHR</abbr> calls can’t get data asynchronously from external domains.</li>
<li>The Dom is one big global that all scripts have access to.</li>
<li>Iframes restrict permission, but they’re a pain to work with.</li>
</ul><p>Sadly, this means that mash-ups are faced with the choice of:</p>

<ol><li>Only accessing public data, lest some untrusted third party get ahold of something it shouldn’t have.</li>
<li>Running the risk that a third party might steal some data.</li>
</ol><p>Essentially, mash-ups are thus restricted from really doing anything interesting.  PayPal or Amazon or Yahoo—-that is, sites with money and interesting private data—-could never risk exposing their data to a mash-up.  Their visibility, and the value of the private data they hold, makes them prime targets for attack.  And, since they have money, and visibility, they’re also prime targets for lawsuits if a user was damaged by a mistake.</p>

<p>OpenSocial represents a concerted effort by some very big players on the web to make severely interesting and useful mash-ups not just a reality, but common and relatively easy to create and host.  API layers will sit between the developer and the browser, and between the developer and the container page, allowing them to code as if it’s 2099 and the browser is sane.  It’s no small task.  When Hao asked me to join the team, and told me what they were doing, my initial reaction was <q>Well, it might end up a total failure.  But it’ll be one hell of a fun problem to work on.  I’m in.</q></p>

<p>There were hints and rumors that Yahoo was doing something with OpenSocial a while back.  (We were.)  But, the main reaction to the press release really should be <q>Well, spluh.</q>  Yahoo’s all about social; it may have started with indexing the web into searchable categories, but some of its earliest and most popular applications are mail, instant messaging, and groups.  Yahoo’s all about open; we invest countless developer-hours into the open source technology that we use.  Yahoo has a lot to gain from a more exciting social internet; when the ocean rises, the bigger fish benefit the most.</p>

<h2 id="warnings_wrapped_in_compliments">Warnings Wrapped in Compliments</h2>

<p>For a month or so, I’ve been transitioning off the Buzz team and onto the team that’s doing the OpenSocial container stuff.  As people found out that I was joining that team, I heard this line a lot from various people: <q>Oh, thank god.  They really need a good front-end.</q></p>

<p>There’s a very flattering element to that, and I’m not trying to brag.  Objectively speaking, I know I’m good at what I do.  I love doing it, and I work hard at it, and that’s just what happens when you work hard at what you love.  No magic at all.</p>

<p>At the risk of sounding like a falsely modest blow hard, though, on a more moment-to-moment basis in my own world, I focus on many of my own failings that others rarely see, and I am always very impressed when someone solves a problem that I was stuck on.  I often feel like I’m still new at Yahoo, and on some very insecure level, I’m waiting for them to find out that I’m just playing at this stuff and tell me I’ve fooled the real adults for long enough, and it’s time to go home.</p>

<p>But I <em>am</em> good at what I do.  It’s real.  These skills are rare, and they’re worth money.  When others acknowledge it, though, I kind of feel embarrassed and get all “aw, shucks, twern’t nuttin’” and find myself unable to make eye contact.  (A few times, this reaction has evoked a <q>No, seriously!  I mean that!</q> which just adds to the effect.)</p>

<p>So, the flip side of that comment… yes yes, I’m a great webdev, blah blah, but say that first part again?  It’s a bit like hearing, <q>Oh, thank god they picked you to wrestle that giant raptor.  He’s been killing one guy after the next, so I’m really glad that they finally picked someone who can take him down.</q>  Why couldn’t it have been <q>That’s great!  There’s a lot of great talent on that team, I’m sure you’ll fit right in!</q></p>

<p>Well, that’s the cards that life deals you sometimes.  Impossible problems are the most fun, anyway.</p>

<p>And I’ve found that there really are a lot of talented developers on this team.  Some more have joined it recently.  I’m really happy to be able to be working in this group.</p>

<h2 id="meetings">Meetings</h2>

<p>Somehow, I managed to work myself into a role on this team where most of my time is spent in meetings.  Some of them were soul-sapping and boring, as meetings can be sometimes, but lately, they’ve seemed to focus more and more on solving front-end problems at an architectural level.  After almost every one, someone whips out a phone to take a picture of the whiteboard, lest our valuable work be lost to the eraser.  </p>

<p>Additionally, I’ve been attending the <a href="http://developer.yahoo.com/yui/" title="Yahoo User Interface">YUI</a> team meetings, as they’re interested in knowing what they can do to aid Yahoo’s big bets.  Through that, and by virtue of working on a product that promises to push the limits of what the browser can safely do, I’m finding myself consulted because Microsoft is asking Yahoo what we think of the IE 8 beta, and what we’d like to see in it.  I’ve been asked to teach a CSS class for the next round of incoming junior/trainee webdevs (Jukus, as they’re called).  I’m meeting with other groups and helping to figure out what OpenSocial means for their product’s context, and how they’ll use what we’re building.  Today, we’ve got a meeting at the Googleplex.</p>

<p>It certainly looks like success.  And the pay is pretty good.  The product is fun and open and creative.  It’s one puzzle after another.</p>

<p>But, I’m feeling a bit envious of the other developers I talk to who get more time to write code.  From Tuesday to Thursday of last week, iCal was booked solid from 11-5 every day, I ended up in ad hoc discussions about things (or dealing with email) until about 7 or 8 each night.</p>

<p>I have tried hard not to become a manager at Yahoo.  Perhaps a management path is in my future somewhere, but right now, it just seems like a job I would not enjoy.  Programming is a very social activity if you’re doing it right.  With a new team and a new product, there’s plenty of architecture and designs to figure out, and I’ll be coding again soon enough.</p>

<p>I hope.</p>

<h2 id="hey_one_more_thing8230">Hey, one more thing…</h2>

<p>We have openings for great engineers and webdevs.  If any of this sounds like something you’d be interested in, <a href="http://foohack.com/contact/">let me know</a>.  I’m 100% serious.  Javascript and PHP experts, we need you.  Yahoo is, in my opinion, one of the best places for talented engineers to work.  They generally treat their employees very well, and this is a product that is just full of fascinating puzzles.  </p>
