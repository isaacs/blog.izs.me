---
layout: layouts/post.njk
date: 2014-12-08T18:00:00.000Z
redirect_from:
  - /post/104685388058/iojs/
  - /post/104685388058/
  - /post/104685388058/iojs
  - /post/104685388058
slug: iojs
title: Io.js
tumblrid: 104685388058
type: text
---
<p>A lot of people have asked me lately about io.js and its place among Node Forward, the Advisory Board, and npm.</p>

<p>This is my own personal point of view.  However, I have shared early drafts of this post with the io.js technical committee to ensure that it&rsquo;s at least a reasonable approximation of how the team sees things.</p>

<h3>What is io.js?</h3>

<p><a href="https://github.com/iojs/io.js">Io.js</a> is a collaborative fork of <a href="https://github.com/joyent/node">joyent/node</a>.  Io.js is created by Fedor Indutny, a long-time active node core team member responsible for some of the most important parts of the Node.js runtime.</p>

<p>Io.js continues the work that was previously being done by Node Forward in the <code>node-forward/node</code> repository.  We hope to merge with the original Node.js project at some point in the future.</p>

<h3>What is Node Forward?</h3>

<p>Node Forward is an effort by Node.js core contributors, community members, and corporate interests, united in the desire to improve the Node.js project.</p>

<p>On July 11, Mikeal Rogers created a private <code>node-forward</code> repository under his personal GitHub account to discuss the future direction of Node.js.  Many of us felt that it was time to pursue a consensus-seeking contributor-governed process for the project, in a neutral foundation.</p>

<h3>What is &ldquo;node-forward/node&rdquo;?</h3>

<p>After a month in Mikeal&rsquo;s private node-forward repository, the discussion was moved to the <a href="https://github.com/node-forward">Node Forward</a> organization in August, where it could be continued in public.  The Node Forward organization included a (GitHub fork-button-style) &ldquo;fork&rdquo; of Node.js at <a href="https://github.com/node-forward">node-forward/node</a>, created with the express intent of merging changes with the joyent/node repository.</p>

<p>At that time, Mikeal wrote:</p>

<blockquote>
  <p>The first goal of the foundation is to house core development at a neutral organization that can support Node. <em>Nobody</em> prefers that work to be released as a fork and we will continue to work with Joyent to make them a member and even a leader of this foundation. Joyent may decide that the best thing for Node is to continue their own work in parallel to the work other contributors are taking under the foundation in a symbiotic manner that has propelled projects like Linux and BSD. In that case the contributors in the TC are committed to releasing as a &ldquo;fork&rdquo; although they <strong>do not</strong> find it preferable.</p>
</blockquote>

<p>In the Node Forward repository, the core contributors involved in this effort formed a Technical Committee (TC), and came to consensus on governance process and broad technical direction.  The TC consists of 6 of the <a href="https://github.com/joyent/node/graphs/contributors">top 8 Node.js core contributors</a>.  (Ryan Dahl has no current involvement with Node.js.  TJ Fontaine was invited but declined to participate.)</p>

<h3>Does Node Forward compete with Joyent or Node.js?</h3>

<p>No.</p>

<p>Joyent is a corporation that provides container infrastructure as a service solutions, including the Joyent Container Service, the Manta data storage and analytics platform, and the SmartDataCenter orchestration system.  In 2010, Joyent purchased the Node.js copyright and trademark from Node&rsquo;s original author, Ryan Dahl.</p>

<p>Node Forward is a group of community members and core committers who want to continue to work on improving Node.js as effectively as possible, using open self-governance in a neutral community foundation.</p>

<p>The goal of Node Forward is to work with Joyent and the rest of the Node.js community in order to improve Node.js.  We respect Joyent&rsquo;s significant investment in Node.js over the years, and we believe that a combined effort is beneficial to Joyent and to Node.</p>

<h3>What is the Joyent Node Advisory Board?</h3>

<p>On August 13, Joyent&rsquo;s CEO Scott Hammond called to speak with me about the direction of Node.js.  He indicated that he was also speaking to many other Node business, technical, and community leaders.</p>

<p>On September 26, he held a meeting to discuss the creation of an advisory board.  He said he wanted to address the issues surrounding the Node project, and the board would be a way to get that process started.</p>

<p>The first official meeting of the Advisory Board occurred on October 23.</p>

<p>More information about the Joyent Node Advisory Board can be found <a href="http://nodejs.org/about/advisory-board/">on Joyent&rsquo;s website</a>.</p>

<h3>Why was node-forward/node made private?</h3>

