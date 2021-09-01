---
layout: layouts/post.njk
date: 2007-06-03T03:27:04.000Z
redirect_from:
  - /post/146671374/the-most-important-things-they-dont-teach-in/
  - /post/146671374/
  - /post/146671374/the-most-important-things-they-dont-teach-in
  - /post/146671374
slug: the-most-important-things-they-dont-teach-in
tags:
  - code beauty
  - code ecosystems
title: >-
  The Most Important Things They Don’t Teach in CompSci 101 (but should):
  Maintainability
tumblrid: 146671374
type: text
---
<p>I stumbled across a <a href="http://www.ibm.com/developerworks/linux/library/l-clear-code/?ca=dgr-FClnxw01linuxcodetips">great article about clean code</a> from Jeff Vogel over at the IBM Developerworks blog site, via a <a href="http://developers.slashdot.org/article.pl?sid=07/05/30/1813247&amp;from=rss">/. article</a>.  Even more valuable was the <a href="http://www.freevbcode.com/ShowCode.Asp?ID=2547">How to write unmaintainable code</a> article, which appears to have grown considerably since I first saw a version of it back in college.</p>

<p>A simple <a href="http://www.google.com/search?q=maintainable+code">web search</a> can uncover a lot of articles about writing maintainable code.  There have been <a href="http://www.amazon.com/s/ref=nb_ss_gw/102-4912607-6304117?url=search-alias%3Daps&amp;field-keywords=maintainable+code&amp;tag=isaacschlcom-20">several books written on the subject</a>.  And yet, I consistently find that code examples and tutorials, not to mention programming text books, very often break all or most of these rules.</p>

<p>To a certain degree, what makes code &ldquo;maintainable&rdquo; is a matter of opinion.  However, it is pretty universally accepted that the vast majority of programmer-hours are spent debugging, fixing, and extending existing code.  It&rsquo;s very rare, even when working on an entirely new project, that you open up a blank file in your text editor and start coding.  After the first few hours of the first day of a project, you&rsquo;re working in an existing code ecosystem.  Is it a crazy jungle with vines and savage beasts?  Or a well-lit sidewalk with friendly pedestrians?</p>

<p>I think these assumptions are pretty safe to make for any programmer in any language:</p>

<ol><li>At least 80% of a programmer&rsquo;s time is spent working with an existing code base (possibly one they just created).</li>
    <li>Debugging code is more difficult than writing it. (Or, problems are harder to fix than to create.)</li>
    <li>Extending code (adding features) is the riskiest thing that you can do (bug-wise.)</li>
</ol><p>Nevertheless, no matter what code you&rsquo;re working on, every programmer faces these demands:</p>

<ol><li>Management allocates more time for development than for maintenance. (Usually <strong>after</strong> asking us for insight!)</li>
    <li>Maintenance is sloughed off onto the least experienced developer in the team.</li>
    <li>The existing feature set is looked at as a &ldquo;base,&rdquo; and new features are requested constantly.</li>
</ol><p>It is thus impossible to overestimate the importance of writing code that is as easy as possible to fix, extend, and reconfigure, even if the person doing the fixing or extending has never seen the code before.  (Or, as is perhaps more common, was the code&rsquo;s original author, but has forgotten what they were originally thinking when they wrote it.)  If you are a programmer or manager of programmers, look at it this way: at least 80% of your development budget depends on the maintainability of the code that you and your team produce.  The techniques that create maintainable code are mostly free, but not using them costs you big time.</p>

<p>As a web developer, I tend to have a somewhat extended view of product lifetimes.  There is still code on the internet from 1993, and that was back when we didn&rsquo;t know what we were doing.  Now that we&rsquo;ve got all this experience, we should expect that the code we write will be around even longer.  The programmer who gets to maintain your code might not have been born yet.  Be kind to that poor soul.</p>

<p>These are the tips that I think are the most important contributors to writing maintainable code.  It&rsquo;s a matter of opinion, to a certain extent, and there&rsquo;s plenty of disagreement, so take this for what it&rsquo;s worth.  Feedback is, of course, always welcome.</p>

<!--more-->

<h3>1. Don&rsquo;t be clever</h3>

<p>We already know you&rsquo;re smart; prove it by writing code that monkeys can understand.  Programming should be approached like a haiku, not a riddle.  Make it simple, and don&rsquo;t make me have to think hard when I come by years later to fix or change or add something.</p>

