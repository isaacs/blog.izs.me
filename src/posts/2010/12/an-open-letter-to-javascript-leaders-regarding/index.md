---
layout: layouts/post.njk
date: 2010-12-18T00:50:00.000Z
redirect_from:
  - /post/2353458699/an-open-letter-to-javascript-leaders-regarding/
  - /post/2353458699/
  - /post/2353458699/an-open-letter-to-javascript-leaders-regarding
  - /post/2353458699
slug: an-open-letter-to-javascript-leaders-regarding
title: An Open Letter to JavaScript Leaders Regarding Semicolons
tumblrid: 2353458699
type: text
---
<p>I got this email last night from Sean Silva:</p>

<blockquote>
  <p>I was browsing the code for your npm.js project (this file in
  particular: <a href="https://github.com/isaacs/npm/blob/master/lib/npm.js">https://github.com/isaacs/npm/blob/master/lib/npm.js</a>),
  and noticed you using a style where you line up your commas under
  the &lsquo;r&rsquo; of your var statements, and under your [ and { in
  array/object literals. I&rsquo;m very fond of this kind of formatting, but
  have been reluctant to use it since most js resources expound a fear
  of js&rsquo;s automatic semicolon insertion wreaking havoc on your code if
  you don&rsquo;t end lines with something which implies a continuation.</p>
  
  <p>Is this safe to place commas like this in browser code, or is it
  just node where this is possible?</p>
  
  <p><ins>2011-12-20 updated link to file</ins></p>
</blockquote>

<p>I wrote a few paragraphs, and then decided to shorten it to just this
response:</p>

<blockquote>
  <p>Yes, it&rsquo;s quite safe, and perfectly valid JS that every browser
  understands.  Closure compiler, yuicompressor, packer, and jsmin all
  can properly minify it.  There is no performance impact anywhere.</p>
  
  <p>I am sorry that, instead of educating you, the leaders in this
  language community have given you lies and fear.  That was shameful.
  I recommend learning how statements in JS are actually terminated
  (and in which cases they are <em>not</em> terminated), so that you can
  write code that you find beautiful.</p>
</blockquote>

<p>Inimino posted <a href="http://inimino.org/~inimino/blog/javascript_semicolons">this
very clear explanation</a>.  In his typical style, it is crisp, clear,
authoritative, well researched, and he generally kept his opinions to
himself.</p>

<p>I am going to be a bit more opinionated.</p>

<h3>The Rules</h3>

<p>In general, <code>\n</code> ends a statement unless:</p>

<ol><li>The statement has an unclosed paren, array literal, or object
literal or ends in some other way that is not a valid way to end a
statement.  (For instance, ending with <code>.</code> or <code>,</code>.)</li>
<li>The line is <code>--</code> or <code>++</code> (in which case it will decrement/increment
the next token.)</li>
<li>It is a <code>for()</code>, <code>while()</code>, <code>do</code>, <code>if()</code>, or <code>else</code>, and there is
no <code>{</code></li>
<li>The next line starts with <code>[</code>, <code>(</code>, <code>+</code>, <code>*</code>, <code>/</code>, <code>-</code>, <code>,</code>, <code>.</code>,
or some other binary operator that can only be found between two
tokens in a single expression.</li>
</ol><p>The first is pretty obvious.  Even JSLint is ok with <code>\n</code> chars in
JSON and parenthesized constructs, and with <code>var</code> statements that span
multiple lines ending in <code>,</code>.</p>

<p>The second is super weird.  I&rsquo;ve never seen a case (outside of these
sorts of conversations) where you&rsquo;d want to do write <code>i\n++\nj</code>, but,
point of fact, that&rsquo;s parsed as <code>i; ++j</code>, not <code>i++; j</code>.</p>

<p>The third is well understood, if generally despised.  <code>if (x)\ny()</code> is
equivalent to <code>if (x) { y() }</code>.  The construct doesn&rsquo;t end until it
reaches either a block, or a statement.</p>

<p><code>;</code> is a valid JavaScript statement, so <code>if(x);</code> is equivalent to
<code>if(x){}</code> or, &ldquo;If x, do nothing.&rdquo;  This is more commonly applied to
loops where the loop check also is the update function.  Unusual, but
not unheard of.</p>

<p>The fourth is generally the fud-inducing &ldquo;oh noes, you need
semicolons!&rdquo; case.  But, as it turns out, it&rsquo;s quite easy to <em>prefix</em>
those lines with semicolons if you don&rsquo;t mean them to be continuations
of the previous line.  For example, instead of this:</p>

<pre><code>foo();
[1,2,3].forEach(bar);
</code></pre>

<p>you could do this:</p>

<pre><code>foo()
;[1,2,3].forEach(bar)
</code></pre>

<p>The advantage is that the prefixes are easier to notice, once you are
accustomed to never seeing lines starting with <code>(</code> or <code>[</code> without
semis.</p>

<h3>Restricted Productions</h3>

<p>The other common argument for semicolons has to do with semicolon
insertion and &ldquo;restricted productions&rdquo;.  That is, if you have a <code>\n</code>
immediately after a <code>return</code>, <code>throw</code>, <code>break</code>, or <code>continue</code> token,
or a <code>++</code> or <code>--</code> as a postfix operator (that is, <code>x++\n</code> or <code>y--\n</code>),
then it will terminate the statement, no exceptions.</p>

<pre><code>//ok
return 7

//probably a mistake
return
       7
</code></pre>

<p>However, again, this is in fact <em>easier</em> to spot and avoid once you
get out of the habit of terminating every statement with a semicolon.
When I see the second, my brain instinctively associates the <code>\n</code> with
&ldquo;ok, this is over now&rdquo;, because return is <em>always</em> terminated by just
a linebreak.</p>

<p>Lining up the most relevant tokens on the left edge of the screen
makes them demonstrably easier for humans to quickly scan.  Piles of
research on the subject of speed reading and eye-tracking suggest that
a missing token on the right is far more likely to be overlooked than
one on the left.  So, I say, make the right-edge irrelevant, and put
the important things on the left.</p>

<h3>So which style is better?</h3>

<p>To the extent that there is an objectively &ldquo;better&rdquo; choice, it appears
to me that the minimal-semicolon/comma-first style is <strong>slightly</strong>
superior, both because it is fundamentally more scannable and because
it encourages programmers to better understand the language they use.</p>

<p>I can pretty well guarantee that, if you care about this even a
little, I care less about your JavaScript style than you do about
mine.  This isn&rsquo;t an article where I try to convince you to write your
code like I write mine.  <a href="http://groups.google.com/group/nodejs/msg/428220ab8cd199d2">We should all decide the pants policy in our
own
homes.</a></p>

<p>Just as a show of good faith&hellip;</p>

<h3 id="good-reasons">Good Reasons to Put Semicolons Everywhere</h3>

<p>The best reasons for excessive semicolon usage are esthetics and
politics.</p>

<p>&ldquo;I put semicolons in my JavaScript because without semicolons, it&rsquo;s
not valid C/C++/Java/Whatever.&rdquo;  If you have to write a bunch of Java
or C code in a project, and want your JavaScript to not look too
different, then that is a valid concern.
(<a href="http://cassisjs.org">Cassis</a> takes this approach to its absurd end.)</p>

<p>&ldquo;We do it this way because we use this linter, and it says to.&rdquo;
Consistency is important, and linters are one way to help a group of
people stay consistent.  Writing an npm-style linter is on my todo
list, but it&rsquo;s not very high up on it.</p>

<h3>The Most Terrible Reason to Put Semicolons Everywhere</h3>

<p>&ldquo;They&rsquo;re required because ASI is unreliable.&rdquo;  Seriously!?</p>

<p>These rules date back to the early days of JavaScript, in the late
90s.  They&rsquo;re not new, and in my opinion there is no excuse for
someone calling themselves a professional JavaScripter and not
understanding statement termination.  <strong>It is blatantly irresponsible
of the thought leaders in the JavaScript community to continue to
spread uncertainty rather than understanding.</strong></p>

<p>Furthermore, the typical place where &ldquo;automatic semicolon insertion&rdquo;
bites unexpectedly is with the restricted productions.  <strong>Adding
semicolons to every line will not make <code>return\nfoo</code> return anything
other than <code>undefined</code>.</strong>  The problem is that you <strong>do</strong> use line
breaks, not that you <strong>don&rsquo;t</strong> use semicolons.</p>

<p>The only way to prevent restricted productions from <em>ever</em> being an
issue is to always use semicolons <em>and never use linebreaks</em>.  No one
is suggesting that.  So stop talking about restricted productions as
if they matter, or offering semicolon overuse as an alternative to
understanding ASI.  You have to understand ASI to be a competent
JavaScripter, period.</p>

<p>Which leads me to&hellip;</p>

<h3>The Part Where I Get All Opinionated and Piss You Off (despite a noble effort to the contrary)</h3>

<p>If you don&rsquo;t understand how statements in JavaScript are terminated,
then you just don&rsquo;t know JavaScript very well, and shouldn&rsquo;t write
JavaScript programs professionally without supervision, and you
<em>definitely</em> should not tell anyone else how to write their JavaScript
programs.</p>

<p>I&rsquo;m guessing I just insulted you.  That&rsquo;s unfortunate.  I know that
you probably know all sorts of things <em>around</em> JavaScript, like the
DOM, and CSS, and MSIE&rsquo;s little quirks, and jQuery.  You have maybe
also spent some time learning about closures and prototypes and scope
and activation objects, and even hacked a few extensions onto V8 or
SpiderMonkey.  You&rsquo;re not a dummy, I&rsquo;m sure.  In fact, you&rsquo;re almost
certainly smarter than I am, and probably better looking and nicer,
too.  I&rsquo;m sure we have a lot in common, and could maybe even be
friends.</p>

<p>But if you don&rsquo;t understand <em>what a JavaScript statement <b>is</b></em>,
then there is a huge hole in your understanding of perhaps the most
fundamental aspect of the language.</p>

<p>And that&rsquo;s ok.  I don&rsquo;t speak Spanish very well and my C is pretty
novice; I also don&rsquo;t call myself an expert in either one, though I
know enough to get by in many situations.  If I were to get a job that
involved a lot of Spanish speaking or C coding, I&rsquo;d want someone
watching to help me avoid making any serious mistakes.</p>

<p>Like most things in JavaScript, the statement termination rules are
not very <em>well</em> designed, but they&rsquo;re also not particularly <em>hard</em> to
understand and use.  That understanding just takes a bit of time and
effort.</p>

<p>Cozy up with some hot chocolate and the ECMAScript spec some Saturday
afternoon.  Practice a little.  Play around with some test programs.
It&rsquo;s a good time.</p>

<p>Or don&rsquo;t do that, if you don&rsquo;t feel like it.  It&rsquo;s your life.  You
almost certainly have better things to do with it.</p>

<p>Just please stop making authoritative claims like &ldquo;terminate all lines
with semicolons to be safe.&rdquo;  It&rsquo;s not any safer, or more reliable.</p>

<h3>Addenda 1: &ldquo;leaders&rdquo;</h3>

<blockquote>
  <p>So, mr ruffler of feathers, who are these &ldquo;leaders&rdquo; you speak of?
  Why didn&rsquo;t you name names?</p>
</blockquote>

<p>Because there are too many to name, and I don&rsquo;t know all of them.</p>

<p>If you have been writing JavaScript for a while, and you provide
guidance or leadership to another person who has been writing
JavaScript for less time than you, then I&rsquo;m talking to you.  Being a
leader is a responsibility.  Take it seriously.  Don&rsquo;t spread lies. Be
an expert, or admit you&rsquo;re not an expert.  But don&rsquo;t drive that car
without a license.</p>

<h3 id="literary">Addenda 2: Literary Programmer</h3>

<blockquote>
  <p>but in English, we put punctuation at the end, not the beginning</p>
</blockquote>

<p>JavaScript isn&rsquo;t english.  We also don&rsquo;t denote ownership (or
subject-verb connection) using a period in English.  We don&rsquo;t have
Object Literals in English, and we only indent the first line of
paragraphs, not all the middle sentences.</p>

<p>This is such a silly argument, I have no choice but to fall in love
with it.  I started out your detractor, but you won my heart, Literary
Programmer.  From now on, I&rsquo;m going to only put line-breaks at the end
of functions, and never in the middle, and indent the first line of
each.</p>

<h3>Addenda 3: Pedantry</h3>

<blockquote>
  <p>Why you wanna change my codes? What are you some kinda pedant?</p>
</blockquote>

<p>Code however you want.  I don&rsquo;t care, even a little.</p>

<p>Please just don&rsquo;t lie to people.  That&rsquo;s all I&rsquo;m asking.  It&rsquo;s such a
little bit of politeness.  It&rsquo;s not hard.  Just say true things,
instead of being a liar, that&rsquo;s all that this is about.</p>
