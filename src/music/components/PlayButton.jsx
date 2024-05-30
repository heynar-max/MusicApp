
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic, setIsPlayer } from "../../store/play/playSlice";
import axios from "axios";


export const PlayButton = ({ id }) => {
    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const currentMusic = useSelector(state => state.play.currentMusic);

    const isPlayingPlaylist = isPlayer && currentMusic?.playlist?._id === id;

    const handleClick = async () => {
        if (isPlayingPlaylist) {
          dispatch(setIsPlayer(false)); // Pause the player
        return
        } 
            const response = await axios.get(`/api/playlists/${id}`);
            const { songs, playlist } = response.data;
            dispatch(setIsPlayer(true)); // Start playing
            dispatch(setCurrentMusic({ songs, playlist })); // Set current playlist and songs
        
    }

    return (
        <button className="card-meta-button" onClick={handleClick}>
            {isPlayingPlaylist ? <RiPauseCircleFill className="iplay" /> : <RiPlayCircleFill className="iplay" />}
        </button>
    );
};

PlayButton.propTypes = {
    id: PropTypes.string.isRequired,
};
