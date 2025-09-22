import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"; // ajustá el path si hace falta
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
  return (
    <Container >
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">hello Im</h3>
        <h1 className="text-4xl font-bold mb-3">Tarrredev</h1>
        <h2 className="text-2xl text-gray-400">Frontend Developer</h2>

        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mx-auto">
            <Link href="#contact" className={buttonVariants()}>
              <Mail className="mr-2 h-4 w-4" />
              Contacta conmigo
             </Link>

            <Link className={buttonVariants({ variant: 'secondary'})}
             href="/cv-tarre.pdf" 
             target="_blank">
              <Paperclip className="mr-2"/>
              Descagar CV
            </Link>
          </div>
        </div>
            <Image src="/profile.png" alt="Profile pic" width={500}  height={500} />
      </div>
    </Container>
  );
};

export default Introduction;
