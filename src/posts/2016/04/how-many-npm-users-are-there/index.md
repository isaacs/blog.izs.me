---
layout: layouts/post.njk
date: 2016-04-27T18:45:14.000Z
redirect_from:
  - /post/143491623068/how-many-npm-users-are-there/
  - /post/143491623068/
  - /post/143491623068/how-many-npm-users-are-there
  - /post/143491623068
slug: how-many-npm-users-are-there
title: how many npm users are there?
tumblrid: 143491623068
type: text
via:
  name: npmjs
  title: The npm Blog
  url: 'https://blog.npmjs.org/post/143451680695/how-many-npm-users-are-there'
---
<p><a class="tumblr_blog" href="http://npmjs.tumblr.com/post/143451680695">npmjs</a>:</p>

<blockquote>
<h2>A story in 6 graphs</h2>

<p>How many npm users are there? It’s a surprisingly tricky question.</p>

<p>There are a little over 211,000 registered npm users, of whom about 73,000 have published packages. But far more people than that use npm: most things npm does do not require you to login or register. So how many are there, and what are they up to? Our first and most obvious clue is the number of packages they are downloading:</p>

<h3>How many packages are downloaded?</h3>

<p><figure class="tmblr-full" data-orig-height="536" data-orig-width="678" data-orig-src="./412a8096-0bc1-11e6-9b2a-fb1b3c9b3973.png"><img src="https://66.media.tumblr.com/12052643999164e11e252395dc09a725/tumblr_inline_pe360fbqqn1qzgxun_540.png" alt="package downloads per week passed 1 billion in April" data-orig-height="536" data-orig-width="678" data-orig-src="./412a8096-0bc1-11e6-9b2a-fb1b3c9b3973.png"/></figure></p>

<p>That’s over a billion downloads <em>per week</em>, and that only counts package installs that weren’t already in cache – about 66% of npm package installs don’t require downloading any packages, because they fetch from the <a href="https://docs.npmjs.com/cli/cache">cache</a>. Still, the growth is truly, without exaggeration, exponential.</p>

<p>So what’s driving all the downloads? Are the same people building ever-more-complicated applications, downloading more packages to do it? Are the same people running build servers over and over? Or are there actually more people? Our next clue comes from the number of unique IPs hitting the registry:</p>

<h3>How many IPs hit the registry?</h3>

<p><figure class="tmblr-full" data-orig-height="452" data-orig-width="714" data-orig-src="./0bbeeb34-0bc3-11e6-8572-59b72251cb88.png"><img src="https://66.media.tumblr.com/5983fc4806964f24e587d90b02f8210a/tumblr_inline_pe360fzbth1qzgxun_540.png" alt="3.1MM unique IPs hit the registry in March" data-orig-height="452" data-orig-width="714" data-orig-src="./0bbeeb34-0bc3-11e6-8572-59b72251cb88.png"/></figure></p>

<p>Here’s a ton of growth again, close to 100% growth year-on-year, but much more linear than the downloads: 3.1 million IPs hit the registry in March. Of course, <a href="https://en.wikipedia.org/wiki/Wikipedia:IP_addresses_are_not_people">IP addresses are not people</a>. Some of these IPs are build servers and other robots. Other IP addresses are companies or educational institions that serve thousands or even tens of thousands of people. So while it doesn’t correlate perfectly, generally speaking, more IPs means more people are using npm.</p>

<h3>How many times does npm get run?</h3>

<p><figure class="tmblr-full" data-orig-height="430" data-orig-width="654" data-orig-src="./130501bc-0bc3-11e6-8bfc-32ec0b74ad47.png"><img src="https://66.media.tumblr.com/d0f01b749b3fabb655e2f267626a16e6/tumblr_inline_pe360gIEtn1qzgxun_540.png" alt="unique sessions" data-orig-height="430" data-orig-width="654" data-orig-src="./130501bc-0bc3-11e6-8bfc-32ec0b74ad47.png"/></figure></p>

