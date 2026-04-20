'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaBriefcase, FaInfoCircle, FaEnvelope } from 'react-icons/fa'

interface MobileNavProps {
  locale: string
}

export default function MobileNav({ locale }: MobileNavProps) {
  const pathname = usePathname()
  
  const navItems = [
    { 
      href: `/${locale}`, 
      icon: FaHome, 
      labelVi: 'Trang chủ', 
      labelEn: 'Home',
      match: (path: string) => path === `/${locale}` || path === `/${locale}/`
    },
    { 
      href: `/${locale}/services`, 
      icon: FaBriefcase, 
      labelVi: 'Dịch vụ', 
      labelEn: 'Services',
      match: (path: string) => path.includes('/services')
    },
    { 
      href: `/${locale}/about`, 
      icon: FaInfoCircle, 
      labelVi: 'Về chúng tôi', 
      labelEn: 'About',
      match: (path: string) => path.includes('/about') || path.includes('/open-letter') || path.includes('/vision') || path.includes('/compliance') || path.includes('/partners') || path.includes('/business-license')
    },
    { 
      href: `/${locale}/contact`, 
      icon: FaEnvelope, 
      labelVi: 'Liên hệ', 
      labelEn: 'Contact',
      match: (path: string) => path.includes('/contact')
    },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/10">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.match(pathname)
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive 
                  ? 'text-[#ff6b35]' 
                  : 'text-gray-400 active:text-[#ffa500]'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? 'text-[#ff6b35]' : ''}`} />
              <span className="text-xs font-medium">
                {locale === 'vi' ? item.labelVi : item.labelEn}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
