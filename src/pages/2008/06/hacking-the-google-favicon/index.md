---
date: 2008-06-07T01:36:37.000Z
redirect_from:
  - /post/146672691/hacking-the-google-favicon/
  - /post/146672691/
  - /post/146672691/hacking-the-google-favicon
  - /post/146672691
slug: hacking-the-google-favicon
tags:
  - Broken
  - Freebie
title: Hacking the Google Favicon
tumblrid: 146672691
type: text
---
<p>There&rsquo;s been a lot of nerd rage about the <a href="http://google.com/favicon.ico">new google favicon</a>.  I joined in with <a href="http://twitter.com/isaacschlueter/statuses/824260982">a rationalization for my distaste</a> for their new design.  After a few days of the lower-case &ldquo;g&rdquo; on a gray background, I decided today that I just couldn&rsquo;t take it.  Here&rsquo;s how I fixed it, so my Mac shows the old logo.</p>

<p>Certainly, any company ought to think long and hard about any branding change so fundamental and wide-reaching as a change in logo.  If you&rsquo;re a web company, then <strong>your favicon IS your logo, and everything else is secondary</strong>.  For Google&rsquo;s sake, I sure hope they understand just how significant this change was, and weighed the pros and cons carefully.</p>

<p>While I recognize my position deep in peanut-gallery territory, I simply cannot accept that it was a good move.  A favicon needs to be:</p>

<ol><li><strong>Far from gray.</strong>  Browser tabs are gray, and the purpose of a favicon is to let the faster right-brain processes identify your site in a list of tabs or bookmarks.  If I can&rsquo;t see it, it&rsquo;s useless.  <strong>FAIL</strong></li>
    <li><strong>Mostly not transparent.</strong>  If you&rsquo;re going to use a gray logo, fine. Put it on a white background, so you know it will stand out.  A small logo in a transparent background is invisible.  <strong>FAIL</strong></li>
    <li><strong>Evoke your corporate branding.</strong>  I should be able to associate your favicon with your brand without thinking about it.  If, for example, your corporate branding is focused on lots of bright colors on a white background, your favicon should echo this.  <strong>FAIL</strong></li>
    <li><strong>Use big, simple shapes.</strong>  Fine details (like those in the double-curl style of lower-case &ldquo;g&rdquo;) get lost at 16x16 size.  <strong>FAIL</strong></li>
</ol><p>Yahoo and Google are effectively equivalent in terms of the objective quality of their search results.  Scores of user-studies have shown that our perception in SERP quality is due primarily to brand loyalty and nothing else.  If you&rsquo;re a Yahoo searcher, and you see a red Y, your comfort filter tells you it&rsquo;s good, no matter where the results actually came from.  You can&rsquo;t tell the difference, because, for the most part, there isn&rsquo;t one.  Most of the time, Yahoo and Google search pull up <em>exactly</em> the same sites, or close to it.  They&rsquo;re both very very good, and search is a case where there is a right answer, even if the method of finding it is a bit fuzzy.</p>

<p>For some searches, it seems that Yahoo is even significantly better than Google.  <a href="http://twingine.no/">Compare for yourself.</a>  Somewhat humorously, the results for <a href="http://twingine.no/search.php?q=%22yahoo+is+better+than+google%22">&ldquo;yahoo is better than google&rdquo;</a> seems to yield much better results on Yahoo.  I tried <a href="http://twingine.no/search.php?q=%22google+is+better+than+yahoo%22">the reverse search</a>, expecting to see some kind of amusing self-bias, but actually Yahoo did that better, too.  From my cursory non-scientific view, it seems like Yahoo puts a bit more weight on the title, and there are probably other slight differences.  But the point is, the differences are slight enough to be overlooked.  They&rsquo;re both pretty damn good at finding what you ask for.</p>

<p>I work at Yahoo.  But I use Google for search.  I perhaps ought to bleed a little more purple than I do.  I also own stock in Yahoo, so in a small way, using Google for search is not a financially rational move.  So why do I do it?</p>

<p>Brand loyalty.  I was using Google ever since it&rsquo;s been around, and I&rsquo;ll probably keep using it for a long time.  I imprinted early on that big G in the white square, and some very low-level neural systems tell me loud and proud that, when it comes to searching, that G means Good.  Frankly, rewiring all that stuff isn&rsquo;t worth the effort.</p>

