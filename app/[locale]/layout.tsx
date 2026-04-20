import { getTranslations } from '@/lib/i18n'
import { i18n, type Locale } from '@/i18n.config'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate locale
  if (!i18n.locales.includes(locale as Locale)) {
    notFound()
  }

  return <>{children}</>
}
