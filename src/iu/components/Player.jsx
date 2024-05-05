import { useRef} from 'react';
import '../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsPlayer } from '../../store/play/playSlice';

export const Player = () => {

    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const audioRef = useRef()

    const handleClick = () => {
        // cuando le de un handleClick ejecttar audioRef.current.src
        if (isPlayer) {
            // si esta en marcha ponerlo en pausa 
            audioRef.current.pause()
        }else{
            audioRef.current.src = `/music/6/2.mp3`
            // para reproducir la musica 
            audioRef.current.play()
        }
        dispatch(toggleIsPlayer()); // Despacha la acción para alternar isPlayer en el store

    }

    return (
        <div className="player_container">
            <div className='player_content'>
                <div>
                    imagen...
                </div>
                <div className='player_player'>
                    <button className='player_boton' onClick={handleClick}>
                        {isPlayer ? <RiPauseCircleFill className='player_icon'/> : <RiPlayCircleFill className='player_icon' /> }
                    </button>
                    {/* Aquí asigna la referencia al elemento <audio> */}
                    <audio ref={audioRef} />
                </div>
                <div>
                    volumen...
                </div>
            </div>
            
        </div>
    )
}

