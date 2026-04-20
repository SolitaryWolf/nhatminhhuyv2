import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function InlandTransportPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'VẬN TẢI NỘI ĐỊA',
      intro: 'NHẬT MINH HUY sở hữu đội ngũ lái xe chuyên nghiệp và uy tín cùng sự hợp tác lâu dài với các đối tác, hãng tàu nội địa, hãng bay nội địa, hãng đường sắt trong nước. Chúng tôi luôn tối ưu phương án vận chuyển cho khách hàng để giảm thiểu tối đa chi phí và thời gian vận chuyển từ bất cứ nơi nào trong lãnh thổ Việt Nam với sự an toàn tuyệt đối. Hãy cho NHẬT MINH HUY biết khách hàng cần vận chuyển từ đâu đến đâu, chúng tôi sẽ tư vấn phương án vận chuyển chuyên nghiệp, tiết kiệm và hài lòng nhất cho khách hàng.',
      servicesTitle: 'Dịch vụ vận tải nội địa của NHẬT MINH HUY bao gồm:',
      services: [
        'Vận tải đường bộ nội địa',
        'Vận tải đường thủy nội địa',
        'Vận tải đa phương thức'
      ],
      route: 'Tuyến đường vận chuyển: từ Bắc vào Nam và từ Nam ra Bắc.',
      cargo: 'Loại hàng hóa: hàng container, hàng lẻ.',
      backToServices: 'Quay lại Dịch vụ'
    },
    en: {
      title: 'INLAND TRANSPORT',
      intro: 'NHAT MINH HUY owns a team of professional and reputable drivers along with long-term cooperation with partners, domestic shipping companies, domestic airlines, and domestic railway companies. We always optimize shipping plans for customers to minimize costs and shipping time from anywhere in the territory of Vietnam with absolute safety. Please let NHAT MINH HUY know where customers need to ship from, we will advise on the most professional, economical and satisfactory shipping plan for customers.',
      servicesTitle: 'NHAT MINH HUY\'s domestic transport service includes:',
      services: [
        'Inland road transport',
        'Inland waterway transport',
        'Multi-modal transport'
      ],
      route: 'Transport route: from North to South and from South to North.',
      cargo: 'Type of cargo: container cargo, retail cargo.',
      backToServices: 'Back to Services'
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ chuyển máy CNC.jpg" activePage="services">
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
        
        <div>
          <h2 className="text-xl font-bold text-[#1F5F9E] mb-3">{t.servicesTitle}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
            {t.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        
        <p className="text-gray-800 leading-relaxed text-lg">{t.route}</p>
        <p className="text-gray-800 leading-relaxed text-lg">{t.cargo}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ chuyển máy bằng rùa điện.png"
              alt="Dịch vụ chuyển máy bằng rùa điện"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ chuyển máy CNC.jpg"
              alt="Dịch vụ chuyển máy CNC"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ chuyển máy ép nhựa bằng rùa điện.jpg"
              alt="Dịch vụ chuyển máy ép nhựa bằng rùa điện"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ chuyển máy ép nhựa.jpg"
              alt="Dịch vụ chuyển máy ép nhựa"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ giao máy in bằng khung nâng.jpg"
              alt="Dịch vụ giao máy in bằng khung nâng"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ giao máy in.jpg"
              alt="Dịch vụ giao máy in"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ giao máy y tế 2.jpg"
              alt="Dịch vụ giao máy y tế"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ giao máy Y Tế.jpg"
              alt="Dịch vụ giao máy Y Tế"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </BaubergerLayout>
  )
}
