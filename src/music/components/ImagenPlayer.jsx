import PropTypes from 'prop-types';

export const ImagenPlayer = ({ image, title, artists }) => {

    return (
        <div className='img_container'>
            <figure className="img_figure">
                <img className='img_image' src={image} alt={title} />
            </figure>

            <div className="img_col">
                <h3 className="img_tittle">
                {title}
                </h3>
                <span className="img_text">
                {artists?.join(', ')}
                </span>
            </div>
        </div>
    )
}

ImagenPlayer.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
}
ImagenPlayer.defaultProps = {
    artists: [],
};