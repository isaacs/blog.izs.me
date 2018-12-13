---
date: 2013-02-27T17:41:00.000Z
redirect_from:
  - /post/44149270867/why-no-directorieslib-in-node-the-less-snarky/
  - /post/44149270867/
  - /post/44149270867/why-no-directorieslib-in-node-the-less-snarky
  - /post/44149270867
slug: why-no-directorieslib-in-node-the-less-snarky
title: 'Why No directories.lib in Node (the less snarky, too-long-for-twitter version)'
tumblrid: 44149270867
type: text
---
<p>This question comes up in Node occasionally:</p>

<blockquote>
  <p>Node peoples&hellip; is there any way to specify a root directory for my
  npm package so that I don&rsquo;t need require(&ldquo;mypackage/lib/foo&rdquo;)?</p>
</blockquote>

<p><i>— <a href="https://twitter.com/wycats/status/306570718102048768">wycats</a></i></p>

<p>In other words, you have a package directory structure like this:</p>

<pre><code>./package.json
./README.md
./test/some-tests.js
./lib/main.js  &lt;-- this is the package.json "main"
./lib/some-other-module.js
./lib/util/a-utility-module.js
./lib/etc....
</code></pre>

<p>Now, let&rsquo;s say that this package&rsquo;s name is <code>foo</code>.  You want to be able
to use foo&rsquo;s <code>some-other-module.js</code> file, outside of foo.</p>

<p>The way to do this in node is do write:</p>

<pre><code>var blah = require('foo/lib/some-other-module.js');
</code></pre>

<p>What <abbr title="and everyone else who requests this, of course">Yehuda</abbr>
would like to see is:</p>

<pre><code>var blah = require('foo/some-other-module.js');
</code></pre>

<p>The &ldquo;how&rdquo; here is simple: If you want a module in the root of your
package namespace, put the file in the root of your package folder.
It&rsquo;s a 1:1 mapping, so it&rsquo;s not hard to figure out how to get that
result.</p>

<h3>But I don&rsquo;t want to have so many files in the root of my package folder</h3>

<p>Ok.  <a href="http://howfuckedismydatabase.com/nosql/" title="I believe I did, Bob">So don&rsquo;t have so many files in
the root of your package folder.</a></p>

<p>If you must export multiple modules from a single package, then you
have a choice:</p>

<ol><li>Use an extra 4 characters in your <code>require()</code> statements, or</li>
<li>Just don&rsquo;t have so many exports.</li>
</ol><p>Many of us would suggest that <strong>in general</strong> you may want to consider
if those things actually are a part of the &ldquo;foo&rdquo; package, or if they
belong in a dependency, with their own tests, name, version, etc.</p>

<p>I am not personally so die-hard about &ldquo;one package = one file&rdquo;.
Occasionally there are internal things, and it&rsquo;s not so bad.  But, <strong>in
general</strong>, I <strong>tend</strong> to be of the opinion that if a module requires
its own individual unit tests, it probably should be its own package,
if only so that I can think of it as a separate thing and give it the
attention it clearly deserves.  If I&rsquo;m intending it to be used outside
of the main package, then it <strong>most likely</strong> needs its own tests, and
I&rsquo;ll package it up and make it a dep.</p>

<p>Note all the weasel words in the above paragraph!  There are lots of
exceptions to this rule.  But they don&rsquo;t fit on twitter, and in fact,
even the weasel words put my response way over 140 characters, and
so with the qualifications stripped out, it looks like a capricious
religion, unbound to factual realities of the imperfect world in which
real software development happens.</p>

<p>The world being imperfect as it is, you may well find yourself in a
state where you have multiple exports, and you don&rsquo;t have the time or
inclination to split them up into separate packages.  Sometimes the
Inappropriate Intimacy smell is less bad than the alternatives, it&rsquo;s
true.  Sometimes it&rsquo;s just a simple business decision; sometimes it&rsquo;s
less important to make it work right, than to make it work right now.</p>

<p>In that case, put <code>"lib/"</code> in your <code>require()</code> statement.  It&rsquo;s not
that hard, really.</p>

