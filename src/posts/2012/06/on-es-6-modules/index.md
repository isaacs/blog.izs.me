---
layout: layouts/post.njk
date: 2012-06-26T04:25:00.000Z
redirect_from:
  - /post/25906678790/on-es-6-modules/
  - /post/25906678790/
  - /post/25906678790/on-es-6-modules
  - /post/25906678790
slug: on-es-6-modules
title: On ES 6 Modules
tumblrid: 25906678790
type: text
---
<p><i>Note: This was written quite some time ago.  The current ES6 Module specification has changed a lot since then, and many of my complaints have been addressed.  Treat this essay as a piece of history.  <a href="#module-essay">click here to acknowledge this caveat and read the essay.</a></i></p>

<hr><div id="module-essay" class="hidden-content">
<p>A few things have rubbed me the wrong way about the current Modules and
Module Loader specification.  I regret that I have not been very clear
about what exactly my objections are, and worse still, I have not been
very clear about what I think a better direction would be.</p>
<p><strong>Yes, this will be sent to ES-Discuss as a proper discussion
proposal.</strong> This blog post is phase three of getting my ideas in order.
(The first being &ldquo;get annoyed that current proposals don&rsquo;t fix the
problem&rdquo;, and the second being &ldquo;rant about it with friends and
colleagues on twitter and over tacos.&rdquo;)</p>
<p>First of all, I want to put to rest any ideas that I&rsquo;m a die-hard
JavaScript language conservative ideologue who will oppose any change
whatsoever.  I am well aware that what we have is lacking.  I would love
to see changes that make it easier to write JavaScript module systems,
and debug programs that use them.</p>
<p>I believe that there is a place for new syntax, especially in cases
where it allows for optimizations in the implementation, ease of
reading, or run-time behavior that must occur before the program is
executed (that is, static analysis stuff.)  Parsing a plain-old
JavaScript AST is certainly possible, but it&rsquo;s a bit unfortunate.</p>
<p><a name="module-problems"></a>We&rsquo;ve spent a few years now doing modules in JavaScript.  The claim that
&ldquo;JavaScript needs modules&rdquo; is thus somewhat misguided: JavaScript needs
<strong>better</strong> modules.  Leaving aside Node.js for the moment, modular
systems in JavaScript generally:</p>
<ol><li>Impose boilerplate restrictions on the programmer.  This is ugly and
error-prone, and there is no easy way to catch many of these errors
early.</li>
<li>Are not inter-operable with code that uses a different module system
(or none at all).</li>
<li>Either require that all modules be present in the page at the start,
or delay the execution of the program unacceptably.  (No one does
sync XHR.  I&rsquo;m talking about r.js/AMD and the YUI3 seed file here.)</li>
<li>Leaks internal implementation details in unfortunate ways, so that
users are sometimes surprised when behavior violates intuitions.</li>
<li>Do not isolate global leakage, making a missing <code>var</code> a felony, when
it shouldn&rsquo;t even be a misdemeanor.  (At best, they wrap in a
function.)</li>
<li>To varying degrees, line and column numbers are obscured.  (Sometimes
just the first line&rsquo;s column; sometimes the stack traces are
completely meaningless.)</li>
</ol><p><strong>All</strong> of these problems are issues with Node.js as well!  We paper
over #3 by using a package manager and requiring that the modules in
your program are available on the disk at the start, but it&rsquo;s still in
my opinion unacceptable.  We have the advantage of &ldquo;startup time&rdquo; and
&ldquo;run time&rdquo; separation, but really, <code>&lt;script&gt;</code> tags are a web browser&rsquo;s
&ldquo;startup time&rdquo;, and the rest of the time is its &ldquo;run time&rdquo;.  Build
processes allow one to trade run-time delay (and complexity) for
up-front download size (and a simpler synchronous <code>require()</code>), but
generally only by making the other problems worse.</p>
<p>TC-39 has one chance to specify a Module system that can address each of
these issues, or allow host platforms to address them effectively.
Problems introduced here will be with us forever.  A half-way fix will
be prohibitively expensive to fix once it&rsquo;s in use, so we&rsquo;ll be stuck
with mistakes for some time (as we in Node.js are stuck with the
mistakes in our system.)</p>
<h2 id="the-good-in-the-current-spec">The Good in the Current Spec</h2>
<p>Though I think it has deep problems, there are very good parts in the
current spec:</p>
<ol><li>It clearly is <em>attempting</em> to reach a module system that addresses
the needs of Node.js (and whatever on-device JavaScript platforms
succeed it), as well as those of browser-JavaScript authors and
platforms like RequireJS and Browserify.</li>
<li>The issues around globals and scope are pretty solid.  I don&rsquo;t have
much to complain about there.  Any changes to global behavior come
along with a pile of edge cases, but they&rsquo;re pretty thorougly
evaluated and addressed.</li>
<li>The goals of both the Module and Loader proposals had me pretty much
cheering.  It seems like TC-39 is actually interested in solving a
problem, and that gives me hope.</li>
</ol><p>More than anything, reading the spec makes it clear that the <em>problem</em>
is fairly well understood.  However, the presented <em>solution</em> seems to
be headed in the wrong direction.</p>
<h2 id="problems-with-the-current-spec">Problems with the Current Spec</h2>
<p>I&rsquo;m not going to go through the issues that I have with the current
spec one by one.  It&rsquo;s tedious and not the conversation we should be
having.  I&rsquo;ll detail my alternative proposal below.</p>
<p>However, there are a few points I&rsquo;d like to highlight, because they are
issues that probably ought to be informed by the experience that I and
other module system authors and users can provide.</p>
<ol><li><p><strong>It seems to be based on the assumption that nesting module systems is
a thing that people want.</strong>  Historically, in Node, we&rsquo;ve made several
API decisions based on the <em>explicitly stated requests</em> to make the
module system more extensible and flexible.  In practice, none of the
supposed innovation panned out, and every one of those decisions was
a huge mistake that increased flexibility with no tangible benefit.</p>
<p> People don&rsquo;t want to write module systems.  People want to <strong>stop</strong>
 writing module systems.  Once there&rsquo;s a module system in place, it
 should be The module system, period.</p>
