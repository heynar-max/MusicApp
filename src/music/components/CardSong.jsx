import PropTypes from 'prop-types';
import { RiPauseCircleFill, RiPlayCircleFill } from "react-icons/ri";
import { useRef} from 'react';
import '../../style/Card.css'
import { setCurrentMusic, toggleIsPlayer } from '../../store/play/playSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CardSong = ({ song }) => {

	const {id,  title, image, artists, duration, audioUrl } = song

	const audioRef = useRef(null);


	const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const currentMusic = useSelector(state => state.play.currentMusic);

    const playAudio = () => {
		// Verifica si la canción actualmente en reproducción no es la misma que la canción seleccionada. 
		// Esto se verifica comparando los id de las canciones.
        if (currentMusic.song?.id !== id) {
			// Si la canción seleccionada es diferente de la actual, despacha una acción setCurrentMusic. 
			// Esta acción actualiza el estado para establecer la nueva canción como la canción actual
            dispatch(setCurrentMusic({ songs: currentMusic.songs, playlist: currentMusic.playlist, songId: id }));
        }
        dispatch(toggleIsPlayer());
    };

    const isCurrentSongPlaying = currentMusic.song?.id === song.id && isPlayer;
	

    return (
        <section className="card-container">

		<article className="card horizontal">
			<div className="card-inner">
				<span className="card-pin simple"></span>
				<div className="card-image">
					<img src={image} alt={artists} />
				</div>
				<div className="card-content">
					<div className="card-meta">
						<span className="card-meta-artist">{artists}</span>
							<button className="card-meta-button" onClick={playAudio}>
							{isCurrentSongPlaying ? <RiPauseCircleFill className='player_icon'/> : <RiPlayCircleFill className='player_icon' /> }
							</button>
					</div>
					<h2 className="card-title">{title}
						<span className="card-time">{duration}</span>
					</h2>
				</div>
				<span className="card-pin simple"></span>
			</div>
			<audio ref={audioRef} src={audioUrl}></audio>
		</article>
	</section>
    )
}
CardSong.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.number.isRequired,
        albumId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(PropTypes.string).isRequired, // Ahora espera un array de strings
        album: PropTypes.string, // Assuming album is optional (string or undefined)
        duration: PropTypes.string.isRequired,
		audioUrl: PropTypes.string.isRequired, 
    }).isRequired,
};