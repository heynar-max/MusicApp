
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic, toggleIsPlayer } from "../../store/play/playSlice";


export const PlayButton = ({ id }) => {
    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const currentMusic = useSelector(state => state.play.currentMusic);

    const handleClick = () => {
        dispatch(setCurrentMusic({ playlist: { id } }));
        dispatch(toggleIsPlayer());
    };

    const isPlayingPlaylist = isPlayer && currentMusic?.playlist?.id === id;

    return (
        <button className="card-meta-button" onClick={handleClick}>
            {isPlayingPlaylist ? <RiPauseCircleFill className="iplay" /> : <RiPlayCircleFill className="iplay" />}
        </button>
    );
};

PlayButton.propTypes = {
    id: PropTypes.string.isRequired,
};