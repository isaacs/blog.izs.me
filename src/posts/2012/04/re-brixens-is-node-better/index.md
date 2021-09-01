---
layout: layouts/post.njk
date: 2012-04-09T17:27:00.000Z
redirect_from:
  - /post/20786279320/re-brixens-is-node-better/
  - /post/20786279320/
  - /post/20786279320/re-brixens-is-node-better
  - /post/20786279320
slug: re-brixens-is-node-better
title: 'Re: @brixen’s "Is Node Better"'
tumblrid: 20786279320
type: text
---
<p><strong>Update</strong>: The talk is online at <a href="http://blip.tv/jsconf/jsconf2012-brian-ford-6091521">http://blip.tv/jsconf/jsconf2012-brian-ford-6091521</a>.  If you weren&rsquo;t there, you should go watch it before reading this.</p>

<hr><p>As usual, this year&rsquo;s JSConf did not fail to deliver.  The parties, the
location, the talks, the food, it was incredible.  Chris Williams (and
the rest of the JSConf family) really put together an incredible event.</p>

<p>By far, the most controversial talk was <a href="http://brixen.io/">Brian
Ford&rsquo;s</a> &ldquo;Is Node.js
Better&rdquo;.  I must admit, I walked in skeptical.  Brian Ford seems like a
bright and reasonable guy, but is clearly not a noder.</p>

<p>I&rsquo;m not going to transcribe what he said.  If you want that, read <a href="http://speakerdeck.com/u/brixen/p/is-nodejs-better">his
slides</a> and watch
the video when it comes out.  This is my reaction and response, and says
more about me than it does about Brian.</p>

<p>This is based mostly on my meat-brain memory, and some notes that
I scribbled.  It&rsquo;s quite
possible that I may get some of the particulars wrong.  However, rather
than wait for the video to come out, I&rsquo;d like to write this now, since
the errors in perception are themselves useful information.  If you
notice any such error, please let me know.</p>

<p>Of course, there are limits to how deep a speaker can go into a topic in
a 30 minute talk, and those limits are much shallower than how deep I
can go in this blog post.  So, I&rsquo;d like to frame this response not so
much as me-vs-Brian, but rather as just another public part of a longer
multi-format conversation.  My goal is not to produce more controversy
than is useful, but to perhaps produce enough to keep things interesting.</p>

<p>Fair warning, this is a much longer post than most things I write.  If
you&rsquo;re reading it, you&rsquo;re probably interested mostly in the specific
node stuff at the end.  I&rsquo;ve opted not to shorten it too drastically, because
the topics are in my opinion best served by a thorough exploration.</p>

<h2>[citation needed]</h2>

<p>A lot of what I&rsquo;m talking about is discussed in much more rigor
elsewhere.  This blog post is a synthesis, not a research paper.  In
addition to <a href="http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637">Thinking Fast and
Slow</a>
which Brian mentioned, these are about the most
approachable and informative discussions of the subjects that I&rsquo;ve
found:</p>

<ul><li><a href="http://www.amazon.com/Influence-Science-Practice-ePub-ebook/dp/B001CDZYVE">Influence</a></li>
<li><a href="http://www.amazon.com/Predictably-Irrational-Revised-Expanded-ebook/dp/B002C949KE">Predictably
Irrational</a></li>
<li><a href="http://lesswrong.com/lw/xy/the_fun_theory_sequence/">Less Wrong: Fun Theory</a></li>
<li><a href="http://wiki.lesswrong.com/wiki/How_To_Actually_Change_Your_Mind">Less Wrong: How to Actually Change Your
Mind</a></li>
</ul><h2>The Right</h2>

<p>Brian started his talk with a very insightful exploration of the nature
of controversy.  He talked about our fast brain and slow brain, and
guaranteed that reading <a href="http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637">Thinking Fast and
Slow</a>
would change your life for the better, or he&rsquo;d refund the cost of the book.</p>

<p>In discussing the title of the talk, he made the point that every value
judgement implies a comparison, and invites controversy.  If presented
with a choice of apples and oranges, and you remark that &ldquo;oranges are
healthy&rdquo;, then the implication is that apples are not (or at least
<em>less</em>) healthy.  So, the question &ldquo;Is Node.js Better&rdquo; raises the
question, &ldquo;Better than what?&rdquo;</p>

<h3>Storming Brains</h3>

