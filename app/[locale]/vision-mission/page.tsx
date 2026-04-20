import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function VisionMissionPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'TẦM NHÌN & SỨ MỆNH',
      vision: {
        title: 'Tầm nhìn',
        text: 'Tương lai Việt Nam sẽ là trung tâm của hội nhập, sản xuất, tham gia sâu rộng vào chuỗi cung ứng toàn cầu. Xây dựng Nhật Minh Huy trở thành một trong những Doanh Nghiệp cung cấp giải pháp logistics hàng đầu tại Việt Nam nhằm mang đến cho Khách Hàng những dịch vụ chất lượng với chi phí tối ưu.'
      },
      mission: {
        title: 'Sứ mệnh',
        text: 'Hoạt động trên lãnh thổ Việt Nam còn nhiều khó khăn, thách thức nhưng NHẬT MINH HUY cảm nhận được cơ hội vươn ra toàn cầu của nền kinh tế nước nhà. Doanh nghiệp Việt Nam cần cánh tay nối dài ra thị trường quốc tế. Chúng tôi không đặt lợi nhuận là mục tiêu hàng đầu, hơn hết phải là đào tạo được đội ngũ tinh nhuệ nhất giúp được nhiều khách hàng nhất vươn mình ra biển lớn.'
      }
    },
    en: {
      title: 'VISION & MISSION',
      vision: {
        title: 'Vision',
        text: 'In the future, Vietnam will be the center of integration, production, and extensive participation in the global supply chain. Building Nhat Minh Huy to become one of the leading logistics solution providers in Vietnam to provide customers with quality services at optimal costs.'
      },
      mission: {
        title: 'Mission',
        text: 'Operating in the territory of Vietnam still has many difficulties and challenges, but NHAT MINH HUY feels the opportunity to reach out globally of the country\'s economy. Vietnamese enterprises need arms to expand to the international market. We do not put profit as our top goal, but above all we must train the most elite team to help the most customers reach out to the big ocean.'
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ chuyển máy CNC.jpg" activePage="vision-mission">
      <h1 className="text-xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>

      <div className="space-y-8">
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.vision.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.vision.text}</p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.mission.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.mission.text}</p>
        </section>
      </div>
    </BaubergerLayout>
  )
}
