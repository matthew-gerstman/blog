# Dead Code Detection Report

Generated: 2025-10-14T23:42:24.436Z

## Unused Exports

The following exports are defined but never imported:

```
src/types.ts:13 - Talk
src/components/JobCard.tsx:23 - JobCard
src/components/ResponsiveEmbed.tsx:9 - ResponsiveEmbed
src/data/about.ts:1 - Hero (used in module)
src/data/about.ts:7 - ProfessionalSummary (used in module)
src/data/about.ts:12 - TechnicalCategory (used in module)
src/data/about.ts:17 - TechnicalExpertise (used in module)
src/data/about.ts:21 - FeaturedProject (used in module)
src/data/about.ts:28 - OriginStory (used in module)
src/data/about.ts:32 - ContactLink (used in module)
src/data/about.ts:37 - Contact (used in module)
src/data/projects.ts:1629 - projectsOrder
src/demos/ThrottleDebounceDemo.tsx:65 - AllDemo
src/types/resume.ts:1 - Hero (used in module)
src/types/resume.ts:6 - Link (used in module)
src/types/resume.ts:11 - BelowTheFoldSection (used in module)
src/types/resume.ts:16 - Project (used in module)
src/types/resume.ts:30 - Job (used in module)
src/utils/debounce.ts:1 - debounce
src/utils/reading.ts:14 - generateTOC
src/utils/search.ts:4 - fuzzyMatch (used in module)
src/data/types/index.ts:4 - AboutData
src/data/types/index.ts:1 - Link
src/data/types/index.ts:7 - ContentItem
src/data/types/index.ts:9 - BelowTheFoldSection
src/data/types/index.ts:14 - Project
src/data/types/index.ts:30 - Job
src/data/types/index.ts:42 - Hero
src/data/types/index.ts:47 - ResumeData
src/data/types/index.ts:1 - Post
src/data/types/index.ts:13 - PostsData
src/data/types/index.ts:1 - ImageSizes
src/data/types/index.ts:8 - ImageManifestEntry
src/data/types/index.ts:13 - ImageManifest
```

⚠️ Could not analyze dependencies

## Recommendations

1. Review unused exports and remove if truly unused
2. Consider removing unused dependencies to reduce bundle size
3. Run this check periodically as part of CI/CD
4. Some exports may be used externally or kept for future use - use judgment

## How to Fix

```bash
# Remove unused dependencies
npm uninstall <package-name>

# Remove unused exports
# Manually delete or comment out unused code
```
