import type { Currency } from "./types";

/** Static conversion rates from 1 THB to the target currency. */
export const EXCHANGE_RATES: Record<Currency, number> = {
  THB: 1,
  USD: 0.0286,
  EUR: 0.0263,
  RUB: 2.57,
};

export function convertFromThb(amountThb: number, currency: Currency): number {
  return amountThb * EXCHANGE_RATES[currency];
}
