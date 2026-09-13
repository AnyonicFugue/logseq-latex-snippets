#!/bin/sh
set -eu
if ! command -v node >/dev/null 2>&1; then
  echo 'Node.js 20 or newer is required. Install it from https://nodejs.org/' >&2
  echo 'Then reopen your terminal and run this script again.' >&2
  exit 1
fi
bootstrap_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec node "$bootstrap_dir/scripts/bootstrap.mjs"
