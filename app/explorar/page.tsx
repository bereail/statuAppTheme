import StatuesExplorer from "@/components/StatuesExplorer";
import { statuesData } from "@/app/src/data/statues"; // StatueDetailApi[]
import { toStatueDetail } from "@/app/src/types/statue";

export default function ExplorarPage() {
  const initialData = statuesData.map(toStatueDetail); // → StatueDetail[]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explorar</h1>
      <StatuesExplorer initialData={initialData} />
    </main>
  );
}
