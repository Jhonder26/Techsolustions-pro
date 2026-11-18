function Cards({ servicos }) {
	return (
		<section className="servicos" id="servicos">
			<h2>Nossos serviços</h2>

			<div className="cards-container">
				{servicos.map((servico) => (
					<div className="card" key={servico.titulo}>
						<span className="card-icone">
							{servico.icone}
						</span>

						<h3>{servico.titulo}</h3>

						<p>{servico.descricao}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Cards;
