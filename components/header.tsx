import { CurrencySwitcher } from "@/components/currency-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight">
            Недвижимость
          </span>
          <span className="text-xs text-muted-foreground">
            Объекты в Таиланде
          </span>
        </div>
        <CurrencySwitcher />
      </div>
    </header>
  );
}
