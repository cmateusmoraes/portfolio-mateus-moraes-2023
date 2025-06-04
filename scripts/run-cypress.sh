#!/bin/sh

# install Xvfb if not installed
if ! command -v Xvfb >/dev/null 2>&1; then
  echo "Xvfb not found. Installing..."
  apt-get update && apt-get install -y xvfb
fi

# run cypress tests with xvfb-run
xvfb-run -a npx cypress run --component "$@"
