"use client";

import { formatPrice } from "@/lib/currency/format";
import { cn } from "@/lib/utils";

import { useCurrency } from "./currency-provider";

type PriceProps = {
  amountThb: number;
  className?: string;
};

export function Price({ amountThb, className }: PriceProps) {
  const { currency } = useCurrency();

  return (
    <span className={cn("tabular-nums", className)}>
      {formatPrice(amountThb, currency)}
    </span>
  );
}
