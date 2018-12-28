---
date: 2007-06-18T17:00:03.000Z
redirect_from:
  - /post/146671469/javascript-style-tip-use-in-and-delete/
  - /post/146671469/
  - /post/146671469/javascript-style-tip-use-in-and-delete
  - /post/146671469
slug: javascript-style-tip-use-in-and-delete
tags:
  - code beauty
  - javascript
title: 'Javascript Style Tip: Use "in" and "delete"'
tumblrid: 146671469
type: text
---
<p>Javascript provides two very handy operators, <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Special_Operators:in_Operator">in</a> and <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Special_Operators:delete_Operator">delete</a>.</p>

<p>Consider this code fragment:</p>

<p><code class="block javascript">var obj = {
 foo : 'quux',
 bar : 'baz',
 doSomething : function () {
  // do something...
 }
};</code></p>

<p>So, we&rsquo;ve created an object, and then some other things happen.  Later in the code, we want to remove the &ldquo;foo&rdquo; property, so we do this:</p>

<p><code class="javascript block">obj.foo = undefined;</code></p>

<p>Still later, we only want to do something if the foo property has not been unset, so we check it:</p>

<p><code class="javascript block">if ( obj.foo !== undefined ) {
 // do something
}</code></p>

<p>That works, and it&rsquo;s fairly common, but it&rsquo;s klunky, and not as readable as this:</p>

<p><code class="javascript block">delete obj.foo;</code></p>

<p><code class="javascript block">if ( 'foo' in obj ) {
 // do something
}</code></p>

<p>The first one says, <q>Delete &ldquo;foo&rdquo; from the object.</q>  The second asks, <q>Is &ldquo;foo&rdquo; in the object?</q>  The difference between the first and second approaches is that the second uses intuitive wording in the code.</p>

<p>Note: You <em>must</em> use <code>delete</code> if you want to use <code>in</code>.  Setting something to <code>undefined</code> manually will not cause it to return false when testing whether the property is <code>in</code> the object.</p>

<p>As an added bonus, using the <code>delete</code> operator also removes the property from the for/in iteration loop, since it actually removes it from the object&rsquo;s key list rather than simply setting it&rsquo;s value to <code>undefined</code>.</p>

<p><code class="block javascript">var obj = {asdf:'foo',bar:'baz'};
obj.asdf = undefined;
for ( var i in obj ) {
 console.log(i,obj[i]);
}
// outputs:
// asdf undefined
// bar baz</code></p>

<p><code class="block javascript">var obj = {asdf:'foo',bar:'baz'};
delete obj.asdf;
for ( var i in obj ) {
 console.log(i,obj[i]);
}
// outputs:
// bar baz</code></p>

<p>Note: you&rsquo;ll need to wrap the &ldquo;in&rdquo; statement in parentheses if you want to negate it.  For example, this is a bug:</p>

<p><code class="block javascript">var obj = { asdf:'foo',bar:'baz' };
var f = 'quux';
if ( !f in obj ) {
 alert( 'not there!' );
}</code></p>

<p>The alert will never fire.  Can you figure out what&rsquo;s happening?  Here&rsquo;s a clue:</p>

<p><code class="block javascript">var obj = { 'false':1, asdf:'foo', bar:'baz' };
var f = 'quux';
if ( !f in obj ) {
 alert( 'not there!' );
}</code></p>

<p>Now the alert will fire.  What&rsquo;s up?</p>

<p>The order of operations is this:</p>

<ol><li>Process the !f, which converts &lsquo;quux&rsquo; to a boolean (true), and then gets the opposite (false).</li>
    <li>The &ldquo;in&rdquo; operator converts the value back to a string, and false.toString() is the string 'false&rsquo;.</li>
    <li>Since 'false&rsquo; is not a key in the object, the &ldquo;in&rdquo; operator returns false, and the conditional fails.</li>
</ol><p>In the second case, since the string 'false&rsquo; <em>is</em> a key in the object, the &ldquo;in&rdquo; operator returns true, and the conditional fires.  Of course, using &ldquo;false&rdquo; as a key in an object is a really stupid thing to do, but if some bunk data comes into your program somehow, it can happen.  Always wrap your &ldquo;in&rdquo; clauses in parentheses, and you&rsquo;ll never have a problem.  In this case, it works as expected:</p>

<p><code class="block javascript">var obj = { asdf:'foo', bar:'baz' };
var f = 'quux';
if ( !(f in obj) ) {
 alert( 'not there!' );
}</code></p>

<h3>Update</h3>

<p>I&rsquo;m finding that a lot of people are hitting this page with search queries that seem to indicate they&rsquo;re looking to remove a style property from a Dom node.  <code>delete</code> won&rsquo;t help you much there, since the <code>style</code> property is a get-and-set-only property.  (IE, you can read from and write to it, but you can&rsquo;t delete from it.)</p>

<p>Most of the time, you shouldn&rsquo;t be messing with the <code>style</code> property directly in Javascript, anyhow.  Instead, add and remove semantically meaningful class names, and put the style information related to those states in the CSS.  Of course that&rsquo;s not always an option, I know.  So, you can remove the inline setting by simply setting it to an empty string, like this:</p>

<p><code class="block javascript">document.body.style.background="red"; // turns the page red.
document.body.style.background=""; // turns the page back to whatever it was.</code></p>

<p>Cheers!</p>