<p>He went on to stress the importance of the scientific method, especially
in cases where groupthink can grab ahold of a popular intuition.  A
powerful example of this is the idea of brainstorming, which has come
under
<a href="https://en.wikipedia.org/wiki/Brain-storming#Criticism">criticism</a> in
recent studies.</p>

<p>Of course, another fascinating point worth mentioning (which was not covered
in Brian&rsquo;s talk) is that the primary
source of the criticism is a survey of the results of 22 different
studies with different methodologies, done in different environments,
on different subjects.</p>

<p>I&rsquo;m wondering what the differences are between the 4 where brainstorming
worked, and the 18 where it didn&rsquo;t.  It&rsquo;s especially worth noting that
18 instances of brainstorming&rsquo;s failure vs 4 instances where it was
successful, does not imply that brainstorming is &ldquo;usually&rdquo; less
effective: only that it&rsquo;s usually less effective in the studies
surveyed.  If you check the weather in Wisconsin 18 times in the summer,
and 4 times in the winter, you might conclude it&rsquo;s usually tropical.</p>

<p>This survey was reported several
times in the Journal of Personality and Social Psychology.  More
recently, these journal articles were summarized in the New Yorker and
other popular magazines.  To me, this smacks of &ldquo;turns out&rdquo;-ism.  It
<em>might</em> be that the popular intuition about brainstorming is wrong.  It
might also be that it&rsquo;s just incomplete.</p>

<h3>Organization</h3>

<p>Brian discussed the concept that organizations tend to perpetuate the
problems that they were designed to solve.  To my mind, this implies
that we ought not to try to solve our problems with organizations, but
rather, to solve them with chaos and disruption instead, wherever possible.
Since it is often not possible, and because &ldquo;disruption&rdquo; becomes just
another buzzword meaning a specific sort of organization, we should make
it our goal not to &ldquo;solve problems&rdquo;, but rather to find the problems
that are hidden by our current assumptions.</p>

<p>&ldquo;Solving&rdquo; a problem, then,
becomes more an exploration than a &ldquo;fix this thing&rdquo; exercise.  An
exploratory expedition stops exploring when it returns with an answer.
Similarly, organizations that are designed to solve a specific problem
(as opposed to organizations that are designed to, say, throw parties or
make buttons)
should have their own destruction built into their core constitution.</p>

<p>This principle of minimum institution has guided the choices we&rsquo;ve made
in npm and in Node.js, technologically as well as socially.
It has shaped the community in subtle ways that
are difficult to recognize from the outside.  It&rsquo;s a principle that is
close to my heart, and it&rsquo;s why Node and I have gotten along so well.</p>

<h3>Behavioral Science</h3>

<p>&ldquo;Programming is a behavioral science.&rdquo;  Couldn&rsquo;t agree more.  However,
the transition from &ldquo;behavioral science&rdquo; to concurrency as a way to deal
with scarcity of compute resources felt a bit forced to me.  From that
point of view, everything is behavioral science, because everything we
do is done out of some human need (or else we wouldn&rsquo;t do it.)</p>

<p>I think it&rsquo;s more precise to say that software development is behavioral
science, because every interface is a human interface, and humans are
even more unreasonable in their behavior than hard disk platters.</p>

<h2>The Wrong</h2>

<p>There were a few points where I believe that Brian simply was either
incorrect, misinformed, or perpetuating and reacting to
the very groupthink that he is ostensibly setting out to move past.</p>

<h3>Justifications for Using Node.js</h3>

<p>There were a few justifications for using Node that Brian listed:</p>

<ul><li>same language on the client and server</li>
<li>there are many JavaScript programmers</li>
<li>Node.js is more fun</li>
</ul><p>These are all interesting justifications, though really, the
first two are rationalizations for the third.  For a talk that started
out by diving into the science of hedonics and decision theory (albeit
a somewhat Gladwell-esque popularization of it), I was a bit disappointed to
see that he didn&rsquo;t go into more depth on this point.</p>

<p>He said that users call themselves polyglots, so he rejects the claim
that a single language is actually relevant.  This is a highly specious
rebuttal.  I can stand, but I still often find it pleasant to sit.  It
doesn&rsquo;t have to be <em>necessary</em> in order to be valid
in this case, it only needs to be <em>comfortable</em>.  If you&rsquo;ve never
worked in a single-language stack, I highly recommend it.  Even though
you can&rsquo;t share a lot of code in most situations, it does reduce the
cognitive load switching between different parts of the application.
This is the same reason that I&rsquo;ve suggested using semicolons in
JavaScript programs that include other non-ASI languages: reducing
switching cost is reducing cost.</p>

