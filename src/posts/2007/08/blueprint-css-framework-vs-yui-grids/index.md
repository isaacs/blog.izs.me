---
layout: layouts/post.njk
date: 2007-08-27T17:00:11.000Z
redirect_from:
  - /post/146672022/blueprint-css-framework-vs-yui-grids/
  - /post/146672022/
  - /post/146672022/blueprint-css-framework-vs-yui-grids
  - /post/146672022
slug: blueprint-css-framework-vs-yui-grids
tags:
  - css
  - code beauty
title: Blueprint CSS Framework vs YUI Grids
tumblrid: 146672022
type: text
---
<p>I did <a href="http://foohack.com/2007/08/yui-crockford-module-pattern-vs-prototypes-class-function/">recently compare YUI with a competitor</a>, and I don&rsquo;t want this to turn into a &ldquo;<abbr title="Yahoo User Interface">YUI</abbr> vs. X&rdquo; blog.  It&rsquo;s a very limited topic that quickly becomes just one guy&rsquo;s opinion&mdash;and you probably already know that I&rsquo;m a big fan of YUI, so it would just turn into somewhat heavy-handed marketing.  There are more interesting things I could blog about, and so I plan to only compare YUI with a rival framework when there is some relevant point to make besides <q lang="retarded">YUI iz teh hotness lolzzzz!!!!!11111</q>  Also, <a href="http://mattsnider.com/">Matt Snider already does a good job of comparing frameworks</a>, a much better job than I could, so that niche is filled.  <small>While I write this, I have another half-finished draft about a YUI component sitting in my Wordpress dashboard.  What can I say?  I make web pages at Yahoo, so I use it a lot.  But it&rsquo;s not a &ldquo;YUI vs. X&rdquo; article.</small></p>

<p>CSS frameworks in general, and <a href="http://developer.yahoo.com/yui/grids/">grids.css</a> in particular, have <a href="http://www.elliotswan.com/2006/05/10/yui-grids-css-framework-considered-harmful/">taken</a> <a href="http://vysnu.com/log/2007/08/11/dry-css.html">some</a> <a href="http://www.thinkvitamin.com/features/javascript/15-things-you-can-do-with-yahoo-ui#comment-3192">heat</a>, but I think that the basic concept has been accepted.  The &ldquo;non-semantic class names&rdquo; argument is specious, in my opinion, since the meanings are defined by the grids microformat.  The &ldquo;more code&rdquo; argument is also a bit off, since the verbosity is actually <em>easier</em> to parse and manage once you get used to it (speaking as a 90&rsquo;s-era table-master.)  Also, downloading code is usually faster than parsing/displaying it&mdash;and divs typically render faster than tables.</p>

<p>A recent thread in our internal web development mailing list compared <a href="http://developer.yahoo.com/yui/grids/">YUI&rsquo;s Grids CSS</a> with a hot new kid on the CSS framework block, <a href="http://bjorkoy.com/blueprint/">Blueprint</a>.  As I&rsquo;ve <a href="http://foohack.com/2007/08/yui-crockford-module-pattern-vs-prototypes-class-function/">said before</a>, I feel like the YUI Javascript components seem to be created by developers who love the language and want to use it, rather than other frameworks that seem intent on re-inventing Javascript or turning it into some other language.  The same can be said, I think, for YUI Grids as compared to Blueprint; but in this case, the love/hate is towards standards, semantic markup, microformats, and the &ldquo;spirit&rdquo; of CSS layouts.  As its primary author states, Blueprint &ldquo;brings print design on the web one step closer.&rdquo;</p>

<p>Haven&rsquo;t we all be working to convince our bosses and stakeholders and users and fellow developers that &ldquo;print design on the web&rdquo; is a fundamentally misguided goal?  Isn&rsquo;t that what the whole &ldquo;web standards movement&rdquo; has been about, really?</p>

<p>I think that Blueprint is interesting, but it has some pretty major problems as a CSS framework.</p>

<h3>Pixel-based fonts</h3>

<p>In principle, using a px measurement for font-size is not a good idea.  A handful of browsers will prevent the font from being resized by the user if you do this.  Others will set a minimum pixel font size, which means that, for example, your 8px font and 12px fonts, which should be different sizes to convey differing importance, could both be 12px.</p>

<p>The goal of having a consistent vertical grid is a good idea, and very pleasing visually.  <a href="http://foohack.com/2007/08/marching-to-a-vertical-cadence/">I did it on this site</a>, and without a single px font size (except a single setting on the HTML element while debugging, which was removed later.)</p>

<p>They were wise to attempt it, but misguided in the implementation.  You can do that with flexible fonts just fine, if you&rsquo;re willing to do just a little bit of math.  It won&rsquo;t always round perfectly, but it&rsquo;ll be mostly right most of the time in most browsers, which is all that we can ever hope for as webdevs.</p>

