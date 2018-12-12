---
date: 2013-08-23T23:06:00.000Z
redirects:
  - /post/59142742143/designing-apis-for-asynchrony
  - /post/59142742143
slug: designing-apis-for-asynchrony
title: Designing APIs for Asynchrony
tumblrid: 59142742143
type: text
---
<p><i>New 2014-06-30: You can contain Zalgo with the <a href="http://npm.im/dezalgo">dezalgo module</a></i></p>

<p>Some people asked me to explain what <a href="http://lists.w3.org/Archives/Public/public-webapps/2013JulSep/0355.html">I
meant</a>
by &ldquo;releasing Zalgo&rdquo; in async APIs, so I thought I&rsquo;d share
the following guidelines.</p>

<p>Please follow all of these rules in your programs.  If you deviate
from them, you do so at the peril of your very sanity.</p>

<h3>Get Over Your Provincial Boilerplate Preferences</h3>

<p>Personally, I don&rsquo;t actually care all that much about the whole
promises/callbacks/coroutines/generators debate.  It&rsquo;s provably
trivial to turn any callback-taking API into a promise-returning API
or generator-yielding API or vice-versa.</p>

<p>I&rsquo;m of the opinion that breaking functionality into small enough
chunks that your boilerplate doesn&rsquo;t <em>matter</em> is much more important
than <em>which</em> boilerplate you decide tastes the yummiest.  In
JavaScript, we have first-class language support for passing functions
around, so I tend to use callbacks, simply because it requires no
extra &ldquo;stuff&rdquo;.</p>

<p>What&rsquo;s important to me is that an API be useful, performant, and easy to
reason about.  When I&rsquo;m writing JavaScript, I care a lot about how
V8 is going to optimize it, and so try to choose patterns that it can
optimize nicely.  As of today, generators just aren&rsquo;t first-class
enough, and Promises require an extra abstraction.  That may change
someday, but these principles probably will not.</p>

<p>So, I&rsquo;m going to say &ldquo;callbacks&rdquo; below, but you can mentally
substitute whatever thing you like.  The fundamental points are
equally relevant if you&rsquo;re using threads, or gotos, or any other
abstraction or language for doing things asynchronously and
controlling what the computer does next.</p>

<p>Note that all of this <em>also</em> applies if your asynchronous API &ldquo;looks
synchronous&rdquo;.  Even if you design a thing so that I do:</p>

<pre><code>x = foo();</code></pre>

<p>and it&rsquo;s completely agnostic at authoring time whether <code>foo()</code> spins
on CPU or yields while it awaits a network response, being able to
reason about the program means that I need to be able to know whether
<em>other</em> parts of the program will be running while I&rsquo;m waiting for
<code>foo()</code> to return a value to be put into <code>x</code>.</p>

<p>So, even if the <em>syntax</em> is the same (which has its benefits as well
as its drawbacks, of course), the <em>semantics</em> must be crisply defined.</p>

<p>Or else Zalgo is released.</p>

<h3>Do Not Release Zalgo</h3>

<p>Warning: Before proceeding any further, <a href="http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/">go read this excellent essay
by
Havoc</a>.</p>

<p>If you haven&rsquo;t read <a href="http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/">Havoc&rsquo;s post on
callbacks</a>,
then you will perhaps be tempted to make silly arguments that make no
sense, and demand justification for things that have been established
beyond any reasonable doubt long ago, or tell me that I&rsquo;m overstating
the issue.</p>

<p>Have you <a href="http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/">read Havoc&rsquo;s post on
callbacks</a>?
Yes?  Ok.</p>

<p>If you didn&rsquo;t, shame on you. <a href="http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/">Go read
it.</a>
If you still haven&rsquo;t, I&rsquo;ll sum up:</p>

<blockquote>
<p>If you have an API which takes a callback,<br/>and <em>sometimes</em> that callback is called immediately,<br/>and <em>other times</em> that callback is called at some point in the future,<br/>then you will render any code using this API impossible to reason
about, and cause the release of <a href="http://knowyourmeme.com/memes/zalgo">Zalgo</a>.</p>
</blockquote>

<p>Needless to say, releasing Zalgo onto unsuspecting users is extremely
inappropriate.</p>

<p>It&rsquo;s not the case that function-taking APIs must always call the
function asynchronously.  For example, <code>Array.prototype.forEach</code> calls
the callback immediately, before returning.  <em>But then it never calls
it again.</em></p>