<p>Brian claimed that the &ldquo;many JavaScript programmers&rdquo; argument is
invalid, or at least, not very compelling. We ought to figure out the
ideal platform, he said, and then provide advocacy, education, and
resources to help people adopt it.  This also strikes me as a bit weird.
I&rsquo;m not claiming that one should make all their technical
decisions based solely on popularity, of course, but it certainly is not
<em>irrelevant</em>.  There&rsquo;s something to be said for pragmatism.</p>

<p>People don&rsquo;t use Node.js because it&rsquo;s the same language on the client
and server.  They use Node.js because that language is <strong>JavaScript</strong>,
and JavaScript is fun.</p>

<p>There aren&rsquo;t more JavaScript programmers because of a lack of education
or advocacy in other languages.  JavaScript is fun (and unavoidable),
and so all programmers use it.</p>

<p>&ldquo;Node.js is more fun.&rdquo;  This reminds Brian of Ruby a few years ago.
It&rsquo;s important to remember, in the context of hedonics especially, that
&ldquo;fun&rdquo; is a highly subtle term worthy of study on its own.</p>

<p>The problem with &ldquo;Justifications for doing X&rdquo; is that we do things
<em>primarily</em> because of our emotions.  Even the action of &ldquo;being rational&rdquo;
is a thing that we choose to do because of a positive feeling attached
to our self-image as a &ldquo;rational person who does smart things&rdquo;, and the
assumption that we&rsquo;ll get some pleasantly winful reward that feels good.
When we really want to do something irrational, we usually have no problem
reconciling the conflict with our preferred self-image as a rational
individual.</p>

<p>Emotions are not just <em>part</em> of motivation, they <em>are</em> motivation.  If you
want to know why a person does something, don&rsquo;t ask them to explain why
they do it; try instead to figure out how they feel.  It&rsquo;s a much more
challenging question, but it leads to much more interesting information.</p>

<h3>About the word &ldquo;hype&rdquo;</h3>

<p>When we have a good feeling about something (or even,
when we just make any choice at all, and don&rsquo;t quite understand why),
our brain begins inventing rationalizations right away.  The
first one to pattern-match against &ldquo;X because Y&rdquo; is likely
accepted as the &ldquo;reason&rdquo; we&rsquo;re doing something, regardless of how much
the truth of &ldquo;Y&rdquo; actually affects the likelihood of &ldquo;X&rdquo;.</p>

<p>Try asking a compulsive gambler why he goes to the casino.  He might
tell you about his &ldquo;strategy&rdquo; for roulette.  Of course, this is
bullshit.  Roulette is a deterministically losing game; the more you
play, the more you lose.  Same with craps, slots, and
(unless you&rsquo;re the best at the table) poker.  It&rsquo;s the
<strong>feeling</strong> of winning that he&rsquo;s chasing, and the <strong>feeling</strong> of the
chase.  If he was truly motivated by the desire for money,
there are obviously much better ways of getting it.</p>

<p>When a person shares their justifications for doing something,
one of two things typically happens, in the &ldquo;fast-brain&rdquo;:</p>

<ol><li>You feel the same way about the thing.  The justification
pattern-matches against &ldquo;I should X-that-I-do because Y&rdquo;, and so
you accept the justification as rational, wise, and well-informed.
After all, you already do it, so you must agree.</li>
<li>You feel differently about the thing.  Or, at least, it&rsquo;s not a thing
you do, and so you have invented some justifications for not doing
it.  Your brain pattern-matches against &ldquo;I should
X-that-is-stupid because of Y&rdquo;, and so you reject the justification
as irrational, foolish, and ignorant.  After all, it&rsquo;s stupid, so any
justification must be misguided.</li>
</ol><p>If you have some vegan friends, and some friends on the paleo diet, and
feel like watching some fireworks, ask them in each others company why
they eat the way that they do.  No matter how polite they try to be,
each will <em>subconsiously</em> perceive the statements of the other as an
attack, and feel the need to defend their position.  If they are wise
enough to retreat from needing to <em>convince</em> the other, they&rsquo;ll most
likely at least make a big show about &ldquo;agreeing to disagree&rdquo;.
(Of course, if they&rsquo;ve been on this diet for a while, they may have
enough practice at these sorts of situations to handle them quite
gracefully.)</p>