<p><a href="http://en.wikiquote.org/wiki/Brian_W._Kernighan">Brian W. Kernighan</a> famously said, &ldquo;<q>Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.</q>&rdquo;  Try to find the balance between hard-coded and over-engineered.</p>

<h3>2. Think clearly.</h3>

<p>You can&rsquo;t teach someone to think in an organized fashion.  The best that you can do is find someone who does this already and convince them that they should do it when they write code.  Create objects that make sense for the task at hand.</p>

<p>That makes it easy to:</p>

<h3>3. Let the code describe itself</h3>

<p>Comment your code, yes, yes, you hear it all the time. But don&rsquo;t write comments that say <em>how</em> something is done.  Write comments that say <em>why</em>, and let the code speak for itself.  The only thing worse than this:</p>

<p><code class="block">// increment i by 1
i += 1;</code></p>

<p>is this:</p>

<p><code class="block">// increment i by 1
i += 2;</code></p>

<p>When you write comments that describe how instead of describing why, over time you inevitably end up with comments that lie, because code is much more likely to change than comments.  Let the code say what it does.  You just have to say why it does what it does.</p>

<h3>4. Hungarian notation is eviler than eval</h3>

<p>I sometimes think that Hungarian Notation was surely developed by some kind of mad scientist with an extreme hatred of maintenance programmers*.  It&rsquo;s almost never consistent, it&rsquo;s hard to read, and it puts information where it doesn&rsquo;t belong.  It is a profoundly flagrant violation of the rule that comments should say why and not what.</p>

<p>Consider the basic case of &ldquo;iCnt&rdquo; for an integer counter, or &lsquo;sType&rsquo; as a string, or 'oElement&rsquo; as an object.  If your code is so convoluted that a maintenance programmer doesn&rsquo;t know that your counter is an integer, or that the element reference is an object, or that &ldquo;type&rdquo; is a string, well, there&rsquo;s something deeply wrong with either your code or your hiring process.</p>

<p>Avoid Hungarian notation like the plague.</p>

<p><small>* This is a joke.  I&rsquo;m sure it was actually developed by very well-meaning programmers who were honestly trying to address this problem.  Nonetheless, it&rsquo;s a very bad solution that tends to compound the problem significantly.</small></p>

<h3>5. Small pieces, loosely coupled</h3>

<p>A lot of maintenance checklists and lint programs instruct at the expression or syntax level.  However, arguably the most important key to creating maintainable code is to build small pieces that interact with one another in loosely coupled ways.  This minimizes dependencies, reduces the amount of code that you have to write and maintain, and makes extension and re-use much simpler.</p>

<p>Less code is almost always better.  Instead of having 1 object that implements 10 features, it&rsquo;s often better to have 10 small objects that implement one feature each, and just listen for and respond to the events that they need.  Using a <a href="http://developer.yahoo.com/yui/event/#customevent">good event utility</a>, this is an extremely powerful pattern for user interface code, especially.  Widget-A just listens to an event from widget-B; when that event fires, it does its thing.  If the event never fires, then widget-A never gets activated.  This means that you can remove or change widget-B without fearing that you&rsquo;re going to cause massive regressions.</p>

<p><a href="http://codinghorror.com">Coding Horror</a> is one of my daily reads.  If you don&rsquo;t read it, you should.  Jeff Atwood put it quite well when he exhorted developers to <a href="http://www.codinghorror.com/blog/archives/000791.html">Code Smaller</a>.  They he later <a href="http://www.codinghorror.com/blog/archives/000878.html">wrote that the best code is no code at all</a>.  I couldn&rsquo;t agree more.</p>

<h3>6. Use OO (and other patterns) Wisely</h3>

<p>Object Oriented programming <em>can</em> help you follow these rules.  But, not everything <em>has</em> to inherit from something else.  There is such a thing as over-engineering.  &ldquo;Silver bullets&rdquo; approaches are common causes of this problem.</p>

<p>Use an Object Oriented approach that makes sense.  Most of the time, in my experience, inheritance is not the best approach, unless you&rsquo;re going to have a lot of types of things, where the types have a lot in common.  This means that you&rsquo;re dealing with a huge number of objects, which is not the case in most applications.  Again, <em>most of the time</em>, &ldquo;has-a&rdquo; approaches are much simpler and more flexible than &ldquo;is-a&rdquo; approaches.</p>

