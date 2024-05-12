import PropTypes from 'prop-types';
import '../../style/Card.css'
import { filterSongs } from '../helpers/filtersongs';
import { Link } from 'react-router-dom';
import { PlayButton } from './PlayButton';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MAX_ARTISTS_LENGTH = 20; // Longitud máxima antes de truncar

export const CardAlbum = ({playlist, index}) => {

    const { _id, cover, title, artists, albumId } = playlist
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                // Realizar la solicitud HTTP para obtener las canciones del álbum
                const response = await axios.get(`/api/songs?albumId=${albumId}`);
                setSongs(response.data); // Actualizar el estado local con las canciones obtenidas
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
        return () => {
            
        };
    }, [albumId]); 


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
                        <Link className='card_link' to={`${_id}`} >
                            <img src={cover} alt={artists} />
                        </Link>
                    </div>
                    <div className="card-content">
                    <div className="card-meta">
                        <span className="card-meta-number">{playListSongs.length} canciones</span>
                            <div className="card-meta-button">
                                <PlayButton id={_id} />
                            </div>
                    </div>
                    <h2 className="card-title">{artistsString}</h2>
                    <div className="card-meta-ti">
                        <h2 className="card-meta-title">{title}</h2>
                    </div>
                    </div>
                </div>
            </article>
        </>
    )
}
CardAlbum.propTypes = {
    playlist: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(PropTypes.string).isRequired,
        albumId: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

