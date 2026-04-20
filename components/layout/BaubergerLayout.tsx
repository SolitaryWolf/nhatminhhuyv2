'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiSearch, HiX } from 'react-icons/hi'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { ReactNode, useState } from 'react'

interface BaubergerLayoutProps {
  children: ReactNode
  locale: string
  backgroundImage?: string
  activePage?: string
}

export function BaubergerLayout({ children, locale, backgroundImage = '/images/Dịch vụ cẩu máy.jpg', activePage }: BaubergerLayoutProps) {
  const isVi = locale === 'vi'
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(/^\/(en|vi|de|fr)/, '') || '/'
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Encode the background image URL to handle special characters
  const encodedBackgroundImage = encodeURI(backgroundImage)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    const query = searchTerm.trim().toLowerCase()
    
    // Service matching logic
    const serviceMatches = [
      { 
        keywords: ['labor', 'labour', 'lao động', 'nhân lực', 'supply', 'cung ứng', 'quản lý'],
        url: `/${locale}/services/labor-supply`
      },
      { 
        keywords: ['cargo', 'loading', 'unloading', 'bốc xếp', 'bốc dỡ', 'hàng hóa'],
        url: `/${locale}/services/cargo-loading`
      },
      { 
        keywords: ['transport', 'inland', 'vận tải', 'vận chuyển', 'nội địa', 'đường bộ', 'road'],
        url: `/${locale}/services/inland-transport`
      },
      { 
        keywords: ['packaging', 'package', 'đóng gói', 'gói hàng', 'máy móc'],
        url: `/${locale}/services/packaging`
      },
      { 
        keywords: ['lifting', 'installation', 'nâng', 'hạ', 'lắp đặt', 'cẩu', 'crane', 'máy'],
        url: `/${locale}/services/lifting-installation`
      },
      { 
        keywords: ['vehicle', 'rental', 'cho thuê', 'phương tiện', 'xe', 'forklift', 'xe nâng'],
        url: `/${locale}/services/vehicle-rental`
      },
    ]

    // Find matching service
    const match = serviceMatches.find(service => 
      service.keywords.some(keyword => 
        query.includes(keyword) || keyword.includes(query)
      )
    )

    if (match) {
      window.location.href = match.url
    } else {
      // No match - go to services page with search query
      window.location.href = `/${locale}/services?search=${encodeURIComponent(searchTerm.trim())}&notfound=true`
    }
  }

  const sidebarMenu = [
    { title: isVi ? 'THƯ NGỎ' : 'OPEN LETTER', href: `/${locale}/open-letter`, id: 'open-letter' },
    { title: isVi ? 'DỊCH VỤ' : 'SERVICES', href: `/${locale}/services`, id: 'services' },
    { title: isVi ? 'GIẤY PHÉP KINH DOANH' : 'BUSINESS LICENSE', href: `/${locale}/business-license`, id: 'business-license' },
    { title: isVi ? 'TẦM NHÌN & SỨ MỆNH' : 'VISION & MISSION', href: `/${locale}/vision-mission`, id: 'vision-mission' },
    { title: isVi ? 'TUÂN THỦ' : 'COMPLIANCE', href: `/${locale}/compliance`, id: 'compliance' },
    { title: isVi ? 'ĐỐI TÁC & KHÁCH HÀNG' : 'PARTNERS & CLIENTS', href: `/${locale}/partners`, id: 'partners' },
    { title: isVi ? 'GIỚI THIỆU' : 'ABOUT US', href: `/${locale}/about`, id: 'about' },
    // { title: isVi ? 'LIÊN HỆ' : 'CONTACT', href: `/${locale}/contact`, id: 'contact' },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Full Screen, No Margins */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${encodedBackgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content with Margins */}
      <div className="relative z-10 mx-2 sm:mx-4 lg:mx-60 mt-4 sm:mt-8 lg:mt-[80px]">
        {/* Header */}
        <header className="rounded-xl overflow-hidden shadow-lg">
          {/* Top Blue Bar with Logo */}
          <div className="bg-[#1F5F9E] text-white">
            <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
              <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3">
                <div className="bg-white rounded-lg p-1 sm:p-2 shadow-md">
                  <Image
                    src="/images/logo_horizontal.png"
                    alt="Nhat Minh Huy"
                    width={200}
                    height={50}
                    className="h-6 sm:h-8 lg:h-12 w-auto"
                    priority
                  />
                </div>
              </Link>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Link
                  href={`/en${pathWithoutLocale}`}
                  className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs lg:text-sm transition-colors ${
                    locale === 'en'
                      ? 'bg-[#FFD900] text-[#1F5F9E]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={`/vi${pathWithoutLocale}`}
                  className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs lg:text-sm transition-colors ${
                    locale === 'vi'
                      ? 'bg-[#FFD900] text-[#1F5F9E]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  VI
                </Link>
              </div>
            </div>
          </div>

          {/* Yellow Contact Bar */}
          <div className="bg-[#FFD900]">
            <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-6 text-[10px] sm:text-xs lg:text-sm text-[#1F5F9E] font-semibold">
                <a 
                  href="tel:+84968903913" 
                  className="flex items-center gap-1 sm:gap-2 hover:underline transition-all whitespace-nowrap"
                  title="Call us"
                >
                  +84 968 903 913
                </a>
                <span className="hidden sm:inline">or</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const email = 'huy@nhatminhhuy.com.com';
                    window.location.href = `mailto:${email}`;
                    navigator.clipboard.writeText(email).then(() => {
                      alert(isVi ? 'Email đã được sao chép!' : 'Email copied to clipboard!');
                    }).catch((err) => {
                      console.error('Failed to copy email:', err);
                    });
                  }}
                  className="hover:underline transition-all cursor-pointer bg-transparent border-none text-[#1F5F9E] font-semibold text-[10px] sm:text-xs lg:text-sm truncate max-w-[180px] sm:max-w-none"
                  title="Send us an email"
                  type="button"
                >
                  huy@nhatminhhuy.com.com
                </button>
              </div>
              <nav className="flex items-center gap-2 sm:gap-4 lg:gap-8 text-[10px] sm:text-xs lg:text-sm font-bold text-[#1F5F9E]">
                <Link href={`/${locale}`} className="hover:underline whitespace-nowrap">
                  HOME
                </Link>
                <Link href={`/${locale}/services`} className="hover:underline whitespace-nowrap">
                  SERVICES
                </Link>
                <Link href={`/${locale}/contact`} className="hover:underline whitespace-nowrap">
                  CONTACT
                </Link>
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0"
                  aria-label={isVi ? 'Tìm kiếm' : 'Search'}
                  type="button"
                >
                  <HiSearch className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Search Modal */}
        {isSearchOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            
            {/* Modal Content */}
            <div 
              className="relative w-full max-w-2xl glass-card p-8 animate-slideDown"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#1F5F9E] transition-colors"
                aria-label="Close"
              >
                <HiX className="w-6 h-6" />
              </button>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1F5F9E] mb-2">
                    {isVi ? 'Tìm kiếm dịch vụ' : 'Search Services'}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {isVi ? 'Nhập từ khóa để tìm kiếm dịch vụ của chúng tôi' : 'Enter keywords to search our services'}
                  </p>
                </div>

                <div className="relative">
                  <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={isVi ? 'Ví dụ: vận chuyển, cẩu máy, đóng gói...' : 'e.g., transport, lifting, packaging...'}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FFD900] focus:outline-none text-lg transition-colors"
                    autoFocus
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#1F5F9E] to-[#2976BA] text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    {isVi ? 'Tìm kiếm' : 'Search'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {isVi ? 'Hủy' : 'Cancel'}
                  </button>
                </div>

                {/* Quick Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">
                    {isVi ? 'Tìm kiếm phổ biến:' : 'Popular searches:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { vi: 'Vận chuyển', en: 'Transport' },
                      { vi: 'Cẩu máy', en: 'Lifting' },
                      { vi: 'Đóng gói', en: 'Packaging' },
                      { vi: 'Lắp đặt', en: 'Installation' },
                    ].map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSearchTerm(isVi ? item.vi : item.en)
                        }}
                        className="px-4 py-2 bg-[#FFD900]/20 text-[#1F5F9E] rounded-full text-sm font-semibold hover:bg-[#FFD900] transition-colors"
                      >
                        {isVi ? item.vi : item.en}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row relative min-h-screen">
          {/* Left Sidebar Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <nav className="lg:sticky lg:top-0 p-1 sm:p-2 grid grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-2">
              {sidebarMenu.map((item, index) => {
                const isActive = activePage === item.id
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`block px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-bold text-[10px] sm:text-xs lg:text-sm tracking-wide transition-all duration-300 relative rounded-xl lg:rounded-l-xl lg:rounded-r-none text-center lg:text-left border border-transparent ${
                      isActive 
                        ? 'bg-[#FFD900] text-[#1F5F9E] shadow-lg transform scale-105 border-[#FFD900]' 
                        : 'bg-[#1F5F9E] text-white hover:bg-[#2976BA] hover:transform hover:scale-105 hover:shadow-md hover:border-[#FFD900]/30'
                    }`}
                  >
                    {item.title}
                    {isActive && (
                      <div 
                        className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 animate-pulse"
                        style={{
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '12px solid #FFD900',
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-2 sm:p-4 lg:p-8">
            <div className="max-w-6xl">
              {children}
            </div>
          </main>

          {/* Right Social Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-16 flex-shrink-0">
            <div className="sticky top-0 flex flex-col gap-3 pt-2">
              <a
                href="#"
                className="w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
