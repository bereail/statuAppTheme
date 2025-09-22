// components/StatueCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { Statue } from "@/app/src/types/statue";

type Props = { statue: Statue };

export default function StatueCard({ statue }: Props) {
  const img = statue.imagen_url ?? "/placeholder.jpg"; // opcional

  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{statue.titulo}</h3>

      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={img}
              alt={statue.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority={false}
            />
          </div>
        </HoverCardTrigger>

        {/* MINI INFO (aparece al pasar el mouse o tocar en mobile) */}
        <HoverCardContent className="w-80">
          <p className="text-sm text-muted-foreground">{statue.resumen_corto}</p>
          <div className="mt-3 grid gap-1 text-sm">
            {statue.autor?.nombre && <div><b>Autor:</b> {statue.autor.nombre}</div>}
            {statue.anio && <div><b>Año:</b> {statue.anio}</div>}
            {statue.material && <div><b>Material:</b> {statue.material}</div>}
            {statue.ubicacion?.nombre && <div><b>Ubicación:</b> {statue.ubicacion.nombre}</div>}
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="mt-4 flex items-center gap-2">
        {/* Botón externo (ej. GitHub) si lo tenías */}
        <Button asChild variant="secondary" size="sm">
          <a href={statue.github_url ?? "#"} target="_blank" rel="noreferrer">Github</a>
        </Button>

        {/* Link a la página de detalle */}
        <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-600/90">
          <Link href={`/estatuas/${statue.slug}`}>Ver detalle</Link>
        </Button>
      </div>
    </div>
  );
}
