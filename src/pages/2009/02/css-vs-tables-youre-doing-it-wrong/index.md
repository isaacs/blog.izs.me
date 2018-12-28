---
date: 2009-02-03T07:40:22.000Z
redirect_from:
  - /post/146672962/css-vs-tables-youre-doing-it-wrong/
  - /post/146672962/
  - /post/146672962/css-vs-tables-youre-doing-it-wrong
  - /post/146672962
slug: css-vs-tables-youre-doing-it-wrong
tags:
  - css
  - code beauty
  - code ecosystems
  - sustainability
title: 'CSS vs Tables: You''re Doing It Wrong'
tumblrid: 146672962
type: text
---
<p>
    Definitions first.
</p>

<dl><dt>
        Table
    </dt>
    <dd>
        <p>
            A specified set of columns and rows with cells that automatically and fairly smartly expand to fit their contents; cells can span rows or columns; the table as a whole can be treated as one block, and cells can contain tables. A table is a metaphor for visually laying out 2-dimensional content.
        </p>
    </dd>
    <dt>
        CSS
    </dt>
    <dd>
        <p>
            <em>cascading style sheets</em>; not floating divs, not any specific markup, but <em>just</em> the concept of the visual display of markup specified by a series of rules that are kept separate from the markup they operate on, generally in an external linked file or a style tag in the head of the document.
        </p>
    </dd>
</dl><h3 id="talking_past_each_other">
    Talking Past Each Other
</h3>

<p>
    CSS is (for various reasons cited elsewhere ad nauseam), in most cases, the more optimal technological approach. That’s not to say that the existing state of the CSS language is perfect. In fact, even the most vocal CSS advocates regularly assert that there are deep problems with the existing spec and browser support.
</p>

<p>
    Tables are (for various reasons cited elsewhere ad nauseam), in most cases, a more optimal metaphor than any of its rivals. There’s nothing inherently wonderful about the tags themselves. In fact, even the most vocal table advocates regularly assert that the markup is ugly.
</p>

<p>
    Therein lies the crux of the problem. CSS is a great technological approach, and tables are a great metaphor. The question then usually becomes, <q>Should I mark up my content using <code>&lt;div&gt;</code> tags or <code>&lt;table&gt;</code> tags?</q>, which really means, <q>Is the separation of style from content more or less important than using the optimal layout metaphor?</q> The debate goes a little like this:
</p>

<dl><dt>
        tables
    </dt>
    <dd>
        <p>
            This layout metaphor is better, so you should use these tags. All you idealists are unrealistic! (Also, if you think markup matters, you believe in fairies. It so doesn&rsquo;t!)
        </p>
    </dd>
    <dt>
        CSS
    </dt>
    <dd>
        <p>
            Metaphor shmetaphor! You don’t care about the sanctity of data or code quality. Think of the maintenance! (Also, if you can’t do it with divs, you’re stupid. It&rsquo;s so easy!)
        </p>
    </dd>
</dl><p>
    The Right Answer, it would seem, is to use the table metaphor with the CSS technology. In the ideal world, you’d always mark up your content using the tags that would communicate your meaning most clearly to your intended user agents. Then you’d tell user agents how to treat those tags visually. To describe this visual display, you should be able to use the table metaphor, or the float metaphor, or absolute and relative positioning, or anything else, <strong>but that should not be done by your markup</strong>.
</p>

<h3 id="getting_real">
    Getting Real
</h3>

<p>
    In the real world, it’s not so nice. The CSS specification has a set of display values designed to mimic the table tags, but they aren’t well supported, and anyway, it’s an imperfect imitation of a hack that was not really intended to be used the way we all ended up using it.
</p>

<p>In other words, CSS is not an ideal example of what CSS aims at, and the table/tr/td tags are not an ideal implementation of the table/grid metaphor.  CSS tables, though they <em>are</em> clever and in some cases quite useful, take it from bad to worse.</p>

