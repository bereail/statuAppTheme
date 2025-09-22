import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { statuesData } from "@/app/src/data/statues";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return statuesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = statuesData.find((x) => x.slug === params.slug);
  if (!s) return { title: "Estatua no encontrada" };
  return {
    title: `${s.titulo} — StatuApp`,
    description: s.resumen_corto,
    openGraph: { images: s.imagen ? [s.imagen] : [] },
  };
}

export default function StatueDetailPage({ params }: Props) {
  const s = statuesData.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <article className="container mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <h1 className="text-3xl font-bold">{s.titulo}</h1>
        <p className="text-base-content/70">{s.resumen_corto}</p>
        <ul className="text-sm text-base-content/60 flex flex-wrap gap-x-4">
          {s.autor?.nombre && <li><b>Autor:</b> {s.autor.nombre}</li>}
          {s.anio && <li><b>Año:</b> {s.anio}</li>}
          {s.material && <li><b>Material:</b> {s.material}</li>}
        </ul>
      </header>

      <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow">
        <Image
          src={s.imagen || "/images/placeholder.jpg"}
          alt={s.titulo}
          fill
          className="object-cover"
          priority
        />
      </figure>

      <section className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 leading-relaxed">
          <h2 className="text-xl font-semibold">Descripción</h2>
          <p>{s.descripcion_larga || "Próximamente reseña completa."}</p>
        </div>

        <aside className="space-y-4">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-base">Ubicación</h3>
              <p className="text-sm">
                {s.ubicacion?.nombre && <>{s.ubicacion.nombre}<br/></>}
                {s.ubicacion?.direccion && <>{s.ubicacion.direccion}<br/></>}
                {s.ubicacion?.barrio && <>Barrio: {s.ubicacion.barrio}</>}
              </p>
              {typeof s.ubicacion?.lat === "number" && typeof s.ubicacion?.lng === "number" && (
                <a
                  className="btn btn-outline btn-sm mt-3"
                  href={`https://www.google.com/maps?q=${s.ubicacion.lat},${s.ubicacion.lng}`}
                  target="_blank"
                >
                  Ver en Google Maps
                </a>
              )}
            </div>
          </div>

          {s.tags?.length ? (
            <div>
              <h3 className="font-medium mb-2">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </article>
  );
}
