"use client";

import Image from "next/image";
import Link from "next/link";
import Title from "./shared/tittle";
import { buttonVariants } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

import { mergeEstatuas } from "@/app/src/utils/estatuas";

const Portfolio = () => {
  const dataEstatuas = mergeEstatuas(); // 👈 ya tenés {title, image, resumen_corto, urlDemo, ...}

  return (
    <section className="p-4 md:py-24 mx-auto max-w-6xl" id="Estatuas">
      <Title title="" subtitle="Estatuas cargadas 🗿" />

      <Carousel className="mt-8" opts={{ align: "start", loop: true }}>
        <CarouselContent className="gap-6">
          {dataEstatuas.map((data) => {
            const detalleHref = data.urlDemo || (data.slug ? `/estatuas/${data.slug}` : "#");
            const resumen = data.resumen_corto ?? null;

            return (
              <CarouselItem key={data.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                <article className="h-full rounded-2xl bg-card p-4 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 line-clamp-2">{data.title}</h3>

                  <HoverCard openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button
                        type="button"
                        className="relative w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                        aria-label={`Más info de ${data.title}`}
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </button>
                    </HoverCardTrigger>

                    <HoverCardContent className="w-80">
                      {resumen ? (
                        <p className="text-sm text-muted-foreground">{resumen}</p>
                      ) : (
                        <p className="text-sm italic text-muted-foreground">Sin resumen disponible.</p>
                      )}
                      <div className="mt-3">
                        <Link href={detalleHref} className={buttonVariants({ size: "sm" })}>
                          Ver detalle
                        </Link>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <div className="mt-5 flex gap-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={buttonVariants({ variant: "outline", size: "sm" })}
                          aria-label={`Ver info de ${data.title}`}
                        >
                          Ver info
                        </button>
                      </PopoverTrigger>
                      <PopoverContent side="top" align="start" sideOffset={8} className="max-w-xs text-sm bg-popover border border-border">
                        <p className="font-medium">{data.title}</p>
                        <p className="mt-1 text-muted-foreground">{resumen ?? "Sin resumen disponible."}</p>
                        <div className="mt-3">
                          <Link href={detalleHref} className={buttonVariants({ size: "sm" })}>
                            Ver detalle
                          </Link>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Link className={buttonVariants({ size: "sm" })} href={detalleHref}>
                      Ver detalle
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default Portfolio;
