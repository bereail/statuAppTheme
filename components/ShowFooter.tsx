"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

const HIDE_ON = [/^\/estatuas\/[^/]+$/]; // detalle de estatua

export default function ShowFooter() {
  const pathname = usePathname();
  const hide = HIDE_ON.some(rx => rx.test(pathname));
  if (hide) return null;
  return <Footer />;
}
