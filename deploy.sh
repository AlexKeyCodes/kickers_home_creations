#!/bin/bash
set -e

# Production server for kickershomecreations.com
PROD_DEST="deploy@198.251.65.190:/var/www/kickershomecreations.com/_site/"

read -rp "⚠️  This deploys to the LIVE site (kickershomecreations.com). Continue? [y/N]: " confirm
[[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 1; }

echo "Building site for production..."
rm -rf dist   # start clean so stale artifacts never ship via rsync --delete
npm run build

echo "Deploying to production..."
rsync -avz --delete dist/ "$PROD_DEST"

echo "Deployment complete! → https://kickershomecreations.com"
