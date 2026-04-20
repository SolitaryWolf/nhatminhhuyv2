'use client'

import Link from 'next/link'
import Image from 'next/image'

interface MobileHeaderProps {
  locale: string
}

export default function MobileHeader({ locale }: MobileHeaderProps) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 glass-card border-b border-white/10">
      <div className="flex items-center justify-center h-16 px-4">
        <Link href={`/${locale}`} className="block">
          <div className="bg-white rounded-lg px-4 py-2">
            <div className="relative w-32 h-8">
              <Image
                src="/images/logo_horizontal.png"
                alt="Nhat Minh Huy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
