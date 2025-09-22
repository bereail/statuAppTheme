import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EstatuasLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pb-40">{children}</main>
      <Footer />
    </>
  );
}
