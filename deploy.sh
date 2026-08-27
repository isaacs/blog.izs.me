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
rm -rf .drafts
mv src/drafts ./.drafts

npm run build
netlify deploy --prod

mv .drafts src/drafts

git push origin main
