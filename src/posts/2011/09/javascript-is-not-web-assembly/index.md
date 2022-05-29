---
layout: layouts/post.njk
date: 2011-09-14T21:21:00.000Z
slug: javascript-is-not-web-assembly
title: 'JavaScript is Not Web Assembly  '
tumblrid: 10213512387
type: text
---
<p>It&rsquo;s fairly common these days to think of JavaScript as a sort of
&ldquo;assembly language for the web&rdquo;.  After all, it&rsquo;s the language that
is natively supported by web browsers, making it the most widely
deployed runtime in history.  With Node, we have a very relevant
general purpose non-browser stack for doing system programming using
this language, so it&rsquo;s even more important as a language.</p>

<p>Programmers like to improve things and solve problems.  This is a
healthy instinct, but like so many healthy instincts, it can be subject
to runaway feedback loops and lead to pathological behavior.</p>

<p>If you are designing a language, compiling it to JavaScript is a pretty
attractive option, for much the same reason that compiling C to machine
code is an attractive option: running it in more places.</p>

<p>However, so far, most of the times that I&rsquo;ve seen someone trot out the
&ldquo;JS = new assembly&rdquo; horse, it&rsquo;s not an apt comparison.  The reason we
write C instead of assembly is that:</p>

<ol><li>Assembly varies wildly between architectures.  C is not as variable.
So, the compiler can abstract away a lot of that peculiarity, and you
only need to worry about it if you&rsquo;re distributing precompiled binaries.</li>
<li>C offers an order of magnitude more expressiveness.</li>
</ol><p>I&rsquo;m going to pick on CoffeeScript, because it&rsquo;s clearly the most popular
to-JS language.  Jeremy Ashkenas is a great guy, and has shown himself
on repeated occasions to be remarkably sane with
respect to this issue.  Either he hasn&rsquo;t caught the language-wank
crazy, or he hides it <em>really</em> well.</p>

<p>However, either or both of these points
apply to every other to-JS language, including but not limited to GWT,
paren-js, sibilant, streamline, kaffiene, narrative, et al.  That&rsquo;s not
to say that any of these systems are <em>bad</em>, just that the &ldquo;blah is to JS
as C is to Assembly&rdquo; analogy is wildly wrongheaded.</p>

<ol><li>CoffeeScript programs don&rsquo;t vary any less across architectures than
the JavaScript programs it creates.  That is, you don&rsquo;t compile it to target a given platform.
(This is not true of GWT, which can compile different JS files for
different browsers, but that&rsquo;s not the norm in the to-JS world.)</li>
<li>CoffeeScript does not offer an order of magnitude difference in
expressiveness.  I&rsquo;m not using &ldquo;expressiveness&rdquo; as some fuzzy term to
mean &ldquo;how happy you are expressing yourself in X language&rdquo;, but the
more mathy technical meaning of &ldquo;how many relevant program tokens are
required to do X task.&rdquo;  CoffeeScript may require fewer tokens, sure,
but not 10 to 1 fewer.</li>
</ol><p>JavaScript is not the Assembly of the Web.  It&rsquo;s the C of the web.  The
to-JS languages are lining up to become the C++ of the web.</p>

<ol><li>They offer language features that make some sorts of programs a
little bit easier to write, but don&rsquo;t make an order of
magnitude difference in expressive power.</li>
<li>They&rsquo;re mostly backwards compatible with JavaScript.</li>
<li>You still need to grok the DOM, or
node, or whatever other platform your program is interacting with,
and that&rsquo;s probably documented in JavaScript.</li>
<li>They break almost all of the tooling that exists for JavaScript
debugging.</li>
</ol><hr><p><strong>Clarification</strong>: CoffeeScript <em>does</em> try very hard to compile to JS
that runs on all JS platforms.  However, it does not optimize <em>for</em> a given
platform, or have a specified target when it compiles.  The resulting
JS is still a high-level general-purpose program, and the pitch, at least,
is that it is a better one than you would have written as easily by hand.</p>
