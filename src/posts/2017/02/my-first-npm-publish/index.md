---
layout: layouts/post.njk
date: 2017-02-16T01:17:27.000Z
tags:
  - oss
  - npm
  - invention
redirect_from:
  - /post/157295170418/my-first-npm-publish/
  - /post/157295170418/
  - /post/157295170418/my-first-npm-publish
  - /post/157295170418
slug: my-first-npm-publish
title: My First npm Publish
tumblrid: 157295170418
type: text
via:
  name: npmjs
  title: The npm Blog
  url: 'https://blog.npmjs.org/post/157288221340/my-first-npm-publish'
---
<p>My first npm publish was unusual.  npm didn&rsquo;t exist at the time, so
that presented a bit of a challenge.</p>

<p>This is the story of helping to inventing a universe so that I could
<a href="https://www.youtube.com/watch?v=zSgiXGELjbc">make an apple pie from
scratch</a>.</p>

<h3>SSJS</h3>

<p>Back in 2009, I was working at Yahoo! as a Front-End Engineer.  That
meant that I wrote a lot of PHP and JavaScript.  I had just finished
a project where we had front-end components generated on the back-end
and shipped to the client based on some data being parsed into a
template, and then later on, on the front-end, do the same work in
JavaScript with the same templates and data services.</p>

<p>These days, that&rsquo;d be called &ldquo;fast boot&rdquo; or &ldquo;isometric templates&rdquo; or
something clever, but back in those dark days, it required tediously
maintaining two implementations of a view layer, one in PHP and the
other in JavaScript.  Maintaining the same thing in two languages was
downright awful.</p>

<p>&ldquo;Well&rdquo;, I figured, &ldquo;JavaScript is a language, and we can control
what&rsquo;s on the server, why not <em>just</em> run JavaScript on the server?&rdquo;</p>

<p>The state of the art in server-side JavaScript (SSJS) was Rhino on the
JVM.  The problem was, unless you compiled your JavaScript into JVM
bytecode using arcane special magicks, it was godawful slow.  I
started messing around with V8 and SpiderMonkey, thinking &ldquo;I want
something like PHP, but JavaScript&rdquo;.</p>

<p>The SSJS community at that time was a very different place than the
Node.js of today.  There were dozens of projects, any one of which
could&rsquo;ve seemed like it would be the breakout hit.
<a href="http://spiderape.sourceforge.net/">SpiderApe</a> and
<a href="https://code.google.com/archive/p/v8-juice/">v8-juice</a> were trying to
make it easier to embed spidermonkey and v8, and add a standard
library to each.  <a href="https://code.google.com/archive/p/v8cgi/">v8cgi</a>
(renamed to <a href="https://code.google.com/archive/p/teajs/">TeaJS</a>)
provided a CGI binding to use v8 in Apache2.  I started messing around
with <a href="https://github.com/sebastien/k7">K7</a>, which provided a bunch of
macros for using V8 in various contexts, and
<a href="https://github.com/tlrobinson/narwhal">Narwhal</a>, which was the only
one of these that seemed to be delivering a fully thought-out platform
for making programs.  There was also <a href="http://helma.org/">Helma</a> and
<a href="https://ringojs.org/">RingoJS</a>, and probably a bunch of others I&rsquo;m
forgetting.</p>

<p>A few years ago, we used to joke that every Node.js dev had their own
test framework and argument parser.  Well, in 2009, every server-side
JavaScript developer had their own SSJS platform.</p>

<p>The contributors to all of these platforms got together in a mailing
list and tried to form some kind of standard for server-side
JavaScript programming.  Front-end JavaScript has the DOM, so we
thought, and right now, writing server-side JavaScript suffers from a
dearth of portability.  What we need is a standards body, clearly!
This was initially called &ldquo;ServerJS&rdquo;, but then expanded its scope to
<a href="http://www.commonjs.org/">CommonJS</a>.</p>

<p>The first proper &ldquo;module&rdquo; I wrote in JavaScript was a port of a url
parser I wrote for YUI.  I landed it in Narwhal.  There was no
userland, really.  Just lots of little cores.</p>

<p>Some time later, in August of 2009, I gave <a href="https://web.archive.org/web/20091020193405/http://developer.yahoo.com/yui/theater/video.php?v=isaac-ssjs">a tech
talk</a>
about SSJS and demonstrated using Narwhal and Jack, a Rack-like thing
built on top of Narwhal, using the
<a href="https://en.wikipedia.org/wiki/JSGI">JSGI</a> protocol.</p>

<p>After the talk, one of the people in the audience asked if I&rsquo;d ever
tried out Node.js.  As it turned out, I had, but like so many SSJS
platforms:</p>

<ol><li>It had a single developer working on it, and no other contributors
or community.</li>
<li>The documentation was <a href="https://nodejs.org/docs/v0.0.2/">extremely
sparse</a></li>
<li>It failed to build on my mac laptop.</li>
</ol><p>Ergo: Not a thing.</p>

<p>&ldquo;I dunno,&rdquo; he said.  &ldquo;Maybe try it again.  It&rsquo;s pretty nifty.&rdquo;</p>

<p>He insisted that it was fast, and I was like, &ldquo;Meh.  JVM is fine.&rdquo;</p>

<h3>Node.js</h3>

