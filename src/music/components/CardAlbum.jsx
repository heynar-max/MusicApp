import PropTypes from 'prop-types';
import '../../style/Card.css'


export const CardAlbum = ({playlist, index}) => {

    const { id, cover, title, artists } = playlist

    

    // para mostrar la lista de artistas en un formato legible.
    const artistsString = artists.join(", ")
    const isEvenIndex = index % 2 === 0;
    

    return (
        <>
        
        <a className='card_link'
            href={`/playlist/${id}`}
        >
            <article className="card" 
                    style={{ '--rotation': 
                        `${index % 2 === 0 ? '5deg' : '-5deg'}` }} >
                        
                <div className={`card-inner ${isEvenIndex ? 'even' : 'odd'}`} >
                    <span className="card-pin" 
                        style={{ top: index % 2 === 0 ? '20px' : '20px', 
                                left: index % 2 === 0 ? '20px' : 'calc(50% - 6px)', 
                                transform: index % 2 === 0 ? 'rotate(-5deg)' : 'rotate(0)' }}>
                    </span>
                    <div className="card-image">
                    <img src={cover} />
                    </div>
                    <div className="card-content">
                    <div className="card-meta">
                        <span className="card-meta-number">13 songs</span>
                    </div>
                    <h2 className="card-title">{artistsString}</h2>
                    <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </article>
            </a>
        </>
    )
}
CardAlbum.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

