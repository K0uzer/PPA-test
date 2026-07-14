"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { setCurrencyCookie } from "@/lib/currency/cookie";
import type { Currency } from "@/lib/currency/types";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

type CurrencyProviderProps = {
  children: ReactNode;
  initialCurrency: Currency;
};

export function CurrencyProvider({
  children,
  initialCurrency,
}: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    setCurrencyCookie(next);
  }, []);

  const value = useMemo(
    () => ({ currency, setCurrency }),
    [currency, setCurrency],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }

  return context;
}
