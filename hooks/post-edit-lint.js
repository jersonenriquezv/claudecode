#!/usr/bin/env node
// Post-edit hook: basic lint checks on JS/JSX files
const fs = require('fs')
const path = process.argv[2]

if (!path || (!path.endsWith('.js') && !path.endsWith('.jsx'))) {
  process.exit(0) // skip non-JS files
}

try {
  const content = fs.readFileSync(path, 'utf-8')
  const warnings = []

  // Check for TypeScript patterns (we use JS only)
  if (content.includes(': React.FC') || content.includes(': string') || content.includes(': number')) {
    warnings.push('⚠️  TypeScript type annotations detected — this project uses JavaScript only')
  }

  // Check for .tsx/.ts imports
  if (content.match(/from ['"].*\.tsx?['"]/)) {
    warnings.push('⚠️  Importing .ts/.tsx files — use .js/.jsx only')
  }

  // Check for banned React patterns
  if (content.includes('useContext') || content.includes('useReducer') || content.includes('createContext')) {
    warnings.push('⚠️  Only useState, useEffect, useRef allowed — no useContext/useReducer')
  }

  // Check for service role key exposure
  if (content.includes('SUPABASE_SERVICE_ROLE_KEY') && !path.includes('/api/') && !path.includes('/lib/')) {
    warnings.push('🚫 SUPABASE_SERVICE_ROLE_KEY should only be in API routes or lib/')
  }

  if (warnings.length > 0) {
    console.log(`\n📋 Lint check for ${path}:`)
    warnings.forEach(w => console.log(`  ${w}`))
    console.log('')
  }
} catch (e) {
  // file might not exist yet during creation, that's fine
}

process.exit(0)
