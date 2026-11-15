#!/usr/bin/env bash
# The merge gate (this repo is not on Jenkins): clean install, lint, then the
# production static export that scripts/deploy-pages.sh ships.
#   bash scripts/ci-local.sh
set -euo pipefail
cd "$(dirname "$0")/.."

PNPM=(pnpm)
command -v pnpm >/dev/null 2>&1 || PNPM=(corepack pnpm)

"${PNPM[@]}" install --frozen-lockfile --config.confirm-modules-purge=false
"${PNPM[@]}" run lint
NEXT_TELEMETRY_DISABLED=1 "${PNPM[@]}" run build
test -f out/index.html
echo "ci-local: all steps passed"
