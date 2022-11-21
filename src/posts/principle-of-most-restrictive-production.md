---
title: Principle of Most Restrictive Production
tags:
  - coding
date: 2022-04-13T04:24:37.123Z
---

There are a lot of strong feelings about programming style.  It's
fashionable to either have a very strong opinion about any of them, or
shrug and wisely proclaim that it doesn't matter, as long as some _other_
arbitrary requirement is met (consistency, test coverage, performance,
etc.)

I prefer to try on these opinions like a jacket.  Wear them out for a day,
then take them off again in the evening.  Maybe you never pick it up again,
or maybe you keep putting it on until the elbows wear through.  But every
time it's a choice, not a part of you.

One such garment that I find I come back to again and again is this, "The
Principle of Most Restrictive Production", or simply "MRP" for short:

> **When writing code, always choose the stylistic production which is
> maximally restrictive.**

It started as a fun little side game while writing `Arborist`, but I sort
of fell in love with it.

I will explain the rule itself in practical terms, the justification for
it, and the somewhat surprising and delightful effect it has when applied
rigorously.

## The Rule in Practical Terms

In a nutshell this means that you should always pick the way of writing a
bit of code which has the _least_ flexibility.

So, for example, instead of this:

```js
function distance (x, y) {
  let xSq = Math.pow(x, 2)
  let ySq = Math.pow(y, 2)
  let sumOfSq = xSq + ySq
  let dist = Math.pow(sumOfSq, 0.5)
  return dist
}
```

according to <abbr title="Most Restrictive Production
principle">MRP</abbr>, you would be better to write this:

```js
const distance = (x, y) => Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5)
```

In the first case, the `distance` function _could_ be called with a `this`
param, either by being assigned to a prototype or as an object member, or
instantiated with `new`, or called with `Function.call` or
`Function.apply`, or any of the various `Reflect` methods.

As it uses `let` instead of `const` for its variables, any of them could be
changed anywhere else in the function.

On the other hand, as an `=>` function, without braces, it can _only_
possibly return a single expression.

Note also that `(x) => someValue` is ever so slightly less restrictive
than `x => someValue`, because the `()` admit the presence of additional
parameters.

Similarly, ternary conditionals are often suggested by MRP when
setting values. Instead of this:

```js
// foo sticks around, could be used for anything
// any of these {} blocks could have another line of code added.
let foo
if (x === 1) {
  foo = 'one'
} else if (x === 2) {
  foo = 'two'
} else if (x === 3) {
  foo = 'three'
} else if (x < 1) {
  foo = 'basically none'
} else if (x > 3) {
  foo = 'infinity'
} else {
  foo = 'some kind of fake number'
}
console.log(foo)
```

We could make that more restrictive by removing the braces.  Then each `if`
block could only have a single declaration:

```js
// now each `if` block can only possibly have one line, not multiple
// but still, we have to read each line to know what it's doing.
let foo
if (x === 1)
  foo = 'one'
else if (x === 2)
  foo = 'two'
else if (x === 3)
  foo = 'three'
else if (x < 1)
  foo = 'basically none'
else if (x > 3)
  foo = 'infinity'
else
  foo = 'some kind of fake number'

console.log(foo)
```

But we would be even better off writing this:

```js
// no possible way that it could be more than setting a single value,
// which is used by console.log() and nothing else.
console.log(x === 1 ? 'one'
  : x === 2 ? 'two'
  : x === 3 ? 'three'
  : x < 1 ? 'basically none'
  : x > 3 ? 'infinity'
  : 'some kind of fake number')
```

A common objection and sense of genuine revulsion that many experience upon
encountering code like this is that it is overly clever code-golfing,
obsessed with terseness for its own sake.

And indeed, optimizing for the maximally restrictive production _does_
often result in much shorter code, and sometimes using unusual language
features with a bit of a "line noise" flavor to them.

But terseness is not the goal!  Restrictiveness is!  Sometimes MRP results
in code that is _longer_ than a less restrictive production.  For example,

```js
// Testing a single variable against multiple possible values
if (x === 'foo') {
  doSomethingWithFoo()
  andThenDoSomethingElse()
} else if (x === 'bar') {
  doSomethingWithBar()
  andThenDoSomethingElse()
} else if (x === 'blarg') {
  console.error('x is a blarg, nothing to do')
} else {
  throw new Error('invalid x (must be foo bar or blarg)')
}
```

we can use a production that can _only_ test a single variable against
multiple possible values:

```js
// we know from the start that only x is being tested
switch (x) {
  case 'foo':
    doSomethingWithFoo()
    andThenDoSomethingElse()
    break
  case 'bar':
    doSomethingWithBar()
    andThenDoSomethingElse()
    break
  case 'blarg':
    console.error('x is a blarg')
    break
  default:
    throw new Error('invalid x (must be foo bar or blarg)')
}
```

In this case, the `switch` is 15 lines, but the `if`/`else` chain is 11.
However, the `if`/`else` chain can switch mid-stream which variable it is
testing, or test something else entirely:

