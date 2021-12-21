import Button from "@components/ui/button";
import { useModalAction } from "@components/ui/modal/modal.context";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export default function JoinButton() {
  const { t } = useTranslation("common");
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal("LOGIN_VIEW");
  }
  return (
    <Button className="font-semibold" size="small" onClick={handleJoin}>
      {t("join-button")}
    </Button>
  );
}
