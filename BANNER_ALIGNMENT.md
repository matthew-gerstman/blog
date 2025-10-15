# Custom Banner Image Alignment

You can now customize how banner images are positioned in post cards using the `banner_position` field.

## Usage

Add the `banner_position` field to any post in `src/data/posts.ts`:

```typescript
{
  id: 1,
  slug: 'my-post',
  title: 'My Post',
  // ... other fields
  banner_img: '/images/blog/my-banner.jpg',
  banner_position: 'top', // Custom alignment
}
```

## Supported Values

The `banner_position` field accepts any valid CSS `object-position` value:

### Keywords
- `'center'` (default) - Center the image
- `'top'` - Align to top
- `'bottom'` - Align to bottom
- `'left'` - Align to left
- `'right'` - Align to right
- `'top left'`, `'top right'`, `'bottom left'`, `'bottom right'` - Corner alignments

### Percentage Values
- `'50% 30%'` - Custom horizontal and vertical positioning
- `'0% 100%'` - Bottom left corner
- `'100% 0%'` - Top right corner

### Mixed Values
- `'center 20%'` - Horizontally centered, 20% from top
- `'80% center'` - 80% from left, vertically centered

## Examples

```typescript
// Align to top (good for images with important content at the top)
{
  banner_img: '/images/hero-mountains.jpg',
  banner_position: 'top',
}

// Align to bottom (good for images with important content at the bottom)
{
  banner_img: '/images/hero-city.jpg',
  banner_position: 'bottom',
}

// Custom positioning (30% from top)
{
  banner_img: '/images/hero-portrait.jpg',
  banner_position: 'center 30%',
}

// Left alignment
{
  banner_img: '/images/hero-landscape.jpg',
  banner_position: 'left center',
}
```

## Default Behavior

If `banner_position` is not specified, images will default to `'center'` alignment, maintaining the current behavior.

## Where It Applies

The custom alignment works in:
- Post cards on the Writing page (`/writing`)
- Search modal results (⌘K)
- Any component that displays post banner images

## Technical Details

The implementation uses CSS `object-position` applied inline via the `style` prop on the `OptimizedImage` component.
