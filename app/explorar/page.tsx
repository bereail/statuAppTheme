// app/explorar/page.tsx
import StatuesExplorer from "@/components/StatuesExplorer";
import { statuesData } from "@/app/src/data/statues"; // o fetch a tu API

export default function ExplorarPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explorar</h1>
      <StatuesExplorer initialData={statuesData} />
    </main>
  );
}
