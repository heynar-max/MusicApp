import { useParams } from "react-router-dom"
import { playlists, songs } from "../../../lib/data";
import { filterSongs } from "../../helpers/filtersongs";
import '../../../style/PageMusicId.css'

// Función para convertir duración "minutos:segundos" a segundos
function durationToSeconds(duration) {
    const [minutes, seconds] = duration.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
}



export const PageMusicId = () => {

    const { id } = useParams();

    const  playlist = playlists.find((playlist) => playlist.id === id)
    
    // Filtra las canciones según el albumId de la playlist encontrada
    const playListSongs = filterSongs(songs, playlist?.albumId);

    // Calcular la duración total en segundos
const totalSeconds = playListSongs.reduce((total, song) => {
    return total + durationToSeconds(song.duration);
}, 0);

// Función para convertir segundos a formato "horas:minutos"
function secondsToHoursMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);

    if (hours > 0) {
        return `${hours} h ${minutes} min`;
    } else {
        return `${minutes} min`;
    }
}

// Obtener la duración total en formato "horas:minutos"
const totalDuration = secondsToHoursMinutes(totalSeconds);
    
    return (
        <>
        <header className="PageMusic_container">
            <figure>
                <img    
                    className="PageMusic_img" 
                    src={playlist?.cover}
                    alt={`Cover of ${playlist?.title}`}/>
            </figure>
            <div className="pageMusic_rigth">
                <h2 className="pageMusic_h2">Álbum</h2>
            <div>
                <h1 className="pageMusic_h1">
                    {playlist?.title}
                    <span ></span>
                </h1>
            </div>

            <div className="flex-1 flex items-end">
            <div className="text-sm text-gray-300 font-normal">
                <div >
                <span>{playlist?.artists.join(", ")}</span>
                </div>
                <p >
                    <span className="pageMusic_span">{playListSongs.length} canciones</span>
                </p>
                <p>
                    <span className="pageMusic_span">
                        {` ${totalDuration}`} aproximadamente
                    </span>
                </p>
            </div>
            </div>
            </div>
        </header>
        </>
        
    )
}
