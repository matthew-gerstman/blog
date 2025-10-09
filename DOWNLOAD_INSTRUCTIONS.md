# Download & Deploy Instructions

## 📦 Download the Code

**Option 1: Download Archive**
- File: `blog-react.tar.gz` (36MB)
- Location: In your project files
- Extract: `tar -xzf blog-react.tar.gz`

**Option 2: Clone from GitHub (after you push)**
```bash
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog
npm install
npm run dev
```

## 🚀 Quick Start After Download

```bash
# Extract the archive
tar -xzf blog-react.tar.gz
cd blog-react

# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:3001

# Run tests
npm test

# Build for production
npm run build
# Creates dist/ folder
```

## 📂 What's Included

```
blog-react/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── SearchModal.jsx
│   │   ├── PostCard.jsx
│   │   ├── FindInPage.jsx
│   │   └── ProgressBar.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Article.jsx
│   │   └── Talks.jsx
│   ├── hooks/          # Custom hooks
│   │   ├── useTheme.js
│   │   ├── useKeyboard.js
│   │   └── useScrollProgress.js
│   ├── utils/          # Utilities
│   │   ├── search.js
│   │   ├── reading.js
│   │   └── debounce.js
│   ├── data/           # Blog data
│   │   ├── posts.json  # 20 articles
│   │   ├── banners.js  # Images
│   │   └── talks.js    # Videos
│   ├── styles/         # Global styles
│   └── tests/          # Unit tests
├── .github/workflows/  # GitHub Actions
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `blog` or `matthewgerstman.github.io`
3. Public repository
4. Don't initialize with README
5. Create repository

### Step 2: Push Your Code

```bash
cd blog-react

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/blog.git

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in sidebar
3. **Source:** GitHub Actions
4. Save

### Step 4: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check **Actions** tab to see progress
- Takes 2-3 minutes
- Site will be live at: `https://YOUR_USERNAME.github.io/blog/`

## 🎯 Features Included

- ⚡ Vite for fast builds
- ⚛️ React 18 with hooks
- 🛣️ React Router for clean URLs
- 🎨 CSS Modules (scoped styling)
- 🔍 Fuzzy search (Cmd+K)
- 📝 Find in page (/)
- ⌨️ Keyboard navigation (j/k)
- 🌓 Dark/light mode
- 📊 Reading progress
- ✅ 61+ unit tests
- 🚀 Auto-deploy with GitHub Actions

## 🆘 Troubleshooting

**Build fails?**
- Check Node version: `node -v` (need 18+)
- Delete `node_modules` and run `npm install` again

**Deployment fails?**
- Check GitHub Actions logs
- Verify Pages is enabled
- Check branch is `main`

**Local dev not working?**
- Run `npm install` first
- Check port 3001 is available
- Look at console for errors

## 📧 Support

All code is in `/home/user/project/blog-react/`

Deployment guide: `DEPLOY_TO_GITHUB.md`
Test docs: `src/tests/README.md`
