"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Media } from "@/app/src/data/statues";

export default function GaleriaEstatua({
  medias,
  titulo,
}: { medias: Media[]; titulo: string }) {
  const fotos = (medias ?? []).filter(m => m.tipo === "foto");

  if (!fotos.length) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted grid place-items-center text-muted-foreground">
        Sin imágenes disponibles
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {fotos.map((m) => (
            <CarouselItem key={m.id}>
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={m.url}
                    alt={m.pie || titulo}
                    fill
                    className="object-cover"
                    // Dejá unoptimized mientras debugueás y luego quitá esta línea:
                    // unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {(m.pie || m.credito) && (
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {m.pie}{m.pie && m.credito ? " — " : ""}{m.credito}
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
