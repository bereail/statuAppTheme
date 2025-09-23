import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="md:flex md:justify-between"></div>

      <Separator className="my-4" />

      <div className="text-center">
        &copy; 2025 |{" "}
        <a
          href="https://ailonline.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Ailonline
        </a>
      </div>
    </footer>
  );
};

export default Footer;