```js
if (x === 'foo') {
  doSomethingWithFoo()
  andThenDoSomethingElse()
} else if (x === 'bar') {
  // ... more x tests ...
} else if (y === 'surprise') {
  throw new Error('not testing x anymore! surprise!! lol')
} else if (x === 'blarg') {
  console.error('x is a blarg')
}
```

And so, the `switch` is longer, but still _more restrictive_, which is the
point of the MRP rule.

## Why Do This?

As we all know, code is read much more often than it is written.  The times
when a developer starts from a blank slate are few and far between,
compared to the time spent refactoring, bugfixing, integrating, and so on.

So, why not just _be consistent_?  Always use `if/else` instead of
ternaries or switches.  Always use braces.  Always use `function` instead
of arrows, always use `()` even when only one parameter is present, and so
on.  Just pick a linter and get on with it!

This rule can be summarized (somewhat in opposition to MRP) as "use the
fewest number of coding style productions necessary".  If `if/else` can do
the job, there's no need for ternaries and switches; if `function` works,
then no need for `=>`, and so on.

This is a valid concern, and "consistently use fewer productions" is
definitely a thought jacket that I wear in some of my coding projects.

However, on balance I would argue that the value of "consistency" touted
here is actually just a proxy for the value of "familiarity".  Consistently
using a small number of syntax variations leads quickly to familiarity
(when you see the same thing repeatedly, you get familiar with it sooner).

However, restricting the overall variety of code syntax is not the only way
to make code "familiar", and I would argue, not the _optimal_ way of making
it understandable!

After all, "familiarity" is only a value in reading code insofar as it is a
proxy for _understandability_.  It is hard to understand unfamiliar code,
after all.

### MRP Results in More Understandable Code (albeit with a learning curve)

One thing I found rigorously applying an MRP coding style in a large
project was that, in fact, quite a lot of "consistency" emerges.

There are, after all, countless ways to test a variable and take some
action as a result.  Even in languages like Python or Go, which aim for a
One True Way to do any given thing, there's still lots of flexibility and
variability in styles.

But if your goal is "how can I write this in as restrictive a manner as
possible?", you quickly find that some patterns emerge.  And given that
some of the resulting productions (especially, ternaries, regular
expressions, and arrow functions) _are_ quite line-noisy, there's a natural
incentive to keep them short and highly modularized.

Variable declaration is usually to be avoided.  If you can do it with a
`const`, don't use a `let`.

The method behind the madness here is this: when reading code, you know
_simply based on the style production_, that there are certain things it
cannot do.  And so, you can stop watching for them.

If a variable is declared as a `const`?  Cool.  I don't have to ever expect
that it can change.

If a block is testing a variable's value in a `switch`?  Great, no chance
anything else will be the conditional variable here.

Ternary expression?  Fantastic, every one of these tests will just be
defining an expression for the assignment.

## Delightful and Surprising Side Effects of Doing This

The thing that I started to notice, after a few months of writing code in
this way, was that any time I saw a series of `if`/`else` using braces, or
a `let` instead of a `const`, or a lambda defined with `function` instead
of `=>`, it stuck out like a sore thumb.

When everything has been written in the most restrictive production,
any code that _isn't_ particularly restrictive is a red flag indicating
that some side effects or other shenanigans are sure to follow.

Though it did get annoying to have to go through and turn a ternary into a
bunch of `if` statements sometimes to add `console.log()`s while debugging,
or wrap things in braces (only to then strip them off when I was done), in
the end, getting accustomed to seeing any of these loosey-goosey style
productions as warnings really helped with reading code (and thus, with
debugging and refactoring).

I'd _know_ that a `function () {}` method was definitely going to end up on
an object at some point, because otherwise it would be `=>` instead.  The
code style _itself_ becomes a sort of comment: "Watch out, there will
definitely be weird `this` stuff here!"  (Really, it turns out there are
hardly any cases where you'd use `function(){}` in JavaScript when
following MRP; almost always it's either a `class` method or an arrow
function.)

The other inteesting impact was that I found myself always thinking about
how to make my code more limited, more precise, more aggressively factored.
If you practice something enough, it starts to become second nature, and
feel strange when you're _not_ doing it.  I found this led to clearer
separations of concerns and an easier time reasoning about the overall
architecture.

## Jackets Are for Wearing (but also for taking off)

I believe that MRP is a good maxim to follow, but like <abbr title="Don't
Repeat Yourself">DRY</abbr> or so many other sensible coding maxims, it can
be taken to extremes.  It is good training to try being rigorously dogmatic
about something, in a limited context, just to see the impact and tangibly
understand the effect it has.

In fact, it's probably impossible to fully understand it _without_ actually
doing it.  A blog post like this is a bit like reading a story about
running.  No matter how well I describe it, you won't break a sweat.

But just as DRY is a sensible maxim (even though there are plenty of times
where it is actually fine to repeat yourself, I promise), MRP has to be
balanced against all the other demands on a coder's limited time,
attention, social capital, and so on.

I wouldn't recommend fighting with your coworkers over it.  But maybe the
next time you _do_ start a project in an empty editor, just some little
thing or an idea you had for a side project maybe no one will see, it's
worth giving it a try.
