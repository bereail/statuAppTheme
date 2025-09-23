"use client";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"; // si no lo tenés, cambialo por clases tailwind

export default function StatueIntro() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={[
        // capa base: se integra al dark theme
        "rounded-2xl border border-base-300",
        "bg-base-200/40 backdrop-blur supports-[backdrop-filter]:bg-base-200/30",
        "p-6 shadow-md",
        // gradiente sutil arriba → abajo, opcional
        "bg-gradient-to-b from-base-200/40 to-base-300/20",
      ].join(" ")}
    >
      <h2 className="text-lg sm:text-xl font-semibold text-base-content">
        ¿Qué es una “estatua”?
      </h2>

      <p className="mt-2 leading-relaxed text-sm sm:text-base text-base-content/80">
        Viene del latín <b>statua</b>, derivado de <b>statuō</b> (“erigir”, “colocar de pie”) y
        relacionado con <b>stare</b> (“permanecer”). En esencia: <b>algo que se mantiene firme y erguido</b>.
      </p>

      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="historia-estatua"
        className={[
          "mt-3 inline-flex items-center gap-2 rounded-lg",
          "px-3 py-2 text-sm",
          "ring-1 ring-inset ring-base-300",
          "bg-base-100/40 hover:bg-base-100/60",
          "text-base-content/80 hover:text-base-content transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        ].join(" ")}
      >
        {open ? "Ocultar historia" : "Ver historia breve"}
      </button>

      {open && (
        <div id="historia-estatua" className="mt-4 space-y-3 text-base-content/80">
          <p className="leading-relaxed">
            La <b>escultura</b> es antiquísima: desde el <b>Paleolítico</b> hay figuras talladas en marfil con más
            de <b>30 000 años</b>. También destaca el <b>Ídolo de Shigir</b> (c. 9000 a. C.). Con el tiempo,
            culturas como <b>Egipto</b>, <b>China</b>, <b>India</b> y <b>Mesopotamia</b> perfeccionaron técnicas
            en piedra y metal para homenajear dioses, líderes e ideas.
          </p>

          <p className="text-sm text-base-content/60">
            <b>Dato curioso:</b> en 1988 se presentó en Viena una <b>estatuilla paleolítica</b> que representa
            a un humano en movimiento—¡hecha hace ~30 000 años!
          </p>

          <Link
            href="/estatuas" // 👈 ajusté la ruta a tu app
            className={buttonVariants?.({ size: "sm" }) ??
              "inline-block mt-1 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"}
          >
            Ver cronología de estatuas en Rosario
          </Link>
        </div>
      )}
    </section>
  );
}
