---
layout: layouts/post.njk
date: 2008-07-07T17:00:46.000Z
redirect_from:
  - /post/146672737/programming-puzzles-and-our-mismatch-problem/
  - /post/146672737/
  - /post/146672737/programming-puzzles-and-our-mismatch-problem
  - /post/146672737
slug: programming-puzzles-and-our-mismatch-problem
tags:
  - 20/20 hindsight
  - freebie
  - the business
title: Programming Puzzles and Our Mismatch Problem
tumblrid: 146672737
type: text
---
<p>In interviewing candidates for programming jobs, a common technique is to ask them to solve some programming puzzle.  Makes sense, right?  If the guy&rsquo;s smart enough solve random silly questions, he&rsquo;s probably good at programming, since that&rsquo;s most of what programming is.</p>

<p>As it turns out, this bit of common sense is common bullshit.  It&rsquo;s just another <a href="http://www.newyorker.com/online/video/conference/2008/gladwell">mismatch problem</a>, along with requiring elementary school teachers to have lots of formal education, cops to be big and strong, and law school applicants to have great grades in high school.  It doesn&rsquo;t predict success <strong>even a little</strong>.</p>

<h3>A Tale of Two Coders</h3>

<p><small>Feel free to <a href="#p73_some_puzzles">skip to the fun stuff</a>.</small></p>

<p>Let me tell you about two programmers I&rsquo;ve worked with.</p>

<p>The first graduated from Stanford University in the top 10% of his class with a degree in Computer Science, and went on to get an Master of Science in the subject.  He knew about B+ trees and maps.  He could tell you what a <a href="http://en.wikipedia.org/wiki/Directed_acyclic_graph">directed acyclic graph</a> was, and what it should be used for.  He built an MVC system from scratch to design business cards in a web browser, 2 years <em>before</em> Ajax was &ldquo;teh new hotness&rdquo;.  He interviewed well, and had a host of companies to choose from.  He chose a job, and was one of the highest paid new hires in the history of the company.</p>

<p>The second graduated from high school, and had absolutely no intentions of ever taking classes again if he could help it.  Not sure what to do with his life, he worked at a local electronics store (Circuit City, I believe) for a few years.  He&rsquo;d messed around with computers plenty, programmed a bit, but nothing serious.  A friend of his worked at a software company, and managed to get him a job, despite his lack of experience and education, and despite the fact that he interviewed terribly.  He came in at the low end of the pay scale.</p>

<p>Who was the better programmer?</p>

<p>Since I tipped my hand by talking about the mismatch problem, you&rsquo;re probably guessing that the second one was better.  You&rsquo;d be right.  But I doubt you&rsquo;d realize just HOW right you are.</p>

<p>Despite the fact that I think he deserves any reputation his lack of skill earns him in life, it strikes me as being in poor taste to name him here.  Let&rsquo;s call the first programmer &ldquo;X&rdquo;.</p>

<p>Over a year after X left the company, one of the other guys found that he could reliably predict and fix crazy strange bugs by searching for the guy&rsquo;s initials in the codebase.  (There was a fairly strict rule about commenting changes in existing code, which, thankfully, X followed.)  I&rsquo;m talking real bone-headed stuff like:</p>

<p><code class="vb block">If Len(".837") = 3 Then</code></p>

<p>When is &ldquo;.837&rdquo; <strong>ever</strong> 3 characters?!  To make matters worse, that <code class="vb">If</code> block was wrapping about 250 lines of code, some of it <em>essential to our customers getting paid</em>.  X was clearly operating in some kind of alternate universe.  Real <a href="http://thedailywtf.com">DailyWTF</a> type shit.  And, he was the kind of asshat who was nearly impossible to work with.  I mean, imagine any quality that a programmer needs to have, except for IQ, and he lacked it.  He was arrogant, rude, passive aggressive, and lazy.  He was a bully who would go out of his way to make people feel uncomfortable once he decided that he didn&rsquo;t like them.  Every design discussion was an Argument from Intimidation&mdash;either you agreed with his idea and stroked his ego, or you were an idiot, plain and simple.  He was good at (useless) puzzles, but his attention to detail in real work was beyond terrible.</p>

<p>Within 2 years at the company, the second guy&mdash;the uneducated, inexperienced, bad interviewer&mdash;was one of the go-to architects who really grokked how everything was supposed to work.  He picked up Visual Basic fast enough to pass by most of the existing team, some of whom had been writing code since he was in high school.  He was responsible for designing and implementing a part of the software that was the primary killer feature.  He redesigned a huge chunk of the program that never quite worked right.  He was in databases, in the presentation layer, and in between.  By any estimation, a very significant portion of the product&rsquo;s value was entirely his doing.</p>

<p>After we&rsquo;d both left that place, I referred him to Yahoo.  Despite not having very much experience in front-end web development, and again interviewing terribly, the hiring manager was wise enough to heed my very strong recommendation.  And good thing, because he very quickly became one of the most important members of the Yahoo Games team.  (And he occasionally reads this blog and comments on stuff.  Hi, Geoff.)</p>

<p>So, at this point, you might be thinking, <q>Well, if the super educated brainiacs are bad programmers, and the lazy hobbyists are good programmers, then we just need to flip the test around, and use it in reverse.  Then we&rsquo;ll find the Geoffs, and avoid the Xes.</q></p>

<p>If only it was that easy.</p>

