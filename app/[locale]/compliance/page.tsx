import { use } from 'react'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function CompliancePage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'NGUYÊN TẮC TUÂN THỦ',
      customers: {
        title: 'VỚI KHÁCH HÀNG',
        text: 'Chất lượng, uy tín, tiến độ. Luôn thoả mãn các nhu cầu của tất cả các khách hàng với chất lượng tốt nhất. Cởi mở, thân thiện, cầu thị, nhiệt tình và trân trọng.'
      },
      partners: {
        title: 'VỚI ĐỐI TÁC',
        text: 'Xây dựng và giữ gìn mối quan hệ đoàn kết, ổn định, lâu dài và cùng có lợi trên cơ sở truyền thống kinh doanh đáng tin cậy, đảm bảo chất lượng hàng hoá và tôn trọng khách.'
      },
      staff: {
        title: 'VỚI NHÂN VIÊN',
        text: 'Tạo cơ hội học tập, nâng cao trình độ và tác phong làm việc. Tạo cơ hội thăng tiến trên cơ sở hiệu quả công việc, nhằm đảm bảo điều kiện ngày càng tốt hơn cho cuộc sống của nhân viên và sự phát triển bền vững của công ty.'
      },
      community: {
        title: 'VỚI CỘNG ĐỒNG',
        text: 'Tôn vinh và giữ gìn những đạo đức kinh doanh. Hoàn thành trách nhiệm xã hội, chấp hành luật pháp. Tích cực góp phần vào sự phát triển chung của xã hội.'
      }
    },
    en: {
      title: 'COMPLIANCE PRINCIPLES',
      customers: {
        title: 'WITH CUSTOMERS',
        text: 'Quality, prestige, schedule. Always satisfy the needs of all customers with the best quality. Open, friendly, demanding, enthusiastic and respectful.'
      },
      partners: {
        title: 'WITH PARTNERS',
        text: 'Build and maintain solidarity, stable, long-term and mutually beneficial relationships based on reliable business traditions, ensuring product quality and respect for customers.'
      },
      staff: {
        title: 'WITH STAFF',
        text: 'Create opportunities to learn, improve qualifications and working style. Create promotion opportunities based on work performance, to ensure increasingly better conditions for employees lives and sustainable development of the company.'
      },
      community: {
        title: 'WITH COMMUNITY',
        text: 'Honor and preserve business ethics. Fulfill social responsibilities and comply with the law. Actively contribute to the common development of society.'
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Dịch vụ đóng gói máy móc.jpg" activePage="compliance">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8 leading-tight py-2">
        {t.title}
      </h1>

      <div className="space-y-8">
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.customers.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.customers.text}</p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.partners.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.partners.text}</p>
        </section>

         <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.staff.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.staff.text}</p>
        </section>

         <section className="glass-card p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffa500] bg-clip-text text-transparent mb-4">{t.community.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">{t.community.text}</p>
        </section>
      </div>
    </BaubergerLayout>
  )
}
