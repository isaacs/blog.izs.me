---
layout: layouts/post.njk
date: 2012-07-11T18:10:00.000Z
redirect_from:
  - /post/26989258789/7-surprising-ways-to-speed-up-your-site/
  - /post/26989258789/
  - /post/26989258789/7-surprising-ways-to-speed-up-your-site
  - /post/26989258789
slug: 7-surprising-ways-to-speed-up-your-site
title: 7 Surprising Ways to Speed Up Your Site!!!
tumblrid: 26989258789
type: text
---
<p>These are my optimization tips for JavaScript.</p>

<ol><li>Do less IO.  (Fewer, smaller HTTP reqs.  But mostly just fewer.)</li>
<li>Do slow operations in ways that don&rsquo;t block user interaction.  (Aka &ldquo;async&rdquo; or &ldquo;cheating&rdquo;.)</li>
<li><strong>Write smaller programs.</strong>  Cut unnecessary features.  Most software latency and bugs come from code, so use less of that.</li>
<li><strong>Profile before you optimize</strong>, or go blind from pointless bit twiddling masturbation.</li>
<li><strong>Profile your actual app with actual data.</strong>  Microbenchmarks are often inapplicable.</li>
<li>Write code that you can read and understand.</li>
<li>Don&rsquo;t believe anything you read on the internet about speeding up your site <strong>until you have verified it for yourself, in the context of your app</strong>.</li>
</ol>