<p>If X is not just &ldquo;do this action&rdquo;, but rather &ldquo;feel this way&rdquo;, and you
do not already feel that way, and the justification is not enough to
incite this feeling (as justifications almost never are),
then we label it &ldquo;hype&rdquo;, and it <em>raises</em> the bar
that we now require to take the thing seriously next time.</p>

<p>Like so many cognitive
shortcuts, this is a really good move much of the time.  After all,
people&rsquo;s justifications are usually self-delusions as often as
well-informed and rational reasons for doing or thinking anything.  It
makes perfect sense to be extra skeptical when we are at the risk of
being influenced by it.  If we have to be extra skeptical over and over
again, we start to pattern match &ldquo;X is good&rdquo; into the hype category.
Suddenly, it&rsquo;s not just that veganism or paleo is not for me, it&rsquo;s that
the diet is a mark of a foolish <em>person</em>.</p>

<p><strong>The net result is that anyone saying anything positive is likely to be
labelled a &ldquo;fanboi&rdquo;, and their statement called &ldquo;hype&rdquo;, no matter what
they say.</strong>  This is a dangerous feedback loop that leads technology
communities to stagnation, bitterness, and chest-beating.</p>

<h3>Yo Dawg! I heard you like cognitive distortions, so I distorted your cognition so you can distort while you cognit!</h3>

<p>The mind is such a wonderful thing!  Mistakes in the mistake
detection lead to potentially valid statements being
discounted because they are presented <em>along with</em> invalid justifications,
or presented <em>by</em> a low-status speaker, or are <em>in conflict with</em>
already-held beliefs, <em>especially</em> when those already-held beliefs are a
part of our Tribal Story.</p>

<p>Even worse, you have situations where we see a few &ldquo;X is good because Y&rdquo;
justifications, deem them false, and then subconsciously
internalize the fact that we
gain status in our tribe by applying the &ldquo;hype&rdquo; label and
discounting it, resulting in spiraling down into the toilet.
Politicians and marketers have made a science of getting us to elevate
arbitrary ideas into this Tribal Story, blinding us to any disagreement.</p>

<p>Birds fly.  Fish swim.  Humans make mistakes.  It is our Super Power.
We all do this.</p>

<p>We almost never change our minds.  We are influenced in ways we are
incapable of detecting (and will deny!)  We are motivated by the behavior
of people who look like us superficially, and believe (at least temporarily)
literally everything we hear.</p>

<p>There is virtually no limit to the ability
of the human mind to find new and creative ways to get out of touch with
reality.  I don&rsquo;t want to give the impression that I (or anyone) could
delineate all the many subtleties of human cognitive error.  Every one
is so rich and complicated.  Even this discussion of
pattern-matching &ldquo;X-because-Y&rdquo; is a serious oversimplification.</p>

<p>In the ancestral environment of adaptation, disagreement was often
fatal.  We&rsquo;ve gotten a bit better at intelligent disagreement, but we
still try unconsciously to come to an all-or-nothing agreement within
our own heads, annihilating any &ldquo;bad&rdquo; idea entirely, and shrowding any
&ldquo;good&rdquo; idea in a halo.</p>

<p>Whenever tempted to call something &ldquo;hype&rdquo; (or, even, &ldquo;anti-hype&rdquo;),
I try to remember to ask the following questions:</p>

<ol><li>Is the provided justification <em>evidence</em>, <em>data</em>, or an expression of
a <em>feeling</em>?  What is the speaker&rsquo;s experience of the thing being
discussed?  If it&rsquo;s evidence, is it reproducible?  If it&rsquo;s data, is
it relevant?</li>
<li>How do I feel about the subject?  How did I feel about it
yesterday?  What are my justifications?</li>
<li>Am I tempted to dismiss this?  Is it because of bad evidence,
a speaker who holds low status in my tribe,
or because I disagree with the feeling?  If it&rsquo;s a lack of evidence,
what evidence <em>would</em> make me feel the same way?  If it&rsquo;s a feeling I
don&rsquo;t share, what other things <em>do</em> I feel that way about?  If it&rsquo;s a
low-status speaker, how would I feel if <code>&lt;person I respect&gt;</code>
was saying it?</li>
<li>Am I tempted to accept this?  Is it because it agrees with something
I already think?  What new information does it actually contain?</li>
</ol><p>This is part of the reason why I try to criticise Node.js
and npm as harshly and often and publicly as I can.  I do think that
they&rsquo;re tremendously useful tools&hellip; but how can you believe me if I
tell you that they&rsquo;re perfect, when I clearly know better?  And if you
can&rsquo;t believe me when I talk about Node.js, then what good am I?</p>

