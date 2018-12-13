---
date: 2007-06-11T17:00:16.000Z
redirect_from:
  - /post/146671430/memory-leaks-in-microsoft-internet-explorer/
  - /post/146671430/
  - /post/146671430/memory-leaks-in-microsoft-internet-explorer
  - /post/146671430
slug: memory-leaks-in-microsoft-internet-explorer
tags:
  - Internet Exploder
  - Javascript
title: Memory Leaks in Microsoft Internet Explorer
tumblrid: 146671430
type: text
---
<p><cite>I originally posted this <a href="http://isaacschlueter.com/2006/10/msie-memory-leaks/">at isaacschlueter.com on Monday, October 23rd, 2006</a>.</cite></p>

<p>Memory Leaks.</p>

<p>What are they?  How do they happen?  What can be done about them?</p>

<p>This is a great question, and a topic that has a lot of mysticism surrounding it.  Like most Javascript issues, there&rsquo;s been a lot of very bad &ldquo;authoritative&rdquo; suggestions.</p>

<p>If you are a webdev interviewing at Yahoo!, and I&rsquo;m in the room, I can guarantee that you will be asked about this topic.  In my opinion, memory leaks are one of the most tricky ways in which a user&rsquo;s web experience can be needlessly degraded.  A web developer&rsquo;s attitude towards memory leaks is, in my opinion, one of the best indicators of their worth in this field.</p>

<p>Either you understand what a memory leak is and how it happens, or you don&rsquo;t.  If you don&rsquo;t, that&rsquo;s fine, but it&rsquo;s time to find out once you hear some buzz about it.  Once you understand it, you can either care about it, or not.  Anyone who doesn&rsquo;t fall into the &ldquo;find out/care about it&rdquo; category would be better off flipping burgers than writing Javascript.</p>

<!--more-->

<h3>What Are Memory Leaks?</h3>

<p>In general, a &ldquo;memory leak&rdquo; is the failure to release memory that has been allocated to a program.  Over time, a memory leak will result in progressively less memory being available to perform valid functions.</p>

<p>In the browser/Javascript world, a memory leak occurs when the native garbage collection routines don&rsquo;t properly reclaim the memory that was allocated for an object.  Each time you create an object in Javascript, a bit of memory is allocated.  Memory is also allocated for DOM nodes, COM objects, images, etc.  When an object can no longer be accessed, it is flagged as &ldquo;ready for removal.&rdquo;  Then the garbage collection routine sweeps up the flagged objects, and releases the memory back to the system.  In Microsoft Internet Explorer 6, there is a bug in the garbage collection routine that can lead to memory leaks in certain conditions.</p>

<p>A good discussion on memory leaks and why and how they happen can be found <a href="http://www.crockford.com/javascript/memory/leak.html">on Crockford&rsquo;s site</a>.  The claim that closures (functions inside of other functions) cause memory leaks is, as Crockford says, &ldquo;deeply wrong.&rdquo;  Closures are fine, and are not the source of the problem.  (However, of course, closures can make circular links trickier to spot.)</p>

<p>The problem happens when you have a Javascript object and DOM node (or any COM object) that refer to one another in a cycle.  IE 6 can&rsquo;t figure out when it should reclaim the memory, so it doesn&rsquo;t ever do it.</p>

<p>For example, this will cause a leak:</p>

<p><code class="block">(function(){
var obj={b:document.body};
document.body.o=obj; // ← circular link is created.  document.body.o.b === document.body
})();</code></p>

<p>If you set either obj.doc.body or body.o to NULL, then you&rsquo;ll break the circular chain, and IE 6 will reclaim the memory.</p>

<p>The cycle doesn&rsquo;t have to be so small.  Even a chain of many steps can cause a leak if it is not broken.  This will cause a leak, too:</p>

<p><code class="block">(function(){
var d={b:document.body}
var obj={doc:d}; // ← obj.doc.b === document.body
document.body.o=obj; // ← Circular loop: document.body.o.doc.b === document.body
})();</code></p>

<p>Sometimes the references aren&rsquo;t explicit, but are created by a scope closure.  (This may be part of the thinking behind the assertion that closures cause memory leaks.)  For example, this will also leak:</p>

<p><code class="block">(function(){
var b=document.body; // ← create a reference to document.body inside of the outer scope.
b.onclick=function() { // ← b.onclick refers to a function.
  // this function can access "b" due to closure
  // do something...
};
})();</code></p>

<p>The anonymous function is assigned to <code>document.body.onclick</code>.  Due to the scope closure, there is a reference (<code>b</code>) created inside of the anonymous function that points back at document.body.  This creates a circular condition that confounds and befuddles the MSIE garbage collector just like the other examples above.</p>

