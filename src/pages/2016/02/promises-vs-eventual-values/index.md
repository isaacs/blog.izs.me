---
date: 2016-02-02T21:26:01.000Z
redirect_from:
  - /post/138563331483/promises-vs-eventual-values/
  - /post/138563331483/
  - /post/138563331483/promises-vs-eventual-values
  - /post/138563331483
slug: promises-vs-eventual-values
title: Promises vs Eventual Values
tumblrid: 138563331483
type: text
---
<p>A few times on Twitter, I&rsquo;ve
<a href="https://twitter.com/izs/status/694321665430261760">complained</a> that
Promises are a poor conceptual stand-in for Eventual Values.</p>

<p>A colleague of mine pointed out that I tweet this or something like it
every few months.  He&rsquo;s correct, I do.</p>

<p>The responses usually flow in saying something to the effect of &ldquo;Well,
if you&rsquo;re not sure if a thing is a Promise or not, just use
<code>Promise.resolve(thing)</code> and now you&rsquo;re guaranteed to get either the
Promise, or a Promise that resolves to the thing.&rdquo;</p>

<p>And it&rsquo;s true, that is &ldquo;a&rdquo; solution of sorts.  It solves the &ldquo;I don&rsquo;t
know if this is a Promise or not&rdquo; problem by ensuring that you
definitely do have a Promise, and not a normal value.</p>

<p>My problem, though, is that I&rsquo;d really like to write code that
interacts with values, and not Promises, and leave the machinery to
the computer to work out.</p>

<h2 id="eventual-values">Eventual Values</h2>

<p>An Eventual Value is a value that is not yet resolved.  However, by
design, it is mostly indistinguishable from a &ldquo;normal&rdquo; value.  Here&rsquo;s
an example:</p>

<pre><code class="lang-javascript">// promise code
function add5 (x) {
  return x + 5
}

function add5Promise (x) {
  return Promise.resolve(x).then(function (x) {
    return add5(x)
  })
}

function someNumberLater () {
  return new Promise(function (resolve) {
    databaseConnector.get('numeric value').then(function (x) {
      resolve(x)
    })
  })
}

add5Promise(someNumberLater()).then(function (xplus5) {
  console.log('the number plus 5 is %d', xplus5)
})
</code></pre>

<p>With Eventual Values, this would look like the following:</p>

<pre><code class="lang-javascript">// eventual value code
function add5 (x) {
  return x + 5
}

function someNumberLater () {
  databaseConnector.get('numeric value'))
}

console.log('the number plus 5 is %d', add5(someNumberLater()))
</code></pre>

<p>If you imagine getting a few numbers, any of which might be as yet
unresolved, it&rsquo;s even more annoying:</p>

<pre><code class="lang-javascript">// promise code
function addThreeNumbers (x, y, z) {
  return Promise.all([x, y, z]).then(function (numbers) {
    return Promise.resolve(numbers[0] + numbers[1] + numbers[3])
  })
}

// eventual code
function addThreeNumbers (x, y, z) {
  return x + y + z
}
</code></pre>

<h3 id="criteria">Criteria</h3>

<ul><li>Eventual Values can be interacted with like normal values.</li>
<li>If an Eventual Value is part of a simple value operation, then that
expression resolves to a new Eventual Value which resolves when all
its Eventual Values are resolved.</li>
</ul><p>That&rsquo;s it.  You interact with Eventual Values as if they&rsquo;re normal
synchronous values, and the machine takes care of waiting where it&rsquo;s
necessary and appropriate.</p>

<h2 id="but-zalgo-">But Zalgo!</h2>

<p>Indeed, this is
<a href="http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony">Zalgo</a>&rsquo;s
purest form.  But let&rsquo;s clarify exactly what&rsquo;s wrong with the
maybe-sync anti-pattern.</p>

<p>The problem with Zalgo APIs is that they&rsquo;re hard to reason about.
Given code like this:</p>

<pre><code class="lang-javascript">someApi(function () {
  console.log('foo')
})
console.log('bar')
</code></pre>

<p>In a sync callback API, you know that this will always print out
<code>foo\nbar</code>.  In an async callback API, you know that this will always
print out <code>bar\nfoo</code>.  This predictability is important for human
brains.</p>

<p>This is why the built-in dezalgo of Promises A+ is so important.</p>

<pre><code class="lang-javascript">new Promise(function (resolve) {
  console.log('foo')
  resolve()
})
console.log('bar')
</code></pre>