<p>I think that brand loyalty explains a lot of the nerd rage over the new favicon.  Yes, it doesn&rsquo;t affect the results. Yes, it&rsquo;s just a case of <a href="http://en.wikipedia.org/wiki/Who_Moved_My_Cheese">cheese moving</a>, and not even a very relevant one.  And, face it, you&rsquo;re not going to stop using Google over it if you&rsquo;re already a Google user.  But you may be consistently annoyed for several months while the brain circuits rewire themselves to imprint on the new design.</p>

<p>Unacceptable.  I&rsquo;m a web geek.  I&rsquo;m a hacker.  There is no way in hell that I should have to put up with something I find even slightly distasteful in my regular internet experience.  I refuse to be subjected to some marketing exec&rsquo;s idea of what is best for me, when I clearly know my needs better.  <small>I don&rsquo;t even care if he went to Stanford AND coded a rocket ship in Python.</small></p>

<h3 style="color:#900">Warning</h3>

<p>If you use any Google services that require a login (such as GMail, Groups, Orkut, or pretty much anything other than Search), then you&rsquo;ll need Apache 2.  I tried really hard to make it work with Apache 1.3, but no dice.</p>

<p>The good news is, Apache 2 comes standard with Leopard.  The bad news is, it <em>doesn&rsquo;t</em> come standard with Tiger.</p>

<p>Since I was using Tiger, and Apache 1.3, this was a much more involved hack than I&rsquo;d anticipated going in.  Luckily, it&rsquo;s just a matter of change one line in the <code>/etc/hosts</code> file to turn it off, which is good, because I had other things to do before I could fix it.  I use <a href="http://www.macports.org/">MacPorts</a> for a bunch of stuff, so I figured I&rsquo;d just install Apache 2 that way.</p>

<p>Easier said than done, at least in my case.</p>

<p>I already had PHP and MySQL running a local copy of this site, and some other stuff.  MacPorts really shines if you use it for everything&mdash;try to run Apache on MacPorts and run PHP and MySQL from some other location, and you&rsquo;re in for a world of hurt.  It took a lot of SFTW and learning about reconfiguring to get it all working properly.</p>

<p>I&rsquo;m not the best guy in the world to critique package management systems, but I&rsquo;ve got some end-user experience.  I use apt-get on my web server, MacPorts on my laptop, and of course, yinst on all the Yahoo! machines I work on.  Of course, that&rsquo;s not counting the Registry and Add/Remove programs dialog from Windows Land (which is hell), and the much more user-friendly &ldquo;Applications&rdquo; folder on the Mac (which is lovely, but not really a full-featured package manager).  Of these, yinst is the best, hands down.  Powerful, simple, effective, and sadly, 100% closed-source and proprietary.  If you&rsquo;re not at Yahoo, you&rsquo;re not using yinst.</p>

<p>But enough about installing stuff.  Long story short, you need Apache 2, or don&rsquo;t go any further.  If you primarily use Firefox, you can just follow <a href="http://paulirish.com">Paul</a>&rsquo;s <a href="http://foohack.com/2008/06/hacking-the-google-favicon/#comment-672">advice</a>, and <a href="http://userscripts.org/scripts/show/27548">install this Greasemonkey script</a>.</p>

<p>I still recommend doing this, especially if you write code for the web, and you&rsquo;re not normally a &ldquo;back end guy&rdquo;.  It&rsquo;s good to tinker with this stuff, and even break it once in a while in your own little sandbox.  Unless you tinker, you never learn anything new.  Newton did revolutionary work in optics, largely motivated by his need for a better telescope to look at the planets.  It&rsquo;s good to have a working knowledge of the tools of your trade, even if they&rsquo;re just a means to an end.</p>

<p>So, fixing the G favicon&hellip;</p>

<h3>mod_proxy to the rescue!</h3>

<p>The premise of this hack is pretty simple:</p>

<ol><li>Edit the <code>/etc/hosts</code> file to point &ldquo;www.google.com&rdquo; to your local machine.</li>
    <li>Use <a href="http://httpd.apache.org/docs/2.0/mod/mod_proxy.html">mod_proxy</a> to transparently send all requests for &ldquo;www.google.com&rdquo; on to Google&rsquo;s actual IP address, except for <code>/favicon.ico</code></li>
    <li>Point <code>/favicon.ico</code> at the old favicon file, sitting on your local machine.</li>
