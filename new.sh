#!/usr/bin/env bash
set -euo pipefail

# Usage: ./new.sh <name>
# name can be camelCase (maxSumSubArray) or kebab (max-sum-sub-array)
# Creates src/<n>-<kebab-name> where n = (highest existing index) + 1

if [ $# -lt 1 ]; then
  echo "usage: $0 <name>" >&2
  exit 1
fi

NAME="$1"
SRC_DIR="$(cd "$(dirname "$0")" && pwd)/src"

# camelCase / PascalCase -> kebab-case (idempotent if already kebab)
kebab="$(printf '%s' "$NAME" \
  | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' \
  | sed -E 's/([A-Z]+)([A-Z][a-z])/\1-\2/g' \
  | tr '[:upper:]' '[:lower:]' \
  | tr ' _' '-' \
  | sed -E 's/-+/-/g; s/^-|-$//g')"

# highest leading number among existing dirs
last="$(ls -1 "$SRC_DIR" 2>/dev/null \
  | grep -E '^[0-9]+-' \
  | sed -E 's/^([0-9]+)-.*/\1/' \
  | sort -n \
  | tail -1)"
last="${last:-0}"
n=$((last + 1))

dir="$SRC_DIR/$n-$kebab"

if [ -d "$dir" ]; then
  echo "exists: $dir" >&2
  exit 1
fi

mkdir -p "$dir"
touch "$dir/$n-$kebab.ts"

echo "$dir"
