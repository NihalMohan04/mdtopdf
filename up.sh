#!/bin/bash
# Kill any existing dev server on port 5173
lsof -i :5173 -t 2>/dev/null | xargs -r kill
sleep 1
cd "$(dirname "$0")" && npx vite --host
