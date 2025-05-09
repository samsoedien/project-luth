#!/bin/bash

BLENDER_PATH="/Applications/Blender.app/Contents/MacOS/Blender"
PYTHON_SCRIPT="./scripts/gltf-pipelin-main.py"

# Optional: log output to file
LOG_FILE="blender_log.txt"

# "$BLENDER_PATH" --background --python "$PYTHON_SCRIPT" | tee "$LOG_FILE"
"$BLENDER_PATH" --python "$PYTHON_SCRIPT" | tee "$LOG_FILE"
