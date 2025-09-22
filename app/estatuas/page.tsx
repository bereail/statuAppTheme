// app/statues/page.tsx
import Image from "next/image";
import Link from "next/link";
import { mapPaginated, toStatueListItem } from "../src/data/statues";
import type { Paginated } from "@/lib/pagination";
import type { StatueDetailApi, StatueList } from "../src/types/statue";


async function fetchPage(url = `${process.env.NEXT_PUBLIC_API_BASE}/statues`) {
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  const apiPage: Paginated<StatueDetailApi> = await res.json();
  const uiPage: Paginated<StatueList> = mapPaginated(apiPage, toStatueListItem);
  return uiPage;
}

export default async function StatuesIndex() {
  const page = await fetchPage();
  if (!page) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Estatuas</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {page.results.map(item => (
          <Link
            key={item.slug}
            href={`/statues/${item.slug}`}
            className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative mb-3 aspect-square overflow-hidden rounded-xl">
              <Image src={item.image ?? "/images/placeholder.jpg"} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.barrio && <p className="text-sm text-base-content/70">{item.barrio}</p>}
          </Link>
        ))}
      </div>
    </section>
  );
}
