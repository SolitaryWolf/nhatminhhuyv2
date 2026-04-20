import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

interface FooterProps {
  locale: string
  translations: any
}

export function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'YouTube', icon: FaYoutube, href: '#' },
  ]

  const navigation = [
    { name: translations.nav?.home || 'Home', href: `/${locale}` },
    { name: translations.nav?.services || 'Services', href: `/${locale}/services` },
    { name: translations.nav?.about || 'About', href: `/${locale}/about` },
    { name: translations.nav?.contact || 'Contact', href: `/${locale}/contact` },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo_horizontal.png"
              alt="Nhat Minh Huy Transport"
              width={200}
              height={55}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
              {locale === 'vi'
                ? 'Nhà cung cấp giải pháp logistics hàng đầu tại Việt Nam, mang đến dịch vụ chất lượng với chi phí tối ưu.'
                : 'Leading logistics solution provider in Vietnam, delivering quality services at optimal costs.'}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {locale === 'vi'
                    ? '181/1C Hoàng Hoa Thám, Phường 12, Quận Tân Bình, TP.HCM'
                    : '181/1C Hoang Hoa Tham St., Ward 12, Tan Binh Dist., HCMC'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="tel:0968903913" className="text-gray-400 hover:text-white transition-colors">
                  0968 903 913
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:huy@nhatminhhuy.com.com" className="text-gray-400 hover:text-white transition-colors">
                  huy@nhatminhhuy.com.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">
              {locale === 'vi' ? 'Liên Kết Nhanh' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">
              {locale === 'vi' ? 'Theo Dõi Chúng Tôi' : 'Follow Us'}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {locale === 'vi' ? 'Công ty TNHH Nhật Minh Huy' : 'Nhat Minh Huy Transport Service Trading Co., Ltd.'}. {locale === 'vi' ? 'Bản quyền đã được bảo hộ' : 'All rights reserved'}.
            </p>
            <div className="flex gap-6">
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                {locale === 'vi' ? 'Chính Sách Bảo Mật' : 'Privacy Policy'}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                {locale === 'vi' ? 'Điều Khoản' : 'Terms & Conditions'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