<p> It bears repeating: <strong>no one wants to write a module system</strong>.  A
 few of us take it on out of regrettable necessity.  Anyone who
 actually <strong>enjoys</strong> writing module systems is too insane to be
 trusted.  The only rational position is to do the simplest necessary
 thing, and as quickly as possible get to the business of building
 real programs with it.  Optimize for that.</p>
</li>
<li><p><strong>It puts too many things in JavaScript (as either API or syntax)
which belong in the host (browser/node.js).</strong>  As I said, people
don&rsquo;t actually want to write module systems in their JavaScript
programs.  They want to stop having to think about it.  Node&rsquo;s module
system has been successful (as has require.js and browserify)
precisely because it requires a minimum amount of <em>thought</em> on the
part of the user about the module system.  (It&rsquo;s still way too much.)</p>
<p> Adding features that add complexity with the goal of making it
 easier to have lots of module systems in JavaScript is a mistake.
 Typically we can enable extension more effectively by <strong>reducing</strong>
 the scope of the specification, rather than by increasing it.</p>
</li>
<li><p><strong>It borrows syntax from Python that many Python users do not even
recommend using.</strong>  The <code>import * from mod</code> syntax is dated and
highly contentious in the Python community (as is <code>import com.foo.*</code>
in Java), because it is a recipe for name collisions.  Learning from
real implementations is winful; but we should be avoiding their
mistakes, not copying them.</p>
<p> Furthermore, <code>let</code> already gives us destructuring assignment.  If
 a module exports a bunch of items, and we want several of them, then
 do <code>var {x,y,z} = import 'foo'</code> or some such.  This <code>import &lt;x&gt; from
 &lt;module&gt; as &lt;blerg&gt;</code> is 100% unnecessary, adds nothing, and solves
 no problems.  It does not pay its utility bill.</p>