<h3>But <abbr title="see what i did there?">WHY, cats</abbr>?</h3>

<p>The argument to <code>require()</code> maps directly to a file path.  If it
doesn&rsquo;t start with <code>./</code> or <code>../</code> and isn&rsquo;t absolute (ie, starts with a
<code>/</code> on unix, or any of a half dozen weird things on windows), then
node finds the closest <code>node_modules</code> folder with a thing by that
name, and that&rsquo;s the prefix.  But everything after the prefix is just
a direct filename.</p>

<p><i>(Aside: For historical reasons we do make the filename extension
optional, which is a deeply regrettable accident of history that I
would not repeat, given the chance.)</i></p>

<p>Let&rsquo;s look at the benefits, and the costs.</p>

<h4>Aesthetics</h4>

<p>The first benefit is removing 4 extra chars in some of the lines at
the top of some files.  This is rather small.  Even if you have 100
requires at the top of a module (which is very very many), and every
single one of them is diving into some other package&rsquo;s guts, you&rsquo;re
still talking about pushing the average line <em>length</em> out by 4 chars.
It&rsquo;s not adding extra lines; it&rsquo;s not pushing the line length out that
much.</p>

<p>If you cannot accept that, then put the files in the root of your
package.  If <strong>that</strong> is too ugly, well, then weigh the ugliness of
file clutter against the ugliness of lines that are 4 whole characters
longer.</p>

<p>The fact that this seems ugly is actually great, in my opinion.  <strong>You
usually shouldn&rsquo;t be writing programs like this.</strong>  Packages should be
exporting an interface that is designed for a purpose, and you should
be using them for that purpose.  This is basic software design.</p>

<p>Doing an ugly thing should look ugly.  There may be reasons to do the
ugly thing, of course, and no one is saying that you&rsquo;re a bad person
for doing it, but the ugliness of the code should be a thing that you
notice, so that you can avoid ignoring the ugliness of the design.
There is a reason we evolved to find plump brightly colored fruit more
appealing than wrinkled moldy fruit.  There is a reason we evolved to
be more able to ignore pleasure than pain.</p>

<p>In other words, your aesthetics are trying to help you.  Saying &ldquo;it&rsquo;s
ugly&rdquo; is an argument <em>against</em> adding this feature, not for it.</p>

<h4>(Alleged) Portability</h4>

<p>Let&rsquo;s say that you want to have something like this:</p>

<pre><code>./lib/node/module.js
./lib/browser/module.js
./lib/ringo/module.js
./lib/narwhal/module.js
</code></pre>

<p>Then, I want to say &ldquo;Node should use <code>lib/node</code>, Ringo should use
<code>lib/ringo</code>, and the browser should use <code>lib/browser</code>, so when I do
<code>require('foo/module.js')</code>, I get the right one for my environment.</p>

<p>First of all, that&rsquo;s very trivial to do without making the mapping of
require arguments to filenames any more complicated.  Create a file
like this:</p>

<pre><code>// module.js
switch(getPlatform()) {
  case 'node':
    module.exports = require('./node/module.js');
    break;
  case 'ringo':
    module.exports = require('./ringo/module.js');
    break;
  case 'narwhal':
    module.exports = require('./narwhal/module.js');
    break;
  default:
    module.exports = require('./browser/module.js');
    break;
}

// This can of course be simplified.
// Usually something like this is sufficient:
// if (typeof window === 'object')
//   return module.exports = require('./browser.js');
</code></pre>

<p>If you find yourself doing this a lot, maybe ask yourself if you&rsquo;re
using the best abstractions, or maybe trying to make something
portable that is fundamentally platform-specific.  Maybe try
supporting fewer platforms.</p>

<p>Or, maybe, just do the ugly thing, and let it be ugly, and accept that
it&rsquo;s a net benefit in your case.  But if your request is &quot;Make
platform-specific module behavior forking less ugly&rdquo;, then we&rsquo;re back
to aesthetics, and my answer is, &ldquo;Ew.  No.  That&rsquo;s gross, and it
should look gross.&rdquo;</p>

