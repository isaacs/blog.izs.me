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

eleventy

netlify deploy --prod

git push origin main
