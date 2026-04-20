import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function LiftingInstallationPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'NÂNG HẠ, LẮP ĐẶT MÁY MÓC THIẾT BỊ',
      description: 'NHẬT MINH HUY với đội ngũ nhân viên giàu kinh nghiệm, tài xế lành nghề, đã được cấp chứng nhận nghề vận hành xe nâng, xe cẩu các loại,... Với trang thiết bị xe nâng, xe tải, xe cẩu các loại, cộng với các loại trang thiết bị, dụng cụ đồ nghề chuyên dụng như xe nâng tay, đội thủy lực, rùa đẩy máy,... phục vụ cho việc vận chuyển, nâng hạ máy móc thiết bị công nghiệp nặng siêu trường, siêu trọng. Song song với tiềm lực đó chúng tôi còn có nhiều đối tác vận tải hợp tác hỗ trợ tương tác lẫn nhau.',
      backToServices: 'Quay lại Dịch vụ'
    },
    en: {
      title: 'LIFTING AND INSTALLATION OF MACHINERY AND EQUIPMENT',
      description: 'NHAT MINH HUY with a team of experienced staff, skilled drivers, has been certified to operate forklifts, cranes of all kinds,... With equipment for forklifts, trucks, cranes of all kinds, plus with all kinds of specialized equipment and tools such as hand forklifts, hydraulic teams, machine pushers,... serving the transportation and lifting of super long and super heavy industrial machinery and equipment. Along with that potential, we also have many transport partners to cooperate and support mutual interaction.',
      backToServices: 'Back to Services'
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Cẩu máy ép nhựa.jpg" activePage="services">
      <Link 
        href={`/${locale}/services`}
        className="inline-flex items-center text-[#1F5F9E] hover:text-[#FFD900] transition-colors mb-6 font-semibold"
      >
        ← {t.backToServices}
      </Link>
      
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>
      
      <div className="glass-card p-8">
        <p className="text-gray-800 leading-relaxed text-lg mb-8">{t.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Cẩu máy ép nhựa.jpg"
              alt="Cẩu máy ép nhựa"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ cẩu máy.jpg"
              alt="Dịch vụ cẩu máy"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Dịch vụ vận chuyển máy dập bằng rùa điện.jpg"
              alt="Dịch vụ vận chuyển máy dập bằng rùa điện"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Hạ hàng.jpg"
              alt="Hạ hàng"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </BaubergerLayout>
  )
}
