import { estatuasCards } from "@/data/estatuasCards";
import { estatuasDetail } from "@/data/estatuasDetails";

export type EstatuaMerged = {
  id: string | number;
  slug: string;
  title: string;          // preferimos el 'title' del card o 'titulo' del detail
  image: string;          // del card
  urlGithub?: string;
  urlDemo: string;        // del card
  resumen_corto?: string; // del detail
  autor?: { nombre?: string };
  anio?: number | null;
  material?: string | null;
  ubicacion?: { nombre?: string; direccion?: string | null; barrio?: string | null };
};

export function mergeEstatuas(): EstatuaMerged[] {
  const detailBySlug = new Map(estatuasDetail.map(d => [d.slug, d]));
  return estatuasCards.map(card => {
    const d = detailBySlug.get(card.slug);
    return {
      id: card.id,
      slug: card.slug,
      title: card.title ?? d?.titulo ?? "Sin título",
      image: card.image,
      urlGithub: card.urlGithub,
      urlDemo: card.urlDemo,
      resumen_corto: d?.resumen_corto,
      autor: d?.autor,
      anio: d?.anio ?? null,
      material: d?.material ?? null,
      ubicacion: d?.ubicacion ?? undefined,
    };
  });
}
