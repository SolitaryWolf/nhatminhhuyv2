# Bauberger-Style Website Guide

Your Next.js project is now configured to create a professional corporate website similar to bauberger.ch.

## Key Features Implemented

### 1. Full-Width Hero Section with Background Image ✓
The Hero component now supports:
- Full-width background images
- Customizable overlay opacity
- Three height options: `normal`, `tall`, `full`
- Smooth animations with Framer Motion
- White text overlay for dark backgrounds

**Usage Example:**
```tsx
<Hero
  title="Your Title"
  subtitle="Your subtitle"
  backgroundImage="/images/your-hero-image.jpg"
  height="tall"
  ctaText="Get Started"
  ctaHref="/contact"
/>
```

### 2. Professional Header
- Sticky navigation that stays at top
- Backdrop blur effect
- Responsive mobile menu
- Clean, minimal design

### 3. Multi-Language Support
- English, German, French
- URL-based routing (`/en`, `/de`, `/fr`)
- Translations in `locales/` directory

## How to Customize to Match Bauberger.ch Exactly

### Step 1: Add Your Hero Background Image

Place your main hero image in `public/images/` and update the homepage:

```tsx
// app/[locale]/page.tsx
<Hero
  title={t.hero.title}
  subtitle={t.hero.subtitle}
  backgroundImage="/images/your-industrial-image.jpg"  // Your image
  height="tall"
  ctaText={t.hero.cta}
  ctaHref={`/${locale}/contact`}
/>
```

**Recommended Image Specifications:**
- Resolution: 1920x1080 or higher
- Format: JPG or WebP
- File size: < 500KB (optimized)
- Subject: Industrial equipment, machinery, or your company's work

### Step 2: Update Company Branding

#### Logo
Replace "YOUR COMPANY" in [Header.tsx](components/layout/Header.tsx:12):

```tsx
// Option 1: Text logo
<Link href={`/${locale}`} className="text-2xl font-bold">
  BAUBERGER AG
</Link>

// Option 2: Image logo
<Link href={`/${locale}`}>
  <Image
    src="/images/logo.svg"
    alt="Company Logo"
    width={200}
    height={60}
  />
</Link>
```

#### Colors
Edit [globals.css](app/globals.css) to match your brand:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;  /* Change to your brand color */
  --primary: #your-color;  /* Add your primary brand color */
}
```

### Step 3: Add Content Sections

Create sections similar to bauberger.ch's layout:

```tsx
// Example: Image + Text Section
<section className="py-20">
  <Container>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg text-zinc-600">Your description here...</p>
      </div>
      <div className="relative h-[400px]">
        <Image
          src="/images/services.jpg"
          alt="Our Services"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </Container>
</section>
```

### Step 4: Customize Typography

Bauberger uses clean, professional typography. Update fonts in [layout.tsx](app/layout.tsx):

```tsx
// For a more corporate look, consider:
import { Roboto, Roboto_Slab } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const robotoSlab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})
```

## Component Reference

### Hero Component

```tsx
interface HeroProps {
  title: string                    // Main headline
  subtitle: string                 // Subheading
  ctaText?: string                // Primary button text
  ctaHref?: string                // Primary button link
  secondaryCtaText?: string       // Secondary button text
  secondaryCtaHref?: string       // Secondary button link
  backgroundImage?: string         // Background image URL
  overlay?: boolean               // Show dark overlay (default: true)
  height?: 'normal' | 'tall' | 'full'  // Section height
}
```

### Container Component

```tsx
<Container size="lg">  {/* sm, md, lg, xl, full */}
  Your content
</Container>
```

### Button Component

```tsx
<Button
  variant="primary"    // primary, secondary, outline, ghost
  size="lg"           // sm, md, lg
  fullWidth={false}
>
  Click Me
</Button>
```

## Page Structure Example (Like Bauberger)

```tsx
export default function HomePage() {
  return (
    <>
      {/* Full-width hero with image */}
      <Hero
        title="Quality and Precision – Worldwide"
        subtitle="We work precisely, quickly and safely"
        backgroundImage="/images/hero.jpg"
        height="tall"
      />

      {/* Services section */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service cards */}
          </div>
        </Container>
      </section>

      {/* Image + Text section */}
      <section className="py-20 bg-zinc-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Content */}
          </div>
        </Container>
      </section>

      {/* Stats/Numbers */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stats */}
          </div>
        </Container>
      </section>
    </>
  )
}
```

## Image Optimization Tips

1. **Use Next.js Image Component:**
```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
/>
```

2. **Optimize Before Uploading:**
- Use TinyPNG or ImageOptim
- Convert to WebP format
- Aim for < 200KB per image

3. **For Background Images:**
- Use high-quality images (1920px wide minimum)
- Dark overlay improves text readability

## Running Your Site

```bash
# Development
npm run dev
# Visit: http://localhost:3000/en

# Production
npm run build
npm start
```

## Quick Customization Checklist

- [ ] Replace "YOUR COMPANY" with your company name
- [ ] Add your logo to `public/images/logo.svg`
- [ ] Add hero background image to `public/images/hero.jpg`
- [ ] Update translations in `locales/*/common.json`
- [ ] Customize colors in `app/globals.css`
- [ ] Add your content images to `public/images/`
- [ ] Update social media links in Footer.tsx
- [ ] Add your company information
- [ ] Set up contact form backend (if needed)

## Differences from Bauberger.ch

**Your Site (Advantages):**
- ✓ Faster (Next.js vs WordPress/Elementor)
- ✓ Better SEO (Static generation)
- ✓ Fully type-safe (TypeScript)
- ✓ Modern framework
- ✓ Better performance scores

**To Match Bauberger Exactly:**
1. Add your specific images
2. Copy exact text content
3. Match color scheme
4. Add specific sections they have (equipment, history, etc.)

## Support

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

Your foundation is solid - now customize with your content and branding!
