// app/src/data/statues/index.ts

export type Media = {
  id: number;
  tipo: "foto" | "audio" | "doc";
  url: string;
  pie?: string | null;
  credito?: string | null;
};

export type StatueDetailApi = {
  slug: string;
  titulo: string;
  barrio?: string | null;
  anio?: number | null;
  material?: string | null;
  descripcion_md?: string | null;
  resumen_corto?: string | null;
  resumen_extenso?: string | null;
  dato_curioso?: string | null;
  lat?: number | null;
  lng?: number | null;
  author?: { id: number; nombre: string } | null;
  location?: {
    id: number;
    nombre: string;
    direccion?: string | null;
    barrio?: string | null;
    lat?: number | null;
    lng?: number | null;
  } | null;
  medias?: Media[];

  // opcional: si querés mantener compat con componentes que ya usen esto
  imagen_url?: string | null;
  github_url?: string | null;
};

export const statuesData: StatueDetailApi[] = [
  {
    slug: "busto-isaac-newell",
    titulo: "Busto de Isaac Newell",
    barrio: "Parque Independencia",
    material: "Cemento (réplica 2022 a partir de molde de caucho); original s/d",
    resumen_corto:
      "Busto en honor a Isaac Newell ubicado en el ingreso al estadio Marcelo Bielsa (Av. Centenario Newell’s O.B. y Av. Intendente Morcillo). Fue decapitado en noviembre de 2021 y repuesto en 2022 mediante una réplica elaborada a partir de un molde permanente.",
    resumen_extenso:
      "El busto se ubica en la intersección de **Av. Centenario Newell’s Old Boys** y **Av. Intendente Morcillo**, frente al estadio **Marcelo Bielsa**, en el Parque de la Independencia.\n\n**Hecho vandálico (2021)**  \n— Madrugada del **14/11/2021 (~02:45)**: el busto fue **decapitado**; circularon imágenes del hecho en redes.  \n— El club repudió el ataque e inició gestiones para su reposición.\n\n**Restauración y reposición (2022)**  \n— El **11/05/2022** el club informó la **restauración y reposición**: se realizó un **molde de caucho** duradero; se produjo una **réplica en cemento**, terminada a mano por escultores y coordinada junto al **Departamento de Cultura** y la **Dirección de Restauración de la Municipalidad de Rosario**.  \n— El molde permite generar **copias futuras** sin retirar la pieza original.\n\n**Isaac Newell**  \nDocente inglés radicado en Rosario; junto a su esposa fundó en **1884** el **Colegio Comercial Anglo Argentino**; su legado educativo y deportivo inspiró la creación del **Club Atlético Newell’s Old Boys** (1903).",
    dato_curioso:
      "Para la reposición se creó un molde permanente que permite hacer copias sin mover la pieza original.",
    author: { id: 1, nombre: "No identificado públicamente" },
    location: {
      id: 1,
      nombre: "Ingreso Estadio Marcelo Bielsa",
      direccion: "Av. Centenario Newell’s O.B. e Int. Morcillo",
      barrio: "Parque Independencia",
      lat: -32.9581,
      lng: -60.6628,
    },
    lat: -32.9581,
    lng: -60.6628,
    medias: [
      {
        id: 1,
        tipo: "foto",
        url: "/images/estatuas/busto-isaac-newell.jpg", // cambialo si querés
        pie: "Busto de Isaac Newell",
        credito: "StatuApp",
      },
    ],
    imagen_url: "/images/estatuas/busto-isaac-newell.jpg",
  },

  {
    slug: "monumento-a-leandro-n-alem",
    titulo: "Monumento a Leandro N. Alem",
    anio: 1943, // reubicación al Parque Alem
    material: "Bronce fundido (pedestal de granito)",
    barrio: "Zona Norte (Parque Alem)",
    resumen_corto:
      "Monumento en bronce a Leandro N. Alem, trasladado al Parque Alem en 1943. Lleva el lema radical «Que se rompa, pero que no se doble».",
    resumen_extenso:
      "El **Monumento a Leandro N. Alem** es una obra del escultor **Guillermo Gianinazzi** en **bronce fundido** sobre **pedestal de granito**. Fue **inaugurada en 1922** en el Parque Independencia y **trasladada el 17/07/1943** a su ubicación actual en el **Parque Alem**.\n\n**Cronología breve**\n- 1922: inauguración en Parque Independencia.  \n- 1943: reubicación al Parque Alem (zona norte).",
    author: { id: 2, nombre: "Guillermo Gianinazzi" },
    location: {
      id: 2,
      nombre: "Parque Leandro N. Alem",
      direccion: null,
      barrio: "Zona Norte",
      lat: -32.91061,
      lng: -60.67779,
    },
    lat: -32.91061,
    lng: -60.67779,
    dato_curioso:
      "En el basamento puede leerse el lema: «Que se rompa, pero que no se doble».",
    medias: [
      {
        id: 2,
        tipo: "foto",
        url: "/images/estatuas/monumento-alem.jpg",
        pie: "Monumento a Leandro N. Alem",
        credito: "StatuApp",
      },
    ],
    imagen_url: "/images/estatuas/monumento-alem.jpg",
  },

  {
    slug: "estatua-de-carlos-gardel",
    titulo: "Estatua de Carlos Gardel",
    anio: 1975,
    material: "Bronce patinado",
    barrio: "Centro — Frente a la Casa del Tango (Av. Illia y España)",
    resumen_corto:
      "Obra en bronce de Reynaldo Baduna, inaugurada el 24/06/1975; trasladada y reinstalada en 2017 frente a la Casa del Tango.",
    resumen_extenso:
      "La estatua de **Carlos Gardel** (c. **2,50 m**, **bronce patinado**) fue creada por **Reynaldo Baduna** y **inaugurada el 24 de junio de 1975** en la **Plazoleta Gardel**. Luego fue **trasladada** y, en **2017**, **reinstalada** frente a la **Casa del Tango**.\n\n**Iconografía**: traje con chaleco, moño, pañuelo; mano izq. en el bolsillo; en la derecha un **cigarrillo** casi consumido.\n\n**Dato**: se colocó un **cofre con tierra de Toulouse** en la base (1975).",
    author: { id: 3, nombre: "Reynaldo Baduna" },
    location: {
      id: 3,
      nombre: "Casa del Tango",
      direccion: "Av. Illia y España",
      barrio: "Centro",
    },
    dato_curioso:
      "Se considera la primera escultura de cuerpo entero de Gardel emplazada en Argentina (excepto su mausoleo).",
    medias: [
      {
        id: 3,
        tipo: "foto",
        url: "/images/estatuas/gardel.jpg",
        pie: "Estatua de Gardel",
        credito: "StatuApp",
      },
    ],
    imagen_url: "/images/estatuas/gardel.jpg",
  },

  {
    slug: "monumento-a-la-madre",
    titulo: "Monumento a la Madre",
    anio: 1967,
    material: "Bronce (cera perdida)",
    barrio: "Parque Independencia",
    resumen_corto:
      "Obra en bronce de José Gerbino, inaugurada el 10/12/1967 en el Rosedal. Madre con hijos sobre globo como símbolo de la madre universal.",
    resumen_extenso:
      "Inaugurado el **10 de diciembre de 1967** en el **Rosedal** del Parque de la Independencia. La obra de **José Gerbino** representa a una madre con sus hijos sobre un **globo terráqueo**.\n\n**Proceso**: modelado en los Viejos Tribunales (hoy **Facultad de Derecho**); fundida en **Gentile Hnos.** a la **cera perdida**.  \n**Impulso**: Círculo de la Publicidad (Alfredo Solina); campaña de donación de bronce; altura aprox. **12 m**.  \n**Cápsula del tiempo**: se dejó material para abrir en **2067**; luego fue vandalizado y se robó el contenido.",
    author: { id: 4, nombre: "José Gerbino" },
    location: {
      id: 4,
      nombre: "Rosedal — Parque de la Independencia",
      barrio: "Parque Independencia",
      lat: -32.9572,
      lng: -60.662,
    },
    lat: -32.9572,
    lng: -60.662,
    dato_curioso:
      "Dentro del globo se había depositado un acta, diarios y películas para abrir en 2067; fue vandalizado en 1984.",
    medias: [
      {
        id: 4,
        tipo: "foto",
        url: "/images/estatuas/monumento-madre.jpg",
        pie: "Monumento a la Madre",
        credito: "StatuApp",
      },
    ],
    imagen_url: "/images/estatuas/monumento-madre.jpg",
  },
];

// Helper simple (opcional)
export function getStatueBySlug(slug: string) {
  return statuesData.find((s) => s.slug === slug) ?? null;
}