</ol><p>The interesting thing is that you can do this for <em>any</em> file or url out there that you want to swap in your local machine.  Don&rsquo;t like the favicon that a given site uses?  Change it!  You have the power!  That&rsquo;s the beauty of the web.</p>

<h3>Prereqs</h3>

<p>For this hack, you&rsquo;ll need:</p>

<dl><dt>Apache 2 with mod_proxy, mod_ssl, and mod_rewrite</dt>
    <dd>
        <p>If you have a Mac with Leopard and the developer tools stuff on it, you probably already have this, and might just need to enable them.  I&rsquo;ll tell you how.</p>
        <p>If you don&rsquo;t already have Apache 2 and/or mod_proxy installed, then that&rsquo;s outside the scope of this post, like I said above.  Sorry.</p>
    </dd>
    <dt>About <del>15</del> 30 minutes</dt>
    <dd>
        <p><del>Yes, it&rsquo;s really that easy.</del> It&rsquo;s fairly easy, but a bit trickier than I&rsquo;d originally thought.</p>
    </dd>
</dl><p>I use a Mac, and these instructions are fairly mac-centric.  If you use a Linux or Unix machine, then most of it will still make sense.  If you use a Windows machine, then a lot of it won&rsquo;t apply, but the basic idea should still be possible if you use Apache and install mod_proxy.</p>

<p>Some Apache setups install the Apache Control script as <code class="bash">apache2ctl</code>, and others call it <code class="bash">apachectl</code>.  Since I used MacPorts, I&rsquo;ve got <code class="bash">apachectl</code> on my machine.  Substitute as required for your setup.</p>

<p>If you run into any sticky points you can&rsquo;t get out of, post a comment.  I&rsquo;d like to hear it.  If you run into any sticky points and DO get out of it, then <em>definitely</em> post a comment!  I&rsquo;ll update this post with your info.</p>

<h3>Get the old favicon</h3>

<p>I couldn&rsquo;t find the actual ico file, but I found some screenshots on the internet talking about the favicon change.  I got a pretty good png, and lifted out just the 16x16 piece from the address bar in the screenshot.</p>

<p>Then, I used <a href="http://www.winterdrache.de/freeware/png2ico/">png2ico</a> to convert that png to an ico file.  It&rsquo;s a great tool that I use all the time to make favicons.  It lets you embed multiple pngs into the ico, but in this case, all that I really care about is the 16x16 that shows up in my address bar and on the tabs in Firefox and Safari.</p>

<p>All in all, that took probably less than 10 minutes.  But you can do this step even faster by just downloading the <a href="http://foohack.com/blog/wp-content/uploads/2008/06/old-google-favicon.tgz">Old Google Favicon</a>.  Extract it in Terminal or iTerm by doing this:</p>

<p><code class="bash block">tar -xzvf old-google-favicon.tgz</code></p>

<p>You&rsquo;ll get a file called <code>old-google-favicon.ico</code>.  Put that under the &ldquo;Sites&rdquo; folder in your home directory.  If you just un-tarred it using the command above, then it would be:</p>

<p><code class="bash block">mv old-google-favicon.ico ~/Sites/</code></p>

<h3>Turn on Apache</h3>

<p>If you already run web pages and whatnot on your local machine, then you are already set.  Skip to the next step.</p>

<p>To see if Apache is running, fire up a web browser and go to <a href="http://localhost/">localhost</a>.  If you see the default Apache startup screen, then you&rsquo;re all set.  If it redirects to <a href="http://localhost.com">localhost.com</a> or a web search, or you get a &ldquo;could not connect to server&rdquo; message, then you need to enable Apache.</p>

<p>If you&rsquo;re running Leopard, open up System Preferences, and click on Sharing.  Click the little lock in the lower-left corner, and enter your password. Check &ldquo;Personal Web Sharing&rdquo;.</p>

<p>Try hitting <a href="http://localhost/">localhost</a> again.  If it still doesn&rsquo;t work, then do this in a terminal:</p>

<p><code class="block bash">sudo apachectl graceful</code></p>

