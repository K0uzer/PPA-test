import Image from "next/image";

import { Price } from "@/components/price";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

function formatArea(areaSqm: number): string {
  return new Intl.NumberFormat("ru-RU").format(areaSqm);
}

export function PropertyCard({ property }: PropertyCardProps) {

  const { imageSrc, imageAlt, title, location, priceThb, areaSqm, id } = property

  return (
    <Card className="h-full overflow-hidden transition-shadow cursor-pointer hover:shadow-md">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority={id === "1"}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-base leading-snug">{title}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Цена</p>
          <Price
            amountThb={priceThb}
            className="text-lg font-semibold tracking-tight"
          />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Площадь</p>
          <p className="font-medium tabular-nums">
            {formatArea(areaSqm)} м²
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
