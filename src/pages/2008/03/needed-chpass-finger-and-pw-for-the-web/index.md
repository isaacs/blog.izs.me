---
date: 2008-03-10T17:00:38.000Z
redirects:
  - /post/146672596/needed-chpass-finger-and-pw-for-the-web
  - /post/146672596
slug: needed-chpass-finger-and-pw-for-the-web
tags:
  - Bright Ideas Not Yet Realized
  - Identity
  - The Business
title: 'Needed: chpass, finger, and pw for the web'
tumblrid: 146672596
type: text
---
<p>It’s <a href="http://radar.oreilly.com/archives/2007/03/sfearthquakes-on-twitter.html">been said</a> that the best startups take a popular Unix command and bring it to the web.  But there are a few that are poorly represented.  I understand that I may be making a bad career move by discussing this openly on a blog, but quite honestly, my desire as a consumer for a satisfying product is enough to risk—-nay, <em>hope</em>—-that someone else makes a million dollars doing this before I get a chance to.</p>

<p>I’m thinking specifically  <a href="http://www.freebsd.org/cgi/man.cgi?query=chpass&amp;sektion=1">chpass</a>, <a href="http://www.freebsd.org/cgi/man.cgi?query=finger">finger</a>, and <a href="http://www.freebsd.org/cgi/man.cgi?query=pw&amp;sektion=8">pw</a>.</p>

<p>I know what you’re thinking.  There have been a few forays into this arena.  MySpace, Facebook, and Plaxo come to mind, not to mention whatever else some MBA has stuck to a “social network” this week.  (<q>It’s just like a regular duck, but this one swims around the lake <strong>and</strong> lets you put all your friends in a list! I’ll be rich!</q> The sad thing isn’t that he thinks it; the sad thing is that he just might be right.)</p>

<p>The social-for-the-sake-of-being-social sites tragically miss the point.  I have resisted getting a Facebook account for a few years now, and even deleted my MySpace account.  They seemed to require a lot of time and effort doing basically nothing, and didn’t give me what I really want.</p>

<h3 id="managing_data_is_not_necessarily_enjoyable">Managing data is not (necessarily) enjoyable</h3>

<p>I <strong>hate</strong> managing contact lists.  The worst contact list, the one that is the hardest to manage, is the one in my head.  Every day I get older, I get worse at remembering phone numbers, and I like to know who’s calling me.  I like to see your picture when you call, see your real name when you email.  I want my email program or my phone to know who you are when I start to type the three letters of your name that I can remember off-hand, even (especially!) if you’re someone I don’t talk to often.</p>

<p>That’s why I shelled out $40 for <a href="http://radar.oreilly.com/archives/2007/03/sfearthquakes-on-twitter.html">Missing Sync</a> so that my phone and computer can share an address book.  I have an Applescript program sitting on my back burner that will sync any contacts I add in Adium into this same collection, and even look up their contact details from Yahoo’s corporate intranet (since most of the time, they’re work mates.)  Automated replication is still not great, but it eases the pain of managing multiple lists.</p>

<p>Facebook and MySpace are software platforms designed around the premise that <em>managing</em> a contact list is fun.  And it can be in that 12-23 age range where we attempt to define ourselves and carve out our place in the world through our social connections.  That’s a key demographic for advertisers.  Good for you, Facebook.  But if I wanted to spend all this time managing my friendships, I’d have more of them in real life.  <small>Ooh, burn! i mean… hey, wait a second..</small></p>

<p><a href="http://plaxo.com">Plaxo</a> is actually a pretty good approximation of what I’d like to see, at least on the “managing contacts” side of things.  Granted, I’ve been spamvited to their service by half a dozen people I hardly know, which is a classic example of “let’s be viral” gone horribly horribly wrong.  But their product offering is pretty close.  You get one contact list online, and it syncs with other areas.  It’s unfocused since they’ve added “Pulse” (basically an RSS aggregator for your other web profiles), but still pretty good.</p>

<p>However, even Plaxo misses a key point, and makes several fatal flaws.  I’m actually talking about a profile and contact management system that is much grander.</p>

<h3 id="dry_8212_what_changed"><abbr title="don't repeat yourself">DRY</abbr> — What Changed</h3>

<p>In a relational database or data map, the idea is to keep a piece of data in only one place, and store the relationships between entities rather than making multiple copies.  Most contact management systems, from a little black book to the cell phone contact list to Outlook to Plaxo, fail to implement this simple principle.  Instead of making each node in the network keep track of all the data about all the other nodes in which it is interested, instead let each node control its own data, and store links to the nodes in which it is interested. </p>