<p>If that doesn&rsquo;t work, try:</p>

<p><code class="block bash">sudo apache2ctl graceful</code></p>

<p>If it&rsquo;s still not working, sorry, don&rsquo;t know what to tell ya.  Good luck.</p>

<h4>Test</h4>

<p>At this point, you should be able to see the desired favicon at <code class="url">http://localhost/~<strong>YOUR_USER_NAME</strong>/old-google-favicon.ico</code>, where YOUR_USER_NAME is the username that you log in with.  (If you&rsquo;re not sure what that is, open up a terminal, and type <code class="bash">whoami</code>, and it&rsquo;ll tell you.)</p>

<p>If you&rsquo;ve configured Apache to have some different document root, then adjust the path accordingly.  For example, since my Mac is effectively a single-user machine, I just have the default document root pointed at <code>/Users/isaacs/Sites/</code>, so the favicon is at <code class="url">http://localhost/old-google-favicon.ico</code>.  Your setup may vary.</p>

<p>Ultimately, it doesn&rsquo;t much matter where you put it, since we&rsquo;ll be telling Apache exactly where to find it later.</p>

<h3>Enable Apache Modules</h3>

<p>Fire up your favorite text editor, and open your <code>httpd.conf</code>.  By default, this file is in <code>/etc/httpd/</code> or <code>/etc/apache2/</code>; if you installed with MacPorts, then it&rsquo;s in <code>/opt/local/etc/apache2/</code>.  (You&rsquo;ll have to save it as the super-user, since it&rsquo;s a root-owned file, so that means vi and emacs users will have to open it with <code>sudo</code>.  GUI editors will usually prompt for your password when you try to save the file.)</p>

<p>Each of these lines have to be in there somewhere.  If they&rsquo;re missing, add them.  If they&rsquo;re commented-out, un-comment them.</p>

<p><code class="block apache">LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule ssl_module modules/mod_ssl.so
LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
LoadModule rewrite_module modules/mod_rewrite.so</code></p>

<p>If you notice that these rules look &ldquo;out of place&rdquo; for the stuff that&rsquo;s already there, then modify to match.  For example, if the other rules are all loading the .so files out of &ldquo;libexec&rdquo;, then change &ldquo;modules&rdquo; to &ldquo;libexec&rdquo;.</p>

<p>Restart apache by running this command in a terminal:</p>

<p><code class="block bash">sudo apachectl graceful</code></p>

<p>If it tells you that the server couldn&rsquo;t be restarted, try this to get a more helpful error message:</p>

<p><code class="block bash">sudo apachectl configtest</code></p>

<p>If it&rsquo;s not working, sorry, don&rsquo;t know what to tell ya.  You may need to install some of the required modules using the apxs utility.</p>

<h3>SSL</h3>

