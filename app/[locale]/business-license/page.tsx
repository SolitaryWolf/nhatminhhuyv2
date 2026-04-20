'use client'

import Image from 'next/image'
import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

export default function BusinessLicensePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)

  const licenseImages = [
    '/images/business_lic/business_lic.png',
    '/images/business_lic/business_lic2.jpg',
    '/images/business_lic/business_lic3.jpg',
    '/images/business_lic/business_lic4.jpg',
    '/images/business_lic/business_lic5.jpg',
  ]

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Biện pháp thi công trước khi thực hiện.png" activePage="business-license">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {locale === 'vi' ? 'GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP' : 'BUSINESS REGISTRATION CERTIFICATE'}
      </h1>

      <div className="space-y-12">
        {/* First Document - Licenses 1 & 2 */}
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-6">
            {locale === 'vi' ? 'Giấy Chứng Nhận Đăng Ký Doanh Nghiệp' : 'Business Registration Certificate'}
          </h2>
          <div className="glass-card overflow-hidden p-4">
            <div className="relative w-full" style={{ height: '600px' }}>
              <Image
                src={licenseImages[0]}
                alt="Business License 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative w-full max-w-2xl mx-auto" style={{ height: '333px' }}>
              <Image
                src={licenseImages[1]}
                alt="Business License 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Second Document - Licenses 3, 4 & 5 */}
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-6">
            {locale === 'vi' ? 'Giấy Chứng Nhận Thay Đổi Đăng Ký Doanh Nghiệp' : 'Business Registration Amendment Certificate'}
          </h2>
          <div className="glass-card overflow-hidden p-4">
            {licenseImages.slice(2).map((image, index) => (
              <div key={index + 2} className="relative w-full" style={{ minHeight: '600px' }}>
                <Image
                  src={image}
                  alt={`Business License ${index + 3}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 glass-card p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-6">
          {locale === 'vi' ? 'Thông Tin Doanh Nghiệp' : 'Company Information'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="font-semibold text-[#ffa500] mb-2">
              {locale === 'vi' ? 'Mã số doanh nghiệp:' : 'Business Code:'}
            </p>
            <p className="text-gray-800">0316926982</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="font-semibold text-[#ffa500] mb-2">
              {locale === 'vi' ? 'Ngày đăng ký lần đầu:' : 'First Registration Date:'}
            </p>
            <p className="text-gray-800">{locale === 'vi' ? '02/07/2021' : 'July 02, 2021'}</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="font-semibold text-[#ffa500] mb-2">
              {locale === 'vi' ? 'Đăng ký thay đổi:' : 'Latest Amendment:'}
            </p>
            <p className="text-gray-800">{locale === 'vi' ? 'Lần thứ 3, ngày 06/01/2025' : '3rd time, January 06, 2025'}</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="font-semibold text-[#ffa500] mb-2">
              {locale === 'vi' ? 'Vốn điều lệ:' : 'Charter Capital:'}
            </p>
            <p className="text-gray-800">2,000,000,000 VND</p>
          </div>
        </div>
      </div>
    </BaubergerLayout>
  )
}
