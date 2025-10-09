#!/bin/bash

echo "🚀 Deploying Matthew Gerstman Blog to GitHub"
echo ""

# Check if git remote exists
if git remote | grep -q origin; then
    echo "✅ Git remote already configured"
else
    echo "Adding GitHub remote..."
    git remote add origin https://github.com/matthew-gerstman/blog.git
fi

echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/matthew-gerstman/blog/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. Save"
echo "4. Wait 2-3 minutes"
echo "5. Your blog will be live at: https://matthew-gerstman.github.io/blog/"
echo ""
