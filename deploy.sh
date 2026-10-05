#!/bin/bash

set -e

if ! [ "$(git status --porcelain)" = "" ]; then
  echo "git env not clean, abort" >&2
  exit 1
fi

if ! [ "$(git branch | grep \*)" = "* main" ]; then
  echo "not on main branch, just pushing"
  git push origin
  exit 0
fi

# move drafts out of the way so they don't get published
if [ -d .drafts ]; then
  echo "The drafts folder is already backed up to .drafts" >&2
  echo "Did a previous build fail?" >&2
  echo "If so, run 'mv .drafts src/drafts' and try again." >&2
  exit 1
fi
mv src/drafts ./.drafts

rm -rf _site
npm run build
netlify deploy --prod --no-build

mv .drafts src/drafts

git push origin main
