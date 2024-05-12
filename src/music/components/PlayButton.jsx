
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic, toggleIsPlayer } from "../../store/play/playSlice";
import axios from "axios";


export const PlayButton = ({ id }) => {
    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const currentMusic = useSelector(state => state.play.currentMusic);


    const handleClick = async () => {
        if (isPlayingPlaylist) {
          dispatch(toggleIsPlayer()); // Pause the player
        } else {
            try {
                const response = await axios.get(`/api/playlists/${id}`);
                const { songs, playlist } = response.data;
                dispatch(setCurrentMusic({ songs, playlist })); // Set current playlist and songs
                dispatch(toggleIsPlayer()); // Start playing
            } catch (error) {
                console.error('Error fetching playlist info:', error);
            }
        }
        
    }
    const isPlayingPlaylist = isPlayer && currentMusic?.playlist?._id === id;

    return (
        <button className="card-meta-button" onClick={handleClick}>
            {isPlayingPlaylist ? <RiPauseCircleFill className="iplay" /> : <RiPlayCircleFill className="iplay" />}
        </button>
    );
};

PlayButton.propTypes = {
    id: PropTypes.string.isRequired,
};