<p>On October 9th (that is, after the initial bootstrapping meeting and before the first official Advisory Board meeting), Scott Hammond called Mikeal Rogers and told him that the node-forward/node repository was a violation of <a href="http://trademarks.justia.com/852/62/node-js-85262623.html">Joyent&rsquo;s trademark on Node.js</a>.</p>

<p>Hammond expressed that he saw this as a sign of bad faith, undermining his efforts in the creation of an advisory board.  We agreed to make the repository private in order to show our commitment to working with Joyent on improving Node.js.</p>

<p>I brought up the issue in the third Joyent Node Advisory Board meeting on November 20.  Scott Hammond reiterated that it is a violation of Joyent&rsquo;s trademark to release code &ldquo;based on Joyent Node.js which is also called node&rdquo;, and that he intended to ensure that their trademark was protected &ldquo;by any and all legal means&rdquo;.  He requested that we choose a name other than &ldquo;node&rdquo; if we make this project public.</p>

<p>By that time, there was also clear indication of forward progress at the JNAB meetings.  We had taken steps towards a consensus-based open governance model not dictated by any one corporation.  There had been several discussions of relaxing use of the &ldquo;Node.js&rdquo; trademark by businesses providing products related to Node.  There was a clearer understanding of the role that the community might play in future Advisory Board meetings.</p>

<p>I am optimistic that the JNAB meetings will continue to be productive.</p>

<h3>Why was <a href="https://github.com/iojs/io.js">io.js</a> created?</h3>

<p>On November 26, Fedor Indutny, an extremely prolific Node.js core contributor, and an active participant in Node Forward, decided that he would create a fork of Node.js with a different name, so that the technical work started in Node Forward could continue in public without violating Joyent&rsquo;s trademark.</p>

<p>The Technical Committee that had previously been working on node-forward/node decided to move to the <a href="https://github.com/iojs/io.js">io.js</a> repository.  The other non-technical discussion repositories remain on the <a href="https://github.com/node-forward">Node Forward</a> organization at this time.</p>

<h3>Does io.js compete with Joyent or Node.js?</h3>

<p>No.</p>

<p>The intent of io.js is to provide a space for the Node core team to continue to do the work of improving Node.</p>

<p>Io.js continues the efforts of Node Forward.  We are committed to making forward progress and serving the Node.js community, both in technical and non-technical issues.</p>

<p>The work being done in the Joyent Node Advisory Board appears to be heading towards shared goals for the good of the Node community.  I expect that this will continue.</p>

<p>The Node community as whole is endeavoring to make a change.  The transformation is in progress and we expect to come out better for it.  io.js is an ingredient in the process of change, a spark.  The future is large, and we continue exploring it.</p>

<h3>What are the goals of io.js?</h3>

<p>In no particular order:</p>

<ul><li>Continuous integration</li>
<li>100% passing tests as a normal state of affairs</li>
<li>Strict SemVer-compliant versioning</li>
<li>Contributor ownership, outside of corporate control</li>
<li>Transparent consensus-seeking governance</li>
<li>Weekly releases</li>
<li>Supported versions of V8</li>
<li>Active development</li>
<li>Predictable roadmap</li>
<li>Community engagement</li>
</ul><p>Assuming the Joyent Node Advisory Board continues to make progress towards these goals, we expect to merge the projects in the future.</p>

<h3>What is npm&rsquo;s position on Node forks?</h3>

<p>npm is the package manager for JavaScript.  We support all nodes that are widely used in the JavaScript community, and do not recommend or prefer any of them over any other.</p>

<p>Node&rsquo;s community has always been its best feature.  With over 100,000 modules today, covering a breathtaking array of use cases, used every day by millions of developers around the world, it is clear that the primary value Node provides is a small core enabling userland innovation.</p>

<p>npm remains committed to its mission of reducing friction for all JavaScript developers.</p>

<h3>Will npm be renaming to &ldquo;ipm&rdquo; since it&rsquo;s the io.js package manager?</h3>

<p>No.</p>

<p>&ldquo;npm&rdquo; does not stand for Node Package Manager.  It is <a href="https://docs.npmjs.com/misc/faq#if-npm-is-an-acronym-why-is-it-never-capitalized-">officially</a> an abbreviation for &ldquo;npm is not an acronym&rdquo;.  We do enjoy <a href="https://github.com/npm/npm-expansions">novel pun-making</a> though.</p>

<hr><p><i>Edit 2014-12-11 – At the decision of the last TC meeting, it&rsquo;s &ldquo;io.js&rdquo; or &ldquo;Io.js&rdquo; when capitalized, but not &ldquo;IO.js&rdquo;.</i></p>
