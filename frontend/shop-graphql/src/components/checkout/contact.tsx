import { useState } from "react";
import ContactForm from "./contact-form";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

interface ContactProps {
  user: any;
  count: number;
}

const Contact = ({ user, count }: ContactProps) => {
  const { t } = useTranslation("common");
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="flex items-center space-s-4">
        {count && (
          <span className="rounded-full w-8 h-8 bg-accent flex items-center justify-center text-xl text-light">
            {count}
          </span>
        )}
        <p className="text-xl text-heading capitalize">
          {t("text-contact-number")}
        </p>
      </div>
      {user?.profile?.contact && !edit ? (
        <>
          <p>{user.profile.contact}</p>
          <button onClick={() => setEdit(true)}>{t("text-edit")}</button>
        </>
      ) : (
        <ContactForm
          initialValues={user?.profile?.contact}
          userId={user?.id}
          profileId={user?.profile?.id}
        />
      )}
    </>
  );
};

export default Contact;
