import { use } from 'react'
import Link from 'next/link'
import { BaubergerLayout } from '@/components/layout/BaubergerLayout'

type Params = Promise<{ locale: string }>

export default function LaborSupplyPage({ params }: { params: Params }) {
  const { locale } = use(params)

  const content = {
    vi: {
      title: 'DỊCH VỤ CUNG ỨNG VÀ QUẢN LÝ NGUỒN LAO ĐỘNG',
      description: 'Dịch vụ cho thuê lại lao động phổ thông giúp cho Quý Công Ty chuyển chi phí lương từ định phí sang biến phí, giảm thiểu các rủi ro pháp lý liên quan đến việc cho nghỉ việc hay sa thải người lao động trái pháp luật, Giảm áp lực tuyển dụng, nhân sự ngoài định biên, tính lương, giải quyết chế độ phúc lợi cho người lao động. Tất cả các việc này đều được thực hiện bởi đơn vị cung cấp dịch vụ cho thuê lại lao động phổ thông của Công ty TNHH Thương Mại Dịch Vụ Vận Tải Nhật Minh Huy.',
      backToServices: 'Quay lại Dịch vụ'
    },
    en: {
      title: 'SUPPLY SERVICES AND LABOR RESOURCE MANAGEMENT',
      description: 'Unskilled labor subleasing service helps your Company convert salary costs from fixed costs to variable costs, minimize legal risks related to illegal layoffs or dismissal of workers, reduce pressure on recruitment, salary calculation, and handling welfare regimes for workers. All of this is done by the unskilled labor subleasing service provider of Nhat Minh Huy Transport Service Trading Company Limited.',
      backToServices: 'Back to Services'
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <BaubergerLayout locale={locale} backgroundImage="/images/Họp triển khai công việc.jpg" activePage="services">
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
