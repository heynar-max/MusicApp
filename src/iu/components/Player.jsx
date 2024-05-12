
import { useEffect, useRef, useState} from 'react';
import '../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsPlayer } from '../../store/play/playSlice';

export const Player = () => {

    const dispatch = useDispatch();
    const isPlayer = useSelector(state => state.play.isPlayer);
    const audioRef = useRef()
    const currentMusic = useSelector(state => state.play.currentMusic);
    // Estado para almacenar el tiempo actual de reproducción
    const [currentTime, setCurrentTime] = useState(0);
    

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if (song) {
            const src = `/music/${playlist?.id}/${song.id}.mp3`;
            
            audioRef.current.src = src;
            
            if (isPlayer) {
                audioRef.current.play();
            }
        }
    }, [currentMusic, isPlayer]);
    
    const handleClick = () => {
                // cuando le de un handleClick ejecttar audioRef.current.src
                if (isPlayer) {
                    // si esta en marcha ponerlo en pausa 
                    audioRef.current.pause()
                    setCurrentTime(audioRef.current.currentTime);
                }else {
                    // Usa una promesa para asegurar que el audio se cargue antes de reproducirse
                    audioRef.current.play()
                    
                    .then(() => {
                        // Si hay un tiempo actual guardado, establece el tiempo de reproducción
                        if (currentTime > 0) {
                            audioRef.current.currentTime = currentTime;
                        }
                    }).catch(error => {
                        console.log("Error al reproducir el audio:", error);
                    });
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


