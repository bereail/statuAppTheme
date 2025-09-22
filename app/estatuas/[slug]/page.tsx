// app/estatuas/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { statuesData } from "@/app/src/data/statues";

export async function generateStaticParams() {
  return statuesData.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const statue = statuesData.find(s => s.slug === params.slug);
  if (!statue) return { title: "Estatua no encontrada" };
  return {
    title: `${statue.titulo} — StatuApp`,
    description: statue.resumen_corto ?? "",
  };
}

export default function StatuePage({ params }: { params: { slug: string } }) {
  const statue = statuesData.find(s => s.slug === params.slug);
  if (!statue) return notFound();

  const img = statue.imagen_url ?? "/placeholder.jpg";

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <Link href="/estatuas" className="text-sm text-muted-foreground hover:underline">
        ← Volver
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{statue.titulo}</h1>
        <p className="text-muted-foreground">{statue.resumen_corto}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image src={img} alt={statue.titulo} fill className="object-cover" />
        </div>

        <div className="space-y-3 text-sm">
          {statue.autor?.nombre && <div><b>Autor:</b> {statue.autor.nombre}</div>}
          {statue.anio && <div><b>Año:</b> {statue.anio}</div>}
          {statue.material && <div><b>Material:</b> {statue.material}</div>}

          {statue.ubicacion && (
            <div className="space-y-1">
              <div><b>Ubicación:</b> {statue.ubicacion.nombre}</div>
              {statue.ubicacion.direccion && <div><b>Dirección:</b> {statue.ubicacion.direccion}</div>}
              {statue.ubicacion.barrio && <div><b>Barrio:</b> {statue.ubicacion.barrio}</div>}
              {"lat" in statue.ubicacion && "lng" in statue.ubicacion && (
                <Button asChild variant="secondary" size="sm" className="mt-2">
                  <a
                    href={`https://www.google.com/maps?q=${statue.ubicacion.lat},${statue.ubicacion.lng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en Maps
                  </a>
                </Button>
              )}
            </div>
          )}

          {statue.github_url && (
            <Button asChild size="sm">
              <a href={statue.github_url} target="_blank" rel="noreferrer">Repositorio</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
