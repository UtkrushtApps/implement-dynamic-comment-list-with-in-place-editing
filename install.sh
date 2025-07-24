#!/bin/bash
set -e
if [ ! -d "node_modules" ]; then
  echo "[install.sh] Installing dependencies..."
  npm install
else
  echo "[install.sh] node_modules already exists, skipping install."
fi
