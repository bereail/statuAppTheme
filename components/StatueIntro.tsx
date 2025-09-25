"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, Lightbulb } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"; // fallback si no existe, uso clases

export default function StatueIntro() {
  const [open, setOpen] = useState(false);

  const btnSm =
    buttonVariants?.({ size: "sm" }) ??
    "inline-block rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90";

  return (
    <section
      className={[
        "rounded-2xl border border-base-300",
        "bg-base-200/40 backdrop-blur supports-[backdrop-filter]:bg-base-200/30",
        "p-6 shadow-md",
        "bg-gradient-to-b from-base-200/40 to-base-300/20",
      ].join(" ")}
    >
      {/* Título con icono tipo estatua/columna */}
      <div className="flex items-center gap-3 text-base-content">
        <span className="rounded-full bg-primary/10 p-2">
          <Landmark className="size-5 text-primary" aria-hidden="true" />
        </span>
        <h2 className="text-lg sm:text-xl font-semibold">¿Qué es una “estatua”?</h2>
      </div>

      <p className="mt-2 leading-relaxed text-sm sm:text-base text-base-content/80">
        Viene del latín <b>statua</b>, derivado de <b>statuō</b> (“erigir”, “colocar de pie”) y
        relacionado con <b>stare</b> (“permanecer”). En esencia: <b>algo que se mantiene firme y erguido</b>.
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="dato-curioso"
        className={[
          "mt-3 inline-flex items-center gap-2 rounded-lg",
          "px-3 py-2 text-sm",
          "ring-1 ring-inset ring-base-300",
          "bg-base-100/40 hover:bg-base-100/60",
          "text-base-content/80 hover:text-base-content transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        ].join(" ")}
      >
        {open ? "Ocultar dato curioso" : "Ver dato curioso"}
      </button>

      {open && (
        <div id="dato-curioso" className="mt-4 space-y-3 text-base-content/80">
          {/* Lamparita al lado del texto */}
          <div className="flex items-start gap-2 text-sm text-base-content/60">
            {/* si preferís con “pill”: envuelve en un span con bg */}
            {/* <span className="rounded-full bg-primary/10 p-1"> */}
            <Lightbulb className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
            {/* </span> */}
            <p>
              <b>Dato curioso:</b> en 1988 se presentó en Viena una <b>estatuilla paleolítica</b>
              que representa a un humano en movimiento —¡hecha hace ~30&nbsp;000 años!
            </p>
          </div>

          <Link href="/cronologia" className={btnSm}>
            Ver cronología de estatuas en Rosario
          </Link>
        </div>
      )}
    </section>
  );
}
