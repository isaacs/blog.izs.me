---
date: 2012-12-10T19:05:00.000Z
redirect_from:
  - /post/37650663670/git-rebase/
  - /post/37650663670/
  - /post/37650663670/git-rebase
  - /post/37650663670
  - /post/37650663670/git-rebase/embed
  - /post/37650663670/git-rebase/embed/
slug: git-rebase
title: git-rebase
tumblrid: 37650663670
type: text
---
<p class="small">Edit: You should probably also read <a href="http://sandofsky.com/blog/git-workflow.html"> Understanding the Git Workflow</a>.  Much more succinct explanation of the point that I dance around a lot below.  Almost as if we&rsquo;d had roughly the same ideas, but he squashed the messages more eloquently ;)</p>

<p>A <a href="http://blog.sourcetreeapp.com/2012/08/21/merge-or-rebase/">recent article on git-merge vs git-rebase</a> kicked off a very interesting conversation on twitter the other day among a bunch of us nerds.</p>

<p>It started with <a href="https://twitter.com/polotek">Marco</a> saying</p>

<blockquote><p>Good article on merge vs. rebase. It&rsquo;s pretty balanced, but I&rsquo;m still firmly against rebase after reading. <a href="http://blog.sourcetreeapp.com/2012/08/21/merge-or-rebase/">blog.sourcetreeapp.com/2012/08/21/mer…</a><br/>— Marco Rogers (@polotek) <a href="https://twitter.com/polotek/status/277541092184965120" data-datetime="2012-12-08T22:32:07+00:00">December 8, 2012</a></p></blockquote>

<p>A few of us objected.</p>

<blockquote><p>@<a href="https://twitter.com/polotek">polotek</a> I wouldn’t recommend being “firmly” against rebase. That’s like being &ldquo;firmly&rdquo; against a particular coding style. Forest for trees.<br/>— Jason Smith (@_jhs) <a href="https://twitter.com/_jhs/status/277621735241695232" data-datetime="2012-12-09T03:52:34+00:00">December 9, 2012</a></p></blockquote>

<p>Then there were like a bazillion more replies back and forth, and it got too much for Twitter.</p>

<blockquote><p>@<a href="https://twitter.com/techwraith">techwraith</a> @<a href="https://twitter.com/polotek">polotek</a> @<a href="https://twitter.com/rwaldron">rwaldron</a> @<a href="https://twitter.com/nexxylove">nexxylove</a> @<a href="https://twitter.com/oscargodson">oscargodson</a> I&rsquo;ll reply in blog format. ENOSPC.<br/>— isaacs (@izs) <a href="https://twitter.com/izs/status/277812898095566849" data-datetime="2012-12-09T16:32:11+00:00">December 9, 2012</a></p></blockquote>

<p>So here I am writing a blog post now.</p>

<h3>Git is an Editor</h3>

<p>I&rsquo;m pretty sure I stole this line from someone, but I couldn&rsquo;t find any reference earlier than <a href="https://groups.google.com/d/msg/nodejs/xFfzu9XIBvY/414wq6ZbS8gJ">mine</a>, so maybe I made this up. It&rsquo;s a way of thinking about git that I really like:</p>

<blockquote><p>cvs and svn are remote backups that you use to save your changes.<br/> git is an editor that you use to write your code&rsquo;s biography.<br/>— isaacs (@izs) <a href="https://twitter.com/izs/status/13997541348" data-datetime="2010-05-14T21:07:58+00:00">May 14, 2010</a></p></blockquote>

<p>So my reply to Marco was:</p>

<blockquote><p>@<a href="https://twitter.com/polotek">polotek</a> Git is an editor. &ldquo;Firmly against rebase&rdquo; is like being firmly against backspace.<br/>— isaacs (@izs) <a href="https://twitter.com/izs/status/277656808959660032" data-datetime="2012-12-09T06:11:56+00:00">December 9, 2012</a></p></blockquote>

<p>I hope that some of the implication of that becomes clearer by the time I get to the end of this post.</p>

<h3>&ldquo;tidy&rdquo;</h3>

<p>A lot of the discussion of git-rebase fixates on keeping the commit history &ldquo;tidy&rdquo;.</p>

