# Project Structure Documentation

This Next.js project is configured for a professional corporate website similar to bauberger.ch.

## Folder Structure

```
nhatminhhuy/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalization wrapper
│   │   ├── about/               # About pages
│   │   ├── services/            # Services pages
│   │   ├── contact/             # Contact page
│   │   ├── projects/            # Projects/Portfolio
│   │   ├── page.tsx             # Home page
│   │   └── layout.tsx           # Locale-specific layout
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   └── sections/                # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Stats.tsx
│       └── ...
│
├── lib/                         # Utilities and helpers
│   ├── utils/                   # Utility functions
│   ├── hooks/                   # Custom React hooks
│   └── constants/               # Constants and config
│
├── public/                      # Static assets
│   ├── images/                  # Images
│   ├── videos/                  # Videos
│   └── documents/               # PDFs, documents
│
├── types/                       # TypeScript types
│   └── index.ts
│
└── locales/                     # i18n translations (to be added)
    ├── en/
    └── de/
```

## Key Features

### 1. Internationalization (i18n)
- Multi-language support (English, German, etc.)
- URL-based locale routing: `/en/about`, `/de/about`

### 2. Component Architecture
- **UI Components**: Reusable, atomic components
- **Layout Components**: Header, Footer, Navigation
- **Section Components**: Page-specific sections (Hero, Features, etc.)

### 3. Styling
- Tailwind CSS v4 for utility-first styling
- CSS variables for theming
- Responsive design by default

### 4. Type Safety
- Full TypeScript support
- Shared types in `/types` directory

## Recommended Dependencies

For a professional corporate website, consider adding:
- `framer-motion` - Smooth animations
- `next-intl` - Internationalization
- `react-icons` - Icon library
- `@radix-ui/react-*` - Accessible UI primitives
- `clsx` + `tailwind-merge` - Class name utilities

## Page Structure Example

Each page should follow this pattern:
```tsx
// app/[locale]/about/page.tsx
import { Container } from '@/components/ui/Container'
import { Hero } from '@/components/sections/Hero'

export default function AboutPage() {
  return (
    <>
      <Hero title="About Us" />
      <Container>
        {/* Page content */}
      </Container>
    </>
  )
}
```
