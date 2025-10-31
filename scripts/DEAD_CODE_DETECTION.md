# Dead Code Detection

This tool helps identify unused code in the codebase to keep it clean and maintainable.

## What it detects

1. **Unused Exports**: Functions, classes, or variables that are exported but never imported
2. **Unused Dependencies**: Packages in `package.json` that aren't actually used
3. **Missing Dependencies**: Code imports that aren't listed in `package.json`

## Usage

```bash
npm run dead-code
```

This will generate a `dead-code-report.md` file with detailed findings.

## Tools Used

- **ts-prune**: Finds unused exports in TypeScript files
- **depcheck**: Analyzes dependency usage

## When to run

- Before major releases
- During code cleanup sprints
- As part of CI/CD (optional)
- When bundle size needs optimization

## Important Notes

- Some "unused" exports may be intentionally kept for:
  - Public API surface
  - Future features
  - External consumption
- Always review findings before removing code
- The tool has zero dependencies (uses npx)

## Example Output

The report will show:
- List of unused exports with file locations
- Unused dependencies that can be removed
- Missing dependencies that should be added
- Recommendations for cleanup