<blockquote><p>@<a href="https://twitter.com/techwraith">techwraith</a> @<a href="https://twitter.com/izs">izs</a> @<a href="https://twitter.com/polotek">polotek</a> rebasing into a release branch is clean and tidy. You still have the data in your feature branch.<br/>— Emily Rose (@nexxylove) <a href="https://twitter.com/nexxylove/status/277659451849330688" data-datetime="2012-12-09T06:22:26+00:00">December 9, 2012</a></p></blockquote>

<blockquote><p>@<a href="https://twitter.com/nexxylove">nexxylove</a> @<a href="https://twitter.com/techwraith">techwraith</a> @<a href="https://twitter.com/izs">izs</a> what does clean and tidy buy besides a sense of satisfaction?<br/>— Marco Rogers (@polotek) <a href="https://twitter.com/polotek/status/277689191037538305" data-datetime="2012-12-09T08:20:37+00:00">December 9, 2012</a></p></blockquote>

<p>The workflow that everyone is discussing seems to be:</p>

<ul><li>Working on a feature branch</li>
<li>Make some commits</li>
<li>The upstream branch changes (because someone else pushed to it) and now it&rsquo;s time to merge it in.</li>
<li>Do you <code>git pull --rebase</code> (so that you pretend to have always been working on the changes) or <code>git pull</code> the upstream (so that you get a merge commit)?</li>
</ul><p><a href="http://blog.sourcetreeapp.com/2012/08/21/merge-or-rebase/">The article</a> that started the conversation really only discussed this single use of rebase.</p>

<p>However, rebase is much more versatile that this. <strong>Rebase is a tool that can be used to arbitrarily edit the commit history.</strong> If that sounds <em>universally</em> scary or bad, I&rsquo;d argue that your understanding of &ldquo;edit&rdquo; and &ldquo;history&rdquo; are perhaps a bit limited.</p>

<h3>Tidying Up History</h3>

<p>Consider the following two stories:</p>

<h4>Story 1</h4>

<blockquote>
  <p>I ran out of milk.</p>
  
  <p>I walked down Adams Street to Whole Foods so I could buy milk.</p>
  
  <p>I mean, no, Whole Foods isn&rsquo;t on Adams, it&rsquo;s on Bay Place, so I
  walked down Bay Place to get to Whole Foods to buy milk.</p>
  
  <p>Oh, but first, I had to walk down Grand Ave, then take a right on
  Bay Place, then parked my car&ndash;shit.</p>
  
  <p>I got in my car, drove down Grand Ave, took a right on Bay Place,
  parked my car at Whole Foods, and needed my wallet, so&hellip; right, ok,
  so before I drove in my car, I got my wallet, drove to Whole Foods
  on Bay Place by going down Grand, and then bought some milk.</p>
  
  <p>No, wait, I didn&rsquo;t to whole foods, that&rsquo;s right, because they&rsquo;re
  crazy expensive.  I went to the Grand Lake Safeway.</p>
</blockquote>

<h4>Story 2</h4>

<blockquote>
  <p>I ran out of milk.</p>
  
  <p>I drove to the Grand Lake Safeway and bought some milk.</p>
</blockquote>

<p>This seems silly, but the benefit of a tool that can tidy up history is that <em>you get to write whatever crazy awful untidy history you want</em>, while you&rsquo;re experimenting and editing code, and then organize it later. When I&rsquo;m actually writing code, my commit history looks a lot like Story 1.</p>

<p>Typically I work on a <code>blahblah-feature-name-wip</code> branch, and then rebase it down to a <code>blahblah-feature-name</code> branch when I&rsquo;ve got it into a working state and understand how it&rsquo;s supposed to go. The <code>-wip</code> branches are a godawful mess of <code>kinda working, except breaks all the fs tests</code> commits, and <code>Revert "kinda working, except..."</code> commits. The benefit of tidiness then, is that I can track my work in a more or less play-by-play fashion, and still end up with something readable.</p>

<p>Is it better, then, to push all those play-by-play commits?</p>

<p>What is the <strong>purpose</strong> of a git history? Is it a forensic record of every edit to a file? Or is it a way for others to determine the <em>reason</em> for those edits?</p>

<p>My answer is: It&rsquo;s both, depending on context.</p>