<h3>Better justifications to use Node.js</h3>

<ol><li>The IO paradigm is a good fit for your problem, and V8 is fast enough.
This is the case for a lot of web software, but definitely
not every program.  Node.js really does make
it pretty easy to write things like IRC bots and crawlers and
websites, and is probably not ideal for many compute-intensive
applications.</li>
<li>It&rsquo;s fun to write programs in this fashion.  There are time-honored
traditions of thinking of data as streams of bytes, and JavaScript is
a relatively simple and expressive language for doing this in
creative ways.</li>
<li>It&rsquo;s fun to be a part of making a popular platform better.  The
community is active and still pretty friendly, and that feels good to
be a part of.  Newcomers turn into regulars and then celebrities very
swiftly.  All it takes is a bit of persistence and enthusiasm.</li>
<li>You prefer the simpler approach to asynchronous programming, using a
callback/observer model (or actor model for child processes), rather
than something like green threads or coroutines that &ldquo;look&rdquo; synchronous.</li>
</ol><p>If you&rsquo;re not writing systems that are well served by nonblocking IO, or
an event loop/observer pattern approach, or if you don&rsquo;t think it&rsquo;s fun
to make programs this way, then you probably shouldn&rsquo;t use it.</p>

<p>But, even that aversion is worth looking carefully at that, no matter what
you decide.  V8 is an extremely fast virtual machine, and
these days, a <em>lot</em> of programs are IO-bound.</p>

<p>And even if it&rsquo;s not, we tend to focus on &ldquo;the right tool for the job&rdquo;,
at the exclusion of &ldquo;an awesome tool for the job&rdquo;.  The opposite of
&ldquo;right&rdquo; is &ldquo;wrong&rdquo;, but the opposite of &ldquo;awesome&rdquo; is &ldquo;boring&rdquo;, which is
sometimes worse, especially if you&rsquo;re trying to maximize creativity.</p>

<p>I&rsquo;m not sure how much research Brian did when he went out looking for
justifications for using Node.js, but I don&rsquo;t think he really got at
what actually is driving so many people interested in this thing.</p>

<h2>Controversy</h2>

<p>So far, I felt like the setup was nice, but the criticism itself was
kind of lackluster.  We&rsquo;ve heard it before.  Node is hyped.  The
single-language stack isn&rsquo;t all it&rsquo;s cracked up to be.  Etc.  I was
eager for the meat.</p>

<p>No sooner had I thought this, than the next slide said:</p>

<h3>Node.js rejects reality</h3>

<p>Aha!  There it is.  That primal &ldquo;under attack&rdquo; feeling, the visceral
tension in my lower abdomen, the warmth on my face.</p>

<p>When I was younger (and still today when I&rsquo;m not at my best, I must
admit) the temptation was to hit back, or dismiss the message.  Fight or
flight.  I think Brian probably
lost a bunch of the audience with this slide.  It sure did get my attention.</p>

<p>These days, when I feel that reaction, I try to leverage the added
awareness that comes with the adrenaline, to be on the lookout for
whatever comes next, because it is full of valuable information,
especially if it is highly disagreeable.  Beware of the moments
when rationality tries to slip away: those are the times you most need
it.</p>

<p>As I am somewhat dogmatic about endeavoring to
reject reality less, I was very excited to hear what we might be
missing.</p>

<p>Sadly, the justification for the &ldquo;ignores reality&rdquo; claim was not as
pointed as I would have liked.  It amounted to:</p>

<ol><li>JavaScript is a garbage collected language.  Garbage collection
pretends that you have infinite memory, and you don&rsquo;t.</li>
<li>IO always &ldquo;actually&rdquo; blocks somewhere, so the comparison between
events and blocking is not valid, since it has to block somewhere.</li>
</ol><p>For sure, garbage collection is tricky, and the interaction between
Node.js and the V8 garbage collector could probably be improved.  But to
call it a lie is a bit silly.  Garbage collection doesn&rsquo;t pretend that
you have infinite memory; that&rsquo;s virtual memory.  Garbage collection
pretends that you don&rsquo;t have to <code>free</code> memory in order for it to be
re-used.</p>

