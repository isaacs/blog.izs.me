---
date: 2014-06-01T20:32:48.000Z
redirect_from:
  - /post/87525128203/how-to-install-nodejs-and-npm-on-ubuntu-1404/
  - /post/87525128203/
  - /post/87525128203/how-to-install-nodejs-and-npm-on-ubuntu-1404
  - /post/87525128203
slug: how-to-install-nodejs-and-npm-on-ubuntu-1404
title: How to install node.js and npm on ubuntu 14.04
tumblrid: 87525128203
type: text
via:
  name: seldo
  title: Seldo's Tumblr
  url: >-
    https://seldo.tumblr.com/post/87521719450/how-to-install-nodejs-and-npm-on-ubuntu-1404
---
<p><a href="http://seldo.tumblr.com/post/87521719450/how-to-install-node-js-and-npm-on-ubuntu-14-04" class="tumblr_blog">seldo</a>:</p>

<blockquote><p>The top result for “how to install node on ubuntu 14.04” is currently <a href="https://www.digitalocean.com/community/articles/how-to-install-node-js-on-an-ubuntu-14-04-server">this DigitalOcean article</a>. Unfortunately, their first suggestion, installing via apt-get, will install an old version of node and a very old version of npm that cannot properly update itself (because of path differences). Their second suggestion is much better. Simply:</p>
<pre><code>sudo add-apt-repository ppa:chris-lea/node.js</code></pre>
<pre><code>sudo apt-get update</code></pre>
<pre><code>sudo apt-get install nodejs</code></pre>
<p>This is <strong>all you need to do</strong>. npm is bundled with node.js and will be installed automatically if you install this way. If you want to make sure you’ve got the very most recent release of npm, you can do:</p>
<pre><code>sudo npm install npm -g</code></pre>
<p>This step is optional. At the moment Chris Lea’s PPA will give you npm 1.4.9, which is recent enough to have no showstopper problems (the version that comes with apt, 1.3.10, is not terrible but has some known bugs).</p></blockquote>
