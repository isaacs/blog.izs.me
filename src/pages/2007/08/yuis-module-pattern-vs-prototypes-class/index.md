---
date: 2007-08-13T17:47:36.000Z
redirects:
  - /post/146671880/yuis-module-pattern-vs-prototypes-class
  - /post/146671880
slug: yuis-module-pattern-vs-prototypes-class
tags:
  - Code Ecosystems
  - Javascript
title: YUI's "Module Pattern" vs. Prototype's Class Function
tumblrid: 146671880
type: text
---
<p>Via <a href="http://geoffreymoller.com/2007/05/15/when-javascript-libraries-attack/">Geoffery Moller</a>, I came across <a href="http://mattsnider.com/javascript/prototype-vs-yui-round-1-oop-architecture/">this article</a> on Matt Snider&rsquo;s blog.  I&rsquo;m surprised that no one noticed what (to me) was the most relevant difference in the libraries that he evaluated.</p>

<p>The &ldquo;YUI method of class creation&rdquo; is not distinctively YUI&mdash;it&rsquo;s just what Javascript gives you for free.  You can use the &ldquo;Module Pattern&rdquo; alone on a page with no library at all!  You can call it Crockford&rsquo;s Module Pattern, but it seems to me that he discovered or popularized it more than &ldquo;invented&rdquo; it.</p>

<p>This, to me, highlights the biggest difference in approach between YUI and every other library: YUI doesn&rsquo;t attempt to re-write the language, but rather to show off what the language can do and how those features can be effectively put to use.  My experience with Prototype and Dojo and Mochikit all made me feel a bit like the author must not have liked Javascript very much.  (Dojo actually goes a bit further&mdash;it rewrites HTML as well!)  It seems like the other libraries say, &ldquo;This Javascript language is too hard and confusing.  Let&rsquo;s make it into something else.&rdquo;  YUI says, &ldquo;This language is beautiful and powerful, but it would be handy if we had some conventions and a common approach to these rough edges.  Let&rsquo;s build those common pieces.&rdquo;  It&rsquo;s the difference between teaching someone to fish and giving them a fish, except instead of giving him a fish, you pass the fish through a slow and complex machine that spits out Java code.</p>

<p>Of course, I&rsquo;m a bit biased.  I <a href="http://www.codinghorror.com/blog/archives/000921.html">imprinted upon YUI</a> at a fairly early stage in my Javascript development.  I work <a href="http://yahoo.com">here</a>, so I get to request features directly through our internal bugzilla instead of pleading in the public arenas.  But the approach is one that I&rsquo;ve always favored.  If you feel the need to rewrite the language, then just go use another language.  Javascript is the common tongue of the internet, and will remain so for the indefinite future.  Don&rsquo;t fight it. (<a href="http://www.codinghorror.com/blog/archives/000857.html">Hat-tip</a> to Jeff Atwood.)</p>

<p>Crockford&rsquo;s &ldquo;Module Pattern&rdquo; is a great way to create a singleton that has some private methods.  In fact, in my opinion, it&rsquo;s the best and only way that this task should be done.  (There are others, but they tend to be more obtuse, IMO.)  But that&rsquo;s not the only task of an object-oriented development.  Sometimes, you need to have a bunch of objects, and if they have shared functionality, then that should be handled with a class of sorts.  In Javascript, that means that they&rsquo;re stamped from the same Constructor and Prototype.  The Module Pattern does not address this in a very clear way, but it does highlight the principle of data-hiding through a closure that is the key to OOP in Javascript.</p>

<p>To create a class, I usually do something like this, which takes the essence of the Module Pattern and uses it to create a reusable class.</p>

<p><code class="block javascript">(function () {<br/>
  // these are properly private static, not just private
  // but with scope correction, that's good enough for functions.<br/>
  // private function, called with privateFunction.call(this, a, b, c);
  var privateFunction = function (a, b) {
    this.a = a;
    this.b = b;
  };<br/>
  // private static data.  Shared between all instances!
  var privateStaticData = "I'm private and static.  All instances share me.";<br/>
  YAHOO.myProject.myClass = function (a, b, id) {
    // a and b are public, since they're set on this.
    this.a = a;
    this.b = b;
    YAHOO.myProject.myClass.instances[id] = this;
  };<br/>
  YAHOO.myProject.myClass.instances = {};<br/>
  YAHOO.myProject.myClass.prototype = {
    myPublicProperty : "I'm accessible as <object reference>.myPublicProperty.",
    myPublicMethod : function () {
      var a = (new Date()).getTime();
      var b = a + 10000;<br/>
      // note the way that private functions are called.
      privateFunction.call(this, a, b);
    }  
  };<br/>
})(); // close the closure and execute the code.<br/>
// later on...
(function () {
  var myInstance = new YAHOO.myProject.myClass(1,2,'blahblah');
  // now you can deal with it as "myInstance" within this closure,
  // or as YAHOO.myProject.myClass.instances.blahblah elsewhere.
})();</object></code></p>

<p>(When in doubt, wrap it in a closure.  <a href="http://yuiblog.com/blog/2006/06/01/global-domination/">Global variables are evil.</a>)</p>

<p>I&rsquo;d rather work with someone who is a bit green with Javascript but can learn, rather than someone who is an expert with Prototype or Dojo.  <em>The more time someone spends building applications with a library like Prototype, the further they get from Javascript, and the more dependent they become on the library.</em>  By contrast, time spent using YUI tends to breed developers who are experts in <em>Javascript</em>, and that skill is far more useful than being an expert in a particular library.</p>
