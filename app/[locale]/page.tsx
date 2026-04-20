'use client'

import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const isVi = locale === 'vi'

  const featuredServices = [
    {
      title: isVi ? 'Nâng Hạ, Lắp Đặt Máy Móc Thiết Bị' : 'Lifting and Installation of Machinery',
      description: isVi
        ? 'Đội ngũ nhân viên giàu kinh nghiệm với trang thiết bị chuyên dụng phục vụ vận chuyển, nâng hạ máy móc thiết bị công nghiệp nặng siêu trường, siêu trọng.'
        : 'Experienced staff with specialized equipment serving transportation and lifting of super long and super heavy industrial machinery and equipment.',
      image: '/images/Cẩu máy ép nhựa.jpg',
      href: `/${locale}/services/lifting-installation`,
    },
    {
      title: isVi ? 'Vận Tải Nội Địa' : 'Inland Transport',
      description: isVi
        ? 'Vận tải đường bộ, đường thủy và đa phương thức từ Bắc vào Nam. Tối ưu phương án vận chuyển để giảm thiểu chi phí và thời gian.'
        : 'Road, waterway and multi-modal transport from North to South. Optimize shipping plans to minimize costs and time.',
      image: '/images/Dịch vụ chuyển máy CNC.jpg',
      href: `/${locale}/services/inland-transport`,
    },
    {
      title: isVi ? 'Đóng Gói Máy Móc Thiết Bị' : 'Packaging of Machinery and Equipment',
      description: isVi
        ? 'Dịch vụ đóng gói chuyên nghiệp cho máy móc thiết bị công nghiệp, đảm bảo an toàn tuyệt đối trong quá trình vận chuyển.'
        : 'Professional packaging services for industrial machinery and equipment, ensuring absolute safety during transportation.',
      image: '/images/Dịch vụ đóng gói máy móc.jpg',
      href: `/${locale}/services/packaging`,
    },
  ]

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ cẩu máy.jpg">
      {/* Hero Section */}
      <section className="mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-4 lg:mb-6 leading-tight">
          {isVi
            ? 'VẬN CHUYỂN NIỀM TIN - KẾT NỐI THÀNH CÔNG'
            : 'DELIVERING TRUST - CONNECTING SUCCESS'}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-4 lg:mb-6">
          {isVi
            ? 'Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Nhật Minh Huy hoạt động trong lĩnh vực cung ứng lao động, cung cấp vật tư, dịch vụ hỗ trợ logistics, các giải pháp hàng đầu về giao nhận và vận chuyển hàng hóa, nâng hạ và lắp đặt máy móc thiết bị.'
            : 'Nhat Minh Huy Transport Service Trading Company Limited operates in the field of labor supply, material supply, logistics support services, leading solutions for freight forwarding and transportation, and lifting and installation of machinery and equipment.'}
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
          {isVi
            ? 'Với đội ngũ nhân viên chuyên nghiệp, được đào tạo bài bản, chúng tôi tự tin tiếp nhận mọi nhu cầu của khách hàng. Chúng tôi cam kết mang đến cho khách hàng và đối tác trong và ngoài nước những trải nghiệm dịch vụ tốt nhất, trong thời gian nhanh nhất.'
            : 'With a team of professional and well-trained employees, we confidently accept all customer needs. We are committed to providing domestic and foreign customers and partners with the best service experience, in the fastest time.'}
        </p>
      </section>

      {/* Featured Services Section */}
      <section className="mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-6 lg:mb-8">
          {isVi ? 'Dịch Vụ Nổi Bật' : 'Featured Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4 lg:p-6 bg-white/90 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1F5F9E] mb-2 lg:mb-3 group-hover:text-[#FFD900] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-3 lg:mb-4">
          {isVi ? 'Đối Tác & Khách Hàng' : 'Our Partners & Clients'}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 lg:mb-8">
          {isVi
            ? 'Chúng tôi tự hào phục vụ các doanh nghiệp hàng đầu Việt Nam'
            : 'We are proud to serve leading Vietnamese enterprises'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {[
            { name: 'Vietnam Airlines', logo: '/images/partner/ic_vietnam_airlines.png' },
            { name: 'EMS Vietnam', logo: '/images/partner/ic_ems.png' },
            { name: 'Gemadept', logo: '/images/partner/ic_gemadept.png' },
            { name: 'CJ Cầu Tre', logo: '/images/partner/ic_cjcautre.png' },
            { name: 'Coteccons', logo: '/images/partner/ic_coteccons.jpg' },
            { name: 'Hoa Sen Group', logo: '/images/partner/ic_hoasen.png' },
            { name: 'Tôn Nam Kim', logo: '/images/partner/ic_tonnamkim.png' },
            { name: 'Phong Phú', logo: '/images/partner/ic_phongphu.jpg' },
            { name: 'TH True Milk', logo: '/images/partner/ic_thtruemilk.png' },
            { name: 'BioPharma', logo: '/images/partner/ic_biopharma.png' },
            { name: 'Hòa Phát', logo: '/images/partner/ic_hoaphat.png' },
            { name: 'TTC', logo: '/images/partner/ic_ttc.webp' },
            { name: 'VN Steel', logo: '/images/partner/ic_vnsteel.jpg' },
            { name: 'Quatest 3', logo: '/images/partner/ic_quatest3.png' },
            { name: 'Quacert', logo: '/images/partner/ic_quacert.png' },
            { name: 'Vinacontrol', logo: '/images/partner/ic_vinacontrol.png' },
            { name: 'IPH', logo: '/images/partner/ic_iph.jpeg' },
            { name: 'Vietnam Control', logo: '/images/partner/ic_vietnamcontrol.png' },
          ].map((partner, index) => (
            <div
              key={index}
              className="glass-card p-3 lg:p-4 flex items-center justify-center hover:border-[#FFD900]/40 transition-all hover:scale-105 min-h-[80px] lg:min-h-[100px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-12 lg:max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </BaubergerLayout>
  )
}
