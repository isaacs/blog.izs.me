---
date: 2011-04-18T23:28:00.000Z
redirect_from:
  - /post/4731036392/evolution-of-a-prototypal-language-user/
  - /post/4731036392/
  - /post/4731036392/evolution-of-a-prototypal-language-user
  - /post/4731036392
slug: evolution-of-a-prototypal-language-user
title: Evolution of a Prototypal Language User
tumblrid: 4731036392
type: text
---
<ol><li>Fresh out of Java or C++, learning JavaScript.  Look up on the internets how to define a class.  It doesn&rsquo;t quite work.  Avoid the &ldquo;new&rdquo; keyword, because it is dangerous.</li>
<li>Learn about prototypes.  Design constructors that work how you expect.  Re-introduce &ldquo;new&rdquo; into your code. <small>Note: Many programmers stop here.  And that is <strong>fine</strong>.</small></li>
<li>Learn about Object.create, Object.getPrototypeOf.  Mix and match constructors with just &ldquo;raw&rdquo; Object prototype usage.  Monkey-patch native prototypes.  Use prototypes to do everything.</li>
<li>Come back to sanity.  Use constructors+prototypes to define objects, but use Plain Old Functions more often.  Prefer composition to &ldquo;is-a&rdquo; inheritance, but use is-a when it makes sense.  Use <code>new</code> and prototypes to create objects that all extend the same prototype, because, well, why not?</li>
<li>Re-read <a href="http://en.wikipedia.org/wiki/Design_Patterns">the Gang of Four book</a> that you once thought was so inspiring.  Grok how the &ldquo;class&rdquo; pattern is just a special case of disciplined prototype re-use.  Realize that prototypal inheritance makes a lot of those patterns trivial, and it&rsquo;s a bit silly to spend so much time on them.</li>
<li>Begin to notice actual applications that are best moduled with prototype chains.  (Branching recursive file-system walks, configuration object overriding, inheritance trees, etc.)</li>
</ol><p>I&rsquo;m really wondering what&rsquo;s next on this list.</p>

<p>The great thing about enlightenment is that it doesn&rsquo;t end.  It is continually extending itself in multiple non-overlapping directions.</p>
