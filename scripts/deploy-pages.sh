#!/usr/bin/env bash
# Production deploy to Cloudflare Pages: https://alfredo-home-furniture.pages.dev
# (the demo left Vercel on 2026-11-15; its old Vercel URL now redirects here).
# Builds the static export (next.config.ts `output: "export"`) from a clean install of the
# committed tree, uploads `out/`, then checks the live URL.
#   bash scripts/deploy-pages.sh
# Needs a wrangler login on the Cloudflare account that owns the project
# (`npx wrangler@4.156.0 whoami`).
set -euo pipefail
cd "$(dirname "$0")/.."

PROJECT="alfredo-home-furniture"
OUT_DIR="out"
URL="https://alfredo-home-furniture.pages.dev"
WRANGLER=(npx --yes wrangler@4.156.0)
PNPM=(pnpm)
command -v pnpm >/dev/null 2>&1 || PNPM=(corepack pnpm)

if [ -n "$(git status --porcelain)" ]; then
  echo "deploy: working tree is dirty; commit or stash first" >&2
  exit 1
fi

"${PNPM[@]}" install --frozen-lockfile --config.confirm-modules-purge=false
NEXT_TELEMETRY_DISABLED=1 "${PNPM[@]}" run build

"${WRANGLER[@]}" pages deploy "$OUT_DIR" --project-name "$PROJECT" --branch main \
  --commit-hash "$(git rev-parse HEAD)" --commit-message "$(git log -1 --format=%s)"

code="$(curl -s -o /dev/null -m 20 -w '%{http_code}' "$URL/" || true)"
echo "deploy: $URL/ -> $code"
[ "$code" = 200 ]
