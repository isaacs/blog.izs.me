---
layout: layouts/post.njk
date: 2008-01-21T18:00:48.000Z
redirect_from:
  - /post/146672514/going-fast-frankenstein-and-refactoring/
  - /post/146672514/
  - /post/146672514/going-fast-frankenstein-and-refactoring
  - /post/146672514
slug: going-fast-frankenstein-and-refactoring
tags:
  - broken
  - code beauty
  - code ecosystems
title: 'Going Fast, Frankenstein, and Refactoring'
tumblrid: 146672514
type: text
---
<p>Very soon now, the project that has consumed my days for the last 6 months will go into public beta.  It&rsquo;s too early to pop the champagne, and that&rsquo;s not what this post is about.  However, the newness of this project is worth pointing out for the following reason: We&rsquo;re <em>already</em> planning a fairly major refactoring effort to take care of a lot of code rot that has crept into the designs.</p>

<p>That&rsquo;s right.  We haven&rsquo;t released anything, and there&rsquo;s already enough bloat to justify spending at least 2 weeks cleaning it up.</p>

<p>Of course, due to the pressures of market, and the morale effects of delaying the release, we&rsquo;re buttoning up what we have now as much as possible, and planning to work on the refactor once the beta is out there.  It may actually help a lot, since the gigantic firehose of traffic that Yahoo! points at sites has a way of helping even the most egotistical of developers realize that their clever baby needs some serious surgery.</p>

<p>This post is going somewhere, I swear, but I can already tell it&rsquo;s going to take me a while to get there.  Go get some coffee and a snack and come back.  I&rsquo;ll wait.</p>

<h3>Build Fast</h3>

<p>In my opinion, the core of good software development methodology comes down to two basic questions that should be asked daily:</p>

<ol><li>What portion of your time is spent focused on the task of creating software?
        (That includes planning, discussion, and thinking as well as coding, provided that these non-coding activities are focused and aimed at creating software.)</li>
    <li>Does it work today?
        (If you don&rsquo;t know, then you are full of Fail.  Get on that right away.)</li>
</ol><p>I call this the <strong>Go Fast</strong> method.  The goal is to efficiently create software with <strong>minimum long-term cost and maximum long-term benefit, without driving away your best talent.</strong>  <small>(Have I got the attention of the business and product people in the audience?  Good.  Please stay for the rest of the show.)</small></p>

<p>I know that someone out there is bound to point out the obvious parallels between my &ldquo;go fast&rdquo; methodology and Agile, and maybe they&rsquo;re right.  To the extent that Agile accepts these premises as important, it is correct.  But I&rsquo;m claiming that <em>everything else</em> stands or falls based on how it affects these questions.  Stand-ups, planning meetings, org charts, IDEs, frameworks; they&rsquo;re all only as good as their effect on the principles of speed and stability in development.</p>

<p>If you&rsquo;re developing software properly, you should be creating software that does something as soon as possible, and keep it up as much of the time as you can.  Until there&rsquo;s something to look at, you&rsquo;re just spinning your wheels.  Nowhere is this more true than on the web.  Photoshop comps don&rsquo;t break in different browsers.  Product presentation decks don&rsquo;t &ldquo;feel klunky&rdquo; when pieces load out of order.  Grand visions promise to solve all your problems and make you biscuits for breakfast, but they don&rsquo;t deliver.</p>

<p>You make software for a living?  So make software, already.  You wanna build a website?  What&rsquo;s stopping you?  You don&rsquo;t have designs yet?  Build the parts that you do have.  <a href="http://www.codinghorror.com/blog/archives/000809.html">Always be releasing,</a> even if your actual release date is months away.</p>

<p>Build the core, and grow the other pieces up around it.  Every minute spent waiting, instead of actually building something, is worse than wasted.  When you live in the code day by day, it becomes a part of you.  You learn how the pieces work, and the knowledge is automatic.  When you get too far from it, it becomes foreign, like driving a car for the first time.</p>

