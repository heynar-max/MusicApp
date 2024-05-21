import { useEffect, useRef, useState} from 'react';
import '../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { setVolume, toggleIsPlayer } from '../../store/play/playSlice';
import { ImagenPlayer } from '../../music/components/ImagenPlayer';
import { FaVolumeMute, FaVolumeUp  } from "react-icons/fa";


export const Player = () => {

    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const audioRef = useRef()
    const currentMusic = useSelector(state => state.play.currentMusic);
    const volume = useSelector(state => state.play.volume);
    const [prevVolume, setPrevVolume] = useState(volume);
    

    useEffect(() => {
        isPlayer
            ? audioRef.current.play()
            : audioRef.current.pause()
        }, [isPlayer])

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if (song) {
            const src = `/music/${playlist?.id}/${song.id}.mp3`;
            audioRef.current.src = src;
            audioRef.current.volume = volume;
            audioRef.current.play();
            }
        }, [currentMusic]);

        useEffect(() => {
            if (audioRef.current) {
                audioRef.current.volume = volume;
            }
        }, [volume]);
    
        const handleClick = () => {
            dispatch(toggleIsPlayer());
        };

        
        const handleVolumeChange = (event) => {
            const newVolume = event.target.value / 100;
            if (newVolume === 0) {
                setPrevVolume(volume);
            }
            dispatch(setVolume(newVolume));
        };
        const handleVolumeClick = () => {
            if (volume > 0) {
                setPrevVolume(volume);
                dispatch(setVolume(0));
            } else {
                dispatch(setVolume(prevVolume));
            }
        };

        
    return (
        <div className="player_container">
            <div className='player_content'>
                <div>
                    <ImagenPlayer {...currentMusic.song}/>
                </div>
                {/* Player  */}
                <div className='player_player'>
                    <button className='player_boton' onClick={handleClick}>
                        {isPlayer ? <RiPauseCircleFill className='player_icon'/> : <RiPlayCircleFill className='player_icon' /> }
                    </button>
                    {/* Aquí asigna la referencia al elemento <audio> */}
                    <audio ref={audioRef} />
                </div>
                <div className='slider'>
                
                    {/* Slider  */}

                    <button
                            className="volume_icon"
                            onClick={handleVolumeClick}
                        >
                            {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>
                        <input
                            type="range"
                            className='range'
                            value={volume * 100}
                            max={100}
                            min={0}
                            onChange={handleVolumeChange}
                        />
            
                </div>
            </div>
            
        </div>
    )
}

