// Internationalization configuration
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'vi', 'de', 'fr'] as const,
} as const

export type Locale = (typeof i18n)['locales'][number]

// Locale labels for language switcher
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  de: 'Deutsch',
  fr: 'Français',
}
