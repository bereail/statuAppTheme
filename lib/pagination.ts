// src/lib/pagination.ts
export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

// ¿Hay más páginas?
export const hasNext = <T>(p?: Paginated<T> | null) => Boolean(p?.next);
export const hasPrev = <T>(p?: Paginated<T> | null) => Boolean(p?.previous);

// Extraer el "page" de una URL ?page=2 (sirve para UI)
export function getPageNumber(url: string | null): number | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const val = u.searchParams.get("page");
    return val ? Number(val) : null;
  } catch {
    return null;
  }
}

// Merge de páginas (append)
export function appendResults<T>(a: Paginated<T>, b: Paginated<T>): Paginated<T> {
  return {
    count: b.count,           // puedes mantener el último count (o el mayor)
    next: b.next,
    previous: a.previous,
    results: [...a.results, ...b.results],
  };
}
