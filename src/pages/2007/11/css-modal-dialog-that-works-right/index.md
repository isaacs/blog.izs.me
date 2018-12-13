---
date: 2007-11-26T19:13:04.000Z
redirect_from:
  - /post/146672467/css-modal-dialog-that-works-right/
  - /post/146672467/
  - /post/146672467/css-modal-dialog-that-works-right
  - /post/146672467
slug: css-modal-dialog-that-works-right
tags:
  - CSS
  - Freebie
title: CSS Modal Dialog that Works Right
tumblrid: 146672467
type: text
---
<p><em>Note: This method has a few problems.  Scrolling breaks on the iPhone, and the test page has some issues with tabbing through links.  See <a href="http://foohack.com/2007/11/css-modal-dialog-that-works-right/#comment-422">my comment</a> below.  A new version will be posted soon. &ndash;i</em></p>

<p>In my <a title="Cross Browser Support for inline-block Styling" href="http://foohack.com/2007/11/cross-browser-support-for-inline-block-styling/">last post</a>, I touched on a method to get different browsers to handle the inline-block display style.  I decided to use that on a project that I&rsquo;m working on now that has a few <a href="http://en.wikipedia.org/wiki/Modal_dialog">modal dialogs</a>.</p>

<p>Feel free to skip all this and go <a href="http://foohack.com/tests/vertical-align/dialog.html">straight to the example</a>.</p>

<p>In the application world, creating a modal is pretty straightforward.  Here are some features that every modal window should have:</p>

<ol><li>Interaction with the contents of the parent window should be *impossible* until the modal is dealt with.  Scroll-mouse should not scroll the background page, clicking should not click the background page, tabbing should not get you there, etc.</li>
    <li>When you dismiss the modal, the parent window should be *exactly* how you left it.</li>
    <li>The parent window should be dimmed, or there should be some other indicator that it is currently not available for interaction.  This has the corollary effect of making the modal &ldquo;pop&rdquo; a bit more.</li>
    <li>In a web page, a modal should be constrained within the viewport.  Opening a new window just to show a dialog box is ugly as a bucket of slugs.</li>
    <li>The modal should be placed consistently.  If it is not movable, then it should be centered vertically and horizontally.  This positioning should be consistent if the parent window is resized or moved.</li>
    <li>The modal should be smaller than the parent window.  If the viewport is resized smaller than the modal, then scrollbars should appear that allow the user to see the rest of the modal.</li>
</ol><p>The rule of thumb: The modal should be visible always and in every situation, the parent should be dimmed and preserved.  Almost every modal dialog I could find online broke a few of these rules.</p>

<p>In some, the html and body elements have their overflow set to hidden when the modal is shown, so the current scroll position of those elements is lost.  If you were looking through a list of items, and you brought up a modal dialog related to one of them, then you&rsquo;re back to the start of the list when the modal is dismissed. Annoying.</p>

<p>In others,  you CAN scroll the background, but the modal is set to respond to the onscroll event to try to stay in place.  Some of the time, they use display:fixed to behave a little nicer in non-IE browsers.  At worse, you get a jumpy seizure-inducing experience; at best, you accidentally scroll the background and lose your place without realizing it.</p>

<p>It&rsquo;s a bit of an edge case, but you do have to handle cases where the modal might be taller/wider than the viewport.  As a test, I tried resizing the viewport down on a bunch of modal approaches.  Vertical centering often doesn&rsquo;t do too well unless the contents are smaller than the viewport, so the top and bottom of the modal were cut off.  Unacceptable.</p>

<p>It wasn&rsquo;t terribly difficult to create one that obeyed these rules.  Here&rsquo;s the approach that I took.</p>

<ol><li>Build it with tables.</li>
    <li>Replace the tables with divs, and give them the appropriate display:table, display:table-cell CSS rules.</li>
    <li>Fret and hack to try to get it to work in IE, unsuccessfully.</li>
    <li>IM <a href="http://hedgerwow.com">another yahoo</a> who has a reputation for being a great webdev hacker.</li>
    <li>Adapt what he did to my needs.</li>
