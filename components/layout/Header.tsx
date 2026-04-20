'use client'

import { useState } from 'react'
import { HiMenu, HiX, HiPhone, HiMail } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  locale: string
  translations: any
}

export function Header({ locale, translations }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: translations.nav.home || 'Home', href: `/${locale}` },
    { name: translations.nav.services || 'Services', href: `/${locale}/services` },
    { name: translations.nav.about || 'About', href: `/${locale}/about` },
    { name: translations.nav.contact || 'Contact', href: `/${locale}/contact` },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar with Contact Info */}
      <div className="bg-gray-900 text-white py-2.5">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:0968903913" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiPhone className="h-4 w-4" />
                <span className="hidden sm:inline">0968 903 913</span>
              </a>
              <a href="mailto:huy@nhatminhhuy.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiMail className="h-4 w-4" />
                <span className="hidden sm:inline">huy@nhatminhhuy.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/en"
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-800'
                }`}
              >
                EN
              </Link>
              <Link
                href="/de"
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'de'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-800'
                }`}
              >
                DE
              </Link>
              <Link
                href="/vi"
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'vi'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-800'
                }`}
              >
                VI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo_horizontal.png"
              alt="Nhat Minh Huy Transport"
              width={220}
              height={60}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all relative group"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-700" />
            ) : (
              <HiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
