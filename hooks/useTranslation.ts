import { useRouter } from "next/router";
import { getT, Translation } from "../lib/i18n";

export const useTranslation = (): Translation => {
  const { locale } = useRouter();
  return getT(locale);
};

export default useTranslation;