<p>Nor is it the case that function-taking APIs must always call the
function synchronously.  For example, <code>setTimeout</code> and friends call
the callback after the current run-to-completion.  <em>But they always
return before calling the callback.</em></p>

<p>In other words, to avoid the release of Zalgo, exactly one of the
following must be true:</p>

<pre><code class="lang-javascript">var after = false;
callbackTaker(function() {
  assert(after === true);
});
after = true;</code></pre>

<p>OR:</p>

<pre><code class="lang-javascript">var after = false;
callbackTaker(function() {
  assert(after === false);
});
after = true;</code></pre>

<p>and in no case can you ever have a function where exactly one of these
assertions is not guaranteed.</p>

<h4>What about internal functions in my library that are not exposed?</h4>

<p>Well, ok, but you&rsquo;re releasing Zalgo in your internal library.  I
don&rsquo;t recommend it.  Zalgo usually finds a way to sneak His Dark͝
Tend̴r̡i҉ls out into the world.</p>

<h4>What if I suspect that a function might try to release Zalgo?</h4>

<p>This is a great question.  For example, perhaps you let users supply
your library with a callback-taking function, and you worry that they
might be incompetent or careless, but want to ensure that <em>your</em>
library does its best to keep Th͏e Da҉rk Pońy Lo͘r͠d HE ́C͡OM̴E̸S contained
appropriately.</p>

<p>Assuming that your platform has an event loop or some other kind of
abstraction that you can hang stuff on, you can do something like
this:</p>

<pre><code class="lang-javascript">function zalgoContainer(cbTaker, cb) {
  var sync = true;
  cbTaker(cbWrap);
  sync = false;

  function cbWrap(er, data) {
    if (sync)
      process.nextTick(function() {
        cb(er, data);
      });
    else
      cb(er, data);
  }
}</code></pre>

<p>This uses Node&rsquo;s synthetic deferral function: <code>process.nextTick</code>,
which runs the supplied callback at the end of the current
run-to-completion.  You can also use <code>setImmediate</code>, but that&rsquo;s
slightly slower.  (Yes, yes, it&rsquo;s named badly; <code>setImmediate</code> is
slightly <em>less</em> &ldquo;immediate&rdquo; and more &ldquo;next&rdquo; than <code>nextTick</code>, but this
is an accident of history we cannot correct without a time machine.)</p>

<h4>But isn&rsquo;t it faster to just call the callback right away?</h4>

<p><a href="http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/">Go read Havoc&rsquo;s blog post.</a></p>

<p>Moving on.</p>

<h3>Avoid Synthetic Deferrals</h3>

<p>I know what you&rsquo;re thinking: <i>&ldquo;But you just told me to use
<code>nextTick</code>!&rdquo;</i></p>

<p>And yes, it&rsquo;s true, you should use synthetic deferrals when the only
alternative is releasing Zalgo.  However, these synthetic deferrals
should be treated as a code smell.  They are a sign that your API
might not be optimally designed.</p>

<p>Ideally, you should know whether something is going to be immediately
available, or not.  Realistically, you should be able to take a pretty
decent guess about whether the result is going to be immediately
available <em>most of the time</em>, or not, and then follow this handy
guide:</p>

<ul><li><p><strong>If the result is usually available right now, and performance
matters a lot:</strong></p>
<ol><li>Check if the result is available.</li>
<li>If it is, return it.</li>
<li>If it is not, return an error code, set a flag, etc.</li>
<li>Provide some Zalgo-safe mechanism for handling the error case
and awaiting future availability.</li>
</ol><p>Here&rsquo;s an silly example to illustrate the pattern:</p>
<pre><code class="lang-javascript">var isAvailable = true;
var i = 0;
function usuallyAvailable() {
  i++;
  if (i === 10) {
    i = 0;
    isAvailable = false;
    setTimeout(function() {
      isAvailable = true;
      if (waiting.length) {
        for (var cb = waiting.shift();
             cb;
             cb = waiting.shift()) {
          cb();
        }
      }
    });
  }

  return isAvailable ? i : new Error('not available');
}

