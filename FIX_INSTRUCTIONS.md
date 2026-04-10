# Fix Instructions

## Problem

1. Missing `autoprefixer` dependency
2. Name conflict between `Home` icon and `Home` function in page.tsx

## Solution

### Step 1: Clear cache and reinstall dependencies

Run one of these commands:

**Option A: Use the batch file (Windows)**

```cmd
restart-dev.bat
```

**Option B: Manual commands**

```cmd
cd blagost_building
rmdir /s /q .next
pnpm install
```

**Option C: Using bash**

```bash
cd blagost_building
rm -rf .next
pnpm install
```

### Step 2: Start development server

```cmd
pnpm dev
```

## What was fixed?

1. ✅ Added `autoprefixer` to devDependencies in package.json
2. ✅ Fixed naming conflict: `Home` icon → `HomeIcon` in page.tsx
3. ✅ PostCSS configuration already includes autoprefixer
4. ✅ Created restart scripts for easy cache clearing
5. ✅ Updated color palette to modern gradient design
6. ✅ Added FAQ section (matching Alexima structure)
7. ✅ Updated navigation with FAQ link

## Verification

The site should now run without errors at:

- http://localhost:3000

All features should work:

- ✅ Modern gradient color palette (blue + coral + purple)
- ✅ Navigation and header with gradient logo
- ✅ Hero section with glassmorphism effects
- ✅ Services with detailed modals
- ✅ Projects gallery with filtering
- ✅ FAQ accordion section (new)
- ✅ Contact form
- ✅ Footer with gradient background
- ✅ Responsive design
- ✅ Smooth animations

## Design Updates

### New Color Palette:

- **Primary**: Modern blue gradient (#f0f4ff to #1f1ff1)
- **Accent**: Vibrant coral/red gradient (#fff0f0 to #c00000)
- **Secondary**: Purple gradient (#faf5ff to #581c87)

### Structure Matches Alexima:

- ✅ Hero section with CTA
- ✅ Services with modals
- ✅ Projects gallery
- ✅ About/Advantages section
- ✅ FAQ accordion (new)
- ✅ Contact section
- ✅ Complete footer

## If issues persist

Try a complete clean install:

```cmd
rmdir /s /q node_modules
del pnpm-lock.yaml
rmdir /s /q .next
pnpm install
pnpm dev
```

See COLOR_UPDATE.md for detailed design changes.
