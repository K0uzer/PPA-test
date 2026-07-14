import type { Currency } from "./types";
import { convertFromThb } from "./rates";

const CURRENCY_LOCALES: Record<Currency, string> = {
  THB: "th-TH",
  USD: "en-US",
  EUR: "de-DE",
  RUB: "ru-RU",
};

export function formatPrice(amountThb: number, currency: Currency): string {
  const converted = convertFromThb(amountThb, currency);

  return new Intl.NumberFormat(CURRENCY_LOCALES[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "THB" || currency === "RUB" ? 0 : 2,
    minimumFractionDigits: currency === "THB" || currency === "RUB" ? 0 : 2,
  }).format(converted);
}