<p>I keep the <code>-wip</code> branch around for as long as the forensics are interesting. There&rsquo;s a lot of times that I notice something is broken in the &ldquo;real&rdquo; feature branch, and think, &ldquo;Oh, I could&rsquo;ve sworn that was working yesterday.. what was I doing..?&rdquo; At moments like those, the forensic record of my thoughts is invaluable.</p>

<p>But if someone, years later, is looking at a bit of code that seems strange, and they run <code>git blame</code> on the file, and track the edit back to <code>Revert "Revert "hmm this seems broken but it sorta works i dunno""</code> then they&rsquo;ll be rightly upset with me for letting such useless garbage into the repository.</p>

<p>One possible answer is: &ldquo;Don&rsquo;t write code like that.&rdquo; Write a test for the feature, then write the code to make the test pass, and never make mistakes.</p>

<p>The problem is that I&rsquo;m not smart enough to not make mistakes and know exactly what code to write before I start writing it. Also, I enjoy the liberty of messing around, tracking every bit, and still sharing an elegant useful story with my future collaborators (including future-isaacs.)</p>

<h3>Forensics - Platform vs Service</h3>

<p>It&rsquo;s very interesting to me, but not at all surprising, that the people in this conversation that were most in favor of &ldquo;merge only, never rebase&rdquo; are generally working on a production web service (Yammer, most of them), and the people who favored rebase seemed to be working primarily on platforms (Node and npm in my case; JQuery Johnny5 and others in the case of Rick Waldron.) A few folks (mikeal, Jason Smith) work on both sorts of systems, and of course this breakdown is imprecise.</p>

<p>I&rsquo;ve seen a similar reaction to rebase-vs-merge in coworkers at Yahoo, Kakai, and Joyent. (Basically ever since I&rsquo;ve been using git, and exposed to this sort of conversation.) People who spend most of their day debugging production issues want the history to be as detailed and &ldquo;forensically accurate&rdquo; as possible. People who spend most of their day debugging platforms or libraries tend to want the history to be the most &ldquo;elegant story&rdquo; possible.</p>

<p>For the purpose of this discussion, &ldquo;Yammer&rdquo; is a service, and &ldquo;node&rdquo; is a platform. You install a platform and then build your program on it, and you install updates yourself. You use a service in production on someone else&rsquo;s computers, and it is updated by other people. (From this point of view, &ldquo;PaaS&rdquo; is actually a Service, not a Platform. Pedants please direct all complaints to /dev/null.)</p>

<p>There is of course some overlap in the concerns. I definitely do not want any changes whatsoever to the history of release branches in the <a href="https://github.com/joyent/node">joyent/node</a>, even if it means the occasional messy revert. If something has gone out as a part of a release, then it is <strong>definitely</strong> off-limits, and anyone who rebases that into some other shape will be ruthlessly punished (perhaps with the removal of commit access, if the infraction is repeated.)</p>

<p>I think that this split comes down to a simple question: When encountering a new problem, are you likely to use <code>git-bisect</code> to track it down, or are you going to revert to some known-good state and go from there?</p>

<h3>Git&rsquo;s Killer Feature: Bisect</h3>

<p>If you have never used git bisect, then you don&rsquo;t fully understand why git is useful. Git bisect is one of those tools that, once you use it, you realize that there is simply no way you could have ever debugged without it. And, the first time you try to bisect over a commit history littered with merge commits and reverts and broken states, you&rsquo;ll see why &ldquo;tidiness&rdquo; is so powerful.</p>

<p>For the uninitiated, here&rsquo;s a run-down of what bisect does, in broad strokes:</p>

<ol><li>You run your tests, and realize &ldquo;Oh, shit, it&rsquo;s busted.&rdquo;</li>
<li>You know that it was working yesterday (or whenever).</li>
<li>You run <code>git bisect bad</code>.  (Answer &ldquo;yes&rdquo; to the prompt.)</li>
<li>You do <code>git checkout &lt;known-good-state&gt;</code>.  (Run the test again
just to make sure that you&rsquo;re not mis-remembering.)</li>
<li>Run <code>git bisect good</code>.</li>
<li>Git will proceed to hop you to various commits, at which point you
run your test and do <code>git bisect good</code> if it&rsquo;s good, or <code>git bisect
bad</code> if it&rsquo;s bad.  (If necessary, you can also check out commits
manually, and mark them as good/bad.)</li>
<li>Shockingly quickly, git tells you which commit was the first bad
one.</li>
</ol><p>Because the &ldquo;test&rdquo; can be literally anything, I often use this to track down which commit in libuv broke something in node, if the node bisect shows that it was a <code>update libuv to deadbeef</code> type of commit that is the culprit. I run the <code>git bisect</code> in the libuv repo, and the &ldquo;test&rdquo; is putting the libuv code in node&rsquo;s deps/uv folder, and running the node test.</p>

