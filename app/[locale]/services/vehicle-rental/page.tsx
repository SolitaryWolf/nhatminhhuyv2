import { use } from 'react'
import Link from 'next/link'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function VehicleRentalPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'CHO THUÊ PHƯƠNG TIỆN NÂNG HẠ',
      description: 'Chúng tôi chuyên cho thuê các loại xe nâng, bao gồm xe nâng pallet, xe nâng dầu, xe cẩu thùng, xe cẩu các loại đáp ứng các nhu cầu về xây dựng, sắp xếp hàng hóa, lắp đặt vị trí máy móc, di dời máy móc thiết bị công nghiệp nặng...',
      backToServices: 'Quay lại Dịch vụ'
    },
    en: {
      title: 'LIFTING VEHICLES FOR RENTAL',
      description: 'We specialize in renting all types of forklifts, including pallet forklifts, oil forklifts, tank cranes, and all kinds of cranes to meet the needs of construction, goods arrangement, machinery installation, and relocation of heavy industrial machinery and equipment...',
      backToServices: 'Back to Services'
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Rùa điện 30 tấn.jpg" activePage="services">
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
        <p className="text-gray-800 leading-relaxed text-lg">{t.description}</p>
      </div>
    </BaubergerLayout>
  )
}