<p>One of the biggest pain
points of non-managed languages is having to explicitly free memory.
The biggest pain point in managed languages is having to deal with a
garbage collector.  There may be some sort of approach to memory
management that isn&rsquo;t collected or manual, but better than either.  If
so, I don&rsquo;t know of it, and it doesn&rsquo;t matter anyway, because <strong>that is
a language design problem, and Node.js is not about designing a
language</strong>.  If you have a beef with garbage collection, take it up with
V8 and TC-39.</p>

<p>As for node being single-threaded, and IO always blocking, that&rsquo;s kind
of confusing to me.  Of course, you don&rsquo;t
actually have application-level <em>processing</em> of IO in parallel,
since there&rsquo;s only a single <em>JavaScript</em> thread, but IO definitely is
performed in parallel to the degree that the machine can provide,
and &ldquo;nonblocking&rdquo; is the technical term for the
type of IO that node does on sockets.  (Nonblocking IO on files is
simulated using threads.)</p>

<p>I&rsquo;d really like more details about what exactly Brian
was referring to on this point about IO &ldquo;always blocking somewhere&rdquo; and
in what way Node.js rejects that reality.</p>

<h3>entire ecosystem of tools and libraries must be built</h3>

<p>This was a valid concern in 2010.  I said at the time that it
would not be an issue in a few years.  It&rsquo;s not an issue today.</p>

<p>To an extent, this was by design.  A large part of
Ryan&rsquo;s reason for choosing
JavaScript was that it is the only popular interpreted language with a
suitably powerful VM and no existing IO paradigm.  Additionally,
to the extent that JavaScript <em>does</em> have a tradition of IO, it&rsquo;s
XHR and the DOM, which are event-based and asynchronous.</p>

<p>Since the birth of Node.js, a lot of libraries have been built.  There
are 8500 modules on
npm.  There are bindings to every popular database, sophisticated test
frameworks, template libraries, HTTP routers, and so on.  It&rsquo;s easy and
fun to write modules, and so people have written modules.  This approach
is remarkably valuable.</p>

<p>That being said, module discovery and visibility leaves a lot to be
desired.  npm has grown much faster than Rubyforge or PyPI, much earlier
in the life of Node, and so we have hit these problems earlier.</p>

<p>Regarding tools, things are coming along quite nicely.</p>

<p>Post-mortem debugging with MDB
just landed in the master branch, and will be in node 0.7.8.  (Node v0.6
has had this for a while already.)  Mad props to Dave Pacheco for that.
Seriously, if you&rsquo;ve never seen it in action, it&rsquo;s amazing.  In all my
years using PHP, I can&rsquo;t even count the number of times I&rsquo;d desparately
wanted this sort of thing.  The zend IDE had some pretty good debugging
capabilities, but Dap&rsquo;s jsstack stuff is truly magical.  Call me a
fanboi, I don&rsquo;t care: believe the hype.  It&rsquo;s fantastic.
The only sad
point is that it&rsquo;s only available in SmartOS, but it&rsquo;s not exactly
surprising that the OS made by Joyent has some special love for Node.js
;)</p>

<p>The DTrace support in Node is also impressive.  Again, not
surprising, given the fact that so many DTrace heavyweights work at
Joyent, but the go-to DTrace library for node is not written by a Joyent
employee.  It&rsquo;s Chris Andrews&rsquo;
<a href="https://github.com/chrisa/node-dtrace-provider">node-dtrace-provider</a>
module.  Anarchy &gt; curation, yet again.</p>

<p>The depth and breadth of information that can be provided by
DTrace, and the great work by Brendan Gregg and others at Joyent to
actually massage that data into a format that humans can easily consume,
is absolutely phenomenal.</p>

<p>Similar work on run-time analytics and post-mortem debugging is underway
at Microsoft, I&rsquo;m told.  Windows users: stay tuned.</p>

<p>As a long-time text-editor-and-shell guy
(moved from TextMate to vim a while ago), I don&rsquo;t really
follow the IDE stuff too closely.  But, Microsoft,
Cloud9, and many others are iterating furiously in this space.
Many of them are leveraging their existing work on other JavaScript
tooling, so it&rsquo;s moving quite fast.</p>

<p>The built-in node debugger client is more my style, but node-inspector
hooks into the Chrome debug tools, which imo blow away most visual
debuggers available.  (They even have heap analysis tools!)  There are
also plugins for Eclipse to provide stepwise debugging and analysis, and
a lot of existing Eclipse users are more at home there.</p>

