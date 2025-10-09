# Enable GitHub Pages - Final Step

## ⚠️ Important: You need to do this manually on GitHub.com

Your code is now at: https://github.com/matthew-gerstman/blog

### Steps to Enable GitHub Pages:

1. **Go to:** https://github.com/matthew-gerstman/blog/settings/pages

2. **Under "Build and deployment":**
   - Source: Select **"GitHub Actions"**

3. **Click Save**

4. **Add the workflow file:**
   - You'll need to manually add `.github/workflows/deploy.yml`
   - Or update your PAT to include `workflow` scope and I can push it

### Option A: Add Workflow via GitHub UI

1. Go to: https://github.com/matthew-gerstman/blog
2. Click "Add file" → "Create new file"
3. Name: `.github/workflows/deploy.yml`
4. Paste the contents from the `deploy.yml` file I created
5. Commit

### Option B: Update Your PAT

1. Go to: https://github.com/settings/tokens
2. Click your token
3. Add **`workflow`** scope (check the box)
4. Save
5. Give me the new token and I'll push the workflow

### After Workflow is Added:

- GitHub Actions will automatically build and deploy
- Check progress: https://github.com/matthew-gerstman/blog/actions
- Site will be live at: **https://matthew-gerstman.github.io/blog/**

---

The workflow file is ready in `.github/workflows/deploy.yml` - just needs to be pushed to GitHub!
