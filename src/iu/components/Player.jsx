import { useRef, useState } from 'react';
import '../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";

export const Player = () => {

    const [isPlayer, setIsPlayer] = useState(false)
    const audioRef = useRef()

    const handleClick = () => {
        // cuando le de un handleClick ejecttar audioRef.current.src
        if (isPlayer) {
            // si esta en marcha ponerlo en pausa 
            audioRef.current.pause()
        }else{
            audioRef.current.src = `/public/music/5/2.mp3`
            // para reproducir la musica 
            audioRef.current.play()
        }
        setIsPlayer(!isPlayer)
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

