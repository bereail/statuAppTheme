// components/Portfolio.tsx
import Image from "next/image";
import Link from "next/link";
import Title from "./shared/tittle";
import { buttonVariants } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Si tu data ya tiene estos campos, listo. Si no, agregalos poco a poco.
type EstatuaItem = {
  id: string | number;
  title: string;
  image: string;
  slug?: string; // ej: "busto-isaac-newell"
  urlGithub?: string;
  urlDemo?: string;
  resumen_corto?: string;
  autor?: { nombre?: string };
  anio?: number;
  material?: string;
  ubicacion?: { nombre?: string };
};

// IMPORTANTE: tu import real
import { dataEstatuas } from "@/data";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Estatuas cargadas 🗿" />

      <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataEstatuas.map((data: EstatuaItem) => {
          const detalleHref = data.slug
            ? `/estatuas/${data.slug}`
            : (data.urlDemo ?? "#");

          return (
            <div key={data.id} className="rounded-2xl bg-card p-4 shadow-sm">
              <h3 className="text-xl mb-4">{data.title}</h3>

              {/* Imagen con mini info en HoverCard */}
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className="relative w-full overflow-hidden rounded-2xl">
                    {/* Mantiene proporción y recorta prolijo */}
                    <div className="relative aspect-square">
                      <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  {/* MINI INFO */}
                  {data.resumen_corto && (
                    <p className="text-sm text-muted-foreground">
                      {data.resumen_corto}
                    </p>
                  )}

                  <div className="mt-3 grid gap-1 text-sm">
                    {data.autor?.nombre && (
                      <div>
                        <b>Autor:</b> {data.autor.nombre}
                      </div>
                    )}
                    {data.anio && (
                      <div>
                        <b>Año:</b> {data.anio}
                      </div>
                    )}
                    {data.material && (
                      <div>
                        <b>Material:</b> {data.material}
                      </div>
                    )}
                    {data.ubicacion?.nombre && (
                      <div>
                        <b>Ubicación:</b> {data.ubicacion.nombre}
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Botones */}
              <div className="mt-5 flex gap-3">
                {data.urlGithub && (
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={data.urlGithub}
                    target="_blank"
                  >
                    Ver Info
                  </Link>
                )}

                <Link className={buttonVariants()} href={detalleHref}>
                  Ver detalle
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
