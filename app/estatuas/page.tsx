import type { Metadata } from "next";
import { statuesData } from "../src/data/statues";
import StatuesExplorer from "@/components/StatuesExplorer";

export const metadata: Metadata = {
  title: "Estatuas de Rosario — StatuApp",
  description: "Catálogo de estatuas y monumentos de Rosario",
};

export default function StatuesPage() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Estatuas de Rosario</h1>
        <p className="text-base-content/70">
          Explorá el patrimonio escultórico: autores, materiales, ubicaciones y más.
        </p>
      </header>

      {/* 👇 Toda la interactividad vive en el componente cliente */}
      <StatuesExplorer initialData={statuesData} />
    </section>
  );
}
