import OwnerLayout from "@components/layouts/owner";
import ShopForm from "@components/shop/shop-form";
import { adminAndOwnerOnly } from "@utils/auth-utils";
import { GetStaticProps } from "next";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';


export default function CreateShopPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-shop")}
        </h1>
      </div>
      <ShopForm />
    </>
  );
}
CreateShopPage.authenticate = {
  permissions: adminAndOwnerOnly,
};
CreateShopPage.Layout = OwnerLayout;


