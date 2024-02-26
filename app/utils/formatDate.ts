import { Locale, format, parseISO } from "date-fns";

import en from "date-fns/locale/en-US";

type Options = Parameters<typeof format>[2];

const getLocale = (): Locale => {
  // const locale = I18n.currentLocale().split("-")[0]
  // return locale === "ar" ? ar : locale === "ko" ? ko : en
  return en;
};

export const formatDate = (
  date: string,
  dateFormat?: string,
  options?: Options,
) => {
  const locale = getLocale();
  const dateOptions = {
    ...options,
    locale,
  };
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions);
};