<p>In the old days of land lines, the phone book was enough.  If you knew someone’s name and city, you could get their phone number and, perhaps, their street address by performing a simple lookup.  Each user had the option to control how much information was shared with the public.  Until the autodialer came to telemarketing, the abuse rate was limited by the cost of using the technology.</p>

<p>Today, each person has many more pieces of contact information, and the cost of abuse is virtually zero.  There is no way in hell that I’d let anyone publish my actual cell phone number, and once an email address is exposed, it’s basically useless.  Spam fighting is an arm’s race, and an unfair one even for Google and Yahoo to fight.</p>

<h3 id="why_we_need_those_commands_on_the_web">Why we need those commands on the web</h3>

<p>Back to my original point: <a href="http://www.freebsd.org/cgi/man.cgi?query=chpass&amp;sektion=1">chpass</a>, <a href="http://www.freebsd.org/cgi/man.cgi?query=finger">finger</a>, and <a href="http://www.freebsd.org/cgi/man.cgi?query=pw&amp;sektion=8">pw</a>.</p>

<dl><dt>chpass</dt>
    <dd>
        <p>add or change user database information</p>
        <p>In other words, manage my info in one place.</p>
    </dd>
    <dt>finger</dt>
    <dd>
        <p>The finger utility displays information about the system users.</p>
        <p>In other words, look up the information that other have made available.</p>
    </dd>
    <dt>pw</dt>
    <dd>
        <p>create, remove, modify &amp; display system users and groups</p>
        <p>In other words, specify who has permission to what.</p>
    </dd>
</dl><p>Many large companies have some sort of online system like this.  At Yahoo, it’s the almighty Backyard, the corp website that started as a list of email addresses and grew into a full-scale intranet with contact lookup and LDAP access.  (It also features conference room booking and documentation searching and plenty of other handy things.  But mostly, it’s still all about the mega employee contact list.)</p>

<p>You manage your own profile, and make sure that your numbers and whatnot are up to date.  No one else ever has to worry about how to contact you, because it’s all in one place.  However, that only works because access to the backyard system is tightly limited to current employees, so abusing the system would entail serious consequences for the abuser’s reputation (and career).</p>

<p>In other words, we have finger and chpass, but pw is being done manually by the <abbr title="Human Resources">HR</abbr> department, which limits the possible size of the network considerably.</p>

<h3 id="abuse_prevention_is_extremely_non_trivial">Abuse Prevention is Extremely Non-Trivial</h3>

<p>The easier it is to use a networked contact management system, the easier it is to abuse.  The more useful it is for you and your friends and associates, the more useful it is for spammers and scammers.  Already, we have to keep our email addresses hidden from strangers.  Imagine how much worse it would be if a <abbr title="Porn, Pills, and Credit">PPC</abbr> pusher could just e-finger “isaac.schlueter” and have my home address, email, phone number, instant messenger alias, birthday, and photo.  Yes this is <em>exactly</em> the sort of information that I’d like to easily share with everyone else.</p>

<p>Everything that has been done so far in the area of email spam, while impressive and necessary, is <strong>fundamentally</strong> inadequate.  As long as it remains profitable for a spammer to send out 100 billion emails every day, it will happen.  Any attempts to prevent or avoid this behavior run counter to the incentives of the market; which is to say that it’s a bit like building a dam of sand and expecting to stop the Mississippi.  Won’t happen.  A bigger dam will take longer, but eventually, they’ll all crumble.</p>

<p>In order to truly divert human behavior, the <em>incentive</em> must be dealt with at the source.  Direct attacks against the offenders (ie, shutting down their accounts) are not effective in the long run (they just get new accounts.)  Negative incentives, such as putting spammers in jail, are not going to be effective in the long run, because it doesn’t push the <em>cost</em> of spamming up high enough.  John Q. Spammer doesn’t think he’ll be the one to get caught, and he’s probably right.</p>

<p>I don’t claim to have this bit of the system figured out, not by a long shot.  But I have a few ideas.</p>

<h4 id="irl">IRL</h4>

<p>In real life, we meet a lot of people, and many of them can and do annoy us by contacting us in unwanted, if mostly harmless, ways.  The foul smelling man who stops babbling for a second to ask me for a quarter.  The smiling woman who shoves a tract at me and tells me I’m going to hell.  Sadly, the list goes on and on and on.</p>

<p>However:</p>