<p>
    The state of the CSS art is not at a point where you can realistically expect to make any significant stylistic changes to your pages without altering the markup. If you need to move the navigation bar from the right to the left, or re-skin the page with dropshadows instead of rounded corners, or convert your gradients from 2-tone to 3-tone, or make your boxes vertically centered instead of top-aligned, you’re probably going to have to change your markup, at least a little.
</p>

<p>
    In theory, it’s possible. I know a handful of my colleagues will vehemently disagree and point at countless approaches to enable virtually any kind of reskinning using only CSS changes. (I’ve used <a href="http://www.lesliesommer.com/wdw07/html/">Leslie Sommer’s CSS Mojo</a> technique to great success in the past; we used it for pretty much everything on <a href="http://buzz.yahoo.com">Yahoo! Buzz</a>.) But let me tell you, from years of experience building production sites with CSS, most of the time, in reality <strong>it just doesn’t work that way.</strong>
</p>

<p>
    And why should it? What kind of crazy lunatic writes <em>all their HTML by hand in text files</em>, anyhow? Clearly you have some kind of back-end engine spitting it out from templates, so you just change the template, and <em lang="fr">voilà!</em>, the markup is changed everywhere.
</p>

<h3 id="a_very_blue_bike_shed">
    A Very Blue Bike Shed
</h3>

<p>
    Working at Yahoo, I’ve met some webdevs with truly incredible CSS ability, who crank out live code under real deadlines to exacting standards. They use CSS, and not tables, and they Get Shit Done. There are a lot of them, more than I can list here, but <a href="http://nate.koechley.com/blog/">Nate Koechley</a>, <a href="http://github.com/msweeney">Matt Sweeney</a>, <a href="http://blog.hedgerwow.com/">Hedger Wang</a>, and <a href="http://www.lesliesommer.com/">Leslie Sommer</a> all deserve a special mention.  I came to Yahoo knowing CSS pretty well, but I became an expert largely as a result of working in such a highly skilled community of developers.
</p>

<p>
    Also due to my time at Yahoo, I’ve seen some absolutely <em>crazy</em> debates about markup and coding standards on the devel-frontend mailing list. I mean, you think this little flare-up in the blogosphere is anything? You got no idea, buddy. Seriously. And these are coworkers who (for the most part) really like and respect one another.
</p>

<p>
    You wanna know a secret? <strong>It makes no difference.</strong>
</p>

<p>
    Language is as language does. If everyone uses the <code>&lt;table&gt;</code> tag for markup, guess what happens: <code>&lt;table&gt;</code> is now a semantically meaningless (or at least, semantically vague) tag, and any user agents that might care about navigating tabular data have to deal with that fact. It becomes just another <code>&lt;div&gt;</code>, for all intents and purposes, but a little less flexible, and with a default styling that makes it handy for layout.
</p>

<p>
    The passion for the rants <em>comes from</em> the fact that it is meaningless! Of <em>course</em> it’s a fertile ground for <a href="http://www.bikeshed.com/">bikeshedism</a>!
</p>

<h3 id="that8217s_right_it_doesn8217t_matter">
    That’s right: It doesn’t matter.
</h3>

<p>
    Use whatever tags work for you. I don’t care. You’ll still be a good person.
</p>

<p>
    I <em>can</em> tell you from experience that a deep knowledge of CSS is essential for serious front-end development. (Most so-called DHTML is actually just manipulating CSS with Javascript, and the Javascript is pretty light.) CSS can do some things that table tags can’t, so you ought to learn it. The reverse is also true, so you should know how to use tables, too.
</p>

<p>
    Write code that you can maintain, that is flexible enough to let you change it without sacrificing the stability of your product. Test it in the user agents that you expect to support. Stop debating the color of this bikeshed.
</p>

<p>
    If there’s ever a good reason to go back and change your tables to divs, or vice versa, you can do that. Hell, plan for that, because whether you use CSS for layout or not, you’re going to need to touch your markup sometimes. It is much much harder to build a product people want than it is to build a product that works in Browser X.
</p>
