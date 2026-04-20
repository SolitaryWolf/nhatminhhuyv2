import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function ContactPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'LIÊN HỆ',
      companyName: 'CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VẬN TẢI NHẬT MINH HUY',
      address: 'Địa chỉ',
      addressValue: '166/2Q Trần Văn Dư, Phường Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam',
      phone: 'Điện thoại',
      phoneValue: '(84) 968 903 913 (Mr. Huy - Manager)',
      email: 'Email',
      emailValue: 'huy@nhatminhhuy.com',
      taxCode: 'Mã số thuế',
      taxCodeValue: '0316926982',
    },
    en: {
      title: 'CONTACT',
      companyName: 'NHAT MINH HUY TRANSPORT SERVICE TRADING COMPANY LIMITED',
      address: 'Address',
      addressValue: '166/2Q Tran Van Du Street, Tan Binh Ward, Ho Chi Minh City, Vietnam',
      phone: 'Phone',
      phoneValue: '(84) 968 903 913 (Mr. Huy - Manager)',
      email: 'Email',
      emailValue: 'huy@nhatminhhuy.com.com',
      taxCode: 'Tax Code',
      taxCodeValue: '0316926982',
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Hình ảnh văn phòng và kho đồ nghề.jpg" activePage="contact">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>

      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-6">{t.companyName}</h2>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="font-semibold text-[#1F5F9E] block mb-2">{t.address}:</span>
            <p className="text-gray-800">{t.addressValue}</p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="font-semibold text-[#1F5F9E] block mb-2">{t.phone}:</span>
            <p className="text-gray-800">
              <a href="tel:0968903913" className="text-[#1F5F9E] hover:text-[#FFD900] transition-colors font-semibold">{t.phoneValue}</a>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="font-semibold text-[#1F5F9E] block mb-2">{t.email}:</span>
            <p className="text-gray-800">
              <a href="mailto:huy@nhatminhhuy.com.com" className="text-[#1F5F9E] hover:text-[#FFD900] transition-colors font-semibold">{t.emailValue}</a>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="font-semibold text-[#1F5F9E] block mb-2">{t.taxCode}:</span>
            <p className="text-gray-800">{t.taxCodeValue}</p>
          </div>
        </div>
      </div>
    </BaubergerLayout>
  )
}
