---
layout: layouts/post.njk
date: 2007-11-12T18:00:38.000Z
redirect_from:
  - /post/146672429/agile-scrum-sucks-but-so-do-the-alternatives/
  - /post/146672429/
  - /post/146672429/agile-scrum-sucks-but-so-do-the-alternatives
  - /post/146672429
slug: agile-scrum-sucks-but-so-do-the-alternatives
tags:
  - code ecosystems
  - the business
title: Agile Scrum Sucks (but so do the alternatives)
tumblrid: 146672429
type: text
---
<p>Software development is not like manufacturing.</p>

<p>In manufacturing, you build to the same specifications over and over again.
In software development, you create a new thing each time, and the specifications typically change along the way.</p>

<p>In manufacturing, 100 factories can generally produce 100 times as many things as 1 factory.  Adding a new factory means that more things will be produced.
20 programmers are far less productive than 5.  Adding another programmer often means that the project will be delayed even further.</p>

<p>In manufacturing, you can gradually tune your methods based on past experience, and become more efficient over time.
In software development, past problems generally have little if anything to do with future problems.  The best you can hope for is to find and learn very broad abstract efficiency boosters like &ldquo;best practices.&rdquo;</p>

<p>Manufacturing and software development are similar in what I think of as the &ldquo;expert effect.&rdquo;  Generally speaking, for a given task and a given group of people, one of them will be best at that task.  If that expert is given control of that task, then they will tend to do it well; if they are forced to take input from everyone else in the group who isn&rsquo;t as good as them, then the task will tend to suffer, if only from the time required to evaluate the input and decide not to use it.  Management is one such task, perhaps the most important one.</p>

<p>Most people I know seem to accept these premises.  That is, unless you&rsquo;re an Agile Scrum zealot.  Then you may think that:</p>

<ol><li>Specifications change, but that&rsquo;s OK, because it&rsquo;s &ldquo;iterative design&rdquo;.</li>
    <li>You can predict how long something will take, and your predictions will get better over time.</li>
    <li>Tasks can be broken down based on the time required, and can be assigned to any &ldquo;qualified&rdquo; person.</li>
    <li>Programming experts will be happier if they do project management, and are qualified to do so.</li>
</ol><p>This is all 100% bullshit.  In the real world:</p>

<ol><li>Specifications change because it&rsquo;s virtually impossible to design something that&rsquo;s never been done if you can&rsquo;t see it as you go along.  The specs stop changing when the team puts their collective foot down to management and the customer, and that&rsquo;s when &ldquo;research&rdquo; stops and &ldquo;development&rdquo; begins.  The time at which this occurs is flexible, but if you&rsquo;re targeting a fixed release date, it&rsquo;d better be soon!  If you don&rsquo;t build in enough time for research, then the product will not be satisfactory.</li>
    <li><a href="http://www.codinghorror.com/blog/archives/000981.html">Your estimates suck.</a>  And they&rsquo;ll keep sucking, no matter what you do.  You&rsquo;re probably around 10-15% accurate, and if you work your ass off, you can get up to a 20-25% accuracy rate.  Estimates that aren&rsquo;t even remotely accurate are a waste of everyone&rsquo;s time.</li>
    <li>I&rsquo;m not the only one, I&rsquo;m sure, who finds that at least 60% of my planned tasks for any given sprint don&rsquo;t get accomplished, either because a) they depend on something else that wasn&rsquo;t evident at the planning meeting, b) they just weren&rsquo;t as high priority as something that came up since the planning meeting, or c) my time estimates suck, and so I budgeted way less time than required for a few of my tasks.</li>
    <li>No one likes project planning meetings.  But, since project managers typically aren&rsquo;t programmers dealing with the software each day, they need our input.  If you&rsquo;re a product manager, trust me, your team will absolutely love you if you can get these chores down a half hour or less.  Streamline every part of the meeting that requires their attention.  Focus their time on what you actually need them to weigh in on.  Have estimates prepared, and ask them to critique them.  Wrapping it in silly games won&rsquo;t help&mdash;that just makes it take longer.  <strong>Programmers hate project management.</strong>  So make them do as little of it as possible.  Trust me, if they wanted to be project managers, <strong>they wouldn&rsquo;t have degrees in computer science.</strong>  Let them get back to work.  There&rsquo;s no worse blocker than having to stop coding for a meeting.  Like torture or invasive surgery, it&rsquo;d better be necessary, otherwise it&rsquo;s all kinds of wrong.  (The &ldquo;5 levels of estimates&rdquo; is the Dread Cthulhu of time-wasters.)</li>
    <li>Prototypes don&rsquo;t pay the bills.  If you create a bunch of dummy-functional UI screens, you haven&rsquo;t created software, you&rsquo;ve created a demo.  A prototype is an important first step, a valuable communication tool.  But you can&rsquo;t sell a demo, which means you can&rsquo;t create demos forever.  Once the &ldquo;research&rdquo; phase is over, demos are a liability, because they tend to obscure missing functionality.</li>
