#!/usr/bin/env node
// Blocks dangerous bash commands
const cmd = process.argv.slice(2).join(' ')
const blocked = ['rm -rf /', 'rm -rf .', 'drop database', 'DROP TABLE', 'format', 'sudo rm']

for (const b of blocked) {
  if (cmd.toLowerCase().includes(b.toLowerCase())) {
    console.error(`🚫 BLOCKED: "${b}" detected in command`)
    process.exit(1)
  }
}

// Block writes to critical files
const protectedFiles = ['.env', '.env.local', 'package-lock.json', 'node_modules']
for (const f of protectedFiles) {
  if (cmd.includes(`> ${f}`) || cmd.includes(`rm ${f}`)) {
    console.error(`🚫 BLOCKED: Cannot modify ${f}`)
    process.exit(1)
  }
}

process.exit(0)
