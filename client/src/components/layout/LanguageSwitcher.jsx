import { useTranslation } from "react-i18next";
import { GlobeIcon } from "../ui/icons";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "id" ? "en" : "id");

  return (
    <button
      onClick={toggleLang}
      className="well-neu flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-primary dark:text-white"
    >
      <GlobeIcon className="w-3.5 h-3.5" />
      {i18n.language === "id" ? "ID" : "EN"}
    </button>
  );
}
