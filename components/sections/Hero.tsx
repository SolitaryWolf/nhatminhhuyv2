'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImage?: string
  overlay?: boolean
  height?: 'normal' | 'tall' | 'full'
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  overlay = true,
  height = 'tall'
}: HeroProps) {
  const heightClasses = {
    normal: 'min-h-[500px]',
    tall: 'min-h-[600px] md:min-h-[700px]',
    full: 'min-h-screen'
  }

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      )}

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 ${
              backgroundImage ? 'text-white' : ''
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className={`text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed ${
              backgroundImage ? 'text-white/90' : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            {subtitle}
          </motion.p>

          {(ctaText || secondaryCtaText) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {ctaText && ctaHref && (
                <Link href={ctaHref}>
                  <Button
                    size="lg"
                    className="min-w-[200px]"
                  >
                    {ctaText}
                  </Button>
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link href={secondaryCtaHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
                  >
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
