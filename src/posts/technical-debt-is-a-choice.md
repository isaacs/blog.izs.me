---
title: Technical Debt is a Choice
date: 2022-11-21T10:56:00.994Z
---

(And often the _correct_ choice.)

Original context:

> > [@copyconstruct](https://twitter.com/copyconstruct/status/1592527230978387968)
> >
> > What engineers mean by “technical debt”
> >
> > - Poor code quality leading to a brittle codebase
> > - bad or little to no testing leading to bugs
> > - spaghetti code due to rapid feature bloat
> >
> > What CEOs hear: person making 6 figures failing to due their
> > job yet demanding even more resources
>
> [@ElleArmageddon](https://twitter.com/ElleArmageddon/status/1592885383477723137)
>
> IDK who needs to hear this, but:
>
> This is not what is meant by “technical debt.”
>
> Technical debt is what happens when engineering (and executive)
> leadership chooses to prioritize net new work over maintaining
> existing projects.

Elle's is a good response. (An earlier draft of this was posted
as a thread in response to this conversation. A lot of people
found it useful and had interesting comments, so I expanded on it
here.)

Few topics show communication dysfunction in software
organizations as immediately as discussing Technical Debt.

From the business side of things, it seems like engineers
constantly complain about being bad at their jobs, and don't
understand the urgency of shipping. From the engineering side,
it sucks trying to swim uphill in codebases that are full of
aging "temporary" cruft and legacy hacks which eventually make
forward motion impossible.

The Deeply Wise thing for senior engineering types to say at this
point is that it's just challenging for "business people" to
comprehend the nature of software, and so we need to find better
ways to advocate for what we need. (Sometimes including "lie to
them"; say stuff will take longer than it really will, because
that's a _great_ way to build organizational cohesion.)

But that's kinda bullshit. "Business people" are often _deeply_
technical people capable of understanding a lot of really
complicated things, and make difficult decisions involving
competing interests all the time. (The good ones, anyway.) It's
worth considering that perhaps if you can't explain it well
enough, _maybe_ it's because you aren't understanding it
properly.

<blockquote class="pullquote left"><p>"Technical debt" is not a
universally bad thing, but a result of a set of chosen
trade-offs, which are optimal in a great many
situations.</p></blockquote>

An important concept often missing from these conversations is
that "technical debt" is not a universally bad thing, but a
result of a set of chosen trade-offs, which are in fact the
optimal choice in a great many situations. It only becomes toxic
when not clearly chosen or wisely managed.

"Technical debt" is what happens when you prioritize "try lots of
stuff" over "invest in elegance/maintainability".

In software development, elegance and maintainability are not
free! They have cost, that's why you have to _invest_ in them.
Time and attention are valuable limited resources. If you're not
sure what you should be building in the first place, why pay
extra for it?

During experimentation phases of product design, the best thing
to do is quickly scaffold out a bunch of stuff, designing in such
a way that it's easy to replace or remove any given piece, but
not necessarily so that it's easy to maintain or extend (or even
understand). If you do throw something away, any investment in
maintainability there is wasted.

The best approach is to only switch modes and build/improve
things "for real" once you have adequate product validation. Ie,
pay down the debt once you know you're keeping the thing you
bought with it. The longer you put off that work, the more the
interest stacks up on it.

That investment in maintainability should be done such that the
result is easy to keep building throwaway experiments on top of.
That is, **the _point_ is to take on a lot of technical debt**,
gain info as fast as possible, and only pay what you need to for
the products and features that matter.

Doing this well requires keeping a clear view of which features
are still experimental, which of those have been validated and
should be reviewed/refactored for maintainability (or have been
invalidated and should be discarded), and which are out of that
phase and safe to build upon further.

## Failure Modes

I don't feel like any of this is fundamentally very hard for
business folks to understand. Even the term itself is a very apt
finance metaphor!

But too often engineers (and especially engineering managers) do
a poor job of planning and managing this debt, and thus a poor
job of communicating the tradeoffs involved, and as a result
business managers are poorly informed about their choices.

One surefire way to steer a company towards poor use of technical
debt is to reward product management for "shipping" and reward
technical leaders for "impact".

Which a LOT of big companies do.

This is made worse, ironically, when you also treat "technical
debt" as a horrible problem to be avoided at all costs.

This creates an outsized incentive to oversell the value of
features that are not yet validated, and possibly also shut down
or remove valuable product features rather than invest in making
them cheap to maintain long term.

So you get high level ICs hopping from one experiment to another
rather than optimizing the organization and architecture, PMs
driving work on features designed for the presenting at the CEO's
next conference talk rather than user value, and business leaders
wondering why ICs are so grumpy.

Another failure mode (there are countless ways to fail!) is
overly investing in maintainability of features that should be
experimental (no tech debt! tech debt bad! no touch hot stove
again!) This is costly, and increases the likelihood that the
company stagnates and fails.

Furthermore, ironically, the "no tech debt!" approach often means
hardening things for the long term that _should be built for
removal or replacement_, which means that when they _do_ need to
be changed, it's harder to do so! You just increased your tech
debt interest rate!

(Healthy software organizations are all alike. Each dysfunctional
software organization is dysfunctional in its own way.)

## It's Not About Code Quality

The biggest problem with the take @ElleArmageddon was replying
to, is the idea that there exists some platonic ideal of "code
quality". The sooner you realize that ALL code is temporary trash
destined for the garbage heap of history, the sooner you can
start making rational decisions.

<blockquote class="pullquote right"><p>There is no such thing as
"high quality code" or "low quality code".</p></blockquote>

There is no such thing as "high quality code" or "low quality
code". Erase that idea from your thinking. There is only
"software that makes tradeoffs that are profitable in a given
situation (and likely not in others)".

The choices that are optimal for "figure out what we should be
building by validating features with real world user behavior"
are _radically_ different from those for "provide and maintain
this feature efficiently at scale for the foreseeable future".

And, it should be said, I'm making it seem like a binary by
focusing on two opposite ends of a spectrum here, but it's not
either-or. All code is temporary, all features are experimental.
The question is how long you want to bet the experiment will run.
And there are extremely strong arguments for making _some_
investments in maintainability early on, because they are
counterintuitively cheaper to build up front than do without.
(For example, writing tests.)

## The Shape of a Solutions

This "no such thing as code quality" idea can be really
eye-opening. Instead of asking "is this good code?" we should be
asking "what tradeoffs is this code making? what situations make
this a good choice? what situations make it a poor choice? What
situation are we actually in?"

The real "10X engineer" (if there is such a thing<sup><a
href="#techdebt-fn-1" id="techdebt-return-1">[1]<a></sup>) is
the person who can perform this kind of analysis, and then
identify and plot a course towards a set of tradeoffs that are
optimized for the current context.

_That_ is the process we should aspire to as engineers. A clear
vision of the appropriate level of commitment and investment in
all the features of our product, so that we can make sound
decisions about what to rely upon, what to be ready to throw
away. When interfacing with the business, we can clearly
indicate which features have been hardened, which were slapped
together to test a hunch, and so on.

We can start to ask questions of Product about which things we
should throw away, and which we should invest in hardening. We
can even preemptively set timelines on when these decisions will
be made and what data will drive them. Any product manager
worth their spreadsheets who would be thrilled to get this kind
of visibility and feedback.

Instead of kvetching about how "The Business" doesn't understand
or appreciate the salt of the earth software engineers toiling
away in the code mines, or have to suffer wrongheaded questions
like "how long will it take to be production-ready?", or fight
tooth and nail to justify making everything prohibitively
expensive, we can instead educate the entire organization about
the trade-offs available, make informed choices together, and get
direction that is actually useful in solving the problems before
us. (Assuming, of course, we take the time to understand them
ourselves.)

<blockquote class="pullquote left"><p>By the time you realize you
have a problem, it&#39;s because you have a <em>big</em>
problem.</p></blockquote>

Like most emergent software problems, of course, it's not so
simple. By the time you realize you have a problem, it's because
you have a _big_ problem. But digging out of a mess is only a
matter of taking small iterative steps towards improvement.

Catalog the components of the system. Identify the parts that are
brittle and which of those should be hardened and which should be
thrown away. Conceive of the architecture you wish you'd known
you'd need, and start taking small steps towards it, _while still
doing experiments_, but with open eyes and a clear criteria and
timeline for moving them to non-experimental status.

Bottom line, technical debt is not "created" by engineers writing
bad code, or business leaders making impossible demands, and it's
not always a bad idea. It's _chosen_ by an organization's
collective priorities, and it is often the correct choice, as
long as it's acknowledged and managed responsibly.

<small><a href="#techdebt-return-1" id="techdebt-fn-1"
name="techdebt-fn-1">[1]</a>: there isn't. it's a myth.</small>
