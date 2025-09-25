import { Home, Compass, MapPin, CalendarDays } from "lucide-react";

export const itemsNavbar = [
  { id: 1, title: "Inicio",     icon: <Home size={20} />,        link: "/" },
  { id: 2, title: "Explorar",   icon: <Compass size={20} />,     link: "/explorar" },
  { id: 3, title: "Cronología", icon: <CalendarDays size={20} />, link: "/cronologia" },
  { id: 4, title: "Mapa",       icon: <MapPin size={20} />,      link: "/mapa" },
];
