import '../../style/Card.css'

export const CardArtist = () => {
    return (
        <article className="card">
            <div className="card-inner">
                <span className="card-pin"></span>
                <div className="card-image">
                <img src="https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg" />
                </div>
                <div className="card-content">
                <div className="card-meta">
                    <span className="card-meta-number">13 songs</span>
                    <button className="card-meta-button">
                    <i className="ai-circle-triangle-right-fill"></i>
                    </button>
                </div>
                <h2 className="card-title">Heroes Del Silencio</h2>
                <h2 className="card-title">Avalancha</h2>
                </div>
            </div>
        </article>
    )
}