<p>Because we&rsquo;ll be proxying an SSL (ie, https://&hellip;) connection, your server will have to be able to do SSL so that it can maintain the level of encryption.</p>

<p>I followed <a target="_new" href="http://developer.apple.com/internet/serverside/modssl.html" title="Using mod_ssl on Mac OS X" rev="vote-for">these instructions</a> to create SSL keys.  It directs you towards a <code>sign.sh</code> script, and finding that was a bit tricky.  For your convenience, I&rsquo;ve <a href="http://foohack.com/blog/wp-content/uploads/2008/06/sign.sh">provided it here</a>.</p>

<p>Also, I put the <code>ssl.key</code> folder in the same folder as the other Apache stuff, the location of the <code class="apache">ServerRoot</code> directive.  That way, I can refer to it by a relative path.  If you prefer to have it in a separate location, that&rsquo;s fine, but you&rsquo;ll need to refer to it by the complete path in the configs below.</p>

<h3>Get Google&rsquo;s IP Addresses</h3>

<p>In a terminal, run this:</p>

<p><code class="bash block">nslookup <a href="http://www.google.com">www.google.com</a></code></p>

<p>You&rsquo;re looking for the &ldquo;Address&rdquo; lines, not the &ldquo;Server&rdquo; line.  In <a href="http://foohack.com/tests/bash_extras">my bash profile</a>, I have a handy shortcut for this, so I just type <code class="bash">getip <a href="http://www.google.com">www.google.com</a></code> to see the results from both nslookup and ping.</p>

<p>Make a note of those IP addresses.  As of this writing, from my location, I got these:</p>

<p><code class="block">66.249.89.104
66.249.89.147
66.249.89.99</code></p>

<p>We&rsquo;re actually going to define a load balancer to distribute your requests between these three.  While that&rsquo;s probably overkill, part of the benefit of this is educational, and that&rsquo;s what a proxy would normally do.</p>

<h3>Host File</h3>

<p>Open up your <code>/etc/hosts</code> file in a text editor, and add this line:</p>

<p><code class="block hosts">127.0.0.1 <a href="http://www.google.com">www.google.com</a></code></p>

<p>Then, in a terminal, run this command to refresh your IP caches:</p>

<p><code class="block bash">lookupd -flushcache</code></p>

<p>Bring up <a href="http://www.google.com">www.google.com</a> in a web browser, and you should be looking at that default Apache page again.  If so, you&rsquo;re on track.  If not, figure out what went wrong.  You can see if Apache is in trouble by running this command and then hitting the url again:</p>

<p><code class="bash block">tail -f /var/log/apache2/error_log</code></p>

<p>MacPorts users: <code class="bash">tail -f /opt/local/apache2/logs/error_log</code></p>

<p>You may need to comment that line out with a # and do the <code class="bash">lookupd -flushcache</code> if you want to search google while doing this.  Or you could just use <a href="http://ysearch.com">Yahoo! Search</a> temporarily.  Maybe in the process, you&rsquo;ll get used to Yahoo search and even find that you like it better.  (See?  I&rsquo;m a good little purple-blooded corporate monkey!)</p>

<h3>Set up mod_proxy</h3>

<p>So, now let&rsquo;s take your new and un-improved <a href="http://www.google.com">www.google.com</a>, and turn it into a proxy for the actual <a href="http://www.google.com">www.google.com</a>.</p>

<p>If you have a separate conf file where you keep your Apache customizations (which I highly recommend), then add this stuff in there.  If you don&rsquo;t, then you can just add it to <code>/etc/httpd/httpd.conf</code> or <code>/etc/apache2/httpd.conf</code> or <code>/opt/local/apache2/conf/httpd.conf</code>.  Either way should work, as long as Apache finds out about it somehow.</p>

<p>Stuff that you may need to change wrapped in <strong>strong tags</strong>.</p>

<p><code class="block apache">#google proxy stuff
Listen 443
SSLPassPhraseDialog builtin
SSLSessionCache dbm:/var/run/ssl_scache
SSLMutex file:/var/run/ssl_mutex
SSLRandomSeed startup builtin
&lt;VirtualHost <em>:80&gt;
    # the place where you put the .ico file.
    DocumentRoot <strong>/Users/isaacs/Sites/</strong>
    ProxyPreserveHost On
    ProxyRequests Off
    ServerName <a href="http://www.google.com">www.google.com</a>
    &lt;LocationMatch .</em>&gt;
        Order deny,allow
        Allow from 127.0.0.1
    &lt;/LocationMatch&gt;
    SSLProtocol all -SSLv2
    SSLSessionCacheTimeout 300
    AllowCONNECT 443 563 80
    SSLEngine on
    # enable SSLv3 but not SSLv2
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP:+eNULL
    SSLCertificateFile <strong>ssl.key/server.crt</strong>
    SSLCertificateKeyFile <strong>ssl.key/server.key</strong>
    # correction for browsers that don't always handle SSL connections well
    # You don't really use MSIE on your own machine, though, do you??
    SetEnvIf User-Agent ".<em>MSIE.</em>" \
        nokeepalive ssl-unclean-shutdown \
        downgrade-1.0 force-response-1.0
    SSLProxyEngine on
    &lt;Proxy balancer://googlecluster&gt;
        # the IP addresses you fetched before.
        BalancerMember http://<strong>66.249.89.104</strong>
        BalancerMember http://<strong>66.249.89.147</strong>
        BalancerMember http://<strong>66.249.89.99</strong>
    &lt;/Proxy&gt;
    # Browsing History seemed broken unless it proxies back to https.
    # This is probably safer anyhow, for privacy.
    ProxyPass /history <a href="https://www.google.com/history">https://www.google.com/history</a>
    ProxyPassReverse /history <a href="https://www.google.com/history">https://www.google.com/history</a>
    RewriteEngine On
    RewriteRule /favicon.ico /old-google-favicon.ico [L]
    ProxyPass / balancer://googlecluster/
&lt;/VirtualHost&gt;
&lt;VirtualHost <em>:443&gt;
    # the place where you put the .ico file.
    DocumentRoot <strong>/Users/isaacs/Sites/</strong>
    ProxyPreserveHost On
    ProxyRequests Off
    ServerName <a href="http://www.google.com">www.google.com</a>
    &lt;LocationMatch .</em>&gt;
        Order deny,allow
        Allow from 127.0.0.1
    &lt;/LocationMatch&gt;
    &lt;Proxy balancer://googlecluster&gt;
        # the IP addresses you fetched before.
        # note the "http<strong>s</strong>" on these ones.
        BalancerMember https://<strong>66.249.89.104</strong>
        BalancerMember https://<strong>66.249.89.147</strong>
        BalancerMember https://<strong>66.249.89.99</strong>
    &lt;/Proxy&gt;
    SSLProtocol all -SSLv2
    SSLSessionCacheTimeout 300
    AllowCONNECT 443 563 80
    SSLEngine on
    # enable SSLv3 but not SSLv2
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP:+eNULL
    SSLCertificateFile <strong>ssl.key/server.crt</strong>
    SSLCertificateKeyFile <strong>ssl.key/server.key</strong>
    # correction for browsers that don't always handle SSL connections well
    # You don't really use MSIE on your own machine, though, do you??
    SetEnvIf User-Agent ".<em>MSIE.</em>" \
        nokeepalive ssl-unclean-shutdown \
        downgrade-1.0 force-response-1.0
    SSLProxyEngine on
    RewriteEngine On
    RewriteRule /favicon.ico /old-google-favicon.ico [L]
    ProxyPass / balancer://googlecluster/
&lt;/VirtualHost&gt;</code></p>

<p>Save the file, and then restart Apache:</p>

<p><code class="block bash">sudo apachectl graceful</code></p>

<p>Again, if it doesn&rsquo;t work, try this to figure out what&rsquo;s wrong:</p>

<p><code class="block bash">sudo apachectl configtest</code></p>

<h4>Test</h4>

<p>Now, go to <a href="http://www.google.com">www.google.com</a>.  You should see the google home page, complete with the old lovable [G] favicon.  If you see google, but not the old favicon, go <a href="http://www.google.com/favicon.ico">directly to the favicon.ico</a> and refresh a whole bunch.  Clear your cache, etc.</p>

<p>If you get the new favicon, try running some tests.  Search, go to <a href="https://www.google.com/account/ManageAccounts">your account</a>.  Make sure everything works.</p>

<p>When you hit an https address, you&rsquo;ll get a prompt that the certificate is issued by an untrusted authority.  This is good!  Check the cert details, and make sure that they&rsquo;re what you typed when you created the certificate.  Now, the question, do you trust yourself?  (I&rsquo;d already added myself as a trusted authority, so didn&rsquo;t get this problem in Firefox, but I did see it in Safari.)</p>

<p>If it doesn&rsquo;t show you the new favicon, then you might have put the virtual host config someplace where it doesn&rsquo;t belong, or where it won&rsquo;t be picked up.  Tail the error_log file and see if Apache tells you anything is wrong.  Note that some Apache configurations use &ldquo;apache.conf&rdquo; instead of &ldquo;httpd.conf&rdquo;, so maybe try that.</p>

<p>If it doesn&rsquo;t load at all, tail the apache logs again, and see if anything is barfing.</p>

<h3>Done</h3>

<p>You may now resume your google usage as normal, before the disruptive new favicon appeared.</p>

<p>Note: The Google Notifier won&rsquo;t work, because it checks the certificate, and doesn&rsquo;t give you the option to trust another authority, which is, in my opinion, very bad design.  Also, the Google Notifier sends your password and username out in clear text by default, so it&rsquo;s very insecure.  You shouldn&rsquo;t be using it in the first place.</p>

<p>Instead, you can use the <a href="https://mail.google.com/mail/feed/atom">RSS feed</a> to get inbox alerts without exposing your info.</p>
