
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <main className="pb-40">
      <Navbar />
      <Introduction />
      
      <Portfolio />
      <AboutMe />
      <Experience />

      <Testimonials />
      <Footer />
   </main>
  );
}