<p>So, it&rsquo;s not so much that the ecosystem of tools &ldquo;must
be built&rdquo;, as much as that it is being built, and leverages the existing
JavaScript, V8, and system tools that already existed before Node showed
up.  In many ways, Node.js provides one of the first server-side systems
that can fully take advantage of these things in a mostly cross-platform
fashion.</p>

<h3>Node.js will reproduce the last 15 years of ruby mistakes</h3>

<p>Bold claim.  One that I was excited to see ample justification for.  What
are the last 15 years of Ruby mistakes?
How can we avoid making those
same mistakes?  How did ruby fix them?  What can we learn from ruby&rsquo;s
experience?</p>

<p>Brian&rsquo;s main justification of this point was that the
cluster module is a repeat of Phusion Passenger.</p>

<p>It&rsquo;s not entirely
clear whether he was referring to TJ&rsquo;s &ldquo;cluster&rdquo; package, or the
built-in &ldquo;cluster&rdquo; module in v0.6, or the much improved &ldquo;cluster&rdquo;
module in node v0.7.  None of them are a particularly close reproduction
of passenger, though I suppose that TJ&rsquo;s is probably the closest.  But
it&rsquo;s not as if any of these are an Apache plugin, or tied to a specific
web framework.  The analogy is a stretch, to say the least.</p>

<p>What&rsquo;s even less clear is how Phusion Passenger, a program written in
2009, and widely recognized as the most effective and popular way to
deploy the most effective and popular Ruby application framework, can
possibly represent a &ldquo;mistake&rdquo;, let alone 15 years of mistakes.</p>

<p>I can only conclude that I do not understand what he was trying to say,
because otherwise, I cannot make sense of it.
Maybe there was something else called &ldquo;passenger&rdquo; in the Ruby world once
upon a time, which did kernel load balancing, IPC, and not much else.
Perhaps this &ldquo;passenger&rdquo; was deemed a mistake, and is now gone.</p>

<p>Show me a ruby mistake we&rsquo;re reproducing, and I&rsquo;ll make sure it gets
fixed.</p>

<h3>process concurrency is doomed</h3>

<p>Brian declared that process concurrency will never be able to scale
adequately.  I cannot accept this without data.  Instead of data, he
gave some hand-wavey assertions about garbage collection getting out of
control.</p>

<p>I&rsquo;ll assume that he was running low on time, and perhaps had to cut out
the histograms and demonstrations.  So let&rsquo;s leave that question open.</p>

<p>Of course, spawning one process per request, or one process per IO
or timer, is completely unreasonable.
That&rsquo;s why CGI was not adequate, and no one runs a real web platform
on bash.  However, running a single process
per core, and having multiple HTTP servers share the open socket,
and then using an event loop for IO and timers, is remarkably effective.</p>

<p>If there is doom on the horizon, don&rsquo;t hint about it.  Show me the
evidence.</p>

<h3>symmetric errors, chain of evidence</h3>

<p>Finally!  Something that <em>genuinely sucks a <strong>lot</strong> in Node.js!</em></p>

<p>Domains is on the list for v0.8.  I don&rsquo;t know that the first pass at
domains will be the final and ultimate fix for this, but it&rsquo;ll be
something to iterate on.  This will make errors much more symmetric, and
provide a much clearer chain of evidence.</p>

<p>The chain of evidence is also much improved by having post-mortem
debugging of production systems.  If you haven&rsquo;t yet, check out Bryan
Cantrill&rsquo;s talk <a href="http://www.infoq.com/presentations/Debugging-Production-Systems">And It All Went Horribly
Wrong</a>.</p>

<p>So, this is important to me, it&rsquo;s important to Node.js users, it&rsquo;s
important to the various companies paying the salaries of the node core
team.  It&rsquo;s reasonable to trust it&rsquo;s high priority.</p>

<h2>Problems I Wish He&rsquo;d Mentioned</h2>

<p>If you want to know what&rsquo;s wrong with node, ask a node-core developer.</p>

<p>These are some of the things that are really problematic, some of them
in a pretty deep way.  Of course, these are the things I know about,
so they&rsquo;re things that we&rsquo;re working on for future releases of Node.js.
If there are things that you think belong on this list, let us know.</p>

<p>Some of them are very hard,
and will require iteration.  Some of them are pretty straightforward,
and will be addressed soon.  Some of them are not super difficult, but
just lower priority, and won&rsquo;t get addressed for a while.</p>

