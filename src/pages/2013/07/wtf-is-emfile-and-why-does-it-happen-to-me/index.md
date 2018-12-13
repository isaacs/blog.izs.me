---
date: 2013-07-30T00:15:00.000Z
redirect_from:
  - /post/56827866110/wtf-is-emfile-and-why-does-it-happen-to-me/
  - /post/56827866110/
  - /post/56827866110/wtf-is-emfile-and-why-does-it-happen-to-me
  - /post/56827866110
slug: wtf-is-emfile-and-why-does-it-happen-to-me
title: WTF is EMFILE and why does it happen to me
tumblrid: 56827866110
type: text
---
<p>By <a href="https://twitter.com/maxogden/status/361995189205741568">request</a></p>

<p>The error code <code>EMFILE</code> means that a process is trying to open too many files.  Unix systems have a max number of file descriptors that may be assigned, also known as the <code>MAX_OPEN</code> value.  On OS X, the default is 256, which is pretty low for many modern programs that do a lot of file system writing and reading.</p>

<p>This max value can be read or modified using the <code>ulimit -n</code> command.  Since I&rsquo;ve bumped up the MAX_OPEN ulimit value to <code>2560</code> on my system, here&rsquo;s what my laptop reports:</p>

<pre><code>$ ulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
file size               (blocks, -f) unlimited
max locked memory       (kbytes, -l) unlimited
max memory size         (kbytes, -m) unlimited
open files                      (-n) 2560
pipe size            (512 bytes, -p) 1
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 709
virtual memory          (kbytes, -v) unlimited
</code></pre>

<p>These ulimit values are important!  You don&rsquo;t want runaway programs to accidentally open way too many files, and take up unnecessary resources on your program by accident.</p>

<p><a href="https://npmjs.org/">npm</a>, being a package manager, opens a lot of files, often more than 256 at a single time.  In order to get around this limitation, there are two options:</p>

<ol><li>Always be very careful to not open too many files.</li>
<li>Handle <code>EMFILE</code> errors by queuing the <code>open</code> operation, and then attempting it again once a file closes.</li>
</ol><p>The only way to reliably do #2, however, is by monkey-patching Node&rsquo;s <code>fs</code> module, which is exactly what the <a href="https://npmjs.org/package/graceful-fs">graceful-fs</a> module does.  A really interesting collision of bugs in npm, graceful-fs, and lockfile, led it to ignore certain open operations, and so you could easily get into cases where the script could not reasonably handle these problems.  Basically, it would open a lockfile to reserve a specific tar operation, and then not have any file descriptors left to actually <strong>do</strong> the tar unpack operation!  Also, graceful-fs was not actually monkey-patching with a queue, but instead trying to do some fancy clever back-off stuff, which just wasn&rsquo;t as solid.</p>

<p>Graceful-fs 2.0 and lockfile 0.4 contain the fixes for their relevant parts of this flub up.  The latest version of npm 1.3 has all the fixes.</p>

<p>At this point, no matter HOW small your <code>ulimit -n</code> value is, <code>graceful-fs</code> will prevent it from ever raising an <code>EMFILE</code> error.  Of course, it does this at the expense of making <code>open</code> operations potentially take longer.  I&rsquo;m planning on exploring using a slightly smarter monkey-patch, so that it only will enqueue open operations that have some kind of special flag or other opt-in switch.</p>