<p>To make bisect even more interesting, you can add something like this to your <code>~/.gitconfig</code> file:</p>

<pre><code>[alias]
  lg = log --graph --pretty=format:'%Cred%h%Creset %C(yellow)%an%d%Creset %s %Cgreen(%cr)%Creset' --date=relative
</code></pre>

<p>Then running <code>git lg</code> will show you a very terse listing of the history, which shows all the bisect tags.</p>

<p>As you can imagine, this works most efficiently when you have a relatively straightforward history. If you have messy back and forth play-by-play commits, where tests are breaking and un-breaking repeatedly, or the build is failing occasionally, then bisect is essentially worthless. Bisect can go over merge commits, but it becomes a lot less trivial to track what it&rsquo;s doing, and I&rsquo;ve found a lot of times the &ldquo;first bad commit&rdquo; is the merge commit, which is pretty much useless.</p>

<p>Tidiness makes bisect even more powerful. I&rsquo;d use git without bisect, because it&rsquo;s the de facto standard of the open source world. But without bisect, I would love git half as much. If I could make bisect even more powerful by rubbing grease on my elbows, I&rsquo;d do it.</p>

<p>This is not about a sense of satisfaction. Tidiness is about taking 20 minutes to track down a bug, instead of taking all day.</p>

<h3>Upstream Motion and Large Feature Branches</h3>

<p>Occasionally you have a &ldquo;Feature&rdquo; branch that is really a major refactor of some sort, which cannot be accomplished in a single burst of coding. My most recent example is <a href="https://github.com/joyent/node/compare/streams2">streams2</a>, which I&rsquo;ve been working on for a few weeks. (There&rsquo;s been a lot of input and feedback from many others, and the code has been used as a <a href="https://npm.im/readable-stream">userland module</a>, so this isn&rsquo;t a code-dump in progress.)</p>

<p>In order to not end up in a state where we have a zillion conflicts to resolve, and to be able to bisect out problems, I&rsquo;ve been continually rebasing streams2 on top of the upstream master branch.</p>

<p>This is especially important when a change comes into the upstream master that breaks my feature branch, <em>but doesn&rsquo;t break master</em>. I&rsquo;m not sure how I&rsquo;d even go about testing that if I was merging master into streams2 (unless I were to merge each commit individually, which is kind of absurd).</p>

<p>Here&rsquo;s how I found the source of the problem:</p>

<ol><li>Check out master into a new &ldquo;clean&rdquo; workspace. (NB: I didn&rsquo;t have to download anything again. I could just do <code>cd ..; git clone ./node ./node-clean</code>, and then <code>git pull origin master</code>, since &ldquo;origin&rdquo; is the &ldquo;streams2&rdquo; workspace.)</li>
<li>Run <code>git bisect bad</code>.</li>
<li>Check out master from 4 weeks ago, which I&rsquo;m pretty sure worked. (Could have probably been a bit more conservative, but who cares? Bisect uses the magic of a binary search, so it&rsquo;s probably just one extra test!)</li>
<li>Just to make sure, in the first workspace, rebase streams2 onto that 4-week-old commit. (Because streams2 was already based on master, I did this via <code>git rebase -i &lt;old-commit&gt;</code> and then deleted all the the lines that were above the first streams2 commit.) Sure enough, test passes fine.</li>
<li>Back in the &ldquo;clean&rdquo; workspace, run <code>git bisect good</code>.</li>
<li>Repeat step 4 in the &ldquo;streams2&rdquo; workspace, running <code>git bisect good</code> or <code>git bisect bad</code> in the &ldquo;clean&rdquo; workspace.</li>
</ol><p>I&rsquo;m sure that there was probably a simpler way to do this. Maybe even some argument to bisect to tell it to rebase onto the commit, or a shell script that&rsquo;d do it all for me. But this worked, was fast, and totally got the job done. I don&rsquo;t even know how I would have figured that out otherwise.</p>