</li>
<li><p><strong>It favors the &ldquo;object bag of exported members&rdquo; approach, rather
than the &ldquo;single user-defined export&rdquo; approach.</strong>  Node.js uses an
<code>exports</code> object because the CommonJS approach seemed like a good
idea at the time, and it works around the fact that we have no good
way to handle transitive dependencies except via unfinished objects.</p>
<p> However, it is widely acknowledged in the node community that using
 the <code>module.exports = xyz</code> style generally results in better
 programs.  Changes at the language level can likely address the
 transitive loading issue more powerfully, and so should encourage
 the known best practices.</p>
</li>
</ol><h2 id="a-simpler-proposal">A Simpler Proposal</h2>
<p>Clearly, the problems with the current state of JavaScript modules
cannot be solved with zero changes to the language.  Some cannot be
changed without adding syntax.  However, every change carries with it a
cost.  Therefor, it seems like the ideal approach is to try to find the
minimum possible change that will address the issues &ndash; and, we ought to
be ruthless on which bits of functionality don&rsquo;t make the cut to be
worth the risk.  If we can get away with a much smaller fix by refusing
to address part of the problem which is inessential, then that is the
right course of action.</p>
<p>I don&rsquo;t know if this is minimal enough, but I&rsquo;d like to propose the
following, which I think picks some of the most essential aspects of the
Loader and Module proposals.  It&rsquo;s very rough, and there are a lot of
unanswered questions.  But in general, this is what I would like to see
from a Loader specification.</p>
<p><strong>This is very rough, and needs a lot of polish and edge-case
exploration.</strong>  I&rsquo;m not pitching it to get it accepted, I&rsquo;m sharing it
to hopefully help pull the conversation in another direction, and help
make it clear what a better proposal might look like.</p>
<p>(I&rsquo;ve numbered them simply so that I can refer to bits later, not so
much because they&rsquo;re a list of like things in order.  I&rsquo;m a spec n00b.)</p>
<ol><li><p>A <code>Loader</code> built-in object, with a few methods that must be
specified before modules can be used.  (And will typically be
specified by the host object.)</p>
</li>
<li><p>Within a module, the <code>import &lt;pathString&gt;</code> syntax that can be easily
detected statically in program text before evaluation, and returns a
module&rsquo;s exported object.  <code>var foo = import 'path/to/foo.js'</code>.
Import returns a single value, always.  The path must be a string
literal.  The import keyword is an operator, not a function, and thus
cannot be assigned etc.</p>
</li>
<li><p><code>Loader.define(&lt;path&gt;, &lt;program text&gt;)</code> defines a module at the
specified <code>&lt;path&gt;</code>, with the <code>&lt;program text&gt;</code> contents.  That
<code>&lt;program text&gt;</code> is statically analyzed for any <code>import</code> statements.</p>
</li>
<li><p>Whenever an <code>import &lt;path&gt;</code> is encountered in <code>&lt;program text&gt;</code> then
the <code>Loader.resolve(requestPath, callerPath, callback)</code> is called.
This method should return a fully qualified path.  If this method
returns boolean <code>true</code>, then it will not be considered resolved until
the callback is called.  (The argument to the callback is the string
path.) If it does not return true, and does not return a string path,
then this is an error, and throws.</p>
</li>
<li><p>Once a module is resolved to a full path string, then
<code>Loader.load(fullPath, callback)</code> is called.  <code>callback</code> should not
be called until <code>Loader.define(fullPath, contents)</code> is called.
This should be called at most once for any given <code>fullPath</code>.  (Is the
callback even necessary?  Why not just wait for <code>Loader.define</code> and
throw any errors encountered?)</p>
</li>
<li><p>The <code>Loader.main(fullPath)</code> method executes the module referenced by
<code>fullPath</code> (which must have already been defined), as well as
evaluating each of the modules that it imports.</p>
</li>
<li><p>Within a module, the <code>export &lt;expression&gt;</code> statement marks the result
of <code>&lt;expression&gt;</code> as the exported value from the module.  <strong>There can
be at most one export statement in a module</strong>, and the exported
expression is the module&rsquo;s export.  To export more than one thing,
export an object with more than one thing on it.</p>
<p> Modules export a single value.  Exporting a second time throws.</p>
<p> Maybe this is not a valid cause for syntax addition.  I&rsquo;m not sure.
 There are hairy problems around cyclic dependencies, so it&rsquo;s worth
 at least having the option to address with static magic that has not
 yet been fully imagined.</p>