</ol><p>There are a few things that scrum gets right:</p>

<ol><li>When it comes to estimating, often the crowd is smarter than the individual.  &ldquo;Planning poker,&rdquo; though overly goofy and time-consuming, does a pretty good job.  But it takes forever, and while I&rsquo;m waiting to show my card, I&rsquo;m only thinking, <q>I&rsquo;d really rather be coding right now.</q>  I&rsquo;m not a project manager <small>(that&rsquo;s part of the problem with Agile Scrum)</small> but I know there simply must be a better way.</li>
    <li>A daily meeting is <strong>crucial</strong> if there&rsquo;s more than one person on the team.  It&rsquo;s still best if everyone can physically see the people that they&rsquo;re working with from where they sit, but that&rsquo;s not always possible.  Even in that case, forcing everyone to stand up for a few minutes each morning and tell everyone what they&rsquo;re up to is a good way to make sure that the team doesn&rsquo;t get sidetracked or splintered.  It keeps programmers from &ldquo;going dark&rdquo; and coming back a week later with something that doesn&rsquo;t mesh with the rest of the product.</li>
</ol><p>It seems that some Scrum Masters are die-hard zealots, and others follow a more &ldquo;pick and choose&rdquo; approach.  The Agile methodology explicitly encourages project managers to use what works, and customize the process to meet their needs.</p>

<p>In other words, Agile Scrum makes a lot of ridiculous assumptions, and suggests a set of practices&mdash;some harmless, some obvious, some useful, and others specifically counter-productive&mdash;and then says, <q>customize to your team/product/environment.</q>  If your project fails or misses a deadline, well, you didn&rsquo;t do it right, or the team wasn&rsquo;t committed, or the management was unreasonable.  <em>Anything at all to avoid placing blame on the methodology.</em></p>

<p>Anyone else see the similarities to a faith healer?</p>

<p>Ultimately, a successful project that uses Agile Scrum is successful for the same reason that any other project is successful:</p>

<ol><li>The management managed, and got out of the workers&rsquo; way.</li>
    <li>The workers were capable of doing what they were called on to do, and happy doing it.</li>
    <li>The product vision was something the customer wanted</li>
    <li>No one went dark.  (That goes for upper management, as well!)</li>
</ol><p>On my current team at Yahoo!, we use Agile Scrum, at least in name.  Ostensibly, Yahoo! officially endorses the use of Agile Scrum.  In my experience, successful use of agile amounts to this:</p>

<ul><li>Every week or two, the team gets together for an hour to talk about where the project is at.</li>
    <li>Every day, the team spends 15 minutes in the morning with each person telling what they&rsquo;re up to.</li>
    <li>Throughout the day, everyone is in constant communication via IM, email, and in person.</li>
    <li>Put your tasks in Bugzilla, and mark them done when they&rsquo;re done.</li>
    <li>Most important: Management&rsquo;s vision of the product is something that the team is happy building, and the team is selected for their expertise in the kinds of problems that the product raises.</li>
</ul><p>No one likes to create crap.  No one likes to be surprised with new requirements in the 11th hour.  No one likes to be held responsible for something they&rsquo;re no good at.</p>

<p>Everyone loves to be a part of a quality product.  Everyone likes to have visibility into their own future.  Everyone likes to be praised and respected for doing what they love.</p>

<p>By taking credit for the success of projects that use it, Agile Scrum glosses over these fundamental principles and tries to turn the team into a bunch of part-time project managers.  Anything that deviates from the plan is derided as &ldquo;cowboy coding&rdquo; or &ldquo;waterfall process.&rdquo;  Granted, these two paradigms do tend to standardize bad practices, and they do little to encourage communication, but they also admit important aspects of the software development world:</p>

<ol><li>Actual coding, typing characters into an editor, is best done alone without distractions.  You think with your own brain only.  All coding is, at some level, &ldquo;cowboy coding.&rdquo;</li>
    <li>If piece A depends on piece B, then it makes no sense to start working on A until B is done.  It makes even less sense to QA a half-working early pre-alpha dev version of the product, or worse yet, file bugs against it.  <strong>Of course it&rsquo;s broken.</strong>  Don&rsquo;t distract your developers telling them what they already know.</li>
</ol><p>Chances are wildly against getting any software product out on time or under budget.  My heart goes out to project managers and executives who are tasked with controlling the chaos.  I understand why many of them might grasp at ideologies that promise to solve the problems, but Scrum rarely helps the odds.</p>

<p>If you&rsquo;re doing software development right, you&rsquo;re probably doing Agile wrong.</p>
