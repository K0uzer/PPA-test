"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENCIES, type Currency } from "@/lib/currency/types";

import { useCurrency } from "./currency-provider";

const CURRENCY_LABELS: Record<Currency, string> = {
  THB: "THB — тайский бат",
  USD: "USD — доллар США",
  EUR: "EUR — евро",
  RUB: "RUB — российский рубль",
};

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select
      value={currency}
      onValueChange={(value) => {
        if (value) {
          setCurrency(value as Currency);
        }
      }}
    >
      <SelectTrigger
        aria-label="Выбор валюты"
        className="min-w-[7rem]"
        size="sm"
      >
        <SelectValue>{currency}</SelectValue>
      </SelectTrigger>
      <SelectContent className="min-w-[15rem]" align="end">
        {CURRENCIES.map((code) => (
          <SelectItem key={code} value={code}>
            {CURRENCY_LABELS[code]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