<p>The agilistas call this &ldquo;shippable code.&rdquo;  In my opinion, that&rsquo;s a horrible term.  The vast majority of code that I&rsquo;ve seen released into the wild was not even close to what I&rsquo;d call &ldquo;shippable,&rdquo; but it got shipped just the same.  Most of the time, the prototypes leading up to the release were significantly worse.  Some agilistas are quick to point out that &ldquo;shippable&rdquo; doesn&rsquo;t always really mean &ldquo;that you would actually ship it.&rdquo;  Sorry, but drivable means that you can drive it, and drinkable means that you can drink it, and flyable means that you can fly it, so if &ldquo;shippable&rdquo; doesn&rsquo;t mean &ldquo;you can ship it,&rdquo; then they picked a bad term.</p>

<p>I suspect the ambiguity is intentional on some level.  I think the claim that &ldquo;Agile makes software faster&rdquo; is a myth.  Agile methodologies, used in moderation by a well-balanced team of dedicated and talented individuals, <em>do</em> tend to result in higher quality software, greater management visibility, and a happier bunch of people than any alternative, but that means that the overall development time can be significantly longer.  And if you&rsquo;re not on a well-balanced team of dedicated and talented individuals, then no methodology is going to save that sinking ship, so dust off the CV and bail out ASAP.  But I digress, and besides, you already know that I think <a href="http://foohack.com/2007/11/agile-scrum-sucks-but-so-do-the-alternatives/">Agile sucks</a>.</p>

<p>I prefer to call it a running prototype, or an integration environment, or anything else that&rsquo;s more, well, accurate.  &ldquo;Shippable code&rdquo; tells overeager managers that they can just press &ldquo;stop&rdquo; at any point and ship what they&rsquo;ve got.  Nice dream land, hot shot, but it doesn&rsquo;t actually work quite like that.  Nevertheless, a good integration development environment, where everyone&rsquo;s code gets placed and which is subjected to regular updates and testing&mdash;that&rsquo;s important, almost as important as CVS and a decent build script, and for a lot of the same reasons.  If the team&rsquo;s code isn&rsquo;t conversing regularly, then the team may as well not be, either.  The best way to prevent blockages is to prevent assumptions; the best way to prevent assumptions is to check them <em>every single day</em>.  So: <q>Does it work today?</q></p>

<p>Completion feels good.  Getting something that works feels good.  That&rsquo;s why we got into this business.  Because, despite all the pain and frustration and work that goes into developing software, <a href="http://www.randsinrepose.com/archives/2007/11/11/the_nerd_handbook.html">The High</a> here is about as good as it gets.</p>

<p>You don&rsquo;t get that waiting.  You don&rsquo;t get that talking.  You get that when you are immersed in building something.</p>

<p>From a team dynamic perspective, I can&rsquo;t even find words to express how it makes people gel when we each do our little pieces, and plug them in, and see a site come up with data and styles and behavior and images and everything.  It&rsquo;s a pretty marvelous event that makes everyone even more eager to get to work.  If you&rsquo;re a web developer, don&rsquo;t wait for your designer or back-end engineer to give you what you need.  Make an unstyled page with dummy data, if you have to, but make <em>something</em> on day 1 if possible.  Then make a list of what you need.  When everyone can see their effect on the product, it&rsquo;s amazing how fast they tend to deliver.</p>

<p>Going fast and pushing to milestones also forces everyone on the team to prioritize.  There may be plenty of features that might be <em>nice</em> to implement, but if speed is a priority, then it forces you all to work on the things that really <em>need</em> to be implemented.  By raising red flags whenever something doesn&rsquo;t work, the whole project stays in sync most of the time, and assumptions never get too far out of whack.  But, of course, that&rsquo;s not the whole story.</p>

<p><img class="alignright" src="./victor-frankenstein.jpg" alt="Gene Wilder as Victor Frankenstein"/>Software development is a lot like building Frankenstien&rsquo;s monster.  You start out with a pile of useless ugly pieces, and try to turn it into something beautiful.  Along the way, it&rsquo;s a monstrosity, and tends to get uglier as you tack new bits onto it.  Then it kills people.</p>