<p>(In this case, the culprit was a libuv update. Bisecting through libuv using the technique I described above tracked it down to a <code>remove libev</code> mega-commit, so the moral of the story is that, even with great tools, dependencies suck sometimes.)</p>

<p>Seriously. If you&rsquo;re doing a big refactor that takes some time, and the upstream root is changing, how do you manage to find these kinds of issues? If I was merging in, all I&rsquo;d know is that the merge commit made the test fail, but the test <em>doesn&rsquo;t</em> fail on master. In this case it&rsquo;s only the combination that is problematic.</p>

<p>I don&rsquo;t know how to find or solve that sort of problem without rebase. I&rsquo;m sure that there&rsquo;s some way, because I vaguely remember handling these kinds of issues when I used CVS and SVN, but it&rsquo;s all hazy now that I&rsquo;m spoiled by bisect&rsquo;s awesome mightiness and the power of a mutable history.</p>

<h3>Taking Patches and &ldquo;Ideal Workflows&rdquo;</h3>

<p>As the maintainer of several open source projects, a few of which get a lot of outside contributions, I am faced with a choice:</p>

<ol><li>Make every potential contributor follow the ideal workflow (for some value of &ldquo;ideal&rdquo;), and reject a lot of patches because they are &ldquo;incorrect&rdquo; in some trivial way.</li>
<li>Be ok with using <code>git am</code> and <code>git rebase</code> occasionally.</li>
</ol><p>That to me is a nobrainer. My approach to contributions is closer to the &ldquo;email a patch&rdquo; model than the &ldquo;click the green merge button&rdquo; approach. Having that many merge commits would fuck up my precious bisect, and I <strong>always</strong> want to test the commit locally before pushing it live.</p>

<p>This doesn&rsquo;t mean that I don&rsquo;t use github&rsquo;s pull request features. On the contrary, I love them! They&rsquo;re a great lightweight way to do discussion and code reviews, they integrate well with email, and when it&rsquo;s ready to accept, I can do:</p>

<pre><code>curl <a href="https://github.com/joyent/node/pulls/12345.patch">https://github.com/joyent/node/pulls/12345.patch</a> | git am
</code></pre>

<p>Or to pull just one commit:</p>

<pre><code>curl <a href="https://github.com/john-q-contributor/node/deadbeef00.patch">https://github.com/john-q-contributor/node/deadbeef00.patch</a> | git am
</code></pre>

<p>Did the user have a long commit message that is in broken english and will be confusing later? No problem. <code>git rebase -i HEAD^</code>, and reword it. Did they make some minor lint mistake? No matter. <code>make jslintfix &amp;&amp; gci -am 'lint fixup'</code> and then squash the commits together.  Did they put 3 features in one commit?  Easy, just do a <code>git rebase -i</code>, mark the commit for editing, then split it up into 3.  They get credit for the work that they did, and I get a history that&rsquo;s easy to read with a minimum of clutter.  In the most extreme case, I can even use <code>git format-patch</code> to output a patch file, edit it manually, and then <code>git am</code> that puppy.</p>

<p>Rebase, am, and apply allow a project lead to be liberal in what they accept, and strict in what they send.</p>

<p>Yes, this can all be abused.  So, don&rsquo;t abuse it.  Great power great responsibility blah blah blah.  In fact it&rsquo;s pretty easy to not fuck up, far easier than <em>actually</em> writing perfect code or getting contributors to make perfect commits.  If you do mess it up, oh well, there are plenty of forks; just reset and start over.</p>

<h3>It&rsquo;s About History</h3>

<p>It would be unreasonable to say that you should <em>always</em> use rebase instead of merge. For example, we routinely merge node&rsquo;s stable branch into master. Rebasing master onto the latest stable branch would destroy the history of all our previous unstable releases, and would be much harder to manage.</p>

<p>In the case of that &ldquo;big feature branch&rdquo; for streams2, even if it ends up being a fast-forward due to being rebased onto the latest master, I&rsquo;m going to merge it in with <code>--no-ff</code> to <em>force</em> a merge commit, so that it&rsquo;s easy to pluck off if it turns out that the feature is actually crap.</p>

