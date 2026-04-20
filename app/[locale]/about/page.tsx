'use client'

import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const isVi = locale === 'vi'

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Họp triển khai công việc.jpg" activePage="about">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight">
        {isVi ? 'GIỚI THIỆU' : 'ABOUT US'}
      </h1>

      <div className="glass-card p-8 mb-8">
        <h2 className="text-3xl font-bold text-[#1F5F9E] mb-6">
          {isVi ? 'Thông Tin Doanh Nghiệp' : 'Company Information'}
        </h2>
        <div className="space-y-4 text-gray-800">
          <p className="text-lg">
            <strong>{isVi ? 'Tên Công Ty:' : 'Company Name:'}</strong><br />
            {isVi
              ? 'CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VẬN TẢI NHẬT MINH HUY'
              : 'NHAT MINH HUY TRANSPORT SERVICE TRADING COMPANY LIMITED'}
          </p>
          <p className="text-lg">
            <strong>{isVi ? 'Địa Chỉ:' : 'Address:'}</strong><br />
            {isVi
              ? '166/2Q Trần Văn Dư, Phường Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam'
              : '166/2Q Tran Van Du Street, Tan Binh Ward, Ho Chi Minh City, Vietnam'}
          </p>
          <p className="text-lg">
            <strong>{isVi ? 'Mã Số Thuế:' : 'Tax ID:'}</strong> 0316926982
          </p>
          <p className="text-lg">
            <strong>{isVi ? 'Điện Thoại:' : 'Phone:'}</strong> 0968 903 913
          </p>
          <p className="text-lg">
            <strong>Email:</strong> huy@nhatminhhuy.com
          </p>
        </div>
      </div>

      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold text-[#1F5F9E] mb-6">
          {isVi ? 'Về Chúng Tôi' : 'About Us'}
        </h2>
        <div className="text-lg text-gray-800 space-y-4 leading-relaxed">
          <p>
            {isVi
              ? 'Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Nhật Minh Huy hoạt động trong lĩnh vực cung ứng lao động, cung cấp vật tư, dịch vụ hỗ trợ logistics, các giải pháp hàng đầu về giao nhận và vận chuyển hàng hóa, nâng hạ và lắp đặt máy móc thiết bị.'
              : 'Nhat Minh Huy Transport Service Trading Company Limited operates in the field of labor supply, material supply, logistics support services, leading solutions for freight forwarding and transportation, and lifting and installation of machinery and equipment.'}
          </p>
          <p>
            {isVi
              ? 'Với đội ngũ nhân viên chuyên nghiệp, được đào tạo bài bản, chúng tôi tự tin tiếp nhận mọi nhu cầu của khách hàng. Chúng tôi cam kết mang đến cho khách hàng và đối tác trong và ngoài nước những trải nghiệm dịch vụ tốt nhất, trong thời gian nhanh nhất.'
              : 'With a team of professional and well-trained employees, we confidently accept all customer needs. We are committed to providing domestic and foreign customers and partners with the best service experience, in the fastest time.'}
          </p>
        </div>
      </div>
    </BaubergerLayout>
  )
}
