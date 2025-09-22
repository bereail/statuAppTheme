// src/lib/statues.ts
import type { Paginated } from "@/types/pagination"; // o donde lo definiste
import type { StatueDetailApi, StatueDetail, StatueList } from "../../types/statue";
//import type { StatueDetailApi, StatueDetail, StatueList } './'

export const PLACEHOLDER_IMG = "/images/placeholder.jpg";

// Normaliza el slug (por si llega con mayúsculas o espacios)
export function normalizeSlug(slug: string) {
  return slug
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

// Toma la primera foto disponible
export function imageFromMedias(
  medias?: StatueDetailApi["medias"]
): string | null {
  const foto = medias?.find(m => m.tipo === "foto" && !!m.url);
  return foto?.url ?? null;
}

// API -> UI (detalle)
export function toStatueDetail(api: StatueDetailApi): StatueDetail {
  return {
    slug: normalizeSlug(api.slug),
    title: api.titulo,
    barrio: api.barrio ?? api.location?.barrio ?? null,
    year: api.anio ?? null,
    material: api.material ?? null,
    descriptionMd: api.descripcion_md ?? null,
    shortSummary: api.resumen_corto ?? null,
    longSummary: api.resumen_extenso ?? null,
    funFact: api.dato_curioso ?? null,
    // Fallback: si no viene lat/lng al tope, usa los de location
    lat: api.lat ?? api.location?.lat ?? null,
    lng: api.lng ?? api.location?.lng ?? null,
    authorName: api.author?.nombre ?? null,
    locationName: api.location?.nombre ?? null,
    medias: api.medias?.map(m => ({
      id: m.id,
      kind: m.tipo,
      url: m.url,
      caption: m.pie ?? null,
      credit: m.credito ?? null,
    })) ?? [],
  };
}

// API -> UI (ítem de lista)
export function toStatueListItem(api: StatueDetailApi): StatueList {
  return {
    slug: normalizeSlug(api.slug),
    title: api.titulo,
    barrio: api.barrio ?? api.location?.barrio ?? null,
    image: imageFromMedias(api.medias) ?? PLACEHOLDER_IMG,
  };
}

// Paginated mapeado (detalle o lista)
export function mapPaginated<TIn, TOut>(
  page: Paginated<TIn>,
  mapper: (x: TIn) => TOut
): Paginated<TOut> {
  return {
    count: page.count,
    next: page.next,
    previous: page.previous,
    results: page.results.map(mapper),
  };
}
