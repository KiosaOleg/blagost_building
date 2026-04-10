# Deployment Instructions

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Vercel Deployment

### Automatic Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set these in your Vercel dashboard.

## Build Commands

- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form functionality
- [ ] Check responsive design on mobile
- [ ] Test modal windows
- [ ] Verify animations and transitions
- [ ] Check SEO meta tags
- [ ] Test social media links

## Custom Domain

To use a custom domain:

1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Add your custom domain
4. Update DNS records as instructed

## Performance Optimization

The site is already optimized with:
- Next.js Image optimization
- Tailwind CSS purging
- Component lazy loading
- Framer Motion animations

For additional optimization:
- Enable Vercel Analytics
- Set up proper caching headers
- Consider CDN for static assets