<p>(To be fair, it looks like support for fully flexible fonts is on the road map.)</p>

<h3>It&rsquo;s a bit bloated</h3>

<p>I&rsquo;m not so sure about the complaint that the YUI CSS is bloated&mdash;next to the CSS that most simple blog templates contain (including this one), it&rsquo;s teensy, especially when served gzipped and concatenated with your other stuff.  Unless you&rsquo;re working on some very-high-volume streamlined-to-ridiculousness site, there are probably better ways to optimize.  Do any kind of profiling on most sites, and you&rsquo;ll find that the CSS and markup is a very small fraction of the loading time.  If the requests are minimized, it&rsquo;s almost instantaneous.  Check out the bloated stuff that we wrote for <a href="http://harrypotter.yahoo.com">the Yahoo! Harry Potter site</a>.  The images take a while to download, but the CSS and markup is there faster than you can say &ldquo;He Who Must Not Be Named.&rdquo;</p>

<p>On the other hand, Blueprint CSS is 3 files, one for each of screen and print, and another for IE hacks.  While some will say that having a separate file for IE hacks is a good thing, I much prefer to put all the information for a particular element in one place.  Having a single CSS file makes it easier to concatenate and minify with your own stuff.  And it&rsquo;s just one request, whereas Blueprint is 3.</p>

<h3>Tabular class names like &ldquo;span-2&rdquo; or &ldquo;append-4&rdquo;</h3>

<p>While YUI Grids is often accused of using non-semantic class names, I think that it is actually quite tame in this area.  It uses a microformat-style approach, so that the <em>structure</em> of the data is (ideally) expressed in the class names as they are defined in the microformat, and the visual treatment is defined in the CSS to reflect that structure.  This is in fact the purpose of the div tag and class attribute, and it is wrong to say that it&rsquo;s non-semantic or classitis.  <a href="http://nate.koechley.com/blog/2006/12/15/divitis_and_correct_div_usage/">Nate Koechley said it better</a> than I can.</p>

<p>On the other hand, while Blueprint CSS results in a shallower hierarchy of nested divs, it uses class names with colspan-esque names like &ldquo;span-2&rdquo; and &ldquo;append-4&rdquo;, or definitive &ldquo;stylistic class names&rdquo; like &ldquo;.clear&rdquo;, and so on.  Have we come so far from <a href="http://annevankesteren.nl/2004/06/keep-style-out-of-markup">the sound wisdom that stylistic class attributes are problematic</a>?</p>

<p>This is <em>exactly</em> why we don&rsquo;t use tables for layout any more.  Blueprint CSS ends up rendering faster than a layout table, but it still has most of the same problems as layout tables.</p>

<p>If it is important enough to define your grid layout in the markup, then you should be using a table.  The whole point of CSS layouts is to separate the layout information from the structural semantic markup.</p>

<h3>Takeaways&hellip;</h3>

<p>I use YUI grids on production sites.  I love it.  Other webdevs who are familiar with it can pick up my stuff and run with it easily.  It&rsquo;s a great thing.  I know some who &ldquo;only use frameworks to prototype,&rdquo; but I think it&rsquo;s best to write production-quality code for prototypes.  (Perhaps your front-end isn&rsquo;t wired up to live data, but I strive to make all the code I write meet a certain level of quality.)  If it&rsquo;s useful in prototyping, what&rsquo;s the argument to not use it in a live environment?  Is the 6k of gzipped CSS really such a burden on your page?  If we all use the same framework, then we all know what&rsquo;s going on in one another&rsquo;s code.  This doesn&rsquo;t matter for prototypes, but is crucial for live products that need to be maintained.</p>

<p>All that being said, it would be nice if there was a YUI typography CSS that provided an easy way to achieve consistent vertical spacing without resorting to pixel-sized fonts.  Functionality-wise, that&rsquo;s where Blueprint beats YUI Grids, but I don&rsquo;t think it&rsquo;s a very good implementation, overall.  I&rsquo;m not 100% sure if such a thing is planned for YUI, but I would be surprised if no one on that team has at least thought about it.  As I said before, <a href="http://?show_lines#post-27-itspossible" id="post-27-itspossible">it&rsquo;s possible</a> without stabbing semantics in the face and setting the standards movement back 10 years.</p>

<p>A message to all would-be framework developers out there: Please don&rsquo;t rewrite my languages!  I became a web developer because I care about this craft and enjoy doing it.  CSS, HTML, and Javascript are powerful tools to manipulate this very flexible and exciting development platform.  Please don&rsquo;t think that you can make things better by turning them into something else.  Abstract out some of the commonly used functionality, or show us how to do more with what we have, or set a standard that we can all agree upon; that&rsquo;s all fine.  But don&rsquo;t turn my DIVs into TABLEs, or my SPANs into FONTs, or my Javascript into Ruby.</p>
