---
date: 2013-12-05T18:53:00.000Z
redirects:
  - /post/69091089622/the-hazards-of-consensus
  - /post/69091089622
slug: the-hazards-of-consensus
title: The Hazards of Consensus
tumblrid: 69091089622
type: text
---
<p>The most long-term success tends to come from reducing, to the
greatest extent possible, the need for agreement and consensus.</p>

<p>A simple micro-example of this is the lunch-time behaviors of two
different companies I&rsquo;ve worked at: Joyent and The Startup.  (&ldquo;The
Startup&rdquo; shall remain nameless, because I hated it there, but I really
liked a lot of the people involved, and don&rsquo;t want to accidentally
blame them for any of the badness.  It&rsquo;s sad that it went the way it
did, but I am thankful for the experience I got out of it.)</p>

<p>At Joyent, lunch happens at a reasonable hour.  (Since I am in the
office most often on Tuesday, it&rsquo;s signaled with a <a href="http://localwiki.net/sf/Tuesday_Noon_Siren">warning klaxon</a>.)
It is a leisurely 60 to 90 minute affair, where we socialize easily.
Subjects of conversation do touch on work quite a bit, of course, but
equally common are baseball, the politics of Crazy Town, what&rsquo;s wrong
(and right) with Computer Science education (or tech in general), and
the latest Hacker News troll fountain.</p>

<p>If we all happen to be in the mood for the same type of food, we&rsquo;ll
sometimes go together.  However, more often than not, everyone gets
takeaway from a nearby spot, and we gather around a big round table.
If we start walking in the same direction, but then I want a sandwich
and you want a taco, we part ways, and meet back at the office.</p>

<p>People come and go, extremely low-pressure.  We disagree more than we
agree, but we easily move on from disagreements and find a new subject
to toss around.  There is no governance or agreement, no hard
feelings.  Just a loose group of sovereigns who enjoy one another&rsquo;s
company.</p>

<p>Not only do we not have to all agree on the same thing for lunch, the
disagreement can often yield benefits for everyone.  If you get tired
of the same old offerings, and head out in a different direction, you
might find a new menu that becomes a crowd favorite.</p>

<p>At The Startup, lunch was catered.  (We provide you lunch!  Hooray!
Come work here!)  The food wasn&rsquo;t terrible, and I believe that it was
well-intentioned by the founders, but I&rsquo;ve since come to view catered
lunch as a huge red flag at a company.  My coworkers ate fast, and only
discussed work, if they didn&rsquo;t continue working at their desks while
they ate.  This was viewed as normal.</p>

<p>One time I decided to leave the office and bring something back
(mostly because I just wanted a walk, having not seen the midday sun
for a week).  I asked a few of my teammates if they wanted to come
with me, and the answer was &ldquo;Um, no, I probably shouldn&rsquo;t&hellip;&rdquo;  When I
returned, no fewer than 5 people asked me nervously if I was ok, if
anything was wrong, where I went, what was going on.  It was SO weird.</p>

<p>Something as simple as a sandwich wrapped in paper showed that I
wasn&rsquo;t part of their unified tribe.  To make matters even worse, most
engineers there were in the office around 7:30 in the morning, stayed
for the catered dinner (!!), worked another few hours, and then stuck
around drinking beers in the office together until 23:00 or midnight.
Having bags under one&rsquo;s eyes was a mark of pride.</p>

<p>Maybe I&rsquo;m just lazy, but I really only have about 5 solid hours of
focus in me on a given day, and those hours suffer considerably if I
don&rsquo;t get the proper physical, mental, and emotional rest.  So, it was
not a great fit.  I quit after a few months.  A year (and 2 pivots)
later, they were sold for a fraction of what their investors had put
in, never having reached the general release of their product.</p>

<p>But back to the lunches.  There&rsquo;s an important point there.</p>

<p>Human societies function best when they are structured in such a way
as to tolerate&ndash;even <em>celebrate</em>&ndash;disagreement.  If the society can be
<em>improved</em> by disagreement, then that&rsquo;s even better.  It allows for
freedom, self-determination, experimentation, and a pervasive sense of
safety.  If you and I can disagree comfortably, then I don&rsquo;t have to
worry that we might disagree, which means two things: I can be candid
with my honest opinions, and I can be open to yours.  I don&rsquo;t have to
resist your opinions if I disagree, and I don&rsquo;t have to guess your
reaction before I share mine.</p>

<p>Of course, clearly some disagreements are <em>not</em> tolerable.  If you and
I disagree about whether to put a knife in my chest, there&rsquo;s no way we
can both get our way.  Designing groups that can benefit from
disagreement is non-trivial, and usually happens by accident.  In the
political space, this usually means some form of constitutional
democracy, but neither &ldquo;constitutional&rdquo; nor &ldquo;democracy&rdquo; will ensure a
healthy and inclusive culture or guarantee that experimentation will
be promoted.  Sometimes a limited dictator is safer than a powerful
voting bloc.</p>

<p>With npm, I actively sought to design a software system in which we
could easily use one another&rsquo;s Node.js modules, without having to
agree on which Node.js modules to use, or the best way to organize
them in our projects.</p>

<p>I wish that I could claim credit for the &ldquo;small modules&rdquo; design
philosophy or the many best practices and popular resources that have
been created, but in truth, I can&rsquo;t.  All of those things were
designed or discovered by other people.</p>

<p><strong>When everyone else is applying force, it&rsquo;s best to reduce
friction.</strong>  People were writing a lot of cool stuff, but having to
agree on conventions and techniques was putting sand in the gears.
The downsides of ceremony and dependency hell are very difficult to
appreciate ahead of time, and the choices that lead to that place
solve real problems early on.  With npm, I opted to <em>not</em> solve some
problems so that I <em>could</em> solve others.  By sticking to the rule of
&ldquo;minimize the need for consensus&rdquo;, we&rsquo;ve found much more interesting
problems (like how to handle massive growth).</p>

<p>The next time someone says that they like CoffeeScript, or that they
don&rsquo;t like Promises, or whatever other arbitrary preference you
believe is &ldquo;wrong&rdquo;, instead of picking a fight with them, just be
thankful that they&rsquo;re not the boss of you, and that you can like
different things, and still be friends.</p>
