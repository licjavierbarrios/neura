import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Section from "@/components/footer/components/Section";
import Tags from "@/components/footer/components/Tags";
type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-light/20">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:px-8 lg:py-20">
        <Logo />

        <Section
          title="Inicio"
          list={["Acerca de Nosotros", "Servicios", "Blog"]}
        />
        <Section title="Recursos" list={["Ayuda / FAQ", "Prensa"]} />
        <Section
          title="Nuestro Enfoque"
          list={["Programa", "Plan", "Metodología"]}
        />
        <section>
          <h5 className="text-2xl font-semibold text-white mb-5">
            Etiquetas Populares
          </h5>
          <div className="flex items-center gap-2 flex-wrap">
            <Tags title="Estrategias" />
            <Tags title="Redes Sociales" />
            <Tags title="Publicidad Digital" />
            <Tags title="Contenido" />
            <Tags title="SEO" />
            <Tags title="Analítica Web" active />
            <Tags title="Casos de Éxito" />
            <Tags title="Equipo" />
          </div>
        </section>
      </Container>
      <div className="bg-primary text-white p-5 text-center">
        <h5>
          &copy; 2024 Neura. ¡Construyendo juntos un futuro digital! 
        </h5>
      </div>
    </footer>
  );
};
export default Footer;
