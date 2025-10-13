# Embedded Content Audit

## Summary

Found **15 posts** with embedded content (Twitter, YouTube, iframes, CodePen).

### Breakdown by Type:
- **Twitter embeds**: 11 posts (blockquote format)
- **YouTube embeds**: 7 posts  
- **Custom iframes**: 1 post (Throttle/Debounce demos)

## Status

### ✅ Working
- **Twitter embeds** - All using blockquote format, should work with Twitter's embed script
- **YouTube embeds** - All using standard YouTube embed URLs

### ❌ Broken
- **Throttle and Debounce demos** - `debounce-throttle.matthewgerstman.dev` domain does not resolve
  - 3 iframes in "Throttle and Debounce" post
  - URLs: `/basic`, `/throttle`, root path

## Posts with Embedded Content

### 1. Performance Testing React With Anonymous Functions
- Twitter blockquote embed
- **Status**: Needs Twitter script

### 2. Surviving The Technical Interview  
- Twitter blockquote embed
- **Status**: Needs Twitter script

### 3. Reduce, Reduce, Reduce
- Twitter blockquote embed
- **Status**: Needs Twitter script

### 4. Map, Filter, Reduce
- Twitter embed
- **Status**: Needs Twitter script

### 5. Throttle and Debounce ⚠️ **BROKEN**
- 3 custom iframe demos
- URLs: `https://debounce-throttle.matthewgerstman.dev/*`
- **Issue**: Domain does not resolve (DNS failure)
- **Fix needed**: Rebuild demos or find alternative

### 6. History of the Web: Part 1
- 2 YouTube embeds
- **Status**: Working

### 7. How Redux Works - Part 2
- No embeds found (false positive from search)

### 8. How Redux Works - Part 1
- No embeds found (false positive from search)

### 9. Functional Programming Fundamentals
- YouTube embed
- Twitter blockquote
- **Status**: Needs Twitter script

### 10. Redux with Code-Splitting and Type Checking
- Twitter embed
- **Status**: Needs Twitter script

### 11. Hello There
- YouTube embed
- Twitter blockquote
- **Status**: Needs Twitter script

### 12. ES-Everything: an ECMA Explainer
- Twitter embed
- **Status**: Needs Twitter script

### 13. What the Functor?
- YouTube embed
- Twitter embed
- **Status**: Needs Twitter script

### 14. Mary Had a Little Lambda
- YouTube embed
- Twitter blockquote
- **Status**: Needs Twitter script

### 15. How I Prepare A Tech Talk
- YouTube embed
- Twitter embed
- **Status**: Needs Twitter script

## Action Items

### High Priority
1. **Fix Throttle/Debounce demos**
   - Domain is down: `debounce-throttle.matthewgerstman.dev`
   - Options:
     - Rebuild demos and host on new domain
     - Create CodePen/CodeSandbox demos
     - Remove iframes and add code examples instead

### Medium Priority
2. **Add Twitter embed script**
   - Many posts use Twitter blockquotes
   - Need to load Twitter's embed script: `https://platform.twitter.com/widgets.js`
   - Should be loaded conditionally when post has Twitter embeds

3. **Test YouTube embeds**
   - All use standard YouTube iframe embed
   - Should work but verify responsive sizing

### Low Priority
4. **Consider embed component**
   - Create reusable `<Embed>` component for consistent styling
   - Handle loading states
   - Add responsive wrappers

## Technical Notes

### Twitter Embeds
Posts use blockquote format:
```html
<blockquote class="twitter-tweet">
  <a href="https://twitter.com/..."></a>
</blockquote>
```

Requires Twitter script to hydrate into interactive embeds.

### YouTube Embeds
Standard iframe format:
```html
<iframe src="https://www.youtube.com/embed/{VIDEO_ID}?feature=oembed"></iframe>
```

Should work but may need responsive wrapper.

### Custom Iframes (Throttle/Debounce)
```html
<iframe frameBorder="0" height="130px" src="https://debounce-throttle.matthewgerstman.dev/basic">
```

Domain down - needs rebuild or alternative.