<p>You see, there actually are quite a few very good programmers that are very good at silly puzzles and have degrees in Computer Science.  Almost every problem has some kind of mathematical component; a lot of the theories were discovered because they&rsquo;re true and relevant.  Some of X&rsquo;s abilities <em>are</em> quite useful, so having both the will and the skill is best.  The hobbyists eventually find that they have to hit the books and learn theory at some point, or else they get passed by.</p>

<p>But those skills aren&rsquo;t nearly <em>as</em> useful or predictive of programming ability as we might think.  Geoff has the attitude of a great hacker and a mind that is capable of learning quickly, which, as it turns out, is much more useful in the long run, and much harder to test for.  X had a big brain and a bad attitude.  <strong>Most of programming is not solving puzzles with algorithms.  Most of programming is communication, attention to detail, and a relentless desire to build something beautiful.</strong></p>

<h3 id="p73_some_puzzles">Some Puzzles</h3>

<p>Despite the fact that programming puzzles are almost 100% useless in the hiring process, they&rsquo;re fun, and a good mental work-out to keep your thinking sharp.  They&rsquo;re a good part of a practice regimen.  Here are a few that I&rsquo;ve come across lately that were pretty interesting.  (Sadly, my beliefs about the foolishness of puzzles-as-hiring-tool are not shared by all of my managers, and I learned about two of these because they are used in our interview process.)</p>

<p>I&rsquo;ll edit this post to include solutions later.  I didn&rsquo;t make up any of these, but I did revise them somewhat.  The goal in each of them is to devise a program or algorithm that will find a solution in the least number of steps/iterations/whatever.</p>

<h4>Square the Sum</h4>

<p>For all 6-digit numbers from 100000 to 999999, find the numbers that, if you add the top three digits to the bottom three digits, and square the result, it will equal the original number.</p>

<p>For example, for 123456, you&rsquo;d add 123 and 456, which equals 579.  Then, square that sum, which yields 579 * 579 = 335241.  335241 ≠ 123456, so 123456 is not in the set.</p>

<h4>Dropping Eggs</h4>

<p>Let&rsquo;s say that you have 2 eggs, and a building that is 100 floors tall.  You need to figure out how high up you have to drop the egg to have it break when it hits the pavement.  Assume that the egg either breaks completely or is completely undamaged.  That is, repeatedly dropping from the second floor will not make it more likely to break.  (Hypothetical eggs are very hard, but when they break, they really BREAK.)</p>

<p>For example, if you drop the egg from floor #50 or below, it won&rsquo;t break.  But if you drop it from floor #51 or above, it will break.</p>

<p>What is the optimal approach to testing floors?  Assuming that you take that approach, and the egg breaks on the last floor you test, how many times did you have to drop it?</p>

<h5>Part 2</h5>

<p>As the number of floors <em>n</em> increases to a very large number (millions, billions, whatever&mdash;since it&rsquo;s really not floors and eggs but a sorted database of records or something), how does your solution scale?</p>

<p>Let&rsquo;s say that you have 3 eggs.  What&rsquo;s the value now?</p>

<p>As the number of eggs increases, how does the worst-case number of tests change?  If you had an unlimited supply of eggs, is there a better solution?</p>

<p><small>I heard this one at work, and it sounded kind of familiar, but I didn&rsquo;t remember the solution right away.  I dug up my textbook from &ldquo;CSC212: Data Structures and Algorithm Analysis&rdquo;, and sure enough, it was one of the examples Dr. Sayed used to teach us big-O notation.</small></p>

<h4>Non-Repeating Digits (<a href="http://beust.com/weblog/archives/000491.html">Cedric&rsquo;s Challenge</a>, slightly revised)</h4>

<p>Find the count of all natural numbers below a certain number of digits that have no repeated digits.  For example, for length=2, the following numbers all satisfy: 10, 12, 21, 23, 32, 34; but these don&rsquo;t: 11, 22, 33.  For length=3, 97 and 102 are valid, but 99, 100, and 101 are not.</p>

<p>Additionally, find the two consecutive numbers that are furthest from one another, and the difference between them.  For example, in the length=3 case, the greatest difference between two consecutive numbers is 4, between 98 and 102.</p>

<p>For example, in length=2, there are 90 matches.  (1-99, except for 11,22,33,44,55,66,77,88,99.)  The biggest jump between two consecutive numbers is 2, between 10 and 12.</p>

<h5>Part 2</h5>

<p>In addition to specifying the length in digits, also make the base variable.  For example, in the (base=3,length=3) set, the following numbers are valid: 10, 12, 20, 21, 102, 201.</p>

<p>Compute the values for length=100,base=1000.  Speed matters.</p>

<h5>Part 3 (<a href="http://beust.com/weblog/archives/000491.html">Cedric&rsquo;s Challenge</a> + arbitrary bases)</h5>

<p>Print all the numbers in order before printing the count and difference. (Hint: if this doesn&rsquo;t make it any more complicated, then you didn&rsquo;t do parts 1 and 2 properly.)</p>

<p>Since the base can be arbitrarily high, express numbers in bases greater than 10 as a comma-delimited tuple rather than using character digits, optionally with a trailing comma.  For example, the base-16 number normally written as &ldquo;FA9&rdquo; could be printed as either &ldquo;15,10,9,&rdquo; or &ldquo;15,10,9&rdquo;.</p>
