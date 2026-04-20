import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function PackagingPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'ĐÓNG GÓI HÀNG HÓA MÁY MÓC THIẾT BỊ',
      intro: 'NHẬT MINH HUY đã lựa chọn những dịch vụ đóng gói hàng hóa – Packaging sát với nhu cầu thực tế nhất của Quý khách như sau:',
      services: [
        'Đóng kiện gỗ những bức tượng phật, bàn thờ...',
        'Đóng thùng carton mọi kích cỡ.',
        'Dịch vụ đóng gói đảm bảo chống thấm, ướt hàng hóa.',
        'Đóng gói hàng thủy tinh, sành sứ, hàng dễ vỡ.',
        'Đóng gói máy móc thiết bị công nghiệp.',
        'Dịch vụ đóng gói hàng hóa cần giữ mát, giữ lạnh.',
        'Đóng gói hàng cây xanh, cây cảnh.',
        'Dịch vụ đóng gói hàng hóa là hóa chất, hàng nguy hiểm, sản phẩm dễ gây cháy nổ.'
      ],
      conclusion: 'Mỗi loại dịch vụ đóng gói hàng hóa mà NHẬT MINH HUY cung cấp đều phục vụ cho từng nhu cầu riêng của khách hàng về chủng loại hàng hóa, quá trình vận chuyển và giá thành của doanh nghiệp.',
      backToServices: 'Quay lại Dịch vụ'
    },
    en: {
      title: 'PACKAGING OF GOODS MACHINERY AND EQUIPMENT',
      intro: 'NHAT MINH HUY has selected packaging services that best suit your actual needs as follows:',
      services: [
        'Wooden bales for Buddha statues, altars...',
        'Pack cartons of all sizes.',
        'Packaging services ensure goods are waterproof.',
        'Packaging of glass, crockery, and fragile goods.',
        'Packaging of industrial machinery and equipment.',
        'Packaging services for goods that need to be kept cool or cold.',
        'Packaging of green plants and ornamental plants.',
        'Packaging services for chemicals, dangerous goods, and flammable and explosive products.'
      ],
      conclusion: 'Each type of packaging service that NHAT MINH HUY provides serves each customer\'s unique needs in terms of the type of goods, transport process and cost of the enterprise.',
      backToServices: 'Back to Services'
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ đóng gói máy móc.jpg" activePage="services">
      <Link 
        href={`/${locale}/services`}
        className="inline-flex items-center text-[#1F5F9E] hover:text-[#FFD900] transition-colors mb-6 font-semibold"
      >
        ← {t.backToServices}
      </Link>
      
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>
      
      <div className="glass-card p-8 space-y-6">
        <p className="text-gray-800 leading-relaxed text-lg">{t.intro}</p>
        
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
          {t.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        
        <p className="text-gray-800 leading-relaxed text-lg">{t.conclusion}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ đóng gói khuôn mẫu.jpg"
              alt="Dịch vụ đóng gói khuôn mẫu"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ đóng gói máy móc.jpg"
              alt="Dịch vụ đóng gói máy móc"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </BaubergerLayout>
  )
}
