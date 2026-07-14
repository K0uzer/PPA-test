import {
  CURRENCY_COOKIE_NAME,
  DEFAULT_CURRENCY,
  isCurrency,
  type Currency,
} from "./types";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function parseCurrencyCookie(value: string | undefined): Currency {
  if (value && isCurrency(value)) {
    return value;
  }

  return DEFAULT_CURRENCY;
}

export function setCurrencyCookie(currency: Currency): void {
  document.cookie = [
    `${CURRENCY_COOKIE_NAME}=${currency}`,
    "path=/",
    `max-age=${COOKIE_MAX_AGE_SECONDS}`,
    "SameSite=Lax",
  ].join("; ");
}
