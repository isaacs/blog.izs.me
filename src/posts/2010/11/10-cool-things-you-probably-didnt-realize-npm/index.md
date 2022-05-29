---
layout: layouts/post.njk
date: 2010-11-25T01:22:00.000Z
slug: 10-cool-things-you-probably-didnt-realize-npm
title: 10 Cool Things You Probably Didn't Realize npm Could Do
tumblrid: 1675072029
type: text
---
<p><strong>OMG UPDAET!</strong> <small>2011-06-19</small></p>

<p>Some of this is no longer 100% accurate, which shouldn&rsquo;t be very surprising, since it was written 7 months ago, and npm had a major version update since then.</p>

<p>Check out <a href="http://blog.nodejs.org/category/npm">the node blog</a> for some of the 1.0 changes.</p>

<hr><p>npm is the node package manager.  Once upon a time, I would have said
&ldquo;a&rdquo; node package manager, and the humbler part of me would like to
pretend that that&rsquo;s still the case, but SCREW THAT HUMBLER SIDE, I&rsquo;m
feeling egotistical and braggy today, so today it&rsquo;s <strong>THE</strong> node package
manager.</p>

<p>Also, I&rsquo;m writing a &ldquo;head -n 10&rdquo; blog post, so it&rsquo;s basically a license to be a complete ass.</p>

<p>Yeah, it&rsquo;s that kinda day.  I think tomorrow, Imma eat a turkey.  So there.</p>

<p>You probably know that npm can install stuff, publish stuff, remove
stuff, and that it makes dependencies magically work.  You may even know that it
runs without being burdened by unnecessary semicolons.</p>

<p>If you&rsquo;re a node veteran, you may even already know about some of these
lesser-known features.  But I&rsquo;m hoping that at least one of them is a bit
surprising, even for old timers and core node devs.</p>

<h2>1: Handle multiple versions of the same thing at the same time</h2>

<p>One of the reasons I wrote npm is that package managers put you in
dependency hell, and I simply can&rsquo;t abide that.</p>

<p>npm keeps all its installed packages organized in <code>name/version</code>
folders, and versions all the public stuff.  Then, one of them is
&ldquo;active&rdquo; at any given time in the global space.  (That&rsquo;s what you&rsquo;ll see
if you install multiple versions of &ldquo;foo&rdquo; and then drop into the repl and
do <code>require("foo")</code>.)</p>

<p>But here&rsquo;s where it gets cool:  Let&rsquo;s say that you installed <code>foo@1.0.0</code>
and <code>foo@2.0.0</code>.  Now, you have <code>bar@1.0.0</code> that depends on <code>foo@1.0.0</code>,
and <code>baz@1.0.0</code> that depends on <code>foo@2.0.0</code>, and <code>quux@1.0.0</code> that
depends on <code>bar</code> and <code>baz</code>.</p>

<p>Here&rsquo;s a diagram:</p>

