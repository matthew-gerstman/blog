import { projectsMap, projectsOrder } from './src/data/projects.js';

// Validation results
const errors: string[] = [];
const warnings: string[] = [];

// Check all projects in projectsMap
console.log('Validating projects.ts...\n');

// 1. Check that all projects have required fields
Object.entries(projectsMap).forEach(([key, project]) => {
  if (!project.title) errors.push(`${key}: Missing title`);
  if (!project.description) errors.push(`${key}: Missing description`);
  if (!project.year) errors.push(`${key}: Missing year`);
  if (!project.startYear) errors.push(`${key}: Missing startYear`);
  if (!project.technologies || project.technologies.length === 0) {
    errors.push(`${key}: Missing or empty technologies array`);
  }
  if (project.key !== key) {
    errors.push(`${key}: Key mismatch - project.key is "${project.key}"`);
  }
});

// 2. Check projectsOrder matches projectsMap
const mapKeys = Object.keys(projectsMap);
const orderKeys = projectsOrder;

const missingFromOrder = mapKeys.filter((k) => !orderKeys.includes(k));
const missingFromMap = orderKeys.filter((k) => !Object.hasOwn(projectsMap, k));

if (missingFromOrder.length > 0) {
  errors.push(
    `Projects in map but not in order: ${missingFromOrder.join(', ')}`
  );
}
if (missingFromMap.length > 0) {
  errors.push(`Projects in order but not in map: ${missingFromMap.join(', ')}`);
}

// 3. Check for duplicate keys
const duplicates = orderKeys.filter(
  (item, index) => orderKeys.indexOf(item) !== index
);
if (duplicates.length > 0) {
  errors.push(`Duplicate keys in projectsOrder: ${duplicates.join(', ')}`);
}

// 4. Warnings for optional but recommended fields
Object.entries(projectsMap).forEach(([key, project]) => {
  if (!project.impact) warnings.push(`${key}: Missing impact statement`);
  if (!project.role) warnings.push(`${key}: Missing role`);
  if (!project.emoji && !project.image)
    warnings.push(`${key}: Missing emoji or image`);
});

// Print results
console.log(`✓ Total projects: ${mapKeys.length}`);
console.log(`✓ Projects in order: ${orderKeys.length}\n`);

if (errors.length > 0) {
  console.log('❌ ERRORS:');
  errors.forEach((e) => console.log(`  - ${e}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  warnings.forEach((w) => console.log(`  - ${w}`));
  console.log('');
}

if (errors.length === 0) {
  console.log('✅ All validation checks passed!');
  process.exit(0);
} else {
  console.log(`❌ Validation failed with ${errors.length} error(s)`);
  process.exit(1);
}
