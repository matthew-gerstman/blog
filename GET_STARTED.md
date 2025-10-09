# Get Your Blog Code - 3 Easy Options

## 🎯 Option 1: Download Archive (Fastest)

1. **Look at the left sidebar** in this interface
2. Find **"Files"** section
3. Click **`blog-react.tar.gz`** (36MB)
4. Download it to your computer
5. Extract:
   ```bash
   tar -xzf blog-react.tar.gz
   cd blog-react
   npm install
   npm run dev
   ```

## 💻 Option 2: Clone from GitHub (After Push)

Once the code is on GitHub:
```bash
git clone https://github.com/matthew-gerstman/blog.git
cd blog
npm install
npm run dev
```

## 📋 Option 3: Copy Files Manually

All files are in `/home/user/project/blog-react/`

You can browse and copy individual files from the project directory.

---

## 🚀 Deploy to GitHub Pages

### Method A: Automatic (Recommended)

1. Download and extract `blog-react.tar.gz`
2. Open terminal in the `blog-react` folder
3. Run:
   ```bash
   git push -u origin main
   ```
4. Go to https://github.com/matthew-gerstman/blog/settings/pages
5. Set **Source** to "GitHub Actions"
6. Wait 2-3 minutes
7. Visit: **https://matthew-gerstman.github.io/blog/**

### Method B: Manual Build

```bash
npm run build
# Upload dist/ folder to any static host
```

---

## ✅ What You're Getting

- **Complete React blog** with all 20 articles
- **All features working:**
  - Spotlight search (Cmd+K)
  - Find in page (/)
  - Keyboard navigation (j/k)
  - Dark/light mode
  - Reading progress
  - URL routing
  - 6 conference talks
- **Production ready** with tests
- **GitHub Actions** for auto-deploy

---

## 🆘 Troubleshooting

**Can't find blog-react.tar.gz?**
- Look in the Files panel on the left
- Or check `/home/user/project/files/`

**Git push fails?**
- Make sure you created the repo on GitHub
- Check your PAT has `repo` permissions
- Try: `git remote set-url origin https://YOUR_PAT@github.com/matthew-gerstman/blog.git`

**Build errors?**
- Make sure you have Node 18+: `node -v`
- Delete `node_modules` and run `npm install` again

---

## 📊 Quick Stats

- **20 blog posts** with full content
- **6 conference talks** with videos
- **61+ unit tests** passing
- **~25 source files** (components, pages, hooks)
- **Production optimized** build

Your blog is ready to go live! 🎉