<pre><code>quux@1.0.0
|
+-- bar@1.0.0
|   |
|   `-- foo@1.0.0 \
|                  \
`-- baz@1.0.0       &gt; Conflict?
    |              /
    `-- foo@2.0.0 /
</code></pre>

<p>In most package manager systems, quux would simply never be installable.
It needs two packages that can&rsquo;t coexist because they have competing
dependencies.  Or, you&rsquo;d have to name things stupidly, and bar and
baz would have tobe aware of one another.</p>

<p>npm handles that all for you.  Try it.  It works.</p>

<p>It&rsquo;s <strong>MAGIC</strong>.  (Also, it&rsquo;s the commonjs module system&rsquo;s built in
separation of scope that doesn&rsquo;t require that the path be a single
consistent thing.)</p>

<h2>2: Be gone at runtime</h2>

<p>npm doesn&rsquo;t load your modules.  It installs them.  Then you can even do
<code>npm rm npm</code> and it&rsquo;ll remove itself.  All the modules you installed?
Yeah, they still work.</p>

<p>It does this by setting up things in the proper places so that node&rsquo;s
very simple module loader can find them when it needs them.</p>

<p>Most package managers are sort of hybrid loader/installer things.  npm
is first and foremost a dependency manager.  It puts things in place,
and then ducks out of the way so that it&rsquo;s not all in your face telling
you how to write your programs.</p>

<h2>3: Structure your program any way you want</h2>

<p>&hellip;provided, of course, you describe that structure in a package.json
file.</p>

<p>That is, you can put all your node modules in a folder called &ldquo;src&rdquo; or
&ldquo;lib&rdquo; or &ldquo;path/to/my/awesome/modules&rdquo;.  npm doesn&rsquo;t care.  In fact, it
doesn&rsquo;t even need to be a node program.  If you can describe the package
in a package.json file, you can install <em>literally anything</em>.  I&rsquo;m
waiting for people to figure this out, and see something awful and
hideous like <code>npm install vim</code>.</p>

<p>A lot of people have objected to this feature.  They called me crazy and
said that we need to form a committee and decide on a set of
conventions.  Some even went so far as to pound fists on tables, and
declare that madness will surely result from my freewheeling insanity!</p>

<p>To them, I say, HA!  JavaScript is at its heart an anarchic language,
forged in the great battles of Browsers, lit by the flicker of a
thousand animated gifs depicting construction workers.  It bears many
scars from those dark days, but it also resulted in a strong and vibrant
community, all of whom have strong opinions and found their way here
because they could not agree on much of anything.</p>

<p>npm welcomes your strife.  Like JavaScript itself, it doesn&rsquo;t judge you.</p>

<p>Read through <code>npm help json</code> to learn what you can put in your
package.json file.</p>

<h2>4: Start a package.json file for you</h2>

<p>If you run <code>npm init</code> in a folder, it&rsquo;ll ask you a few questions, and
then write out a package.json file.</p>

<p>The init command is pretty new, and doesn&rsquo;t do much.  But sometimes all
you need is a little nudge to get started.</p>

<h2>5: Verify sha1 hashes of packages</h2>

<p>As of version 0.2.9, sha hashes get generated for all packages as they
get published, and then are verified after being downloaded.</p>

<p>Checksumming is one of those things where everyone feels a little safer
knowing it&rsquo;s there, but no one usually pays much attention to it.  When
it works, it&rsquo;s silent, and that&rsquo;s great.</p>

<p>The good news is that, now, if there&rsquo;s some kind of error downloading
something, or if something gets corrupted in transit in any other way,
then npm will stubbornly refuse to proceed.</p>

<p>(You have to compile node with openssl crypto support for this to work.)</p>

<h2>6: Shut The Hell Up</h2>

<p>Sometimes you just need to show your packager who&rsquo;s boss.  &ldquo;Shutting up&rdquo; is a feature.  By
setting the <code>loglevel</code> config, you can make npm anywhere from completely
silent to ludicrously noisy.  The levels are: silent, win, error, warn,
info, verbose, and silly.</p>

<ul><li>silent: completely silent.  Zero logging output.</li>
<li>win: Just the &ldquo;npm ok&rdquo; or &ldquo;npm not ok&rdquo; message at the end.</li>
<li>error: When something unexpected and bad happens.</li>
<li>warn: When something odd or potentially dangerous is happening.</li>
<li>info: Helpful information so you can track what&rsquo;s happening.</li>
<li>verbose: Even more.  Perhaps just a wee bit obnoxious, even.</li>
<li>silly: Completely fuckin crazy, man.  Dump everything.  Whole objects,
you name it, whatever.</li>
</ul><p>Like any configuration option, you can set the loglevel in a few ways.
To set it for just one command just add <code>--loglevel silent</code> to the
command.  This is particularly handy if something breaks, and you want
to provide a bit more debugging output with <code>--loglevel verbose</code>.</p>

<p>To set it for your user account, you can do <code>npm config set loglevel
win</code>.</p>

<p>To set it globally for all users on the machine, you can do <code>npm config
set loglevel info --global</code>.</p>

<p>You can also set it in the environment if that floats your boat.  Any
config option can be set by the <code>npm_config_&lt;blerg&gt;</code> environ, so doing
<code>export npm_config_loglevel=verbose</code> will affect all subsequent npm
commands.</p>

<p>Oh, and if those <code>npm config set</code> and <code>npm config get</code> commands get
tedious, you can just do <code>npm c edit</code> to open up the config in your
favorite editor.</p>

<p>See <code>npm help config</code> for more info.</p>

<h2>7: Abbreviate commands</h2>

<p>If you&rsquo;re anything like me, then you drink a lot of coffee, hate extra typing,
and are awesome.  But mostly the typing.  Let&rsquo;s focus on that.</p>

<p>Is &ldquo;install&rdquo; just too long for you?  Try <code>npm inst connect</code>.  Bam.  Done.</p>

<p>Anything that is unambiguous will work just as well.  I don&rsquo;t have this
logic implemented for arguments and package names, but that&rsquo;s on the
roadmap.  It uses the <code>abbrev</code> program, and you can use it in your
programs, too.  <code>npm i abbrev</code> to get it.</p>

<p>The most common commands even have super short shorthands, because I
love you.</p>

<ul><li>i: install</li>
<li>r, rm: uninstall</li>
<li>ln: link</li>
<li>ls: list</li>
<li>bn: bundle</li>
<li>up: update</li>
<li>c: config</li>
</ul><p>If you think it stops there, you&rsquo;re wrong.  So wrong.  Go sit in the
corner.</p>

<p>In the npm source folder, there&rsquo;s a file called <code>npm-completion.sh</code>.
Source that bad boy in your bashrc or whatever, and you&rsquo;ve got tab
completion.</p>

<p><em>Tab completion!</em>  The <abbr title="Yeah, I know what penultimate means,
hold on a second">penultimate</abbr> feature of any unix program, <abbr title="see?">second only to</abbr> tab completion that works and is
helpful!</p>

<p>This is where you come in.  Check out what it&rsquo;s doing.  Dig into the
code.  Make it better.  Right now it can just tab-complete npm commands,
not package names or other useful things.  But if you hack away on the
<code>lib/completion.js</code> file, you can make it awesomer.</p>

<h2>8: Get help on <em>anything</em></h2>

<p>npm has a ton of documentation.  In fact, the biggest documentation
problem at the moment in npm is that there&rsquo;s too much of it, and it&rsquo;s
probably impossible for any non-robot to read all if it in a reasonable
amount of time.</p>

<p>In case you&rsquo;re not a robot, here&rsquo;s how you can get the most out of the
docs:</p>

<ol><li>run <code>npm</code> without any arguments.  This&rsquo;ll show you what you can do.
It lists out the commands and the help topics.</li>
<li>run <code>npm command -h</code> to quickly view the arguments that command
expects.  This is handy when you forget how to do something that you
knew how to do, and you just need to remember how you did it.</li>
<li>run <code>npm help &lt;topic&gt;</code> to get more detailed manpage-style
documentation.  For general info about npm itself, you can run <code>npm
help npm</code>.  This page has a few pointers based on your use cases.
Check it out.</li>
</ol><h2>9: View specific fields on published packages</h2>

<p>The <code>npm view</code> command was pretty lame for a while.  Basically it just
fetched data from the registry and then dumped it to the terminal.  But
now, it&rsquo;s so much more.</p>

<p>Specify a package name (in the form of <code>name@version</code> or <code>name@latest</code>
or <code>name</code> or even <code>name@"&gt;=1.2.3"</code> for ranges), and optionally one or
more fields, and it&rsquo;ll pull just those fields out and show them to you.</p>

<p>It operates smartly on arrays, and parses out the <code>url</code> and <code>email</code>
fields from contributors and author names.  So, if you do this:</p>

<pre><code>npm view npm contributors.name
</code></pre>

<p>then you&rsquo;ll get a list of all the contributor names in npm.  If you just
do:</p>

<pre><code>npm view npm contributors
</code></pre>

<p>then you&rsquo;ll see the list of contributors in the <code>"name (url) &lt;email&gt;"</code>
format.</p>

<h2>10: Bump your package version FOR YOU OMG HOLY CRAP WHAT!?</h2>

<p>Yeah.  That&rsquo;s right.</p>

<p>It&rsquo;ll even commit the change, and tag it for you, if you do it in a git
repo.  Just run:</p>

<pre><code>npm version 1.2.3
</code></pre>

<p>It&rsquo;ll open up your package.json file, change the version to 1.2.3, <code>git
add</code> it, <code>git commit</code> it, and <code>git tag v1.2.3</code> it.</p>

<p>If your git repository is unclean, then it&rsquo;ll recoil in horror at the
dirty, and tell you to get your act together.  (Of course, if you&rsquo;re not
using git, then it won&rsquo;t do the git stuff.  It&rsquo;ll just change the json
and write it back to package.json.)</p>

<h2>11: Bundle all your dependencies into the package itself</h2>

<p>When you use the <code>npm bundle</code> command, npm will put all your
dependencies into the <code>node_modules</code> folder in your package.  But it
doesn&rsquo;t stop there.</p>

<p>If you want to depend on something that&rsquo;s not on the registry, you can
do that.  Just do this:</p>

<pre><code>npm bundle install <a href="http://github.com/whoever/whatever/tarball/master">http://github.com/whoever/whatever/tarball/master</a>
</code></pre>

<p>This will install the contents of that tarball into the bundle, and then
you can list it as a dependency, and it won&rsquo;t try to install it when
your package gets installed.</p>

<p>This also is handy if you have your own fork of something, and would
prefer not to change the name.</p>

<p>In fact, you can run almost any npm command at the bundle.  To see
what&rsquo;s inside, you can do <code>npm bundle ls</code>.  To remove something, do <code>npm
bundle rm thing</code>.  And, of course, you can install multiple versions and
activate the one you want.</p>

<h2>12: Change the very laws of mathematics itself!!</h2>

<p>There are 13 things in this list of 10 things.</p>

<p>npm IS JUST THAT AWESOME.</p>

<h2>13: Always be lowercase</h2>

<p>If you see npm referred to as &ldquo;NPM&rdquo; anywhere except right there in this
sentence, then you know that I didn&rsquo;t write it.  &ldquo;NPM&rdquo; is the <a href="http://npm.org">National Association of Pastoral Musicians</a>.
If you need some church music, use NPM.  If you want node packages
installed, then you need <a href="http://npmjs.org/">npm</a>.</p>

<h2>Other things that didn&rsquo;t make this list because they were too common or not awesome enough</h2>

<ol><li>Cache registry requests using etags.</li>
<li>Run arbitrary scripts to start, stop, restart, and test packages.</li>
<li>Set deprecation messages to keep people from using old versions of
your stuff.</li>
<li>compile node addons automatically if it sees a wscript file.</li>
<li>rebuild packages in a single command so that you can easily keep up
with node ABI changes.  <code>npm rebuild</code></li>
<li>Manage owners of a project with the <code>npm owner</code> command.</li>
<li>Edit package contents.  See <code>npm edit</code>.  (When used as <code>npm bundle
edit</code> it&rsquo;s especially handy.)</li>
<li>Be used as a library in node programs.  (Check the readme for a quick how-to, or <code>cli.js</code> for an example of using npm programmatically.)</li>
</ol><p>Happy Thanksgiving, Americans.  And non-Americans, Happy Random Thursday When All Your American Friends Are Not Online Much!</p>
