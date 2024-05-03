import PropTypes from 'prop-types';
import '../../style/Card.css'
import { filterSongs } from '../helpers/filtersongs';
import { songs } from '../../lib/data';
import { Link } from 'react-router-dom';
import { RiPlayCircleFill } from "react-icons/ri";

const MAX_ARTISTS_LENGTH = 20; // Longitud máxima antes de truncar
export const CardAlbum = ({playlist, index}) => {

    const { id, cover, title, artists } = playlist


    // para mostrar la lista de artistas en un formato legible.
    // const artistsString = artists.join(", ")
    const isEvenIndex = index % 2 === 0;
    
    const playListSongs = filterSongs(songs, playlist.albumId);

    // Función para truncar el texto si es demasiado largo
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const artistsString = truncateText(artists.join(', '), MAX_ARTISTS_LENGTH);

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
                    <img src={cover} alt={artists} />
                    </div>
                    <div className="card-content">
                    <div className="card-meta">
                        <span className="card-meta-number">{playListSongs.length} canciones</span>
                            <button className="card-meta-button">
                                <RiPlayCircleFill className="iplay"/>
                            </button>
                    </div>
                    <h2 className="card-title">{artistsString}</h2>
                    <div className="card-meta-ti">
                        <h2 className="card-meta-title">{title}</h2>
                    </div>
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

