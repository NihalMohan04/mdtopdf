#!/bin/bash
# Kill dev server on port 5173
lsof -i :5173 -t 2>/dev/null | xargs -r kill
echo "Dev server stopped."
