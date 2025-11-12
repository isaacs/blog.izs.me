#!/bin/bash

HEAD=$(git show --no-patch --pretty=%H HEAD)
main=$(git show --no-patch --pretty=%H refs/heads/main)

if [ "$HEAD" = "$main" ] || [ "$BRANCH" = "main" ]; then
  echo "on main, skip automatic build"
  exit 0
else
  echo BRANCH=${BRANCH}
  echo HEAD=${HEAD}
  echo main=${main}
  echo "building a preview release, do not ignore"
  exit 1
fi