<ol><li>Debugging.
See above.  It&rsquo;s our top issue, and it&rsquo;s coming along.  It was
mentioned, but less strongly than I would have liked to see.</li>
<li>It is very hard to get visibility into which pending actions are
keeping the event loop running.  This is a source of subtle errors.
The libuv refcount behavior is in the process of being cleaned up,
and v0.8 will include a mechanism for seeing exactly which handles
are in an open state.</li>
<li>The Stream API, which is by all accounts the core use-case for node,
is remarkably inconsistent and hard to extend.  It&rsquo;s a lot nicer in
v0.4 and v0.6 than it was in v0.2 and before, but it&rsquo;s got a ways to
go yet.  We paper over a lot of the inconsistency in the
Stream.pipe() method, but it&rsquo;s a source of many subtle issues.  Node
v0.9 will focus primarily on this issue.</li>
<li>It&rsquo;s hard to find good node modules.  Reducing the barrier to entry
for node package creation has made it a lot easier for more people to
take advantage of.  However, when you solve a problem, you open the
door for new ones that were hiding behind it.  We&rsquo;ve grown faster
than most platforms, which means that we&rsquo;re encountering the
discovery issues sooner.  This will be addressed in the coming months
with a new npmjs.org website.</li>
<li>The Node.js project lacks a consistent and visible continuous
integration system, so performance degradations can occur silently.</li>
<li>Using binary modules is overly difficult, and requires a build
toolchain on the install target.  Work is underway to improve this,
but it&rsquo;s tricky.</li>
</ol><p>And of course, just the fact that Node.js is very young, and has some
bugs.  It&rsquo;ll no doubt get more, as we continue to work on it, but the
goal is to change things in ways that make these bugs easier to spot and
easier to fix.</p>

<p>It is not sufficient for Node.js to be better than any other platform.
It must be so good that it permanently raises expectations in this
space.  It must continue to impress and delight users.  There is so much
work yet to do, it&rsquo;s mind boggling.</p>

<p>Laurels are not very comfortable to rest on.</p>

<h2>And finally&hellip;</h2>

<p>If you&rsquo;ve gotten this far, congratulations.  I try to keep blog posts
much shorter than this, but there was a lot to respond to here, and
touched on several issues that are very close to my interests.</p>

<p>Brian&rsquo;s talk was fascinating.  Even the mistakes were
interesting.  When the video comes out, I highly recommend watching it.
Go get <a href="http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637/">Thinking, Fast and
Slow</a>.
I haven&rsquo;t read it, but I&rsquo;m familiar with some of
Kahneman&rsquo;s other work in behavioral economics, and I suspect it&rsquo;s
every bit as fantastic as Brian claims.</p>

<p>I got a chance to talk to Brian after the talk, and so hopefully a lot
of these points (at least, the specific technical details of what sucks
in Node.js and what we&rsquo;re doing about it) doesn&rsquo;t come as a surprise to
him.  He seems like a genuinely nice and thoughtful person.</p>

<p>For a talk that started off with a request that we use science and
make conflict useful, I was disappointed that his criticisms of Node
were lacking in scientific rigor or constructive calls to action.  But
as I mentioned earlier, it&rsquo;s hard to fit it all into a 30 minute talk.
I hope this conversation will not end here.</p>

<p>We&rsquo;re all humans.  We all think wrong.  We all love, and worry, and try
to do interesting things.  We all fail, and feel shitty, and try
to explain why we&rsquo;re not a bad person for it.  We
all succeed, and want to brag about it.  We tell ourselves stories, and
sometimes those stories are true, but usually they&rsquo;re only just true enough
to get by.</p>

<p>Try to remember this, the next time you&rsquo;re telling someone how awesome
(or over-hyped)
Node.js is, or any other thing you have feelings about,
and they suggest that you may be a brainwashed idiot.  They are
just trying to protect something, as are you, and in the course of this
protection, our instincts will cause us to fail.</p>

<p>Show that monkey brain who&rsquo;s boss!
Slow down, breathe, and try to remember that this person
who disagrees with you is not some big dumb idiot, but most likely a very
thoughtful person who&rsquo;s trying to do their best to create truth and beauty
in the world.  If you don&rsquo;t learn what motivates them, how can you ever
join forces?</p>

<div class="small">Many thanks to Mikeal Rogers, Bryan Cantrill, Marco Rogers for reading early drafts of this post and providing feedback.</div>
