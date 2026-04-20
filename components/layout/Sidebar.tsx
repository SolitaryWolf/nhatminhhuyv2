'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

interface SidebarProps {
  locale: string
  activePage?: string
}

export default function Sidebar({ locale, activePage }: SidebarProps) {
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(/^\/(en|vi|de|fr)/, '') || '/'
  
  const menuItems = [
    { href: 'open-letter', labelVi: 'THƯ NGỎ', labelEn: 'OPEN LETTER' },
    { href: 'services', labelVi: 'DỊCH VỤ', labelEn: 'SERVICES' },
    { href: 'business-license', labelVi: 'ĐĂNG KÝ KINH DOANH', labelEn: 'BUSINESS LICENSE' },
    { href: 'vision-mission', labelVi: 'TẦM NHÌN & SỨ MỆNH', labelEn: 'VISION & MISSION' },
    { href: 'compliance', labelVi: 'NGUYÊN TẮC TUÂN THỦ', labelEn: 'COMPLIANCE' },
    { href: 'partners', labelVi: 'ĐỐI TÁC & KHÁCH HÀNG', labelEn: 'PARTNERS & CLIENTS' },
    { href: 'about', labelVi: 'VỀ CHÚNG TÔI', labelEn: 'ABOUT US' },
    // { href: 'contact', labelVi: 'LIÊN HỆ', labelEn: 'CONTACT' },
  ]

  return (
    <aside className="hidden lg:block w-64 min-h-screen fixed left-0 top-0 p-4">
      <div className="glass flex-1 rounded-2xl overflow-hidden flex flex-col h-screen">
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <Link href={`/${locale}`} className="block">
            <div className="bg-white rounded-xl p-4 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="relative w-full h-16">
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
        
        <nav className="flex-1 overflow-y-auto p-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className={`block px-4 py-3 mb-2 text-xs font-bold uppercase tracking-wide rounded-xl transition-all duration-300 ${
                activePage === item.href 
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ffa500] text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-[#ff6b35]'
              }`}
            >
              {locale === 'vi' ? item.labelVi : item.labelEn}
            </Link>
          ))}
        </nav>
        
        {/* Language Switcher */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="text-xs font-semibold mb-3 text-[#ff6b35] uppercase tracking-wider">
            {locale === 'vi' ? 'Ngôn ngữ' : 'Language'}
          </div>
          <div className="flex gap-2">
            <Link 
              href={`/en${pathWithoutLocale}`}
              className={`flex-1 text-center py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                locale === 'en' 
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ffa500] text-white shadow-lg shadow-orange-500/50' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-[#ff6b35]'
              }`}
            >
              EN
            </Link>
            <Link 
              href={`/vi${pathWithoutLocale}`}
              className={`flex-1 text-center py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                locale === 'vi' 
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ffa500] text-white shadow-lg shadow-orange-500/50' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-[#ff6b35]'
              }`}
            >
              VI
            </Link>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="p-4 flex justify-center gap-4 border-t border-white/10">
          <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-all duration-300 hover:scale-110">
            <FaYoutube className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-all duration-300 hover:scale-110">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-all duration-300 hover:scale-110">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-all duration-300 hover:scale-110">
            <FaFacebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </aside>
  )
}

export { Sidebar }
