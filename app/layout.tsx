import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CurrencyProvider } from "@/components/currency-provider";
import { Header } from "@/components/header";
import { parseCurrencyCookie } from "@/lib/currency/cookie";
import { CURRENCY_COOKIE_NAME } from "@/lib/currency/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Недвижимость — каталог объектов",
  description:
    "Мини-приложение для просмотра объектов недвижимости с переключением валюты",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialCurrency = parseCurrencyCookie(
    cookieStore.get(CURRENCY_COOKIE_NAME)?.value,
  );

  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <CurrencyProvider initialCurrency={initialCurrency}>
          <Header />
          <main className="flex-1">{children}</main>
        </CurrencyProvider>
      </body>
    </html>
  );
}