</li>
<li><p>The global object within a module context is equivalent to
<code>Object.create(&lt;global&gt;)</code> from the main global context.  (The
important thing is that leaks aren&rsquo;t leaky outside the module, but
for example, <code>x typeof Error</code> still works, because it uses the same
Error function.)</p>
</li>
<li><p>If a module does not contain an <code>export</code> statement, then its global
object is its export.  This is to provide support for legacy modules
that create a global object (such as <code>jQuery</code>) rather than using an
export statement.  (Too magical?  Probably.  Also, what about having
exports inheriting from global is weird.  Is there a simpler way to
make existing libs place nicely with this approach?)</p>
</li>
</ol><p>The default values of <code>Loader.load</code>, <code>Loader.define</code>, and
<code>Loader.resolve</code> would typically be set by the host environment.
However, for reasons of simplicity, they <strong>must</strong> be set in normal
program text (ie, not in a module), and modules should not have the
ability to alter them.</p>
<p>In web browsers, modules could be defined straight away by using a new
attribute on the script tag: <code>&lt;script module
src='http://src.com/foo.js'&gt;&lt;/script&gt;</code> would be equivalent to doing
<code>Loader.define('http://src.com/foo.js', '&lt;contents of foo.js&gt;)</code>.</p>
<p>Bundler programs could trivially translate files into modules using
Loader.define (rather than wrapping in a IIFE), or JavaScript files
could be loaded as-is, without requiring that existing libraries begin
using any <code>module { ... }</code> syntax.</p>
<h2 id="in-web-browsers">In Web Browsers</h2>
<p>Web Browsers could implement the Loader object thusly:</p>
<ul><li><code>Loader.resolve(request, from)</code> Uses standard URL-resolution rules.</li>
<li><code>Loader.define</code> could be sweetened by a <code>&lt;script module&gt;</code> tag.</li>
<li><code>Loader.main</code> could be set via a <code>&lt;script module main&gt;</code> tag.</li>
<li><code>Loader.load</code> could fetch the URL, and evaluate the contents, as if it
had been added to the document with a <code>&lt;script module src=...&gt;</code> tag.</li>
</ul><p>For additional extensibility, these methods could be overridden by, for
example, browserify or RequireJS.</p>
<p>For security, the Loader object could be frozen with <code>Object.freeze</code> to
prevent additional changes.</p>
<p>I&rsquo;m in no way attached to the specifics of the tag spelling.  My point
is that we in the JS community should specify the loader semantics, and
then let host objects take advantage of them in application-specific
ways.</p>
<h2 id="in-require-js">In Require.JS</h2>
<p>RequireJS and other AMD platforms would be pretty much made mostly
obsolete by this specification, since the principle of AMD would just be
&ldquo;how it works&rdquo; in web browsers by default.  But, without the unfortunate
boilerplate, and the resource loading mechanism could kick off much
sooner, since <code>import</code> statements can be detected long before the script
is actually run.</p>
<h2 id="in-browserify">In Browserify</h2>
<p>Most browserify modules would Just Work if they replaced <code>require(..)</code>
with <code>import ..</code>.  However, it would probably be necessary to extend the
<code>Loader</code> methods to provide shims for Node.js built-ins (ie, path, fs,
url, assert, net, http, etc.) as well as pre-define <code>node_modules</code>
dependencies into the browserify bundle.</p>
<p>However, Browserify&rsquo;s static analysis build step could be made much more
effective by using a designated <code>import</code> operator rather than relying on
knowledge of a <code>require</code> function.</p>
<h2 id="in-node-js">In Node.js</h2>
<ul><li><code>Loader.resolve(request, from)</code> would do the current <code>node_modules</code>
and <code>NODE_PATH</code> dance.</li>
<li><code>Loader.define</code> would replace the existing module wrapper stuff.</li>
<li><code>Loader.main</code> would be called on the module specified as a command
line argument.</li>
<li><code>Loader.load</code> would be very straightforward FS operations.</li>
</ul><p>This would also set the stage for making node-core itself more modular,
and we could even explore new approaches like detecting module
dependencies from code, rather than requiring the use of a
<code>package.json</code> file, which is very exciting.</p>
<h2 id="what-s-missing-from-this-proposal">What&rsquo;s Missing from this Proposal</h2>
<p>There is no <code>module</code> syntax in this &ldquo;module&rdquo; proposal.  That is because
it is unnecessary, and its omission is intentional.</p>
<p>A lot of work has also been done on the Harmony Module Loader proposal
to flesh out some details of the Loader object.  Most of this is good
stuff.  However, by removing the Module syntax portion of the proposal,
a lot of those things can be streamlined.</p>
<p>It&rsquo;s also worth mentioning that this approach make sourcemaps
unnecessary for useful stack traces, even in bundled or concatenated
code, as the <code>Loader.define()</code> syntax would function as a sourcemap.</p>
<p>While the experience in the wild has shown us that the &ldquo;export one
thing&rdquo; approach is definition sound, I&rsquo;m not sure exactly how to handle
the transitive dependency issue in a way that doesn&rsquo;t involve unfinished
objects, or cause breakage in cases like this:</p>
<pre><code>// x.js
var y = import './y.js'

// y.js
setTimeout(function() {
  export { fooled: 'you' }
}, 100)
</code></pre><p>Even more insidious is something like this:</p>
<pre><code>// x.js
var y = import './y.js'
export { real: 'x' }

// y.js
var x = import './x.js'
assert.deepEqual(x, {real: 'x'}) // nope!!
</code></pre><p>Because <code>x</code> sets its export <em>after</em> being loaded by <code>y</code>, the assignment
does nothing. Currently, in Node.js (and most other systems as well)
this is not handled, or not handled very well at least.</p>
<p>Is there some way that it could somehow pass an object to the <code>x</code> module
that would get swapped out behind the scenes when <code>y.js</code> changes its
export?  Is that too magical?  I&rsquo;m not sure.</p>
<h2 id="next-">Next&hellip;</h2>
<p>My hope is that this post will help spark a more interesting
conversation than the current tendency towards &ldquo;YAY/BOO&rdquo; that is so
common in the internet.  This isn&rsquo;t politics.  We&rsquo;re not voting for
parties.  The goal is to figure out the best API, which is a complex
thing.  The solution space is wide, and it is naive to reduce it to a
boolean prematurely.</p>
<p>I would like to try out some implementations of this in Node.js as soon
as possible.  Also, I&rsquo;d love to hear feedback about which parts of this
you think are unnecessary or impossible.</p>
<p>Let&rsquo;s not forget that we all want these problems solved.  No reasonable
person thinks that JavaScript programs are optimally modular today.
Most people who enjoy Node&rsquo;s module system only like it because they&rsquo;ve
never taken a close look at it.  As one of its maintainers and chief
architects, I feel qualified to say that it&rsquo;s pretty terrible.  (Though,
in my opinion, it is the best I&rsquo;ve used, and the only that is optimized
for maximum utility and an absolute intolerance for boilerplate.  It&rsquo;s
just that the language is lacking, but that&rsquo;s what this is all about.)</p>
<p>Not every change is an improvement, but every improvement is a change.
My friends in the &ldquo;no new syntax&rdquo; crowd would do well to remember that.</p>
<p>That being said, since JavaScript cannot be easily changed, and can only
be changed in one direction, we must be very careful to make sure that
every change <strong>is</strong> an improvement.  It&rsquo;s more important to proceed
carefully than to proceed quickly.</p>
<p>Future generations will thank us for our care, and curse us for our haste.</p>
</div>
