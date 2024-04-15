#!/bin/sh

export NUXT_PUBLIC_BUILD_VERSION=$(git describe --tags --abbrev=0)
npm run build