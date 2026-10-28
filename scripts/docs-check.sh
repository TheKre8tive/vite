echo "prev commit: $CACHED_COMMIT_REF"
echo "current commit: $COMMIT_REF"
git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF docs package.json pnpm-lock.yaml netlify.toml scripts/docs-check.sh
status=$?
echo "diff exit code: $status"
exit $status

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=docs-check.sh
