// app/estatuas/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { statuesData, getStatueBySlug } from "@/app/src/data/statues";

export const revalidate = false;

export async function generateStaticParams() {
  return statuesData.map((s) => ({ slug: s.slug }));
}

// 👇 params ahora es Promise<{ slug: string }>
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;               // 👈 await
  const statue = getStatueBySlug(slug);
  if (!statue) return { title: "Estatua no encontrada — StatuApp" };

  const ogImage =
    statue.imagen_url ??
    statue.medias?.find((m) => m.tipo === "foto")?.url ??
    undefined;

  return {
    title: `${statue.titulo} — StatuApp`,
    description: statue.resumen_corto ?? undefined,
    openGraph: ogImage
      ? { title: `${statue.titulo} — StatuApp`, description: statue.resumen_corto ?? undefined, images: [{ url: ogImage, alt: statue.titulo }] }
      : undefined,
  };
}

// 👇 params ahora es Promise<{ slug: string }>
export default async function StatuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;               // 👈 await
  const statue = getStatueBySlug(slug);
  if (!statue) return notFound();

  const img =
    statue.imagen_url ??
    statue.medias?.find((m) => m.tipo === "foto")?.url ??
    "/placeholder.jpg";

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <Link href="/estatuas" className="text-sm text-muted-foreground hover:underline">
        ← Volver
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{statue.titulo}</h1>
        {statue.resumen_corto && <p className="text-muted-foreground">{statue.resumen_corto}</p>}
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image src={img} alt={statue.titulo} fill className="object-cover" />
        </div>

        <div className="space-y-3 text-sm">
          {statue.author?.nombre && <div><b>Autor:</b> {statue.author.nombre}</div>}
          {typeof statue.anio === "number" && <div><b>Año:</b> {statue.anio}</div>}
          {statue.material && <div><b>Material:</b> {statue.material}</div>}

          {statue.location && (
            <div className="space-y-1">
              {statue.location.nombre && <div><b>Ubicación:</b> {statue.location.nombre}</div>}
              {statue.location.direccion && <div><b>Dirección:</b> {statue.location.direccion}</div>}
              {statue.location.barrio && <div><b>Barrio:</b> {statue.location.barrio}</div>}

              {typeof statue.location.lat === "number" &&
                typeof statue.location.lng === "number" && (
                  <Button asChild variant="secondary" size="sm" className="mt-2">
                    <a
                      href={`https://www.google.com/maps?q=${statue.location.lat},${statue.location.lng}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver en Maps
                    </a>
                  </Button>
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
