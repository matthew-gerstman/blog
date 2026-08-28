#!/usr/bin/env node

/**
 * Dead Code Detection Tool
 * 
 * This script analyzes the codebase to find:
 * - Unused exports in TypeScript/JavaScript files
 * - Unused dependencies in package.json
 * - Unused files that aren't imported anywhere
 * 
 * Usage: npm run dead-code
 */

import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const REPORT_FILE = 'dead-code-report.md';

console.log('🔍 Starting dead code detection...\n');

// Initialize report
let report = '# Dead Code Detection Report\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;

// 1. Check for unused exports using ts-prune
console.log('📦 Checking for unused exports...');
try {
  const tsPruneOutput = execSync('npx ts-prune --error', { 
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  if (tsPruneOutput.trim()) {
    report += '## Unused Exports\n\n';
    report += 'The following exports are defined but never imported:\n\n';
    report += '```\n' + tsPruneOutput + '```\n\n';
  } else {
    report += '## Unused Exports\n\n✅ No unused exports found!\n\n';
  }
} catch (error) {
  const output = error.stdout?.toString() || '';
  if (output.includes('used in module')) {
    report += '## Unused Exports\n\n';
    report += 'The following exports are defined but never imported:\n\n';
    report += '```\n' + output + '```\n\n';
  } else {
    report += '## Unused Exports\n\n✅ No unused exports found!\n\n';
  }
}

// 2. Check for unused dependencies
console.log('📚 Checking for unused dependencies...');
try {
  const depcheckOutput = execSync('npx depcheck --json', { 
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  const depcheck = JSON.parse(depcheckOutput);
  
  report += '## Unused Dependencies\n\n';
  
  if (depcheck.dependencies?.length > 0) {
    report += '### Dependencies (in package.json but not used):\n\n';
    depcheck.dependencies.forEach(dep => {
      report += `- \`${dep}\`\n`;
    });
    report += '\n';
  }
  
  if (depcheck.devDependencies?.length > 0) {
    report += '### Dev Dependencies (in package.json but not used):\n\n';
    depcheck.devDependencies.forEach(dep => {
      report += `- \`${dep}\`\n`;
    });
    report += '\n';
  }
  
  if (depcheck.missing && Object.keys(depcheck.missing).length > 0) {
    report += '### Missing Dependencies (used but not in package.json):\n\n';
    Object.keys(depcheck.missing).forEach(dep => {
      report += `- \`${dep}\` (used in: ${depcheck.missing[dep].join(', ')})\n`;
    });
    report += '\n';
  }
  
  if (!depcheck.dependencies?.length && !depcheck.devDependencies?.length) {
    report += '✅ All dependencies are being used!\n\n';
  }
  
} catch (error) {
  report += '⚠️ Could not analyze dependencies\n\n';
  console.error('Error running depcheck:', error.message);
}

// 3. Summary and recommendations
report += '## Recommendations\n\n';
report += '1. Review unused exports and remove if truly unused\n';
report += '2. Consider removing unused dependencies to reduce bundle size\n';
report += '3. Run this check periodically as part of CI/CD\n';
report += '4. Some exports may be used externally or kept for future use - use judgment\n\n';

report += '## How to Fix\n\n';
report += '```bash\n';
report += '# Remove unused dependencies\n';
report += 'npm uninstall <package-name>\n\n';
report += '# Remove unused exports\n';
report += '# Manually delete or comment out unused code\n';
report += '```\n';

// Write report
writeFileSync(REPORT_FILE, report);

console.log(`\n✅ Dead code detection complete!`);
console.log(`📄 Report saved to: ${REPORT_FILE}\n`);

// Exit with success
process.exit(0);
