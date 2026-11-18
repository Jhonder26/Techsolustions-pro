
function TextosImagens({ titulo, texto1, texto2, imagem }) {
  return (
    <section className="sobre" id="sobre">
      <h2>{titulo}</h2>

      <div className="sobre-container">
        <div className="sobre-texto">
          <p>{texto1}</p>

          <p>{texto2}</p>
        </div>

        <div className="sobre-imagem">
          <img
            src={imagem}
            alt="Equipe de profissionais trabalhando em tecnologia"
          />
        </div>
      </div>
    </section>
  );
}

export default TextosImagens;
