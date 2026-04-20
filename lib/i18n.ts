import { i18n, type Locale } from '@/i18n.config'

export async function getTranslations(locale: Locale) {
  try {
    const translations = await import(`@/locales/${locale}/common.json`)
    return translations.default
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error)
    // Fallback to default locale
    const fallback = await import(`@/locales/${i18n.defaultLocale}/common.json`)
    return fallback.default
  }
}

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale)
}
