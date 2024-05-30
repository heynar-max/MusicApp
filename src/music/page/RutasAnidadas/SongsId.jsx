import { RiPlayCircleFill } from "react-icons/ri";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import axios from "axios";

export const SongsId = () => {


    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Función para realizar la solicitud HTTP usando Axios
        const fetchSongs = async () => {
            try {
                // Realizar la solicitud GET a la URL de la API
                const response = await axios.get('/api/songs');

                // Actualizar el estado con los datos recibidos
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
    }, []); 


    // return (
    //     <div className="cards__card">
    //     {playlists.map((playlist, index) => <CardAlbum key={playlist.id} playlist={playlist} index={index} />)}
    //     </div>
    // )

    return (
        <>
        { songs.map((song) => 
        <section className="card-container" key={song.id}>

		<article className="card horizontal">
			<div className="card-inner">
				<span className="card-pin simple"></span>
				<div className="card-image">
					<img src={song.image} alt={song.artists} />
				</div>
				<div className="card-content">
					<div className="card-meta">
						<span className="card-meta-artist">{song.artists}</span>
							<button className="card-meta-button">
								<RiPlayCircleFill className="iplay"/>
							</button>
					</div>
					<h2 className="card-title">{song.title}
						<span className="card-time">{song.duration}</span>
					</h2>
				</div>
				<span className="card-pin simple"></span>
			</div>
		</article>
	</section>
        ) 
            
        }
        </>
        
        
    )
}
SongsId.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.number.isRequired,
        albumId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(PropTypes.string).isRequired, // Ahora espera un array de strings
        album: PropTypes.string, // Assuming album is optional (string or undefined)
        duration: PropTypes.string.isRequired,
    }).isRequired,
};