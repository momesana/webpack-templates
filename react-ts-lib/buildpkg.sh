#!/usr/bin/env bash

set -eux

rm -rf dist/
npm run build
npm run build-esm
npm run generate-types
cp package.json dist/
cd dist
npm pack --pack-destination /tmp/