<p>This code must either (a) always print <code>foo\nbar</code>, or (b) always print
<code>bar\nfoo</code>.  Since Promise resolution <em>can</em> be async, it <em>must</em> be
async all the time, or else this predictability constraint is
violated.</p>

<p>With Eventual Values, Zalgo is not a problem, because whether things
happen synchronously or asynchronously, they always happen in the same
predictable order.</p>

<pre><code class="lang-javascript">function getFoo () {
  return new Eventual(function (resolve) {
    setTimeout(function () {
      resolve('foo')
    })
  })
}

function getBar () {
  return new Eventual(function (resolve) { resolve('foo') })
}

console.log(getFoo())
console.log(getBar())
</code></pre>

<p>In this case, it will always print <code>foo\nbar</code>, even though <code>foo</code> is
resolved later, and <code>bar</code> is resolved immediately.  Eventual Values
behave like synchronous values.</p>

<h2 id="introspection-operators-etc-">Introspection, Operators, Etc.</h2>

<p>It&rsquo;d be nice to have some magic <code>isEventual</code> operator that could tell
you if a thing was already resolved or not.</p>

<p>Or even a <code>wasEventual</code> operator to tell you whether this thing you
have was ever waited upon.</p>

<p>But mostly, while it&rsquo;s great to be able to introspect programs, it&rsquo;s
even better not to have to <em>need</em> to introspect programs.  We don&rsquo;t
have memory address introspection in JavaScript, and no one seems to
mind.  Inspecting Eventual Values should be akin to peering into the
dark machinery of the VM; something that&rsquo;s useful once in a while, and
certainly interesting from an academic point of view, but not in the
normal day to day activities of the typical JavaScript programmer.</p>

<p>Language design is hard.  It may be that there&rsquo;s some really good
reason for at least having a special operator or something to say
&ldquo;Yes, I would like any Eventual Values to be resolved before calling
this function.&rdquo;  Maybe use <code>functionE</code> instead of <code>function</code>, I don&rsquo;t
know.  I don&rsquo;t care.  I just want to stop having to stick my nose in
the machinery.  Ideally, we&rsquo;d almost never have to care, because it
only matters at the very edges of a program, when data is sent to the
DOM, or written to a file or socket or terminal.</p>

<h2 id="implementation">Implementation</h2>

<p>This cannot be implemented in userland, nor should they be.  Eventual
Values are a language feature.  Promises are an API, and easy to
implement in userland.</p>

<p>Promises will never grow into Eventuals, because they are
fundamentally different things, even though they implement a similar
pattern.</p>

<h2 id="looking-async">Looking Async</h2>

<p>I&rsquo;ve argued in the past, quite forcefully, that synchronous code
should look synchronous, and async code should look async.  But again,
like Zalgo, let&rsquo;s not conflate &ldquo;a good rule of thumb for API design&rdquo;
with &ldquo;a language feature that would make our lives better&rdquo;.</p>

<p>If you dig one layer deeper, you find that the only reason
asynchronous code needs to look asynchronous is that we continually
rely upon our human brains to deal with the timing and synchronicity
of our programs.</p>

<p>In cases where we are relying on a meat brain to analyze a program, it
is extremely important for it to look like what it is.  There will
likely always be some API surfaces that are asynchronous, and even in
a world with Eventual Values, there is a place for APIs that are
creatively asynchronous, and they should look and behave like what
they are.</p>

<h2 id="anti-promises">Anti-Promises</h2>

<p>Promises are neat.  They&rsquo;re a terse and expressive way to chain
together a series of potentially asynchronous actions in a way that&rsquo;s
relatively easy for a meat brain to make sense of.</p>

<p>Also, it&rsquo;s quite nice how they invert control differently than
callbacks.  With a callback, the caller creates and passes a token to
the API, with the contract that the API provider will use that token
to indicate done-ness.  With Promises, the API provider creates and
passes a token to the caller, with the contract that the API provider
will use that token to indicate done-ness.</p>

<p>It&rsquo;s a subtle difference, but one that many people find easier to
reason about.  That&rsquo;s fine.</p>

<p>However, if you have a function that takes a list of arguments, any of
which may potentially be promises, and then needs to only act once all
of those promises are resolved, it gets tedious quite fast.  Promises
tend to expose quite a lot of boilerplate to the user in these types
of situations.  And, since the only straightforward solution is to
either turn all things into Promises, or manually check each for
Promise-ness, one potentially ends up introducing a lot of
<code>nextTick()</code> delays unnecessarily.</p>

<p>I don&rsquo;t dislike Promises.  But I do long for Eventual Values, and
Promises are not those.</p>