<p>Every time npm runs it generates a unique ID that it sends as a header for every request it makes during that run. This ID is random and not tied to you in any way, and once npm finishes running it is deleted. We use this ID for debugging the registry: it lets us see that these 5, 10 or 50 requests were all part of the same operation, which makes it easier to see what’s going on when somebody has a problem. It also makes it possible to say roughly how many times npm is run – or at least, run in a way that makes a request to the registry. There were 84 million npm sessions in March: this number is growing faster than IPs, but less quickly than downloads.</p>

<p>We can take these last two and combine them:</p>

<h2>How many packages per npm run?</h2>

<p><figure class="tmblr-full" data-orig-height="451" data-orig-width="625" data-orig-src="./192f2e78-0bc3-11e6-8f01-d3590efd53cf.png"><img src="https://66.media.tumblr.com/23ac0a4bff84e47d115c2814c52b417a/tumblr_inline_pe360hS1iu1qzgxun_540.png" alt="downloads per session" data-orig-height="451" data-orig-width="625" data-orig-src="./192f2e78-0bc3-11e6-8f01-d3590efd53cf.png"/></figure></p>

<p>This number is interesting because it’s not going anywhere. The ratio of packages downloaded to npm sessions is essentially constant (this is not the same as the number of packages downloaded per install, because many npm sessions don’t result in downloads). But this is a clear signal: the number of packages per install isn’t rising. Applications aren’t getting notably more complicated; people are installing packages more often because they are writing more applications.</p>

<p>Here’s a final clue:</p>

<h3>How many packages per IP?</h3>

<p><figure class="tmblr-full" data-orig-height="512" data-orig-width="725" data-orig-src="./20f7fffe-0bc3-11e6-9220-e6d34f5efe15.png"><img src="https://66.media.tumblr.com/00819669639a6109cc8674ed308ddf0f/tumblr_inline_pe360h0m0l1qzgxun_540.png" alt="downloads per IP" data-orig-height="512" data-orig-width="725" data-orig-src="./20f7fffe-0bc3-11e6-9220-e6d34f5efe15.png"/></figure></p>

<p>The number of packages downloaded by an IP is also rising linearly. So, not only are more people using npm, but the people who are already using npm are using it more and more frequently. And then of course there’s this number:</p>

<h3>Web users</h3>

<p><figure class="tmblr-full" data-orig-height="187" data-orig-width="724" data-orig-src="./2d3c9dba-0bc3-11e6-8fbc-fb8cb755006f.png"><img src="https://66.media.tumblr.com/504694df35d00046cb029f525e7a4854/tumblr_inline_pe360ix3sE1qzgxun_540.png" alt="unique web users" data-orig-height="187" data-orig-width="724" data-orig-src="./2d3c9dba-0bc3-11e6-8fbc-fb8cb755006f.png"/></figure></p>

<p>Another way of counting npm users is counting people who visit npm’s website. This also grew enormously; 400% since we started the company. In the last 90 days, npm saw just over 4 million unique users visit our site. Ordinarily, you take web user numbers with a grain of salt – there’s lots of ways they can be wrong. But combined with the IPs, the sessions, and the download numbers, we think that number is probably accurate, maybe even a little conservative.</p>

<h3>Invisible users</h3>

<p>There are so many sources of error! There are robots who crawl the registry. There are lots of companies who host their own internal registry caches, or run <a href="https://www.npmjs.com/enterprise">npm Enterprise</a>, and so have their own npm website and registry and never hit ours. There’s the entire nation of China, which finds it difficult to access npm through the great firewall, and is served by our hard-working friends at <a href="https://cnpmjs.org/">cnpmjs</a>. There’s errors that inflate our numbers, and errors that deflate them. If you think we’re way off, let us know. But we think we have enough for a good guess.</p>

<h3>4 million npm users</h3>

<p>We think there are four million npm users, and we think that number is doubling every year. Over at the node.js foundation, they see <a href="https://www.youtube.com/watch?v=nHOTBiuAxtU&amp;feature=youtu.be&amp;t=4m12s">similar growth numbers</a>. Not only are there more of them, but they’re more engaged than ever before. This is awesome! The <a href="https://twitter.com/seldo/status/725040729001611264">25 very hard working people of npm Inc.</a> thank you for your participation and your contributions to the community, and we hope to see even more of you.</p>
</blockquote>
