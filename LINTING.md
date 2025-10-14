# Code Quality Setup

This project uses ESLint, Prettier, and Husky to maintain code quality and consistency.

## Tools

### ESLint

- **Purpose**: Identifies and reports code patterns and potential errors
- **Config**: `eslint.config.js` (modern flat config)
- **Plugins**:
  - `typescript-eslint` - TypeScript-specific linting rules
  - `eslint-plugin-react` - React best practices
  - `eslint-plugin-react-hooks` - React Hooks rules
  - `eslint-plugin-react-refresh` - Vite React Refresh compatibility
  - `eslint-plugin-prettier` - Prettier integration

### Prettier

- **Purpose**: Automatic code formatting
- **Config**: `.prettierrc`
- **Style**:
  - Single quotes
  - 2-space indentation
  - 80-character line width
  - Semicolons enabled
  - Trailing commas (ES5)

### Husky + lint-staged

- **Purpose**: Git hooks for pre-commit checks
- **Behavior**: Automatically lints and formats staged files before commit
- **Config**: `.husky/pre-commit` + `.lintstagedrc.json`

## Available Scripts

```bash
# Run ESLint on all files
npm run lint

# Run ESLint and auto-fix issues
npm run lint:fix

# Format all files with Prettier
npm run format

# Check formatting without modifying files
npm run format:check
```

## Git Hooks

When you commit code, the following happens automatically:

1. **Pre-commit hook** runs via Husky
2. **lint-staged** processes only staged files:
   - `*.{js,jsx,ts,tsx}` → ESLint fix + Prettier format
   - `*.{json,css,md}` → Prettier format
3. If any issues remain, the commit is blocked

## IDE Integration

### VS Code

Install these extensions for the best experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Recommended `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Bypassing Checks

In rare cases where you need to commit without running checks:

```bash
git commit --no-verify -m "your message"
```

**Note**: Use this sparingly. The checks exist to maintain code quality.

## Configuration Details

### ESLint Rules

- **TypeScript**: Strict type checking, no unused vars (except `_` prefix)
- **React**: Hooks rules enforced, JSX scope check disabled (new transform)
- **General**: No `console.log` (except warn/error), prefer const, no var

### Prettier Rules

- Single quotes for strings
- Semicolons required
- 2-space indentation
- 80-character line width
- Trailing commas (ES5 compatible)
- LF line endings

## Troubleshooting

### Husky not running

```bash
npm run prepare
```

### ESLint errors after pull

```bash
npm install
npm run lint:fix
```

### Prettier conflicts with ESLint

The `eslint-config-prettier` plugin is configured to disable conflicting rules.
