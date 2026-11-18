
import Cards from "../components/Cards";
import TextosImagens from "../components/TextosImagens";

function Home() {

  const servicos = [
    {
      titulo: "Desenvolvimento",
      descricao: "Sistemas e aplicações web.",
      icone: "💻"
    },
    {
      titulo: "Design",
      descricao: "Interfaces modernas e criativas.",
      icone: "🎨"
    },
    {
      titulo: "Tecnologia",
      descricao: "Soluções inteligentes para empresas.",
      icone: "⚙️"
    }
  ];

  return (
    <main id="inicio">

      <section className="hero">
        <span className="etiqueta">
          TECNOLOGIA E INOVAÇÃO
        </span>

        <h1>
          Transformando ideias em soluções digitais
        </h1>

        <p>
          Desenvolvemos soluções tecnológicas para conectar
          pessoas, negócios e inovação.
        </p>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
          alt="Profissional trabalhando com programação"
        />
      </section>

      <Cards servicos={servicos} />

      <TextosImagens
  titulo="Conheça nossa empresa"
  texto1="A TechSolutions acredita que a tecnologia pode transformar o futuro. Nossa equipe desenvolve soluções digitais para facilitar processos e melhorar resultados."
  texto2="Trabalhamos com desenvolvimento de sistemas, design moderno e inovação digital para ajudar empresas a crescer."
  imagem="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
/>

    </main>
  );
}

export default Home;
