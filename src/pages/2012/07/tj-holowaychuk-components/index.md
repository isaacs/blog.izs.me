---
date: 2012-07-25T16:28:19.000Z
link_publisher: tjholowaychuk.com
link_url: 'http://tjholowaychuk.com/post/27984551477/components'
redirects:
  - /post/27987129912/tj-holowaychuk-components
  - /post/27987129912
slug: tj-holowaychuk-components
source:
  name: tjholowaychuk-blog
  title: TJ Holowaychuk
  url: 'http://tjholowaychuk-blog.tumblr.com/post/27984551477/components'
title: 'TJ Holowaychuk: Components'
tumblrid: 27987129912
type: link
via:
  name: tjholowaychuk-blog
  title: TJ Holowaychuk
  url: 'http://tjholowaychuk-blog.tumblr.com/post/27984551477/components'
---
<p>For the most part, I agree with what TJ says, and I think that there are some great ideas in his post.  <a href="http://tjholowaychuk.com/post/27984551477/components">Go read it.</a></p>

<hr><blockquote>
  <p>A component can be not just JavaScript, but CSS, images, fonts or other resources, or a component may be any combination of these. This is the main idea that I want to sell, we need to broaden modularity beyond just JavaScript source.</p>
</blockquote>

<p>Yes.  However, they should have the same level of modularity and order that we&rsquo;ve been able to get with JavaScript packages using npm and Node.js.  It&rsquo;s a much stickier problem, because the deployment environment is so much more hostile.</p>

<hr><blockquote>
  <p>The classic battle between DOM manipulation libraries such as jQuery and MooTools serve as an obvious example of fragmentation. Even if one is more popular than the other this doesn’t mean we don’t have a problem. Have you ever seen a great jQuery plugin and thought to yourself “damn! I’m using MooTools!” or perhaps the other way around? That highlights the problem right there, we should have no “jQuery plugins”, no “Dojo modules”, just simply “components” that we can all consume.</p>
</blockquote>

<p>To a certain extent, this is inescapable.  Even if we say, &ldquo;Use AMD&rdquo; or &ldquo;Use CommonJS require()&rdquo; or whatever else, there&rsquo;s always going to be some level of segmentation.  Hell, <em>even within node</em> there are modules that only work with Express, and so on.</p>

<p>The point that I think TJ is getting at is that we should squeeze down the size of our components until they are very minimal, so that different systems can consume them and turn them into other sorts of things if they want.  YUI can wrap them in a YUI widget, jQuery can have some thing that turns them into a jQuery-UI thing, etc.</p>

<p>The next step is to make the segmentation explicit, and make the different segments able to interoperate to the greatest degree possible.  I think we&rsquo;ve succeeded at this in Node, but as I mentioned above, it&rsquo;s an easier problem there than in the browser.  The component approach that TJ describes is very promising.</p>

<hr><blockquote>
  <p>Components could have a “component.json” much like the commonjs package.json, or we can simply extend package.json. This would of course act as the package manifest, letting the world know if it has stylesheets, templates, scripts, images and so on. I believe we should avoid the minimal gains of magical auto-globbing of files, we can just simply list these and avoid unnecessary complexity and I/O.</p>
</blockquote>

<p>It should be package.json.  I think &ldquo;styles&rdquo; should be spelled &ldquo;css&rdquo; and &ldquo;templates&rdquo; should be spelled &ldquo;html&rdquo;.  Otherwise I think we&rsquo;d soon see stylus and less files in &ldquo;styles&rdquo;, and mustache and jade and markdown in &ldquo;templates&rdquo;.  Maybe that&rsquo;s ok.  It&rsquo;s a bikeshed we can paint later.</p>

<p>The unnecessary complexity of globbing is not such a big deal, really, but it should be left out of any &ldquo;spec&rdquo; that we try to get people to use.  npm does this for a few things, and it&rsquo;s pretty easy.  It can be a step that&rsquo;s performed at publish-time for convenience relatively easily, so that the data is ready at install-time.</p>

<hr><blockquote>
  <p>Require fragmentation&hellip;</p>
</blockquote>

<p>In keeping with the spirit of &ldquo;minimal components consumed in multiple ways&rdquo;, I think that the Node-style require() and module.exports is the way to go.  It&rsquo;s demonstrably easy to convert to other patterns, and is intuitive and easy to use.  As TJ points out, the feature-detection required to use AMD and other things is just utter bullshit.</p>

<p>If you are going to be &ldquo;installing&rdquo; components and expecting them to Just Work in some fashion, then you&rsquo;ve already taken on some tooling.  Best to just bite the bullet and have the tool do this part as well.</p>

<hr><blockquote>
  <p>Delivering components&hellip;</p>
</blockquote>

<p>I disagree with TJ here, and think that using the npm registry is actually the best way to go.</p>

<ol><li>Any other system will have to run into and solve the same exact problems that the npm registry already has to solve.</li>
<li>User management, package ownership, and namespace collisions are already taken care of.</li>
<li>It&rsquo;s pretty fast, since you&rsquo;re just fetching content, not the full history.</li>
<li>There&rsquo;s a lot of reusable code for interacting with it programmatically, and as npm matures and pieces are factored out of it, this will only get better.  Node is the obvious choice for a tool to fetch and build client-side components.</li>
</ol><p>One complaint about using the npm registry is that it&rsquo;s &ldquo;confusing&rdquo; that some packages are only going to be useful for client-side, etc.  However, this isn&rsquo;t really that big of a concern.</p>

<p>If a component system uses the <code>main</code> field for its JS entry point, and consumes the Node-style require() syntax, then there&rsquo;s not a huge difference between a Node module and a client-side component.  Why not just let people use them this way?  If I only want to use the JS bits, why can&rsquo;t I just do that in Node as well as in the browser?  Of course, the vast majority of modules cannot be shared, but so what?  People just won&rsquo;t share those.</p>

<p>Users already ignore many thousands of modules without any trouble.  However, if it really is a problematic issue (and I am not convinced that it really is), then the package.json format is infinitely extensible.  TJ brings up the example of <code>debug</code> and <code>debug-component</code>.  But if the module works on both sides, why not just let it be the same thing?  If some sort of tagging is needed, then write a tool that uses something, and start using it.</p>

<p>Browserify and ender already exist, and have proven that this approach is effective.</p>

<p>Another advantage of using the main npm registry is that the namespace is shallow.  So, there is no chance of having a component named &ldquo;foo&rdquo; that is very different from the node module named &ldquo;foo&rdquo;, causing confusion for users.  It can make it a bit trickier to come up with names, but it also encourages each package/module/component to have a name that doesn&rsquo;t refer to something else.</p>

<p>If the central registry is problematic, then using the same code as the npm registry, at a different URL and with a different database, is also an option worth considering.</p>
