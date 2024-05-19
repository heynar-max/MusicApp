import { useEffect, useRef} from 'react';
import '../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsPlayer } from '../../store/play/playSlice';
import { ImagenPlayer } from '../../music/components/ImagenPlayer';


export const Player = () => {

    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const audioRef = useRef()
    const currentMusic = useSelector(state => state.play.currentMusic);
    const volumeRef = useRef(1)
    

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
            audioRef.current.volume = volumeRef.current;
            audioRef.current.play();
            }
        }, [currentMusic]);
    
        const handleClick = () => {
            dispatch(toggleIsPlayer());
        };

        const handleVolumeChange = (event) => {
            const newVolume = event.target.value / 100;
            volumeRef.current = newVolume;
            if (audioRef.current) {
                audioRef.current.volume = newVolume;
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
                <div>
                <div>
                    {/* Slider  */}
                    <input
                            type="range"
                            className='range'
                            defaultValue={100}
                            max={100}
                            min={0}
                            onChange={handleVolumeChange}
                        />
            </div>
                </div>
            </div>
            
        </div>
    )
}