<p>In Mary Shelly&rsquo;s classic, everyone Victor loves is killed by the eloquent and sensitive creature, who was turned evil by his creator&rsquo;s neglect and hatred.  If software could walk and talk, how many developers would still be alive today?</p>

<h3>Slow Down</h3>

<p>Don&rsquo;t build Frankenstein&rsquo;s monster, or at least, don&rsquo;t figure you&rsquo;re &ldquo;mostly done&rdquo; once it walks and talks, as the strict waterfall process proposes.  Going fast is important, and necessary.  You can&rsquo;t fix pure ideas very easily, because it&rsquo;s hard to see what&rsquo;s wrong with them.  Write the code.  But know that it&rsquo;s going to have to be rewritten, possibly several times.  Plan for it, and keep it in the back of your mind.</p>

<p>The hazard of moving quickly is that we tend to go with the <em>easy</em> choice, rather than the <em>good</em> choice.  Adding one more method onto the class I&rsquo;ve already got is easier than creating a whole new class; nevermind that it doesn&rsquo;t really &ldquo;fit&rdquo; with what this type of object is supposed to be doing.  Do that once, and it&rsquo;s probably a lot simpler and clearer than any alternative.  Do that 50 times, and you end up with a <a href="http://en.wikipedia.org/wiki/God_object">theological problem</a>, or something else <a href="http://en.wikipedia.org/wiki/Code_smell">equally pungent</a>.</p>

<p>This will happen.  Every time.  If you don&rsquo;t have some downright embarrassing shit-tastic WTF-worthy code lurking in your project&mdash;I mean, the kind of thing where you see a bug report go to your coworker, and you say to him, <q>Oh, I&rsquo;ll take that one, I know that feature</q>, but really, you&rsquo;re saying <q>Please don&rsquo;t look at that code, or at least, if you do, please don&rsquo;t judge me</q>&mdash;then you probably weren&rsquo;t going fast enough.  The remarkable thing isn&rsquo;t that this team has produced a product that &ldquo;already&rdquo; needs a cleanup; the remarkable thing is that we all seem to recognize that we need to clean things up, before it&rsquo;s blown up in any serious way yet.  That&rsquo;s why I&rsquo;m thankful to be on the team that I am.  I&rsquo;ve heard it said that the difference between a good programmer and a bad programmer is that a good programmer feels pain when he looks at ugly code he&rsquo;s written, while a bad programmer thinks everything he&rsquo;s done is great.</p>

<p>I used to be proud of every bit of code I&rsquo;d written, like a two-year-old who just learned how to use the potty.  Then I grew up a little bit, and realized that my shit stinks, and hoped no one would ever see it.  I&rsquo;ve grown up a little more, and realized that everyone shits, so there&rsquo;s nothing to be ashamed of.  I try to work towards a point where my actually shit doesn&rsquo;t stink at all, but I&rsquo;m not all that hopeful about that.  The fecality of this line of metaphor, while a bit disgusting, is meant to highlight an important point.</p>

<p>You want to create code that is nice to be around?  Do your best to build quality in from the start.  The more you learn, the better you&rsquo;ll be at it, especially if you manage to code yourself into some truly awful maintenance nightmares, where you can&rsquo;t walk away and can&rsquo;t blame anyone else.  But no matter how good you get, it&rsquo;s still gonna stink most of the time.  <a href="http://scribesonic.com/Blog/Archive/2007/10/04/Coding-Horror-Interview.aspx">Everyone</a> writes <a href="http://thedailywtf.com/Articles/What_Could_Possibly_Be_Worse_Than_Failure_0x3f_.aspx">bad code</a>.  So fix it.</p>

<h3>Refactoring</h3>

<p>Wikipedia <a href="http://en.wikipedia.org/wiki/Refactoring">says</a>:</p>

<blockquote cite="http://en.wikipedia.org/wiki/Refactoring">Refactoring neither fixes bugs nor adds new functionality. Rather it improves the understandability of the code or changes its internal structure and design, and removes dead code, to make it easier for human maintenance in the future.</blockquote>

