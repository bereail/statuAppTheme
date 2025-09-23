
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <main className="pb-40">
      <Navbar />
      <Introduction />
      
      <Portfolio />
   
      <Footer />
   </main>
  );
}
