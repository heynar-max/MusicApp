import PropTypes from 'prop-types';
import { RiPlayCircleFill } from "react-icons/ri";
import '../../style/Card.css'

export const CardSong = ({ song }) => {

	const {  title, image, artists, duration } = song

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
							<button className="card-meta-button">
								<RiPlayCircleFill className="iplay"/>
							</button>
					</div>
					<h2 className="card-title">{title}
						<span className="card-time">{duration}</span>
					</h2>
				</div>
				<span className="card-pin simple"></span>
			</div>
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
    }).isRequired,
};