---
layout: layouts/post.njk
date: 2007-08-20T18:39:00.000Z
redirect_from:
  - /post/146671933/the-new-spam-broken-unsubscribe-methods/
  - /post/146671933/
  - /post/146671933/the-new-spam-broken-unsubscribe-methods
  - /post/146671933
slug: the-new-spam-broken-unsubscribe-methods
tags:
  - broken
  - the business
title: 'The New Spam: Broken Unsubscribe Methods'
tumblrid: 146671933
type: text
---
<p>Sometimes, I&rsquo;ll forget to (un)check the box on a form, and inadvertently tell some perfectly well-meaning company that I want to receive their crappy emails in my inbox.  Or, perhaps, I&rsquo;ll think it sounds like a good idea, and even enjoy receiving them for a while, and then get bored or decide that it&rsquo;s not for me.  It&rsquo;s not spam, per se, since I <em>did</em> ask for it, and the sender isn&rsquo;t some Nigerian banker or penis enlarger, but I no longer want to receive it.</p>

<p>Today I ran face-first into the fact that Borders Bookstore breaks every rule in this list.  Every single one.  And sadly, they&rsquo;re not that unusual.</p>

<p>Either way, the result is usually the same: I scroll to the bottom of the message, searching for the url that I have to visit to unsubscribe.  Since I often view my email on my phone in text-only mode, I then find the words &ldquo;click here to unsubscribe&rdquo; that are not hyperlinked.  Strike 1: Sending html email is fine, but make sure that the text-only version has the url and not the link text.  Almost every text-only email reader these days will turn it into a link.</p>

<p>What&rsquo;s worse is the &ldquo;reply to blah blah with the word &lsquo;unsubscribe&rsquo; in the subject&rdquo;.  Strike 2: Don&rsquo;t make me send you anything.  If I have to send you an email to stop receiving your crappy emails, I&rsquo;ll probably just black-hole that account on general principle.</p>

<p>Log onto my email in Firefox, and change to the html view.  Click the link.  It says that I have to log in to change my email preferences.  Strike 3: If I&rsquo;m clicking a link from my email address telling you that I want to unsubscribe, don&rsquo;t make me log in and navigate your crappy application to find the unsubscribe link.  You already know who I am, because you sent me something.  Put a key or whatever in the URL.</p>

<p>I log in, and click the url again.  It says that I have to log in to change my email preferences.  Strike 4: If I&rsquo;m already logged in, why doesn&rsquo;t it just read the cookie or whatever?</p>

<p>So, I log in again, and look through the options to find the &ldquo;Email preferences&rdquo; link.  I go to the page, uncheck the &ldquo;please send me crap&rdquo; box, and then look for the submit button.  It&rsquo;s nowhere to be found.  I actually resorted to inspecting the HTML in Firebug and finding the submit element in question and tweaking its CSS to pull it out from behind another element so that I could click on it.  Out of curiousity, to research for this article, I tried it in a few other browsers, and it worked in IE 6 on a PC only.  (It was broken in IE 7.)  Strike 5: Please test your pages in something other than last year&rsquo;s IE on Windows.  At least load them up and make sure that the stuff is visible.  It literally takes 5 minutes.</p>

<p>On the next page, it asks me if I&rsquo;m sure.  It assures me that there is no other way to get coupons and valuable discounts.  Strike 6: If I&rsquo;ve made it this far, I don&rsquo;t care about your stupid offers, I&rsquo;m sure that I don&rsquo;t want them.</p>

<p>In my opinion, there is only one good way to handle any kind of automated mailing.  At the bottom of every message, in legible font, it should say: <q>You are receiving this message because you signed up for it.  Please visit <a href="http://example.com/unsubscribe?u=12345&amp;e=blah@blah.com">http://example.com/unsubscribe?u=12345&amp;e=blah@blah.com</a> to unsubscribe.</q></p>

<p>On the page reached, it says, <q>You have been unsubscribed.  You will receive one more message confirming this, just in case it was an accident.</q></p>

<p>It sends you a message that says, <q>You were unsubscribed from the blah blah list.  If this was an accident or a mistake, please visit <a href="http://example.com/subscribe?u=12345&amp;e=blah@blah.com">http://example.com/subscribe?u=12345&amp;e=blah@blah.com</a> to sign up again.</q></p>

<p>Failing that ideal setup, the link should take the user directly to a plain-vanilla page where they can <em>easily</em> choose what to receive and not receive in a single step.  That&rsquo;s what this blog does, care of my lightly hacked version of <a href="http://txfx.net/code/wordpress/subscribe-to-comments/">the Subscribe to Comments plugin</a>.  As a reader and commenter, I find that it&rsquo;s nice to receive an update if someone leaves a comment on a blog post where I&rsquo;ve commented.  I&rsquo;m writing a comment, so I&rsquo;m interested in the discussion.  As an author, it&rsquo;s nice to know that the readers who leave comments will know that I&rsquo;m responding to them.  And it&rsquo;s easy to avoid, for those who don&rsquo;t want to receive anything, because of the nice &ldquo;Don&rsquo;t ever send me crap&rdquo; option on the subscription management page.</p>

<p>If you don&rsquo;t want to hurt your brand and anger your customers, ALWAYS err on the side of <em>not</em> sending them email.  This experience only served to make me more likely to use <a href="http://amazon.com?tag=isaacschcom-20">Amazon</a> next time.</p>