<h3>How To Avoid Memory Leaks</h3>

<p>The simplest way to ensure that you will never have a memory leak is to simply never have circular reference chains that cross between Javascript and DOM space.  Make sure that you always have Javascript objects refer to DOM objects, and never the other way round, or vice versa.</p>

<p>However, it&rsquo;s sometimes extremely convenient to have circular link.  Consider this example:</p>

<p><code class="block">(function(){
var doSomething=function(e) {
  this.innerHTML='did something!';
  this.object.doSomethingElse(this.customPropertyOfSomeKind);
};
myDomNode.object=new myObject();
myDomNode.customPropertyOfSomeKind={some:'data object'};
YAHOO.util.Event.addListener(myDomNode,'click',doSomething);
})();</code></p>

<p>Now, if myObject has any reference to myDomNode (even if it refers to something that refers to something else &hellip; that refers to myDomNode), you&rsquo;ll leak memory.</p>

<h3>How to Fix MSIE&rsquo;s Javascript Memory Leaks</h3>

<p>So, how to fix this?</p>

<p>First, be aware when you&rsquo;re doing things that may cause a leak.  If it&rsquo;s not a very big gain in code simplicity, then figure out another way around.  If you&rsquo;re hanging a lot of Javascript objects onto DOM objects, there&rsquo;s a big chance of a leak creeping in.  Personally, I try to make sure that all my references go from JS→DOM and not the other way around.  If the references are always one-way, then there&rsquo;s no chance of a leak.  (Closures can only create JS→DOM references.)  Also, we&rsquo;ve seen performance issues with hanging too much stuff on DOM nodes if the page is big and complicated (that&rsquo;s anecdotal, and I don&rsquo;t have any hard numbers, so take it for what it&rsquo;s worth.)
If you understand how they work and why they happen, you can save yourself a lot of time later on tracking them down.</p>

<p>Second, test your code with <a href="http://outofhanwell.com/ieleak/index.php?title=Main_Page">Drip</a>.  Test early, test often, and <strong>always</strong> test before you release to production.</p>

<p>I can&rsquo;t possibly stress how important this is.  Even if you&rsquo;ve done everything right, it&rsquo;s easy to overlook circular references if the code gets sufficiently complex.  Even small memory leaks can add up over the course of a session, or in a browser that stays open for days on end.  (It happens quite a bit.  I don&rsquo;t know when I last closed the browser on my home computer, and a lot of users are the same way.)</p>

<p>Third, if you must cause circular references in your code, be responsible about it.  Save a reference to each afflicted DOM node, and break the cycles on window unload.  I often do something like this:</p>

<p><code class="block">(function(){
var unLoaders=[];
myDomNode.object=new myObject(); // ← let's say that this creates a leak somewhere
unLoaders.push(myDomNode); // ← save it for later
// create an "unload" function
var unload=function(){
  for(var i=unLoaders.length-1;i&gt;-1;i--){
    unLoaders[i].object=null; // ← break the cycle
  }
};
// run the unload function on window.unload
YAHOO.util.Event.addListener(window,'unload',unload);
})();</code></p>

<h3>Memory Leaks and <acronym title="Asynchronous Javascript And Xml">Ajax</acronym>/<acronym title="XmlHttpRequest">XHR</acronym></h3>

<p>Ajax is a huge source of memory leaks, and unfortunately in this day and age of fast-prototyping and marketing pushing, a lot of these errors slip out into the world.  If you don&rsquo;t use a polling mechanism of some kind, AJAX applications will leak memory like a bucket with no bottom.  Use the <a href="http://developer.yahoo.com/yui/connection/">YUI connection library for Ajax</a>, and never look back.  It&rsquo;s brilliant, and very easy to use.</p>

<p>So, why do AJAX apps leak memory so badly if you don&rsquo;t use a polling mechanism?  Consider the &ldquo;typical&rdquo; XHR code pattern:</p>

<p><code class="block">(function(){
var x=getXHRobject();
x.onreadystatechange=function() { // ← create link from x (COM object) to anonymous function
  if(x.readystate==4){ // ← reference to x exists inside function scope, creating circular link.
    // do something.
  }
};
})();</code></p>

<p>The XmlHttpRequest object is treated in Javascript much like a DOM node.  (More precisely, this problem affects all COM objects, including DOM nodes.)  If you attach an onreadystatechange handler to it, you&rsquo;ve created a circular loop.  The standard means of breaking these chains won&rsquo;t work.  The YUI connection lib polls the object&rsquo;s readystate until it is done, and then calls your success function.  (If it times out or gets an error, it calls your failure function.)  Since there&rsquo;s no onreadystatechange listener, there&rsquo;s no circular reference, and thus, no memory leak.</p>
