---
layout: layouts/post.njk
date: 2007-09-17T17:01:49.000Z
redirect_from:
  - /post/146672206/whiting-out-ads-is-adblock-even-necessary/
  - /post/146672206/
  - /post/146672206/whiting-out-ads-is-adblock-even-necessary
  - /post/146672206
slug: whiting-out-ads-is-adblock-even-necessary
tags:
  - broken
  - in the minds of users
  - the business
title: 'Whiting out ads: Is AdBlock even Necessary?'
tumblrid: 146672206
type: text
---
<p>I read <a href="http://www.nytimes.com/2007/09/03/technology/03link.html?_r=2&amp;oref=slogin&amp;oref=slogin">an article</a> last week in the New York Times about <a href="https://addons.mozilla.org/en-US/firefox/addon/10">AdBlock</a>, a Firefox plugin that whites out ads if they are served from certain large advertising servers.  Apparently, a rather large number of people are getting very vocal and outraged at this, calling it theft, and so forth.  They&rsquo;re even <a href="http://whyfirefoxisblocked.com/">blocking Firefox users</a> from visiting their sites.  (Via a <a href="http://twitter.com/codinghorror/statuses/249767202">Twitter update</a> from <a href="http://codinghorror.com">Jeff Atwood</a>.)</p>

<p>I found it somewhat interesting that the Big Three (Google, Yahoo!, Microsoft) in the online advertising business seem to have no comment.  Also, I wasn&rsquo;t surprised.  At least here at Yahoo!, it&rsquo;s pretty well known that online advertising is not as effective as high-quality partnerships when it comes to driving revenue.  The entire &ldquo;brand universe&rdquo; thing is all about getting a brand&rsquo;s fans to interact around the brand, and thus drive interest.  Advertising is secondary to building a strong relationship with the partner.  The reason why search marketing is so much more lucrative than rich media ads is that <em>some users actually notice textual sponsored search results</em>, because they are so often relevant.</p>

<p>The &ldquo;Block Firefox&rdquo; crowd is misguided, but not for the reasons that AdBlock&rsquo;s defenders tend to cite.  Ultimately, AdBlock doesn&rsquo;t matter.  If your main revenue model is from &ldquo;dumb&rdquo; ads&mdash;even if they&rsquo;re YPN or AdSense, which are some of the smartest &ldquo;dumb&rdquo; ads on the market&mdash;then you&rsquo;re bound for failure, or at least mediocrity.  At the best, unless you work the system and create thousands of adsense-spam sites, or you&rsquo;re in the Viagra business, your ads will be ignored and you&rsquo;ll never make very much money.  At the worst, you&rsquo;ll damage your brand and your users will move on.  (Note that &ldquo;smart&rdquo; ads can potentially be much better.  I actually think that <a href="http://www.codinghorror.com/blog/archives/000893.html" title="How To Advertise on Your Blog Without (Completely) Selling Out">Jeff Atwoods ads on Coding Horror</a> are helpful fairly often&mdash;but I still don&rsquo;t see them most of the time.)</p>

<h3>Banner-blind</h3>

<p><a href="http://www.useit.com/alertbox/9709a.html">As far back as 1997</a>, research showed that users ignore advertisements with alarming consistency.  <a href="http://en.wikipedia.org/wiki/Banner_blindness">Banner Blindness</a> is so pervasive that it <a href="http://www.useit.com/alertbox/fancy-formatting.html">makes &ldquo;highlighted&rdquo; text invisible</a> and even <a href="http://www.useit.com/alertbox/banner-blindness-ballot-design.html">affected the results of an election</a>.</p>

<p>As Nielsen so aptly pointed out, the election was not a case of &ldquo;stupid voters.&rdquo;  It&rsquo;s a case of normal, intelligent people, habituated to a specific set of situations, falling victim to a <a href="http://www.useit.com/alertbox/banner-blindness.html">stupid design</a> that isn&rsquo;t ergonomic.  <q cite="http://www.useit.com/alertbox/banner-blindness-ballot-design.html">&ldquo;In fact, tech-savvy voters are more likely to be hit by banner blindness than people who never use the Internet.&rdquo;</q></p>

<p>There are plenty of cases like this.  The conventional wisdom about the best places to put things is often wrong.  Recently, I needed to look up a word.  I usually use <a href="http://m-w.com">Merriam Webster</a>, but their site was taking a long time to respond for some reason.  So, I punched up <a href="http://dictionary.com">dictionary.com</a>.  And I, an extremely web-savvy user who has spent about 70% of his waking hours over the last 15 years online, sat and stared at the screen for a full 5 minutes before I could figure out how to get a word defined.</p>

<p>That bears repeating:</p>

<p>On <em>dictionary.com</em>, it took me <em>5 minutes</em> to figure out <em>how to get a word defined</em>.  In that amount of time, I could have found the word in a paper dictionary.  Major catastrophic UI failure.  Dead on the table, flat lining, going towards the light.  The nurses are pumping the bag on its face, but there&rsquo;s no use.  The old battle-hardened UI surgeon comes in the room and proclaims, &ldquo;He doesn&rsquo;t need a doctor, he needs a priest.&rdquo;</p>

