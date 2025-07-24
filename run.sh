#!/bin/bash
set -e
./install.sh
echo "[run.sh] Starting development server on http://localhost:1234 ..."
npm run dev
