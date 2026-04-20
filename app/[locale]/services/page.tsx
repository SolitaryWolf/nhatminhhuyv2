'use client'

import Image from 'next/image'
import Link from 'next/link'
import { use, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { HiSearch } from 'react-icons/hi'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

function ServicesContent({ locale }: { locale: string }) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const notfound = searchParams.get('notfound')
  const isVi = locale === 'vi'

  const services = [
    {
      title: isVi ? 'Cung Ứng và Quản Lý Nguồn Lao Động' : 'Supply and Management of Labor Resources',
      description: isVi
        ? 'Dịch vụ cho thuê lại lao động phổ thông giúp chuyển chi phí lương từ định phí sang biến phí, giảm thiểu rủi ro pháp lý.'
        : 'Unskilled labor subleasing service helps convert salary costs from fixed to variable costs, minimize legal risks.',
      image: '/images/Họp triển khai công việc.jpg',
      link: '/services/labor-supply',
    },
    {
      title: isVi ? 'Bốc Xếp Hàng Hóa' : 'Cargo Loading and Unloading',
      description: isVi
        ? 'Sử dụng sức lao động để bốc xếp, bốc dỡ hàng hóa lên và xuống các phương tiện chuyên chở.'
        : 'Use of labor to load and unload goods onto and off transportation vehicles.',
      image: '/images/Hạ hàng.jpg',
      link: '/services/cargo-loading',
    },
    {
      title: isVi ? 'Vận Tải Nội Địa' : 'Inland Transport',
      description: isVi
        ? 'Vận tải đường bộ, đường thủy và đa phương thức từ Bắc vào Nam với sự an toàn tuyệt đối.'
        : 'Road, waterway and multi-modal transport from North to South with absolute safety.',
      image: '/images/Dịch vụ chuyển máy CNC.jpg',
      link: '/services/inland-transport',
    },
    {
      title: isVi ? 'Đóng Gói Hàng Hóa, Máy Móc' : 'Packaging of Goods and Machinery',
      description: isVi
        ? 'Dịch vụ đóng gói chuyên nghiệp cho máy móc công nghiệp, hàng dễ vỡ, hóa chất và hàng nguy hiểm.'
        : 'Professional packaging services for industrial machinery, fragile goods, chemicals and dangerous goods.',
      image: '/images/Dịch vụ đóng gói máy móc.jpg',
      link: '/services/packaging',
    },
    {
      title: isVi ? 'Nâng Hạ, Lắp Đặt Máy Móc' : 'Lifting and Installation',
      description: isVi
        ? 'Đội ngũ giàu kinh nghiệm với trang thiết bị chuyên dụng phục vụ vận chuyển máy móc công nghiệp nặng.'
        : 'Experienced staff with specialized equipment serving transportation of heavy industrial machinery.',
      image: '/images/Cẩu máy ép nhựa.jpg',
      link: '/services/lifting-installation',
    },
    {
      title: isVi ? 'Cho Thuê Phương Tiện' : 'Vehicle Rental',
      description: isVi
        ? 'Cho thuê các loại xe nâng, xe cẩu đáp ứng nhu cầu xây dựng, lắp đặt và di dời máy móc.'
        : 'Rental of forklifts and cranes for construction, installation and machinery relocation.',
      image: '/images/Rùa điện 30 tấn.jpg',
      link: '/services/vehicle-rental',
    },
  ]

  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight py-2">
        {isVi ? 'DỊCH VỤ CỦA CHÚNG TÔI' : 'OUR SERVICES'}
      </h1>
      
      {notfound && search && (
        <div className="glass-card p-4 lg:p-8 mb-6 lg:mb-8 border-l-4 border-[#FFD900]">
          <div className="flex items-start gap-3 lg:gap-4">
            <div className="flex-shrink-0">
              <HiSearch className="w-6 h-6 lg:w-8 lg:h-8 text-[#1F5F9E]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-bold text-[#1F5F9E] mb-2">
                {isVi ? 'Không tìm thấy kết quả' : 'No Results Found'}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 mb-4">
                {isVi 
                  ? `Không tìm thấy dịch vụ phù hợp với từ khóa "${search}". Vui lòng xem tất cả dịch vụ của chúng tôi bên dưới hoặc thử tìm kiếm với từ khóa khác.`
                  : `No services found matching "${search}". Please browse all our services below or try searching with different keywords.`
                }
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-base sm:text-lg lg:text-xl text-gray-800 mb-8 lg:mb-12">
        {isVi
          ? 'Chúng tôi cung cấp các giải pháp logistics toàn diện với chất lượng tốt nhất và chi phí tối ưu.'
          : 'We provide comprehensive logistics solutions with the best quality and optimal costs.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((service, index) => (
          <Link key={index} href={`/${locale}${service.link}`} className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full">
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
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1F5F9E] mb-2 lg:mb-3 leading-tight group-hover:text-[#FFD900] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 lg:mb-4 flex-grow">{service.description}</p>
              <span className="inline-flex items-center text-sm text-[#FFD900] font-semibold group-hover:gap-2 transition-all mt-auto">
                {isVi ? 'Xem chi tiết' : 'View details'}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ chuyển máy CNC.jpg" activePage="services">
      <Suspense fallback={
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight py-2">
            {locale === 'vi' ? 'DỊCH VỤ CỦA CHÚNG TÔI' : 'OUR SERVICES'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 mb-8 lg:mb-12">
            {locale === 'vi' ? 'Đang tải...' : 'Loading...'}
          </p>
        </div>
      }>
        <ServicesContent locale={locale} />
      </Suspense>
    </BaubergerLayout>
  )
}
