# Blagost Construction Company Website

A modern, responsive construction company website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Modal windows, hover effects, and smooth scrolling
- **Bulgarian Language**: Content in Bulgarian language
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blagost_building
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    globals.css          # Global styles
    layout.tsx           # Root layout
    page.tsx             # Home page
  components/
    Header.tsx           # Navigation header
    Hero.tsx             # Hero section
    Services.tsx         # Services section with modals
    Projects.tsx         # Projects gallery with modals
    About.tsx            # About section
    Contact.tsx          # Contact form
    Footer.tsx           # Footer
```

## Pages/Sections

- **Home**: Hero section with call-to-action
- **Services**: Construction services with detailed modals
- **Projects**: Project gallery with filtering and detailed views
- **About**: Company information and advantages
- **Contact**: Contact form and information

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary colors: Slate gray palette
- Accent colors: Red palette for CTAs

### Content

All text content is in Bulgarian and can be easily modified in the component files.

### Images

Replace the placeholder images with actual project photos and company images.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.
