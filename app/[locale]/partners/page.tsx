import { use } from 'react'
import Image from 'next/image'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function PartnersPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'ĐỐI TÁC - KHÁCH HÀNG',
      subtitle: 'Chúng tôi tự hào được hợp tác với các đối tác và khách hàng uy tín',
      partners: [
        { name: 'Vietnam Airlines', logo: '/images/partner/ic_vietnam_airlines.png' },
        { name: 'EMS Việt Nam', logo: '/images/partner/ic_ems.png' },
        { name: 'CJ Gemadept Logistics', logo: '/images/partner/ic_gemadept.png' },
        { name: 'CJ Cầu Tre', logo: '/images/partner/ic_cjcautre.png' },
        { name: 'Nội Thất Nhựa Đài Loan Vinh Phát', logo: '/images/partner/ic_noithatnhadailoanvinhphat.jpeg' },
        { name: 'Coteccons', logo: '/images/partner/ic_coteccons.jpg' },
        { name: 'Hoa Sen Group', logo: '/images/partner/ic_hoasen.png' },
        { name: 'Tôn Nam Kim', logo: '/images/partner/ic_tonnamkim.png' },
        { name: 'Phong Phú', logo: '/images/partner/ic_phongphu.jpg' },
        { name: 'TH True Milk', logo: '/images/partner/ic_thtruemilk.png' },
        { name: 'Tuệ Đức - Đông y chân truyền', logo: '/images/partner/ic_tueduc.jpg' },
        { name: 'BioPharma', logo: '/images/partner/ic_biopharma.png' },
        { name: 'Hòa Phát', logo: '/images/partner/ic_hoaphat.png' },
        { name: 'TTC', logo: '/images/partner/ic_ttc.webp' },
        { name: 'VNSTEEL - Thép Miền Nam', logo: '/images/partner/ic_vnsteel.jpg' },
        { name: 'Quatest 3', logo: '/images/partner/ic_quatest3.png' },
        { name: 'Quacert', logo: '/images/partner/ic_quacert.png' },
        { name: 'Vinacontrol', logo: '/images/partner/ic_vinacontrol.png' },
        { name: 'Viện Vệ Sinh Y Tế Công Cộng TP. HCM (IHPH)', logo: '/images/partner/ic_iph.jpeg' },
        { name: 'VIF Vietnamcontrol', logo: '/images/partner/ic_vietnamcontrol.png' }
      ]
    },
    en: {
      title: 'OUR PARTNERS & CLIENTS',
      subtitle: 'We are proud to cooperate with prestigious partners and clients',
      partners: [
        { name: 'Vietnam Airlines', logo: '/images/partner/ic_vietnam_airlines.png' },
        { name: 'EMS Vietnam', logo: '/images/partner/ic_ems.png' },
        { name: 'CJ Gemadept Logistics', logo: '/images/partner/ic_gemadept.png' },
        { name: 'CJ Cau Tre', logo: '/images/partner/ic_cjcautre.png' },
        { name: 'Taiwan Plastic Furniture Vinh Phat', logo: '/images/partner/ic_noithatnhadailoanvinhphat.jpeg' },
        { name: 'Coteccons', logo: '/images/partner/ic_coteccons.jpg' },
        { name: 'Hoa Sen Group', logo: '/images/partner/ic_hoasen.png' },
        { name: 'Nam Kim Steel', logo: '/images/partner/ic_tonnamkim.png' },
        { name: 'Phong Phu', logo: '/images/partner/ic_phongphu.jpg' },
        { name: 'TH True Milk', logo: '/images/partner/ic_thtruemilk.png' },
        { name: 'Tue Duc - Traditional Oriental Medicine', logo: '/images/partner/ic_tueduc.jpg' },
        { name: 'BioPharma', logo: '/images/partner/ic_biopharma.png' },
        { name: 'Hoa Phat', logo: '/images/partner/ic_hoaphat.png' },
        { name: 'TTC', logo: '/images/partner/ic_ttc.webp' },
        { name: 'VNSTEEL - Southern Steel', logo: '/images/partner/ic_vnsteel.jpg' },
        { name: 'Quatest 3', logo: '/images/partner/ic_quatest3.png' },
        { name: 'Quacert', logo: '/images/partner/ic_quacert.png' },
        { name: 'Vinacontrol', logo: '/images/partner/ic_vinacontrol.png' },
        { name: 'Institute of Public Health Ho Chi Minh City (IHPH)', logo: '/images/partner/ic_iph.jpeg' },
        { name: 'VIF Vietnamcontrol', logo: '/images/partner/ic_vietnamcontrol.png' }
      ]
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ giao máy Y Tế.jpg" activePage="partners">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>
      <p className="text-xl text-gray-800 mb-12">{t.subtitle}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {t.partners.map((partner, index) => (
          <div key={index} className="glass-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-2xl">
            <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden bg-white p-3">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-800">{partner.name}</p>
          </div>
        ))}
      </div>
    </BaubergerLayout>
  )
}
