import { PropertyCard } from "@/components/property/property-card";
import { PROPERTIES } from "@/data/properties";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Каталог недвижимости
        </h1>
        <p className="mt-2 text-muted-foreground">
          Выберите валюту в шапке страницы — цены на карточках обновятся
          автоматически. Базовая цена хранится в тайских батах (THB).
        </p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PROPERTIES.map((property) => (
          <li key={property.id}>
            <PropertyCard property={property} />
          </li>
        ))}
      </ul>
    </div>
  );
}