<p>Git is a tool for managing content. There are a lot of ways to manage content. If something has been pushed live (or even &ldquo;pushed upstream&rdquo;) then you probably want to maintain forensic-level control over it.</p>

<p>I think of &ldquo;history&rdquo; in terms of levels of granularity.</p>

<p>Take for example, the assassination of Abraham Lincoln, an extremely relevant historical event in the history of the United States.</p>

<p>At the lowest level of granularity, there&rsquo;s a lot of first-hand data: the eye-witness accounts that were given to police at the scene, the notes from the doctors in the ambulance and at the hospital where Lincoln was rushed after being shot, the descriptions and reports of other forensic evidence at the scene, the writings of John Wilkes Booth and the testimony of his conspirators (who all failed in their missions, for various reasons). There&rsquo;s also the context of the Civil War being in the process of ending (but that being in some dispute at the time). There&rsquo;s the account of the Union soldiers who tracked Booth down to a barn, set it on fire, then shot him as he fled, and the account of John St. Helen, who claimed to actually be John Wilkes Booth, having escaped and lived under a pseudonym in Texas for years, before committing suicide.</p>

<p>You don&rsquo;t learn any of that in history class, because reading police reports makes it significantly more difficult to understand the story. <em>Some</em> context is great, but reading 25 conflicting eye-witness reports is not actually that useful over a hundred years later. Sure, we keep them around, just in case, but what you really want to know is just <em>what actually happened</em>. So, on top of those low-level accounts, we have various different accounts that go into different levels of detail, resolving and synthesizing the inconsistencies into a coherent story. At the highest level of history, you have the kids&rsquo; book version: &ldquo;Abraham Lincoln was the president during the Civil War. He abolished slavery, and then got shot in a theater.&rdquo;</p>

<p>The <code>-wip</code> branches are my version of the conflicting police reports. The feature branch is a tidied up version which is actually useful, but probably still too detailed for most people to want to parse through. The ChangeLog is the effective &ldquo;what happened when&rdquo; sort of history, and at the highest level, you&rsquo;ll have a tweet from @nodejs that says &ldquo;Version 0.9.5 Released - streams2 support!&rdquo; with a link go to download it.</p>

<h3>Git is an Editor</h3>

<p>One objection to the &ldquo;git is an editor&rdquo; mindset is that it&rsquo;s actually a database.</p>

<blockquote><p>@<a href="https://twitter.com/izs">izs</a> @<a href="https://twitter.com/polotek">polotek</a> Git isn&rsquo;t an editor, it&rsquo;s a database. It should keep a record of everything that happens with tracked files. Rebase loses data<br/>— Daniel Erickson (@TechWraith) <a href="https://twitter.com/TechWraith/status/277658833772486657" data-datetime="2012-12-09T06:19:59+00:00">December 9, 2012</a></p></blockquote>

<p>Of course, the problem with that is that a text file can be a database also, and you still use an editor to edit it; and a database is just a fancy editor for manipulating and retrieving blocks of data off a disk, and provides some ways to manipulate that data that take advantage of its regularity.</p>

<p>Many &ldquo;databases&rdquo; have mechanisms to delete data.  (In fact, all that I know of have something like this.)  Losing data is only a problem if you lose data that you care about; losing data that you <em>don&rsquo;t</em> care about increases the overall understanding and makes the data that you <em>do</em> care about easier to get to.</p>

<p>Use the tools wisely.  Use the editor to tell a good story, the right kind of story that your application needs told.  If you need forensic details of every change to your production service, well good news, git can do that!  If you need a clear explanation of the reasoning behind features in your library, git is great for that, also.  Like a good editor, it can be used to tell a variety of different kinds of stories.  Like a good database, it gives you the tools to organize your data into the shape that is most useful to you.</p>

<p>The backspace key is very dangerous.  You can delete an entire file with it!  But the trade-offs are worth the benefit.  For the same reason that you delete code rather than comment it out (because it&rsquo;s in the git history, so why keep the clutter?) it&rsquo;s also great to rebase work-in-progress branches into a good state for their final merge.  Some aspects of history are ok to lose.  In many situations, <em>not</em> losing that bit of history makes the story harder to follow.</p>
