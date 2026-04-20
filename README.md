# Corporate Website - Next.js Project

A professional, multi-language corporate website built with Next.js 16, inspired by modern business websites like bauberger.ch.

## Features

- **Multi-language Support (i18n)**: English, German, and French
- **Modern UI Components**: Reusable components with Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Type-Safe**: Full TypeScript support
- **Smooth Animations**: Framer Motion integration
- **SEO Optimized**: Built with Next.js best practices
- **Dark Mode Support**: Automatic theme switching

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
nhatminhhuy/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Layout components (Header, Footer)
│   └── sections/           # Page sections (Hero, Features)
├── lib/                    # Utilities and helpers
├── locales/                # Translation files
│   ├── en/
│   ├── de/
│   └── fr/
├── public/                 # Static assets
└── types/                  # TypeScript types
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will automatically redirect to the default locale (`/en`).

### Available URLs

- `/en` - English homepage
- `/de` - German homepage
- `/fr` - French homepage
- `/en/about` - About page
- `/en/contact` - Contact page
- `/en/services` - Services page (to be created)
- `/en/projects` - Projects page (to be created)

## Configuration

### Adding New Languages

1. Update `i18n.config.ts` to add the new locale
2. Create translation files in `locales/{locale}/common.json`
3. The middleware will automatically handle routing

### Customizing Styles

- Edit `app/globals.css` for global styles and CSS variables
- Tailwind classes are available throughout the project
- Use the `cn()` utility from `lib/utils.ts` to merge classes

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Company Name"
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

## Building for Production

```bash
npm run build
npm start
```

## Available Components

### UI Components
- `Container` - Responsive container with size variants
- `Button` - Customizable button with variants
- `Card` - Card component with header, title, and content

### Layout Components
- `Header` - Site header with navigation
- `Footer` - Site footer with links and social media

### Section Components
- `Hero` - Hero section with CTA buttons

## Customization Guide

### Update Company Information

1. Edit translation files in `locales/*/common.json`
2. Update metadata in `app/layout.tsx`
3. Replace logo in `components/layout/Header.tsx`

### Add New Pages

Create a new folder in `app/[locale]/your-page/`:

```tsx
// app/[locale]/your-page/page.tsx
export default async function YourPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Your page content
}
```

### Styling Tips

- Use Tailwind utility classes for quick styling
- Follow the design tokens in `globals.css`
- Use `dark:` prefix for dark mode styles
- Leverage the `cn()` utility for conditional classes

## Next Steps

1. **Add Content**: Replace placeholder text with your company information
2. **Add Images**: Place images in `public/images/` and use Next.js `<Image>` component
3. **Create Service Pages**: Build out your services section
4. **Add Projects/Portfolio**: Showcase your work
5. **Implement Contact Form**: Add backend handling for the contact form
6. **SEO**: Add metadata and OpenGraph tags to each page
7. **Analytics**: Integrate analytics (Google Analytics, Plausible, etc.)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is private and proprietary.
