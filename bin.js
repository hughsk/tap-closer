#!/usr/bin/env node

var instrument = require('fs').readFileSync(
  require('path').join(__dirname, '/bundle.js')
)

process.stdout.write(instrument)
process.stdout.write(';\n')
process.stdin.pipe(process.stdout)
