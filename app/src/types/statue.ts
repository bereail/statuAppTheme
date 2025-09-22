export type Statue = {
  slug: string;                 // para la URL
  titulo: string;
  autor?: { nombre: string };
  ubicacion: {
    nombre?: string;
    direccion?: string;
    barrio?: string;
    lat?: number;
    lng?: number;
  };
  anio?: number | string;
  material?: string;
  resumen_corto?: string;
  descripcion_larga?: string;
  tags?: string[];
  imagen?: string;              // ruta a /public/images/...
};
