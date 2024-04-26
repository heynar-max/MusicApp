import '../../style/Card.css'

export const Favoritos = () => {
    return (
        <section className="card-container">

		<article className="card horizontal">
			<div className="card-inner">
				<span className="card-pin simple"></span>
				<div className="card-image">
					<img src="https://res.cloudinary.com/dzty81hol/image/upload/v1710620896/zqc524ceod3tmnpoximx.jpg" />
				</div>
				<div className="card-content">
					<div className="card-meta">
						<span className="card-meta-artist">Marshmello</span>
						<button className="card-meta-button" >
							<i className="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 className="card-title">Hate the Other Side
						<span className="card-time">3:40</span>
					</h2>
				</div>
				<span className="card-pin simple"></span>
			</div>
		</article>
	</section>
    )
}
