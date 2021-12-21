import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export function formatString(count: number | null | undefined, string: string) {
  if (!count) return `${count} ${string}`;
  return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
  // const { t } = useTranslation();

  // if (!count) return `${count} ${t(string)}`;
  // return count > 1 ? `${count} ${t(string)}s` : `${count} ${t(string)}`;
}
