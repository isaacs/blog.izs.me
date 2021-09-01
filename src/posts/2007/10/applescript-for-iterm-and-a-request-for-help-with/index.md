---
layout: layouts/post.njk
date: 2007-10-01T17:00:45.000Z
redirect_from:
  - /post/146672279/applescript-for-iterm-and-a-request-for-help-with/
  - /post/146672279/
  - /post/146672279/applescript-for-iterm-and-a-request-for-help-with
  - /post/146672279
slug: applescript-for-iterm-and-a-request-for-help-with
tags:
  - freebie
  - request
  - tools of the trade
title: Applescript for iTerm (and a request for help with it)
tumblrid: 146672279
type: text
---
<p><a href="http://iterm.sourceforge.net/" rev="vote-for">iTerm</a> is a major part of my workspace.  I&rsquo;m a big fan of tabbed interfaces, and my fingers have gotten really good at the Apple-← and Apple-→ key combos to swap between them.  I usually have three tabs going:</p>

<ol><li>One that runs <a href="http://www.cis.upenn.edu/~bcpierce/unison/" rev="vote-for">Unison</a> in batch mode to keep my mac and BSD machines in sync.  I set the title of this one to &ldquo;unisoner&rdquo;.</li>
    <li>A second logged into my BSD machine in the package folder to easily relink the site package when I add files to it.  This is the &ldquo;relinker&rdquo;.  (Also, this one occasionally is used to <code>tail -f</code> on the apache log file.)</li>
    <li>A third sitting in my code folder to do CVS updates, open files, grep for stuff, etc.  This is &ldquo;cvser&rdquo;.</li>
</ol><p>Of course, it&rsquo;s a pain to go through the steps to set all this up.  So, I wrote this Applescript, and it does it all:</p>

<p><code class="block applescript">tell Application "iTerm"
  activate
  set myterm to (make new terminal)
  tell myterm
    if (count of sessions) &lt; 3 then
      my open_tab("title unisoner
cd dev/orion
unisonpush
unisondev")
      my open_tab("v
yroot orion_front
title relinker-tailer
cd dev/orion/front/package
yapl")
      my open_tab("title cvser
cd dev/orion
open -a TextMate orion.tmproj")
    end if
  end tell
  terminate first session of current terminal
end tell
on open_tab(command)
  tell Application "iTerm" to tell first terminal
    launch session "Default Session"
    tell last session
      write text command
    end tell
  end tell
end run_command</code></p>

<p>The only problem is, it requests a password when it ssh'es into my dev box and changes to the project root.  So, that whole piece falls down.</p>

<p>Anyone out there in geek land know of a way to make an Applescript respond to things like that?  Something like this:</p>

<p><code class="block applescript broken">whenever the last line is "Password:" then
  write text returned of (display dialog "Password:" default answer "")
end if</code></p>

<h3>Update:</h3>

<p>Turns out, what I suggested is pretty close to what works.  However, since there&rsquo;s no event to listen for that would tell the script that the display has been updated, it takes a bit of fudging, and doesn&rsquo;t always work perfectly.  Basically, you put <code>@@@PASSWORD@@@</code> in the list of commands where you may expect a password prompt, and it&rsquo;ll wait for a second and display a dialog if necessary.</p>

<p><code class="block applescript">
on open_tab(command)
  set commands to paragraphs in command
  
  tell Application "iTerm" to tell first terminal
    launch session "Default Session"
    repeat with currentCommand in commands
      
      if (text of currentCommand = "@@@PASSWORD@@@") then
        do shell script "sleep 1"
        set pw to last word of (get contents of last session)
        if pw = "Password" then
          tell Application "Finder"
            activate
            set pw to text returned of (display dialog "Password:" default answer "" with hidden answer)
          end tell
          tell Application "iTerm" to activate
          tell last session to write text pw
        end if
        
      else
        tell last session to write text currentCommand
      end if
      
      
    end repeat
    
  end tell
end open_tab</code></p>

<p>Get the finished product: <a href="http://foohack.com/blog/wp-content/uploads/2007/10/workspace.applescript" title="Applescript for iTerm">Applescript for iTerm</a>.  You&rsquo;ll want to change up the specific commands up near the top, of course.</p>