<p>To relate to the twin principles of software development, &ldquo;Go fast&rdquo; and &ldquo;Does it work?&rdquo;, refactoring is not important early on.  Surely, doing things as close as possible to The Right Way is usually a big help.  But <a href="http://www.jwz.org/doc/worse-is-better.html">The Right Way</a> almost always flies in the face of the &ldquo;Go Fast&rdquo; maxim.</p>

<p>I&rsquo;ve been privy to a few refactoring projects, I think I can safely say that almost every single one was an utter disaster.  Without naming names, here&rsquo;s how a few turned out:</p>

<ol><li>Lead engineer spent 3 months internally redesigning a feature with the intent of making it more extensible in the future.  Released.  Numerous bugs and problems.  When I left the company, it was still unstable.  <strong>FAIL</strong></li>
    <li>The product has grown into an amalgam of junk, and no one knows how to maintain all the disparate pieces. Can&rsquo;t add features easily.  Needs to be re-architected.  [[numerous planning meetings]] OK, management says we have 2 months, so let&rsquo;s just add another layer on it, change how it looks, and call it a day. Result was even more disorganized and difficult to extend.  <strong>FAIL</strong></li>
    <li>#2, again, with new people driving it, who insisted that the last ones were all wrong.  Same result.  <strong>DOUBLE FAIL</strong></li>
    <li>Repeat, <em>again</em>.  <strong>TRIPLE SUPER DUPER FAIL</strong></li>
    <li>Last, but oh, so certainly not least, there were all the refactorings that didn&rsquo;t even make it to a real execution.  The times when the development team was so fed up that they pushed to change things, and were told repeatedly that they could get to that just as soon as the next project got done&mdash;there was always a &ldquo;next project.&rdquo;  <q>It works now, what&rsquo;s the matter with it?</q>  To the best of my knowledge, of three teams where I saw this pattern, (a) one company no longer exists, (b) another company lost all their best talent, and &copy; in the third case, the team dissolved and everyone moved onto other projects (it was at Yahoo!, so it&rsquo;s not like they were going to go under.)  For failing before they&rsquo;d even gotten started, these refactoring projects are <strong>QUADRUPLE UBER KAMEHAMEHA FAIL!!!</strong></li>
</ol><p>I strongly doubt that any of these cases were rare.  In fact, I think they&rsquo;re the norm.</p>

<p>It&rsquo;s easy to cite bad management, and in a few of the above cases, management was to blame.  They put a high premium on getting new features, without recognizing the hidden costs down the road of dealing with the increasing instability.  However, the fact that I&rsquo;ve come to realize is that most developers don&rsquo;t really understand <a href="http://foohack.com/2007/06/the-most-important-things-they-don%e2%80%99t-teach-in-compsci-101-but-should-maintainability/">maintainability</a>, and thus, tend to completely miss the point of what the purpose of refactoring should be.  As a result, their attempts at refactoring end up being worse than failures, because they are interpreted as success.</p>

<p>I did get to see one significant refactoring project that I&rsquo;d consider a success.  It was done in an under-the-radar sort of way, simply because it was the only way to add new features to a product that had grown frightfully unwieldy.  Also, I&rsquo;ve seen and done a lot of small scale refactorings that were executed well and increased the quality of the product as a result.  (These, as the Wikipedia article mentions, are usually referred to as simply &ldquo;cleaning up&rdquo; the code base.)</p>

<p>Refactoring can only be justified in the &ldquo;Go Fast&rdquo; methodology on the condition that it makes a more stable product, thus enabling developers to more efficiently create working software.  Elegance is not an end in itself.  The end goal is a working product, and <a href="http://steve-yegge.blogspot.com/2007/12/codes-worst-enemy.html">code is the enemy</a>.  The vast majority of software development is about modifying an existing product.  The short-term memory of a human is limited and fleeting.  The less information that must be held in mind to understand a given section of code, the more quickly code can be modified, the lower the likelihood of introducing bugs with any given change.  So, there is, ultimately, only one purpose that Refactoring should serve:</p>

