import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
interface Props {
  message: string | undefined;
}

const ValidationError = ({ message }: Props) => {
  const { t } = useTranslation();
  return <p className="my-2 text-sm text-start text-red-500">{t(message!)}</p>;
};

export default ValidationError;