function waitForAvailability(cb) {
  // Could also defer this and just call it,
  // but it is avoidable, which is the point.
  if (isAvailable)
    throw new Error("hey, dummy, check first!");
  waiting.push(cb);
}</code></pre>
<p>In this case, when the user calls <code>usuallyAvailable()</code> they&rsquo;ll get
a number between 0 and 9, 90% of the time.  It&rsquo;s on the caller to
check the return value, see if it means that they have to wait,
etc.</p>
<p>This makes the API a bit trickier to use, because the caller has
to know to detect the error state.  If it&rsquo;s very rare, then
there&rsquo;s a chance that they might get surprised in production the
first time it fails.  This is a communication problem, like most
API design concerns, but if performance is critical, it <em>may</em> be
worth the hit to avoid artificial deferrals in the common cases.</p>
<p>Note that this is functionally equivalent to
<code>O_NONBLOCK/EWOULDBLOCK/poll</code> pattern.  You try to do a thing,
and if it is not available right now, it raises an error, and you
wait until it IS available, and then try again.</p>
</li>
<li><p><strong>If the result is usually available right now, but performance
doesn&rsquo;t matter all that much</strong></p>
<p>  For example, the function might only be called a few times at
  startup, etc.</p>
<p>  In this case, just follow the &ldquo;result is usually not available
  right now&rdquo; approach.</p>
<p>  Note that performance actually does matter much more often than
  you probably realize.</p>
</li>
<li><p><strong>If the result is usually not available right now</strong></p>
<ol><li>Take a callback.</li>
<li>Artificially defer the callback if the data is available right
now.</li>
</ol><p>Here&rsquo;s an example:</p>
<pre><code class="lang-javascript">var cachedValue;
function usuallyAsync(cb) {
  if (cachedValue !== undefined)
    process.nextTick(function() {
      cb(cachedValue);
    });
  else
    doSomeSlowThing(function(result) {
      cb(cachedValue = result);
    });
}</code></pre>
</li>
</ul><p>The basic point here is that &ldquo;async&rdquo; is not some magic mustard you
smear all over your API to make it fast.  <strong>Asynchronous APIs do
not go faster.  They go slower.</strong>  However, they prevent <em>other</em> parts
of the program from having to wait for them, so <em>overall</em> program
performance can be improved.</p>

<p>Note that this applies to not just callbacks, but also to Promises and
any other control-flow abstractions.  If your API is frequently
returning a Promise for a value that you know <em>right now</em>, then either
you are leaving performance on the table, or your Promise
implementation releases H̵͘͡e ̡wh́o͠ ̶Prom̀͟͝i̴s̀es̀ o҉̶nl̨͟y̧ ̛̛m̴͠͝a̡̛͢d̡n̴̡e͝s̸s͠,
T̢҉̸h̴̷̸̢ȩ͡ ͘͠N͢͢e͏͏͢͠z̛͏͜p̸̀̕͠ȩ́͝͝r҉̛́͠d̴̀i̴̕҉͞a̴̡͝͠n̢͜͟͢͟ ̶̴̢͝h̷̕͠í̸̧̛͜v̶̢͢͡e̕͡-̸̀͝m̷͜i̛͘͞ņ̛͘͟҉d̶̶̡̧͜ ̷̛͞o̵̢͘͟͞f̶̢̀͢͢ ̶̧͟͡c̕͝h̶̀͘͘à͏o҉̴́͢s̸͘͘͝͞.̨͢͞.</p>

<p>So, don&rsquo;t do that.</p>

<h3>Pick a Pattern and Stick With It</h3>

<p>This really cannot be overstated.  Like the question of callbacks vs
Promises vs whatever, the specific pattern that you choose doesn&rsquo;t
matter very much.  What <em>does</em> matter very much is that you stick to
that pattern with ruthless consistency.  The pattern should cover how
a user interacts with your API, and how errors are communicated.</p>

<p>In Node.js, the callback pattern is:</p>

<ol><li>Async functions take a single callback function as their final
argument.</li>
<li>That callback is called in the future with the first argument set
to an <code>Error</code> object in the case of failure, and any additional
results as the subsequent arguments.</li>
</ol><p>Why have the callback as the last argument?  Why make Error the first
arg?  It doesn&rsquo;t really matter very much.  Ostensibly, making the
callback the last arg is because</p>

<pre><code class="lang-javascript">doSomething(a, b, c, d, function(er) {
  ...
})</code></pre>

<p>scans a bit better than:</p>

<pre><code class="lang-javascript">doSomething(function(er) {
  ...
}, a, b, c)</code></pre>

<p>and putting the error first is so that it&rsquo;s always in the same place.</p>

<p>There were other choices that could have been made.  But the important
thing was just to pick one, and move forward with it.  This
consistency makes it much less difficult to convert Node APIs into
other sorts of aync patterns, and greatly reduces the communication
required to tell a user how to use a Node.js callback-taking API.
 </p>
