#!/bin/bash

d=$(date +%Y/%m)
date=$(node -p 'new Date().toISOString()')
title="$*"
if [ -z "$title" ]; then
  read -p "title: " title
fi
slug=$(node -p 'require("lodash").kebabCase(process.argv[1])' "$title")

mkdir -p src/posts/$d/$slug
cat >src/posts/$d/$slug/index.md <<EOF
---
title: ${title}
slug: ${slug}
date: ${date}
---
EOF
$EDITOR src/posts/$d/$slug/index.md