<ol><li>It’s easy to size someone up quickly, because:</li>
<li>Annoying people build a reputation for being annoying, because:</li>
<li>They’re real people and you can see who they are.</li>
</ol><p>There are still, of course, the violent offender and the con man.  However, in real life, direct attacks incur a high degree of risk, due to the chances of being caught or retaliated against, and so law enforcement has a relatively easy time keeping serious criminals in check.  And those looking to do you harm by gaining confidence and taking advantage of it, well, they’ll always be around, but they’re pretty rare and the reputational aspects keep them somewhat in check as well.</p>

<h4 id="so8230">So…</h4>

<p>Entrance into this global open personnel file would require that an account be tied to a single real person, who doesn’t have any other account in the system.  Accounts that are not “backed” by some kind of reliable identity are only given some kind of limited provisional access—-perhaps they can email a user through the system, but they cannot get the user’s “real” email address, and users would be able to deny access altogether to unidentified strangers if they chose.</p>

<p>Identification is itself a non-trivial task requiring a high degree of trust from the web site.  Even if you know it’s 100% secure, being asked for your date of birth, <abbr title="Social Security Number">SSN</abbr> or passport, and a major credit card is a tall order.  Without biometrics, it must come down to discrete bits of information at some point, which can be (and often are) faked.</p>

<p>A rinky-dink fly-by-night startup can’t hope to achieve this level of trust quickly.  And, without getting a critical mass of users, the value proposition to new users is a lot tougher.</p>

<p>The company to build this system would need:</p>

<ol><li>A huge base of existing users and preferably their contact details, too.</li>
<li>A strong reputation for protecting user data.</li>
<li>Impressive engineering resources and domain knowledge in the areas of spam protection and social networking.</li>
<li>A serious commitment to open APIs that help the web as a whole.</li>
</ol><h3 id="if_it8217s_not_everywhere8230">If it’s not everywhere…</h3>

<p>…then it may as well not be anywhere.  The goal of this system would be to revolutionize contact management the same way that email and hypertext revolutionized written communication.</p>

<p>Just as email works in any email client, and web pages work can be viewed by any browser, the APIs provided by this system would have to be completely open.  Any application must be allowed to interact with them, both to change data and fetch it.</p>

<p>In order for it to work, and <em>really</em> have the effect that I’m talking about, there must be absolutely no lock-in, no up-sell, and reasonably liberal rate limits.</p>

<h3 id="">$$$</h3>

<p>How does something like this make money?  That’s an open question, and a big one, probably part of the reason why I’m still pushing bits in a day job and not out getting VC to build this thing.  <small>I also happen to really like what I do at that day job.</small></p>

<p>Maybe it would have to be something built under the Apache foundation or some other OSS group, and sponsored by donations of capital and resources from some major players in the online social arenas.  Maybe there’s some clever way in which smaller users and early adopters get the API for free, but then charge everyone else.</p>

<h3 id="who_could_do_this_what8217s_going_on_now">Who could do this?  What’s going on now?</h3>

<p><a href="http://openid.net">OpenID</a> is a great start, but what we really need is an open <em>profile</em> and open <em>contact list</em> system, and OpenID doesn’t provide that.</p>

<p>Google’s <a href="http://code.google.com/apis/opensocial/">Open Social</a> is an interesting product, but the more I read about it, the more I think it’s not quite low-level enough to really deliver on what I’d like to see here.  While it promises to expose social data to third-party applications in an API that could be consistent across social websites, it doesn’t fully address the issue of being able to manage contact data in a distributed way.</p>

<p>As I said above, the company to do this will need: </p>

<ol><li>A huge base of existing users and preferably their contact details, too.</li>
<li>A strong reputation for protecting user data.</li>
<li>Impressive engineering resources and domain knowledge in the areas of spam protection and social networking.</li>
<li>A serious commitment to open APIs that help the web as a whole.</li>
</ol><p>Yahoo has all four of these, but that whole China escapade has damaged Yahoo’s reputation in the eyes of many users.  Of any company on the web, however, Yahoo has perhaps the most to gain from such a system and a lot of resources and domain knowledge to throw at the problem.</p>

<p>Even if they only share user information when presented with a subpoena, that means that using this system exposes my information to governmental intrusion, which is deeply problematic.  In order to be truly trustworthy, a stronger commitment to protecting privacy needs to be in place than just words on a corporate press release.  The officers of the company to provide this service should enter into a binding agreement that they will not knowingly expose user information, even in the face of governmental pressure.</p>

<p>Like I said, I don’t have all the answers to this product.  But I know that, as a user, I’d be absolutely delighted to see something like this take hold.</p>