<p>I checked the website again, and <a href="https://nodejs.org/docs/v0.0.6/#community">they&rsquo;d added a &ldquo;Community&rdquo;
section</a>.  Also, the docs
still sucked, but it was version 0.0.6 now, which was like, 4 more
than it was the first time I&rsquo;d checked, so whoever this Ryan guy was,
he was at least working hard on the thing.</p>

<p>It compiled successfully, and I was hooked!  It started up so fast
compared to Rhino!  And it had tests that ran when I did <code>make test</code>,
and they passed!</p>

<p>3 important lessons for OSS success:</p>

<ol><li>Docs and tests matter.</li>
<li>At least have a link to a mailing list or <em>something</em>.  (Remember:
this was before GitHub connected us all with Issues.)</li>
<li>It has to build and be fast.</li>
</ol><p>I gradually stopped paying much attention to CommonJS, and instead
just threw my efforts at Node.  I hung out on the mailing list and in
IRC during all my free time.</p>

<p>The problem with Node back then was that even though a growing number
of people were all writing really interesting programs, it was hard to
share them.  So, I wrote <a href="https://github.com/npm/npm/commit/4626dfa">this
thing</a>, which was a port of
a bash script I was using to play with people&rsquo;s code.</p>

<h3>The Registry</h3>

<p>Technically that wasn&rsquo;t &ldquo;publishing&rdquo; though.  In order to actually
<em>publish</em> to npm there had to be an npm registry.  Today, that
registry is a webservice at <a href="https://registry.npmjs.org/">https://registry.npmjs.org/</a>, run by
<a href="https://www.npmjs.com/">npm, Inc.</a>.  The first registry was a git
repo called &ldquo;npm-data&rdquo;.  I collected up the handful of modules that&rsquo;d
been shared from on the mailing list and in the Node.js wiki page, and
made a JSON file with links to them.</p>

<p>One principle of package management that I felt was really important
was that no one person should be the bottleneck in community growth.
Especially if that person is me.  Because I really hate that crap.</p>

<p>I don&rsquo;t mind working really hard on lots of challenging stuff, but if
I have to do some simple task over and over again, especially if other
people are depending on me to do it, it&rsquo;s like torture to me.  The
prospect of being in someone&rsquo;s critical path for deploying their
module was just&hellip; ugh.  Gross.</p>

<p>I needed a web service type thing that would let people publish
packages and then could download those packages and install them.</p>

<p>I got to talking to <a href="http://mikealrogers.com/">Mikeal Rogers</a>, who
worked at
<a href="https://www.crunchbase.com/organization/couch-io">Couch.IO</a>.  He
built <a href="https://github.com/npm/npm-registry-couchapp/commit/f7f5c93">the first npm registry
CouchApp</a>,
and got it functional.</p>

<p>Fun fact!  For a little while, anyone could publish any package, and
we relied on the honor system to keep anyone from clobbering
anyone else&rsquo;s name.  It was an ok system for a short while, since
there were only about 4 or 5 people in the world who knew this thing
existed, but we got an authentication and authorization system set up
before anyone could take advantage of it.</p>

<p>By that time, I&rsquo;d quit my job at Yahoo! and was taking a sabatical.
If you can afford it, I highly recommend saving up a little nest egg
and taking a few months off to see what comes out of you.  Muses
can be fickle, and tend to call when least expected.</p>

<h3>I know what you&rsquo;re thinking&hellip;</h3>

<p>You&rsquo;re thinking that the culmination of this story is that I published
npm to npm and that was my first npm publish, and it&rsquo;ll be super meta
and awesome like that.  It&rsquo;d be a beautiful punchline.</p>

<p>Real life is sloppy sometimes.</p>

<p>I knew that I wanted npm to be able to accept abbreviated versions of
commands, so that <code>npm inst</code> would do the same thing as <code>npm install</code>.
(To this day, the friendly CLI shorthands are some of npm&rsquo;s most
beloved features.)</p>

<p>The first thing I published to npm was <a href="http://npm.im/abbrev">abbrev</a>.
I&rsquo;d written it already, mostly as a sort of coding crossword
puzzle some&hellip; Saturday?  Wednesday?  All the days were pretty
identical during those two lazy/exhausting months of funemployment.</p>

<p>Since abbrev was only one module, no build command, it was
really easy to publish and install repeatedly.  Ever since then, it&rsquo;s
always been one of my go-to testing modules to make sure things are
working properly.  Not only was it <em>my</em> first npm publish, it was
<em>the</em> first npm publish, and it was published probably dozens or
hundreds of times to <code>http://localhost:5984/</code> while I was working on
npm.  So, of course, when I had a registry running on my little
DreamHost instance, <code>abbrev</code> was the first thing I published to it.</p>

<p>The really wacky part: despite it being the first thing I&rsquo;d published
with npm, I didn&rsquo;t actually <em>use</em> abbrev in npm until <a href="https://github.com/npm/npm/commit/4f8b35e">5 months
later</a>. That whole time I
kept trying to figure out how to have proper dependencies in the thing
that installed dependencies.  Eventually, I gave up and threw it in a
<code>utils</code> folder.</p>

<p>Looking back over abbrev now, it&rsquo;s amazing to me how little it&rsquo;s
changed.  Most of the code is still that initial implementation from
May 2010.</p>

<p>The moral of the story is that you don&rsquo;t know how it&rsquo;s going to end.</p>
