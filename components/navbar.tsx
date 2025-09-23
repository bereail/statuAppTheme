// components/navbar.tsx
import { itemsNavbar } from "@/data/navbar";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="fixed bottom-6 inset-x-0 z-50">
      <div
        className="flex justify-center items-center gap-4
                   px-6 py-3 w-full
                   border border-border
                   bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60
                   shadow-lg rounded-2xl"
      >
        {/* Items de navegación centrados */}
        {itemsNavbar.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="inline-flex flex-col items-center justify-center
                       gap-1 px-3 py-2 rounded-md
                       text-foreground text-sm
                       hover:bg-muted/70 dark:hover:bg-muted
                       transition-colors"
          >
            {item.icon}
            <span className="text-xs">{item.title}</span>
          </Link>
        ))}

        {/* Toggle de tema */}
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