<h3>Priorities</h3>

<p>The cost of adding this feature is that the mapping from your
<code>require()</code> statements to the actual file with the code in it, is more
complicated.</p>

<p>Yes, it&rsquo;s &ldquo;only one extra file to look in&rdquo;.  But &ldquo;looking in files&rdquo;
isn&rsquo;t the hard part.  The hard part is remembering which packages
mapped in which ways, and thus knowing where to follow the train of
logic, when you&rsquo;re juggling a bunch of other peoples&rsquo; code in your
head for the first time, while trying to debug a problem as fast as
possible because it&rsquo;s preventing actual human beings from doing what
they are trying to do, and they give exactly zero fucks about the
ugliness of your <code>require()</code> statements.</p>

<p>Adding &ldquo;one extra file to look in&rdquo; doubles the number of files to look
in, and much more than doubles the cognitive overhead of debugging
problems in code you didn&rsquo;t write.</p>

<p>Debugging problems in code you <em>did</em> write is pretty easy.  That&rsquo;s not
what I&rsquo;m talking about.  I&rsquo;m talking about the case where <strong>I&rsquo;m</strong>
debugging <strong>your</strong> code, because I&rsquo;m using your module in my website,
and my website is misbehaving.</p>

<p>If this seems like a trivial complaint, then you have either never
been in this situation, or you are smarter than I am.  Either way,
consider yourself blessed, because it&rsquo;s a shitty situation, and I&rsquo;ve
been in it, and I&rsquo;m not smart enough for it to be trivially solved,
and I wrote most of the code that did all this shit.</p>

<p>Few remember, because the node community was about 1/100th the size at
the time, but npm used to support this feature (and also the &ldquo;modules&rdquo;
hash, which allowed arbitrary mapping of module names to files, and
was significantly worse.)  Even fewer people were actually running
production sites at the time in Node, and of those that were, most
just wrote everything from scratch, because there was much less of an
ecosystem to draw on.</p>

<p>Ryan and I were among the people building things in Node at Joyent,
and trying to actually Do The Right Thing, and use npm and the
community module ecosystem in the way it was intended.  The first time
we had to debug something like this, where <abbr title="I don't  remember which ones, sorry">a few modules</abbr> actually used
<code>directories.lib</code>, we both were convinced that it was a terrible idea,
and had to go.</p>

<p>Around that time, we started conceiving the module system for Node
v0.4, which is what we have now.  We moved the <code>node_modules</code> lookup
stuff into node core, and stripped out the module hash and
directories.lib features from npm.  Moving <code>node_modules</code> lookup into
core meant that npm could stop using symlinks and shims all over the
place to implement isolated deps.</p>

<p>Again, if you think that this cost is not relevant, then I have
nothing but respect and blessings for you.  Either you&rsquo;re much better
at this stuff than I am, or you&rsquo;ve suffered less of the hell of other
peoples&rsquo; bugs.  Either way, mad props.</p>

<p>Making the node module system any more complicated than it is will
make my life noticeably worse, and I don&rsquo;t think I am alone in this.
As I am in a position to prevent that reduction in Node quality of
life, and as that is my job, I will prevent it.</p>

<p>The Node module system is
<a href="http://nodejs.org/api/documentation.html#documentation_stability_index">frozen</a>
for a reason.  It will not change to add new features, ever.  It&rsquo;s
done, and not open for discussion.</p>

<h3>Addendum:</h3>

<blockquote>
  <p>@izs Would like to hear more about why omitting the filename
  extension in require statements was a mistake.</p>
</blockquote>

<p><i>— <a href="https://twitter.com/jimmycuadra/status/306835283700224000">jimmycuadra</a></i></p>

<p>Answer:</p>

<p>It quadruples the number of <code>stat(2)</code> calls, makes the 1:1 mapping
more vague, and complicates implementation. Slower, greater
complexity, etc.</p>

<p>However, the cost of removing this feature is nowhere near the benefit
of not having it, so it stays for backwards compatibility.  C'est la vie.</p>
