#!/bin/bash

if ! [ "$(git branch | grep \*)" = "* main" ]; then
  echo "on main branch, skip automatic build"
  exit 0
fi
exit 1
