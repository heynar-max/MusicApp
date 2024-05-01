import PropTypes from 'prop-types';
import '../../style/Card.css'
import { filterSongs } from '../helpers/filtersongs';
import { songs } from '../../lib/data';
import { Link } from 'react-router-dom';


export const CardAlbum = ({playlist, index}) => {

    const { id, cover, title, artists } = playlist


    // para mostrar la lista de artistas en un formato legible.
    const artistsString = artists.join(", ")
    const isEvenIndex = index % 2 === 0;
    
    const playListSongs = filterSongs(songs, playlist.albumId);

    return (
        <>
        
        <Link className='card_link' to={`${id}`} >
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
                        <span className="card-meta-number">{playListSongs.length} canciones</span>
                    </div>
                    <h2 className="card-title">{artistsString}</h2>
                    <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </article>
            </Link>
        </>
    )
}
CardAlbum.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(PropTypes.string).isRequired,
        albumId: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

