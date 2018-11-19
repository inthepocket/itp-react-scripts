#!/usr/bin/env bash
set -e

function log() {
  printf "\\n\\033[1m\\033[34m%s\\033[0m" "${1}"
}

function main() {
  log "✨  Thanks for installing ITP React Scripts"
  log ""
  log "To add support for eslint in your editor, create an .eslintrc file in your project root with the following contents"
  log "
  {
    \"extends:\" \"./node_modules/@inthepocket/itp-react-scripts/dist/config/eslintrc.js\"
  }
  "
  log ""
  log "If your project uses babel you can use the included babel preset:"
  log "
  {
    \"presets\": [\"@inthepocket/itp-react-scripts/babel\"]
  }
  "
  log ""
}
main
