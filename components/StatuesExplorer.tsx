"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Statue } from "@/app/src/types/statue";

type Props = { initialData: Statue[] };

export default function StatuesExplorer({ initialData }: Props) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return initialData;
    return initialData.filter((s) =>
      (s.titulo?.toLowerCase().includes(term)) ||
      (s.tags || []).some((t) => t.toLowerCase().includes(term))
    );
  }, [q, initialData]);

  return (
    <>
      {/* Filtro interactivo (ahora sí, en Client Component) */}
      <div className="mb-6">
        <input
          className="input input-bordered w-full md:max-w-md"
          placeholder="Buscar por título o tag…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* Listado */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((s) => (
          <li key={s.slug} className="card bg-base-100 shadow">
            <figure className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={s.imagen || "/images/placeholder.jpg"}
                alt={s.titulo}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{s.titulo}</h2>
              <p className="text-sm text-base-content/70 line-clamp-3">
                {s.resumen_corto}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.tags?.map((t) => (
                  <span key={t} className="badge badge-outline">{t}</span>
                ))}
              </div>
              <div className="card-actions justify-end mt-4">
                <Link href={`/estatuas/${s.slug}`} className="btn btn-primary">
                  Ver ficha
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
