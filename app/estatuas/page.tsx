// app/estatuas/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Estatuas — StatuApp",
};

export default function EstatuasPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Estatuas</h1>
      <p className="text-muted-foreground mb-4">
        Elegí una estatua o explorá el listado completo.
      </p>
      <Link className="btn btn-primary" href="/explorar">
        Ir a Explorar
      </Link>
    </main>
  );
}
