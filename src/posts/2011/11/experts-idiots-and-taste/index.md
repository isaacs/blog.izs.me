---
layout: layouts/post.njk
date: 2011-11-10T18:15:00.000Z
redirect_from:
  - /post/12604303054/experts-idiots-and-taste/
  - /post/12604303054/
  - /post/12604303054/experts-idiots-and-taste
  - /post/12604303054
slug: experts-idiots-and-taste
title: 'Experts, Idiots, and Taste'
tumblrid: 12604303054
type: text
---
<p>My nerd rage on the topic of Fibers, co-routines, and compiled-to-js languages in node.js comes from seeing a non-problem solved in a way that makes it worse.</p>

<p>There are two really dangerous rationalizations in software design:</p>

<ol><li>&ldquo;We need to make it easier for newcomers.&rdquo;</li>
<li>&ldquo;Only experts will use this, anyway.&rdquo;</li>
</ol><h3>Tower of Babel of Cards</h3>

<p>They&rsquo;re dangerous because each seems to imply that the other can be disregarded.  The worst approach is to vacillate between them: &ldquo;We need to make (async IO, object cleanup, database queries, whatever) easier for new users, so we&rsquo;ll add this magic that experts will use to make intuitive APIs.&rdquo;</p>

<p>It&rsquo;s a vicious spiral.  You can justify adding complexity, because &ldquo;this is for experts only&rdquo;, and also exposing the functionality in an obscured way in the name of making it &ldquo;intuitive&rdquo; for newcomers.  The result is inevitably a towering house of cards.  On a somewhat visceral level, I get this gut reaction to a &ldquo;handing down from the mountain&rdquo; mentality that is only harmful in the long run for everyone.</p>

<p>A better goal is to make an API such that when an expert uses it expertly, a newcomer can still understand it thoroughly.  It requires an API (and more importantly, a culture) that limits experts, and educates newcomers.  I don&rsquo;t know the best way to approach problems to get there, but I&rsquo;ve found pretty good results from thinking, &ldquo;I&rsquo;m probably going to mess this up the next time I touch it, so I&rsquo;d better make it really obvious.&rdquo;  I usually fail at it, and end up cursing myself later when I rewrite the damn thing yet again.</p>

<p>Passing around a function that gets called later is <em>not that hard</em>.  We&rsquo;ve been doing that in JavaScript forever.  Yes, newcomers to the language, especially if they come from a language without closures and first-class functions, have a little bit of a learning curve to get used to this phenomenon.  In my opinion, you do them a disservice by trying to shield them from that.</p>

<p>(Passing around function pointers in C is actually a little bit better in some ways, because you <em>can&rsquo;t</em> define your functions inline, and all the captured data must be passed around explicitly.  This is a bit like using named functions instead of nested closures, which is a common low-complexity approach to the alleged callback problem.)</p>

<p>I&rsquo;ve been writing JavaScript for a while now, and other languages for a few years before I got into JavaScript.  I&rsquo;m not the most expert at it, but I certainly don&rsquo;t consider myself a newcomer.  In that time, I&rsquo;ve learned something:</p>

<h3>We&rsquo;re All Idiots</h3>

<p>All of us, whether experts or newcomers.  Well-meaning idiots, perhaps, but idiots.  We all write bugs, all the time.  That is the normal state of software.  There is no abstraction so perfect that a human won&rsquo;t fuck it up at the first opportunity.  But we can try to be better, simpler, to make it easier for our future idiotic selves to figure out what we were thinking in our cleverly idiotic brains, and chop the problems into smaller pieces so that our future selves can have some clues to find the maddeningly idiotic bugs we stuffed in there.</p>

<p>If your code uses step or async or slide or Q, I can read it, and I see a function getting called and passed some arguments.  I can look at how you got that function from a require() statement, pull up that module, and look at its definition.  These are lightweight abstractions that are highly penetrable.  I&rsquo;ve suggested in the past that everyone should write their own flow control lib, because it&rsquo;s the best way to really understand how they work, and it&rsquo;s not that hard.  Once you grasp the basic concepts, reading someone else&rsquo;s flow control utility is pretty easy.</p>

<p>If your code uses a compiled fibers library, or something that transforms the code, then it&rsquo;s <em>much</em> harder for me to figure out what the heck is going on.  The introspection is gone.  The languages change.  Stuff happens that isn&rsquo;t present in the code I&rsquo;m looking at.  <strong>This is fundamentally different from a library that just passes functions around.</strong></p>

<p>That means: I won&rsquo;t use your library if there&rsquo;s any alternative (including writing the exact same functionality myself).  It&rsquo;s nothing personal.  I just would rather spend my time solving necessary problems rather than manufactured ones.  I simply don&rsquo;t believe that you&rsquo;ve put the same level of thinking into your coro util that TC-39 and the v8 team has put into JavaScript, or that Bert and Ryan and Ben and Igor have put into libuv.</p>

<p>Not everyone is the same, and that&rsquo;s great!!  If you find that Fibers solve a problem <em>for you</em>, and they make the code that you write easier <em>for you</em> to manage and design, then that&rsquo;s awesome.  Use them.  Understand them.  Drop the illusory dichotomy of &ldquo;experts&rdquo; and &ldquo;newcomers&rdquo;, and realize that they are both idiots, and both you.</p>

<p>Every choice that isn&rsquo;t completely boring will alienate someone.  Pleasing everyone is a recipe for blandness.  That&rsquo;s why we keep the node-core standard lib super small, and encourage variation and repetition and iteration in userland modules.</p>

<h3>Absolutes</h3>

<p>If your goal is to please <em>me</em> (and other stodgy &ldquo;javascript is fine, callbacks aren&rsquo;t hard&rdquo; types) with a compiled coroutine library that adds magic to the language, you should realize how horribly unlikely that is.  I do actually think that this approach is fundamentally flawed.  I&rsquo;ve played with Marcel&rsquo;s fibers lib a bit, and it&rsquo;s about the nicest I&rsquo;ve seen, but it still adds an unacceptable <em>(for me!)</em> amount of magic to programs.</p>

<p>Programmers tend to think in absolutes, perhaps because computers are such absolute things, or maybe just because absolutes are easier and we&rsquo;re all idiots.  I&rsquo;ve done it in this post, because I&rsquo;m as lazy as anyone.  Maybe you&rsquo;re the exception, and you actually are smart enough to use Fibers or Streamline wisely and still know what&rsquo;s going on when you read the code a year later.  If the benefit is greater than the cost, then go for it.  It&rsquo;s your house, you decide whether to wear pants or not.</p>

<p>When we are discussing things like this, it&rsquo;s important to realize that we&rsquo;re artists discussing matters of taste.  If everyone agreed, then it would mean it wasn&rsquo;t interesting.  Maybe we should be less interested in convincing people of stuff, and more interested in just writing programs that do interesting things.</p>
