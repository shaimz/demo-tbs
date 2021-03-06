import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import Layout from "@components/layouts/admin";
import CreateOrUpdateTypeForm from "@components/group/group-form";

import { adminOnly } from "@utils/auth-utils";

export default function CreateGroupPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-type")}
        </h1>
      </div>
      <CreateOrUpdateTypeForm />
    </>
  );
}
CreateGroupPage.authenticate = {
  permissions: adminOnly,
};
CreateGroupPage.Layout = Layout;