<p>How is this possible?  Well, in a classic fit of hubris, they put the input field up in the header, most likely on the (extremely incorrect) assumption that &ldquo;that&rsquo;s the most visible spot.&rdquo;  Wrong, wrong, wrong!  The header is for your logo, navigation, and maybe some useless doodads.  It is nearly the <em>least</em> visible spot on your page, especially if its colored differently than the rest of the page!   If your site is called &ldquo;dictionary.com&rdquo;, then the dictionary is main content, and that goes dead-center on the page, where the user&rsquo;s eyeballs will fall if they&rsquo;re looking straight ahead.  In fact, it would be better to take a cue from Google, and have <em>nothing but</em> the input box on the page.</p>

<p>To make matters worse, just below the header, they put an advertisement.  My mental adblock kicked in, and blanked out the header and the ad&mdash;<em>completely and organically obscuring the input field from my mental model of the page</em>.  Worse, the field is labeled &ldquo;search&rdquo;, rather than something more useful like &ldquo;enter your term&rdquo;.  When I did find the field, my instinct was to type &ldquo;get definitions&rdquo; or something like that.  (I didn&rsquo;t, of course&mdash;I&rsquo;ve been trained over the years to cope with bad design.)</p>

<h3>Fast Forward &mdash; 99.9% Wasted</h3>

<p>On television, many people either zoom past the commercials on their DVR, or they leave the room, or, even more often, they just ignore them.  The more you watch TV, the less you interact with commercials.  The more often you use the web, the less you need AdBlock, because the easier it gets to ignore the ads, to the point where you don&rsquo;t even notice that they&rsquo;re there.  The thought of intentionally clicking on a banner ad is on par with walking to work naked.</p>

<p>There&rsquo;s an old saying, &ldquo;<q>I know half my advertising dollars are wasted, but I don&rsquo;t know which half.</q>&rdquo;  Online, it&rsquo;s not half, it&rsquo;s 99.9% wasted, and with click-through tracking, you know exactly which 99.9%.  Your money is wasted when you buy banner ads, because users don&rsquo;t see them.  That&rsquo;s not to say that advertising online is a waste&mdash;it just has to be done smarter, because the users adapted almost immediately.</p>

<p>Take, for example, Smirnoff Green Tea.  <a href="http://www.youtube.com/watch?v=PTU2He2BIc0">The &ldquo;ad&rdquo;</a> (and the West Coast <a href="http://www.youtube.com/watch?v=GWzNiUXTh7E">response</a>) came out long before you could buy <a href="http://www.teapartay.com/">the product</a> in stores.  They uploaded the videos to the internet, and let users pass them around.  The trick is, <em>users wanted to see these ads</em>, because they provided real entertainment value in addition to very subtly pushing a product.  Or, look at the <a href="http://www.youtube.com/watch?v=srrbvNNUKrA">BMW short directed by Guy Richie and starring Madonna</a>, or the <a href="http://www.youtube.com/results?search_query=bmw+clive+owen&amp;search=Search">other BMW vids with Clive Owen</a>.  They&rsquo;re too slick to be an ad, and funny enough for everyone to tell their friends about it.  And they just happen to make the BMW M5 seem like the coolest car on the road.</p>

<p>In a less high-budget approach, consider the snippets above the message-list in GMail.  About 80% of the time, they&rsquo;re the things that I chose to put there: Slashdot and other news feeds, mostly.  That other 20% of the time, they&rsquo;re contextually related to either the news feeds that I normally view, or the message(s) I&rsquo;m viewing now.  I see those, because my brain doesn&rsquo;t see them as an &ldquo;ad&rdquo;, but rather as potentially relevant content that I may be interested in.</p>

<h3>Evolved to Ignore</h3>

<p>Millions of years of evolution has made us very good at picking out relevancy in a sea of details.  Once upon a time, it helped us find the materials to make tools, the footprints of our prey, and the plants that were edible.  Even as you read this sentence, yuor brain will likely skip right over the spelling error, since it doesn&rsquo;t matter.  A human only has so much attention and mental energy, and survival depends upon the judicious use of it.  The more information you&rsquo;re exposed to, the more noise you have to tune out, and the mental cost of making these choices ads up quick.  So, we delegate certain rules to the subconscious, like &ldquo;Ads are always pointless. Flashy text is a gimmick. Don&rsquo;t bother me with it.&rdquo;  The ad doesn&rsquo;t even make it to the conceptual level of analysis&mdash;somewhere between the eyeballs and the higher brain functions, it hits a spam filter and gets discarded.</p>

<p>Wladimir Palant <a href="http://adblockplus.org/blog/mozilla-hurting-google-by-recommending-adblock-plus">said it well</a>: <q>[T]here is only one reliable way to make sure your ads aren&rsquo;t blocked — make sure the users don&rsquo;t want to block them.</q></p>

<p>I&rsquo;d go a step further than his statement: Even if the &ldquo;block firefox&rdquo; crowd were to find a way to detect AdBlock, it wouldn&rsquo;t matter.  I used to find online ads annoying.  Now I don&rsquo;t find them anything, because I can&rsquo;t see them, and as such, I&rsquo;ve never felt a need to install AdBlock.  (The occasional rich-media ad that breaks the page layout does annoy the piss out of me, though.)  There will never be a way to block users who ignore ads, and the percentage of people who are completely blind to ads will continue to increase as more people use the web.  The revenue stream, which has been drying up since the 90s, will get ever drier as more brand owners realize that there are more effective ways to meet their marketing objectives.  If AdBlock is relevant to your site, you&rsquo;re already in trouble, and it&rsquo;s just going to get worse from here.</p>
