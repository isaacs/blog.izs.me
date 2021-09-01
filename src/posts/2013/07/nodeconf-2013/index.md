---
layout: layouts/post.njk
date: 2013-07-06T18:19:55.000Z
redirect_from:
  - /post/54766250297/nodeconf-2013/
  - /post/54766250297/
  - /post/54766250297/nodeconf-2013
  - /post/54766250297
slug: nodeconf-2013
title: NodeConf 2013
tumblrid: 54766250297
type: text
---
<p>For the last 4 years, NodeConf has been a groundbreaking and
innovative community conference unlike any other.  I&rsquo;ve been
impressed and honored to be a part of it every time.</p>

<p>One of Mikeal&rsquo;s goals with running conferences, and his approach to
open source in general, is to make the entire community more
egalitarian and welcoming.  That&rsquo;s why there&rsquo;s always been an “opening
party” rather than a “speakers dinner”; <em>all</em> the attendees hang out
together, there is no “speakers lounge”.  Yes, there are celebrities
in any community, the visible people who are highly engaged with the
core technology and help keep the wheels turning.  But the entire
community feels unwelcoming and strange when those people are treated
as a separate class of untouchables.  We&rsquo;re all just humans.</p>

<p>Nowhere is this more apparent than at Walker Creek Ranch.  This was my
third time at the place in as many years.  The last two years,
Mikeal&rsquo;s arranged a NodeConf Summer Camp there, which was like a
scaled down unconference-style meeting of people who came and
discussed where the core of Node would go next.  Without much of an
agenda, it was very free-form, and the comfortable setting allowed for
some intense debates about stuff ranging from putting zlib in core, to
domains, to the needs of our Stream interface, and so on.</p>

<p>Walker Creek Range is magical.  In the woods, we&rsquo;re all animals.
We&rsquo;re all of the same tribe, all on the same team.  When you jump in a
lake with someone, or sit under a tree, or make smores by a campfire,
you are bonded in a way that email and IRC can never achieve.  There
are no podiums or stages.  You don&rsquo;t need to save your seat or worry
about someone running off with your bag (where would they go?)</p>

<p>When Mikeal said he was going to just do a single conference this
year, instead of a traditional NodeConf and then a separate NodeConf
Summer Camp, and that it&rsquo;d be at Walker Creek Ranch, I told him it was
a great idea.  When he told me that I&rsquo;d have to teach the same class 8
times, I winced.  I told him, “Sure.  I&rsquo;ll do that.  I don&rsquo;t think
you&rsquo;ll find 7 other people who will, though.”  That is because I can be cynical.</p>

<p>Time and again, this community surprises me, and Mikeal surprises me.
Not only did he find plenty of people to staff all the 8 sessions, he
somehow managed to trick everyone into actually attending every
session, even though I&rsquo;m sure many of them came in thinking that most
of these sessions would be way over their heads.</p>

<p>So, enough gushing.  Here&rsquo;s what was in the How To Node Core session
that I led with Bert Belder, who was a tremendous help.</p>

<h2>How To Node Core</h2>

<p>As people walked in, it&rsquo;s important to remember that they usually had
no idea what session &ldquo;6&rdquo; was going to be.  Also, because the schedules
were randomized, they weren&rsquo;t seeing the same people that they&rsquo;d met
in their previous sessions.  Strangers!  Surprises!  Oh no!</p>

<p>When they saw me and Bert in there, and the first slide up on the
projector, a few people took a noticeable gulp, like they accidentally
signed up for Calc 3, but should have been in Algebra 1.  <strong>This is
exactly the reaction that we were hoping for.</strong>  The <em>point</em> of
NodeConf this year, the goal, was to expose people, in an accessible
hands-on way, to something that they never would have thought that
they could do.</p>

<p>(Of course, a few people saw which session it was, and were not
fazed, since a bunch of people at the conference had already landed
pull requests before.)</p>

<p>Here are the slides:</p>

<div><iframe src="https://www.slideshare.net/slideshow/embed_code/23878251" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid
#CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe> </div>

<p>The first thing we did was make sure that everyone had the Node.js
source code checked out, and could build it.  Typically there were 3
or 4 people who needed help getting to this step, and Bert would run
around for the first few minutes with USB sticks getting people up and
running.</p>

<p>A few people noticed the &ldquo;nodeconf2013&rdquo; branch in the github repo
already, so they had all the examples and source code already written.</p>

<p>When I got to the &ldquo;example&rdquo; portions in the slides, I&rsquo;d stop and do
the Substack-style <code>vim *.*</code> and then use <code>:next</code> and <code>:prev</code> to move
between files.</p>

<p>The first example was <a href="https://gist.github.com/isaacs/5938171">this</a>.</p>

<p>The second was <a href="https://gist.github.com/isaacs/5938207">this</a>.  For
many people at the conference, this was their first ever experience
editing a C++ file, and compiling the program with their changes.</p>

<p>And <a href="https://gist.github.com/isaacs/5938185">here</a> are the diffs for
the exercise.  Not everyone finished it, and many probably implemented
it somewhat differently, but the exploration was the point of the
work, not the destination.</p>

<h2>Takeaways</h2>

<p>The results were very encouraging.  A lot of people mentioned that
they&rsquo;d alwasy felt like Node Core is this really intimidating thing,
and never even bothered to look under the hood to see how it was all
wired together.  They were genuinely surprised to find out that Node&rsquo;s
internal modules are very much like a plain old Node program, with
<code>require()</code> and everything.</p>

<p>Also, ironically, I found that when I went <em>faster</em>, there were
<em>fewer</em> people who fell behind.  I don&rsquo;t know if the energy of the
speaker makes them feel more motivated, or if the fear of being left
behind makes them pay more attention, or what.  But when I slowed down
to let people catch up, they fell behind worse, which surprised me.</p>

<p>If you ever want to run an event like this, the value of having another set of hands there really cannot be overstated.  Without Bert running around to keep people following along, it never would have went as smoothly as it did.  I did most of the talking, but he was absolutely essential.</p>

<p>All in all, I think we had a big effect on many peoples&rsquo; level of
intimidation about contributing to Node core.  The first step is to
realize that you can do it, so it&rsquo;s worth trying.</p>
