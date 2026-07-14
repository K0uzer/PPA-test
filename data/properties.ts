export type Property = {
  id: string;
  title: string;
  areaSqm: number;
  priceThb: number;
  location: string;
  imageSrc: string;
  imageAlt: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Вилла у пляжа Ката",
    areaSqm: 280,
    priceThb: 18_500_000,
    location: "Пхукет, Ката",
    imageSrc: "/properties/villa_by_Kata_beach.jpg",
    imageAlt: "Вилла с бассейном у тропического побережья",
  },
  {
    id: "2",
    title: "Апартаменты с видом на море",
    areaSqm: 95,
    priceThb: 6_800_000,
    location: "Паттайя, Джомтьен",
    imageSrc: "/properties/apartment_with_sea_view.jpg",
    imageAlt: "Светлая гостиная апартаментов с панорамным окном",
  },
  {
    id: "3",
    title: "Таунхаус в зелёном районе",
    areaSqm: 160,
    priceThb: 4_250_000,
    location: "Бангкок, Сукхумвит",
    imageSrc: "/properties/townhouse_green_area.jpg",
    imageAlt: "Современный таунхаус с зелёным двором",
  },
  {
    id: "4",
    title: "Студия в центре Чиангмая",
    areaSqm: 42,
    priceThb: 2_150_000,
    location: "Чиангмай, старый город",
    imageSrc: "/properties/studio_in the_center_of_Chiang_Mai.jpg",
    imageAlt: "Компактная студия с деревянной мебелью",
  },
  {
    id: "5",
    title: "Бутик-отель на 8 номеров",
    areaSqm: 520,
    priceThb: 32_000_000,
    location: "Самуи, Чавенг",
    imageSrc: "/properties/boutique_hotel_with_8_rooms.jpg",
    imageAlt: "Бутик-отель с бассейном среди пальм",
  },
  {
    id: "6",
    title: "Пентхаус с террасой",
    areaSqm: 210,
    priceThb: 24_700_000,
    location: "Бангкок, Силом",
    imageSrc: "/properties/penthouse_with_terrace.jpg",
    imageAlt: "Пентхаус с просторной террасой и видом на город",
  },
  {
    id: "7",
    title: "Бунгало в тропическом саду",
    areaSqm: 130,
    priceThb: 5_900_000,
    location: "Краби, Ао Нанг",
    imageSrc: "/properties/tropical_garden_bungalow.jpg",
    imageAlt: "Бунгало в окружении тропической зелени",
  },
  {
    id: "8",
    title: "Дуплекс у марины",
    areaSqm: 185,
    priceThb: 11_200_000,
    location: "Пхукет, Раваи",
    imageSrc: "/properties/duplex_marina.jpg",
    imageAlt: "Современный дуплекс у воды",
  },
];
