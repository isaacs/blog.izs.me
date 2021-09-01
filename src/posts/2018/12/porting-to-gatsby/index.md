---
layout: layouts/post.njk
title: Porting to Gatsby
slug: porting-to-gatsby
date: 2018-12-27T00:06:04.146Z
photos:
  - - no-adult-content.jpg
tags:
  - colophon
  - about
  - react
  - webdevery
---
Last month, Tumblr announced that they'd no longer be allowing "Adult
Content" on their platform.  I found this distressing, not because I
depend on Tumblr for pornography, but because it was clear that a
hamfisted approach to automating the deletion of adult content would
not go good.

I downloaded my blog content using [a script I
found](https://github.com/bbolli/tumblr-utils), and
started looking around for the best thing to port my blog to.  I
definitely wanted something that would let me write markdown and
export static content.  [Blosxom](http://blosxom.sourceforge.net/)
looked promising, but it seemed pretty old, and I have no interest in
learning Perl at this time.

[Gatsby](https://www.gatsbyjs.org/) stood out as a serious contender.
All the cool kids use React and Graphql these days, and it would let
me both learn the new shape of web development, and leverage my
JavaScript and Node.js skills.

My initial impressions so far:

- **React**: basically an ideal component/data model, though the data
  handling was a bit of a confusing learning curve.  (Gatsby and
  Graphql make this both better and worse in different ways.)  JSX is
  an itchy sweater that I resent wearing.  It's not _hard_ to use, in
  fact, it's pretty easy, but the ceremony feels excessive, and
  switching between `{xyz}` in JSX and `${xyz}` in template strings is
  annoying.

- **Gatsby**: pretty effin rad.  I like it a lot.  Blends really nice
  dev-time hotswap experience with a powerful component model and an
  optimized static SSR build for production.

  The docs are well written, and it has them, but there are not nearly
  enough.  As a result, they sometimes jump way too fast from "this is
  how you type codes into an editor" to "and then you use React
  components to..." The tutorials were frustrating at first because of
  being so novice, and then frustrating because they took a lot of
  know-how for granted.

  Gatsby feels like it's still a bit of a power tool for power users.
  When there's a paved path or a starter, and that path is marked,
  it's easy, but I found I ended up hacking through jungle a bunch of
  times.  (Maybe that's what I was looking for?  I did enjoy the
  experience!)  There are a lot of paved paths, but they don't go
  everywhere, and they aren't all marked.

  That being said, it's extremely powerful, well thought-out, and fun
  to use.  I believe this platform will mature _very_ nicely as more
  docs and tutorials are added to fill in the blanks.

- **Graphql**: confusing learning curve, still don't quite grok how
  it's doing stuff, but once the basics clicked, it's way easier to
  use than SQL, and I already get queries right on the first try more
  often than not.  I can see why everyone's excited about it.

- **Cloudflare**: happy with it as expected, but for one bump.  You
  can't use them as a TLS terminator in front of a plaintext HTTP
  backend, which I _guess_ sorta makes sense, but wasn't clear in
  their interface or docs.

The
[importer](https://github.com/isaacs/blog.izs.me/tree/master/import)
was fun to write, and pretty straightforward.

The [media plugin goober
thingie](https://github.com/isaacs/blog.izs.me/tree/master/plugins/gatsby-remark-photoset)
was originally only going to be used for photosets, but I ended up
using it for all media types, so it's increasingly misnamed.  I plan
to publish it as a standalone plugin, though I'm not sure how many
people would make use of it.  I did actually try to make photosets
work with `flex-box` and `display:table`, but in practice, nothing is
as stable or reliable as actual `<table>` elements.  I always got
weird extra whitespace when turning divs into `display:table`
elements.

I made them reactive by just making all the elements `display:block`.
It's much more reliable to turn a `td` into a `div` than the other way
around, apparently.

The template and CSS I built from scratch using my existing tumblr
blog as a visual design.  I went down a weird rabbit hole for a while
because I didn't realize you were supposed to just `import './foo.css'`
in a component in order to pull in the CSS.  I was using
Helmet to stuff a `<style>` tag in the header, and always getting a
flash of unstyled content.

Overall, I'm happy with the result, and really glad that things like
Gatsby exist :)
