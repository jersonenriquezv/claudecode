#!/usr/bin/env node
// Blocks writes to sensitive files
const input = process.argv[2] || ''

const PROTECTED = [
  '.env',
  '.env.local',
  '.claude/settings.json',
  'package-lock.json',
  'CLAUDE.md',
]

for (const file of PROTECTED) {
  if (input.includes(file)) {
    console.error(`⚠️ PROTECTED: "${file}" — confirm before editing`)
    process.exit(1)
  }
}

process.exit(0)
