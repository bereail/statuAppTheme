import type { Statue } from "../../types/statue";

export const statuesData: Statue[] = [
  {
    slug: "busto-isaac-newell",
    titulo: "Busto de Isaac Newell",
    autor: { nombre: "No identificado públicamente" },
    ubicacion: {
      nombre: "Parque Independencia",
      direccion: "Av. Centenario Newell’s Old Boys e Intendente Morcillo",
      barrio: "Parque Independencia",
      lat: -32.9581,
      lng: -60.6628,
    },
    anio: 1950,
    material: "Bronce",
    resumen_corto:
      "Busto de Isaac Newell, fundador de Newell’s Old Boys, frente al estadio Marcelo Bielsa.",
    imagen: "/images/statues/isaac-newell.jpg",
    tags: ["busto", "deporte", "parque-independencia"],
  },
  {
    slug: "monumento-a-la-madre",
    titulo: "Monumento a la Madre",
    autor: { nombre: "—" },
    ubicacion: {
      nombre: "Parque Independencia",
      barrio: "Parque Independencia",
      lat: -32.9572,
      lng: -60.6611,
    },
    anio: "siglo XX",
    material: "Mármol / piedra",
    resumen_corto:
      "Monumento con figura central y peana; punto clásico de encuentro y efemérides.",
    imagen: "/images/statues/monumento-madre.jpg",
    tags: ["monumento", "parque-independencia"],
  },
];
