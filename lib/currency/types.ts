export const CURRENCIES = ["THB", "USD", "EUR", "RUB"] as const;

export type Currency = (typeof CURRENCIES)[number];

export const DEFAULT_CURRENCY: Currency = "THB";

export const CURRENCY_COOKIE_NAME = "preferred-currency";

export function isCurrency(value: string): value is Currency {
  return (CURRENCIES as readonly string[]).includes(value);
}
