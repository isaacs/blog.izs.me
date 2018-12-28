---
date: 2012-03-18T17:40:00.000Z
redirect_from:
  - /post/19521376222/dont-use-classes/
  - /post/19521376222/
  - /post/19521376222/dont-use-classes
  - /post/19521376222
slug: dont-use-classes
tumblrid: 19521376222
type: video
video: >-
  <iframe width="500" height="375"  id="youtube_iframe"
  src="https://www.youtube.com/embed/o9pEzgHorH0?feature=oembed&amp;enablejsapi=1&amp;origin=https://safe.txmblr.com&amp;wmode=opaque"
  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
  picture-in-picture" allowfullscreen></iframe>
---
<p>Watch this video.  I really like a lot of what he has to say.  Two main comments:</p>

<ol><li><strong>165</strong> Exceptions in the standard library, is <em>enough</em>!?  <strong>Are you fucking kidding me?</strong>  JavaScript has 7, and if you ask me, that&rsquo;s way too many.  <code>URIError</code> is completely unnecessary, and <code>EvalError</code> is always better off being expressed as something else.  The only Error types you ever need to use in your code are <code>Error</code> or <code>TypeError</code>.  That being said, &ldquo;Don&rsquo;t create a new exception type&rdquo; is 100% spot-on.  Even having typed catches in the language encourages this kind of awful profusion.</li>
<li>The reliance on &ldquo;the standard library&rdquo; is, imo, a bad thing.  The idea that we should not reinvent wheels is great.  s/standard library/npm registry/g and you&rsquo;ve got me.</li>
</ol><p>Many aspects of the Node.js module system, and the npm package registry, are built with exactly these principles in mind.</p>

<ol><li><code>module.exports</code> allows you to export a single thing from a module.  If I had the opportunity to do it again, I&rsquo;d only support that, rather than an <code>exports</code> object. If you really want to export multiple things, you&rsquo;d still be able to, but it should be an extra mental leap to do so.</li>
<li>The single-level namespace in the npm registry makes it a bit less likely to end up with garbage like <code>com.initech.utils.UtilityFactory.UtilityFactoryExceptions.UtilityFactoryNotFoundException</code>.  &ldquo;Namespaces are for preventing collisions, not for creating taxonomies.&rdquo;  I cheered when he said this.</li>
<li>Once upon a time, I foolishly implemented the proposed &ldquo;modules&rdquo; feature in package.json.  Ryan gave me a lot of shit about that and refused to support it in node, no matter how easy it was to do.  I realized (a bit too late) that he was absolutely right, and pissed off some folks by removing it.  Today, you get one <code>main</code> module defined in package.json.  That&rsquo;s it.  A package is a module.  Yes, a package is also a folder, and modules are files, so you <em>can</em> dive into it and get at its guts.  But it&rsquo;ll feel <em>off</em>, because it&rsquo;s weird, and non-standard.  You&rsquo;ll get funny looks.  <strong>This is on purpose,</strong> because it nudges you towards a flatter namespace by default.</li>
</ol><p>The social engineering in node and npm is always more carrot than stick, and we always try to nudge people in a good direction by saying &ldquo;no&rdquo; to a feature rather than saying &ldquo;yes&rdquo; to one.  This hasn&rsquo;t been done perfectly in the past, but I am fairly proud of the results.</p>

<p>It&rsquo;s a shock to someone who&rsquo;s used to writing giant monolithic programs, and has to re-think how they draw their boundaries.  That&rsquo;s good.  In fairly short order, things like local installs and limited exports start to &ldquo;click&rdquo; in a programmers mind most of the time.  I&rsquo;ve seen a lot of people start out frustrated and angry, and then a month later tell me how odd it is to use other platforms that don&rsquo;t have the a similar approach.</p>

<p>When you solve a problem that others accept as the status quo, you often end up finding new problems.  You don&rsquo;t have to worry about coming up with unique descriptive names for your programs when you can nest them 7 layers deep underneath a company name.  You don&rsquo;t need to come up with approaches for managing a deep dependency graph if conflicts are insoluble.</p>

<h2>Addendum</h2>

<p>It&rsquo;s not that I&rsquo;m against using classes.  I&rsquo;ve written several programs that use classes extensively.  It&rsquo;s the proper abstraction for a long-lived object that needs to keep state and be interacted with.  The hoop-jumping required to do this sort of thing in pure functional languages, with accumulator sets and so on, is kind of silly sometimes.</p>

<p>That being said, the <em>point</em> of using classes is to make things <em>easier</em>.  If your class is a fire-and-forget thing with a single method, then it&rsquo;s really just a function, and would be easier expressed in that manner.</p>

<p>There&rsquo;s no hard and fast rule here.  You have to actually think about what would make your program easier to use, easier to debug, and easier to understand.</p>