<div class="important"><p>Be more obvious.</p></div>

<h3>Love Your Monster</h3>

<p><a class="alignleft" href="http://foohack.com/blog/wp-content/uploads/2008/01/frankenstein1831inside-cover.jpg" title="Inside cover of the original 1918 Frankenstein by Mary Shelly."><img src="./frankenstein1831inside-cover.thumbnail.jpg" alt="Inside cover of the original 1918 Frankenstein by Mary Shelly."/></a>Victor was so consumed by his desire to create something new that he ended up rushing the job and not thinking ahead.  When his creature opened its eyes, he feared it, and fled, and tried to hide from his sin.  Shunned from the world, the creature asked Victor to make him a companion.  When his request was denied, he proceeded to destroy everything Victor loved.</p>

<p>The moral of the story: Don&rsquo;t ignore the ugliness you create.  It will find you.</p>

<p>Refactoring should make the code simpler.  Complexity is the demon that we fight in writing code.  It is the enemy.  It opens the doors to bugs; it increases the difficulty in fixing problems and adding features; it raises the learning curve for new developers.  Sadly, a lot of refactoring seems to make code more complex rather than less.</p>

<p>In my opinion, there are a few guidelines that work well when changing around existing code.  These guidelines apply equally well when creating new code, but since it&rsquo;s harder to see the whole picture in that scenario, mistakes and shortcuts are more forgivable.</p>

<ul><li>There should be as few layers as possible, and no fewer.</li>
    <li>There should be as few objects as possible, and no fewer.</li>
    <li>Each object should be as small as possible, and no smaller.</li>
    <li>Each object should know as little as it needs to, and no less.</li>
    <li>Each piece should have a job, and should stick to it.</li>
    <li>Comments should be mostly unnecessary.</li>
</ul><p>Refactoring isn&rsquo;t about using the coolest object oriented tricks that you just learned.  It&rsquo;s not about making the code &ldquo;more abstract.&rdquo;  Abstraction is a necessary evil, in my opinion, not a feature.  Like Victor, it&rsquo;s easy to get wrapped up in testing out new discoveries.  Most of us got into this job because we like playing with new puzzles, and that&rsquo;s a great thing.  But one of the most satisfying puzzles is to reduce the complexity of an implementation without reducing the problems that it can solve.</p>

<p>I&rsquo;m a big fan of &ldquo;comment-driven development&rdquo;.  That is, write out the pseudo-code in comment form first, stubbing out the functions that need to be implemented.  It helps to separate the design and implementation phases, since it can be hard to do both simultaneously.  As implementation kinks are getting worked out, the design might change slightly, but it helps to have the comments there as a guide to what I was originally thinking.  Once a module moves into a more stable place, the comments are a liability.  At best, they&rsquo;re clutter; at worse, misleading.</p>

<p>I like using those comments to clean up the code as well.  The process goes like this:</p>

<ol><li>Read through the code, starting at the entry point, and opening each file as it&rsquo;s referenced.</li>
    <li>If a section of code has a shit-ton of comments, then it needs work.  If it&rsquo;s clean, just make sure it makes sense.</li>
    <li>Make sure the comments match what the code is doing.</li>
    <li>Remove any incorrect comments (comments that are lying.)</li>
    <li>If the code isn&rsquo;t understandable without the comments, then dig in and clean it up.  Rename methods, sort things better, etc.</li>
    <li>Remove any and all implementation-related comments.  Those are dangerous.</li>
    <li>Repeat until the file is almost comment free, and understandable.</li>
</ol><p>I&rsquo;m not so certain on the common refactoring claim that it should not change any existing functionality.  Sometimes, this is of vital importance.  However, there are plenty of times where the feature set of a bit of code simply needs to be trimmed or revised.  For public-facing APIs and products, either the functionality should not be changed, or interfaces should be publicly deprecated long before they are actually removed.</p>