<p>Think of it with a real-world example.  &ldquo;Sandwich&rdquo; doesn&rsquo;t inherit from &ldquo;bread&rdquo;.  You wouldn&rsquo;t say, &ldquo;a sandwich <em>is a</em> type of bread that has stuff inside.&rdquo;  This might, arguably, be true.  But, the way that most people talk (and more importantly, how we think,) is that a sandwich is a &ldquo;thing&rdquo; that <em>has</em> bread with stuff inside.  Furthermore, a waiter is not a sandwich with legs; a waiter is a person who <em>has a</em> sandwich and brings it to you.  Since said waiter may also have a second job as an actor, it&rsquo;s not even right to say that the &ldquo;waiter&rdquo; class inherits from &ldquo;person.&rdquo;  A waiter is not a type of person, it&rsquo;s a person who <em>has a</em> job delivering food to tables.</p>

<p>Some languages implement multiple inheritance and other things that seek to address the &ldquo;multiple hats&rdquo; problem using classic OO techniques.  If you ask me, don&rsquo;t buck the epistemological trends&mdash;use the methodology that we use for everything else, and extend using has-a instead of is-a.</p>

<h3>7. Be harsh on the code, gentle on the coder</h3>

<p>We&rsquo;re all human.  We make mistakes.  Even the best of us violate the rules sometimes, and most of us, by definition, are not &ldquo;the best of us.&rdquo;  However, there is no excuse for bad code.  It should be killed on sight.  Be your own harshest critic, and never shy away from criticism.  Seek it out.  Turn to your coworkers and say, &ldquo;Hm. You know, this thing I&rsquo;m working on just seems like I&rsquo;m making it too convoluted.  Can I run my approach by you and see if I&rsquo;m over-thinking this?&rdquo;</p>

<p>Give honest criticism without any hesitation, but never <em>ever</em> say, imply, or even <em>think</em> that the programmer must have been dense.  Sure, maybe the programmer really <em>was</em> dense.  But if you&rsquo;re growing as a developer, hell, as a person, then you should think the same thing about the stuff you did last year.  Nothing is more humbling than having to support your own code a year later.  Pepper your criticism with a light-hearted attitude, and be generous in praising the parts that you think are good.  Keep your venting to yourself.  It will raise your status if you help someone else succeed; tearing down just hurts us all.</p>

<p>Sure, this might be good advice, obvious, even.  But how does it help make maintainable code?  By fostering positivity, you&rsquo;ll help create an atmosphere where bad code is not tolerated, but where everyone is encouraged to grow and experiment.  The best way to avoid bad code is to make the programmers better.</p>

<p>I personally think that a few interpersonal communication classes would be a good addition to any computer science curriculum.</p>

<h3>8. Fail</h3>

<p>You won&rsquo;t be able to create resilient systems unless you know how they&rsquo;ll break.  You won&rsquo;t know how they&rsquo;ll break until they do.</p>

<p>Failure is a prerequisite for success.  So, get ready to do it.  A lot.  I&rsquo;ve written LOTS of very bad code.  (Some of it is even here on this website!)  Plan for an alpha and beta.  Do them as fast as possible. Bang on them.  Then throw them out and start over, taking what you learned into the next version.</p>

<p>Share your failure.  Have a code review session where everyone brings in the worst code that they&rsquo;ve written for the project, and solicits ideas for what went wrong.  (It&rsquo;s kind of like an AA meeting: Hi, my name is Isaac, and I wrote bad code. <em>Hello, Isaac&hellip;</em>.)</p>

<p>It&rsquo;s so often these days, especially in big corporations with lots of different teams, for each team to share their successes loudly, but sweep their failure under the rug.  We&rsquo;re all afraid of getting a bad review, but this virtually guarantees that all the <em>other</em> teams will fail in exactly the same way.  Even in a small company with only one or two teams, sharing failure can result in an exponential reduction in errors.</p>

<p>Furthermore, sharing your own failures, and asking for criticism, makes it easier for others to take criticism when you point out bad code that they wrote.  It is very difficult to separate &ldquo;me&rdquo; from &ldquo;my code&rdquo;.  If you criticize one, the other might get hurt.  Sharing failure helps to sever this connection, and allows everyone to associate and connect with the success of the product as a whole.</p>

<p>Building a few prototype/failure builds into your development process will also help to produce stable builds faster.  It allows for user-research sooner.  By planning a throw-away build, it helps get everyone focused on which features are actually important/necessary, and which are either too difficult or unimportant to bother building.  It gets product and engineering talking sooner.</p>

<p>Failure (and handling it intelligently) is not just important, it&rsquo;s absolutely <em>vital</em> when it comes to building systems that are going to stick around for decades.</p>