</ol><p>For the non-IE browsers, it&rsquo;s pretty straightforward.  Take the scrollbars off of the HTML and BODY elements, and put them on #body instead.  #modal is a sibling of #body, so when it is 100% height and width, it will cover it up.  Then #modal will overlap the scrollbars of #body, without losing the scroll position.  Also, that means there&rsquo;s no need to do any trickery with a negative right margin to try (unsuccessfully, on the mac) to overlap the scrollbars.</p>

<p>Since .overlay element in the modal has a display:table, it will always expand to fit its contents.  .overlay&rsquo;s parent is overflow:auto, so if .overlay is too big, it&rsquo;ll let you scroll to see the rest.</p>

<p>What this means is that you can&rsquo;t cut off the top and bottom of the modal. It&rsquo;ll be vertically centered if there&rsquo;s room, and if not, it&rsquo;ll be flush to the top and scrollable.  Perfect.</p>

<p>For IE it gets trickier.  <a href="http://www.hedgerwow.com/temp/css-vertical-align-center-overlay.html">Hedger&rsquo;s example</a> showed 2 great ideas, though.  Basically, if you have 2 siblings that are display:inline-block, then, in IE at least, the line-block will expand to fit both of them.  So, they both end up being vertically centered to the height of the taller child.  If that taller element is width:0, then you essentially have an arbitrary line-height setter for the inline-block row.  In this case, the height is set to 100%.</p>

<p>The other child will be whatever height it is based on its contents.  If that happens to be taller than 100%, then the line-height will be taller than the viewport.  At that point, the overflow:auto parent shows a scrollbar to let you see the rest.  Identical behavior to the standards browsers!</p>

<p>The second problem arises with IE&rsquo;s peculiarities when it comes to percentage heights.  For whatever reason, if you have a position:absolute element, it doesn&rsquo;t like to do height:100% unless some parent has a fixed height value, like 500px.  100% of 100% doesn&rsquo;t compute, for some reason.  Sadly, that means that the element that does the overlay wouldn&rsquo;t be able to properly do its job in IE.  So, instead of using a separate transparent layer with a background image, Hedger used the <a href="http://msdn2.microsoft.com/en-us/library/ms532997.aspx">DXImageTransform.Microsoft.gradient</a> filter on the modal container itself.  However, since the gradient filter doesn&rsquo;t actually prevent interaction with the background, I added a 1 pixel transparent gif as the background image.</p>

<p>I&rsquo;d very much like to not use this transparent pixel.  It feels a bit like a spacer gif to me.  But, all in all, it&rsquo;s a pretty small price to pay.</p>

<p>I didn&rsquo;t bother to tackle the tab-order focus stuff in this little test page, since I wanted to just isolate the stylistic stuff to get it working across browsers.  However, it would be good to put a focus handler on #body, and any time a #body element gets focus, focus the #modal instead.  That way, once you tab off the modal dialog, you&rsquo;d get right back onto it.  In the spirit of being friendly to keyboard users, it would also be a good idea to keep track of the currently focused element when the modal opens, and go back to it once the dialog closes.</p>

<p><a href="http://foohack.com/tests/vertical-align/dialog.html">Here it is</a> for your view-source pleasure.</p>

<p>Please please feel free use this modal.  Life is too short to futz around trying to see the &ldquo;cancel&rdquo; button that is hiding off the screen so you can go back to reading your page.</p>

<p>Let me know if you can think of any enhancements or find any problems with it.  Those of you in the US, I hope you had a great Thanksgiving.</p>

<h3>Update</h3>

<p>I updated it to add support for focus and blur events.  It works in Firefox, MSIE, and Safari. Opera on the Mac has some really strange behavior regarding focusing on links, and I decided that it just wasn&rsquo;t salvageable.  Safari requires a bit of hacking to get the focus stuff to work properly, but I think it&rsquo;s acceptable.</p>