<p>For internal code, or APIs that are only used by a small number of consumers, my favorite approach is to just change it, and then see what breaks.  This should never be done in a way that affects customers, of course, but in a development environment, it&rsquo;s quite appropriate to just change the back-end, and then update the front-end once it&rsquo;s fixed.  Defensive coding is a good practice, but <em>overly</em> defensive coding, where errors are not surfaced at all, can hide problems that may turn up later in unexpected ways.</p>

<p>Don&rsquo;t bother refactoring something you just wrote.  You&rsquo;ll only make it worse.  You have to wait until you don&rsquo;t remember how it works before you look at it again, or else you won&rsquo;t be able to appreciate the difficult bits.  If you don&rsquo;t have time for that, then make someone else do it, and tell them to be as harsh as possible.</p>

<h3>Ego</h3>

<p>As <a title='"they" == Gerald M. Weinberg' href="http://www.softwarequotes.com/ShowQuotes.asp?ID=605&amp;Name=Weinberg,_Gerald_M.&amp;Type=Q">they say</a>, <q>No matter what the problem is, it&rsquo;s always a people problem.</q>  The first and most important step in any refactoring effort is to detach our egos from our code.  This is even more of an issue if something you wrote is being refactored by someone else, or worse, if you are refactoring someone else&rsquo;s code.</p>

<p>I&rsquo;ve worked hard to develop a pretty good understanding of software development.  I&rsquo;ve found that the technology side is easy&mdash;on the human side, I still have a lot to learn, and probably always will.  Like a lot of geeks, I didn&rsquo;t really get into the whole &ldquo;social&rdquo; thing in a serious way until I was almost an adult, and even today, I tend to focus on The Project and keep my distance from the rest of the world.  So, I suppose I don&rsquo;t know the best way to handle this part of the problem.</p>

<p><abbr title="Tim Berners-Lee">TBL</abbr>&rsquo;s classic recommendation to be <q>loose in what you accept, and strict in what you send</q> seems to apply well to this case.  On a healthy team, everyone is committed to a successful product, and leaves their egos at home when they come to work.  Code is passed around and everyone seeks as much input as possible.  On a dysfunctional team, everyone&rsquo;s sense of self-worth is tied up in the appraisal of their work by others&mdash;which has the twin effect of making them overly sensitive to criticism, and overly critical of their teammates.</p>

<p>It&rsquo;s natural to put up resistance to the prospect of your code being modified.  After all, you wrote it that way for a reason.  Sit down with the other developer, and try to hash out the best approach.  If arbitrary decisions have to be made, explain that the best approach is to make them consistently.  Don&rsquo;t focus on the problems in their code, but rather on the need for consistency and abstraction throughout the product.</p>

<p>If someone won&rsquo;t listen to reason, frankly, the only solution I&rsquo;ve ever found is to either leave or wait for them to.  Hopefully they&rsquo;re a contractor or something, so you can just wait, and do your best to isolate and minimize the damage as much as possible in the meantime.  If not, then the issue should be escalated, if only because it&rsquo;s polite to tell your manager that their ship is in danger of sinking.</p>

<h3>Oh, right, that book&hellip;</h3>

<p><a class="alignright" href="http://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Technology/dp/0201485672/isaacschlcom-20"><img src="./refactoring.thumbnail.jpg" alt="Refactoring, by Martin Fowler"/></a>I read <a href="http://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Technology/dp/0201485672/isaacschlcom-20">Refactoring</a> about 5 years ago, but I&rsquo;ve been meaning to pick it up again, since I&rsquo;ve gotten a fair amount of real-world development experience since then, and have seen my share of dismal failures.  But this isn&rsquo;t supposed to be a <a href="http://books.slashdot.org/article.pl?sid=08/01/09/1515240">book review</a>, so I won&rsquo;t review it in any detail.  It&rsquo;s a good read, though, and I highly recommend it, even though it is mostly in Java, and seemed (to me at least) to simply highlight a lot of design problems inherent in the Java language that lead inevitably to bloated over-sized code.  But that&rsquo;s a post for another day.</p>
