# Недвижимость — каталог с переключением валюты

Мини-приложение на Next.js для просмотра списка объектов недвижимости с
переключением отображаемой валюты (THB, USD, EUR, RUB).

## Стек

- Next.js 16 (App Router)
- TypeScript (strict mode)
- React 19
- Tailwind CSS 4
- Shadcn UI

## Крастко:

- Список из 8 карточек недвижимости (хардкод)
- В каждой карточке: название, фото-placeholder, цена и площадь
- Базовая цена хранится в THB
- Dropdown выбора валюты в header
- Сохранение выбора валюты в cookie (между сессиями)
- Корректный SSR без визуального мерцания цены
- Компонент `Price` форматирует сумму с учётом выбранной валюты

## Запуск

Требования: Node.js 20+ и npm.

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

```
app/                 — App Router (layout, page)
components/          — UI и бизнес-компоненты
  price.tsx          — отображение цены в выбранной валюте
  currency-switcher.tsx
  currency-provider.tsx
  property/          — карточка объекта
  ui/                — Shadcn UI
data/properties.ts   — захардкоженные объекты
lib/currency/        — типы, курсы, форматирование, cookie
```

