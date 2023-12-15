import Link from "next/link";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

const MainMenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4 text-white">
      <li>
        <Link
          href="#home"
          className="py-2 px-4 border-b-2 border-primary transition-colors duration-300"
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link
          href="#services"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Servicios
        </Link>
      </li>
      <li>
        <Link
          href="#ebooks"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Ebooks
        </Link>
      </li>
      <li>
        <Link
          href="#faq"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Preguntas Frecuentes (FAQ)
        </Link>
      </li>
      <li>
        <Link
          href="#about"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Sobre Nosotros
        </Link>
      </li>
      <li>
        <Link
          href="#blog"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};
export default MainMenu;
