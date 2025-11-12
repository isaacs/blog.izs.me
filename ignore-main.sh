#!/bin/bash

b="$(git branch | grep \*)"
if [ "$b" = "* main" ]; then
  echo "on main branch, skip automatic build"
  exit 0
else
  echo "branch=$b, do not ignore"
  exit 1
fi
