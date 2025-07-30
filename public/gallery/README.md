# Gallery Directory Structure

This directory contains all images for the Tishya Exports gallery section.

## Directory Structure:

\`\`\`
public/gallery/
├── quarry/           # Quarry operations and extraction images
├── products/         # Product showcase images (granite, quartz, marble, sandstone)
├── projects/         # Completed project images
└── facilities/       # Processing facilities and equipment images
\`\`\`

## Image Guidelines:

### File Naming Convention:
- Use descriptive, lowercase names with hyphens
- Example: `granite-extraction-1.jpg`, `black-galaxy-slab.jpg`

### Image Specifications:
- **Format**: JPG or PNG
- **Resolution**: Minimum 1200px width for quality display
- **File Size**: Optimize to under 2MB for web performance
- **Aspect Ratio**: Mixed ratios supported (landscape, portrait, square)

### Categories:

#### 1. Quarry Operations (`/quarry/`)
- Granite extraction processes
- Quarry site overviews
- Heavy machinery in operation
- Raw stone blocks

#### 2. Products (`/products/`)
- Finished granite slabs
- Quartz surface samples
- Marble varieties with veining
- Sandstone textures and finishes
- Color variations and patterns

#### 3. Projects (`/projects/`)
- Completed installations
- Before/after project photos
- Client site implementations
- Architectural applications

#### 4. Facilities (`/facilities/`)
- Processing plant equipment
- Quality control areas
- Packaging and shipping zones
- Modern machinery and tools

## Adding New Images:

1. **Upload Process**:
   - Place images in the appropriate category folder
   - Use descriptive filenames
   - Ensure images are web-optimized

2. **Update Gallery Component**:
   - Add new image entries to the `galleryImages` array in `components/Gallery.tsx`
   - Include proper metadata (title, description, category)

3. **Image Optimization**:
   - Compress images before upload
   - Consider using WebP format for better compression
   - Maintain aspect ratios for consistent display

## Example Image Entries:

\`\`\`typescript
{
  id: "unique-id",
  src: "/gallery/category/filename.jpg",
  alt: "Descriptive alt text for accessibility",
  category: "Category Name",
  title: "Display Title",
  description: "Optional description for lightbox view"
}
\`\`\`

## Performance Notes:

- Images are lazy-loaded for better performance
- Lightbox modal provides full-size viewing
- Responsive grid adapts to different screen sizes
- Category filtering reduces initial load
