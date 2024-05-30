import { useParams } from "react-router-dom"
import '../../../style/PageMusicId.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { CardSong } from "../../components/CardSong";


export const PageMusicId = () => {


    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [playListSongs, setPlayListSongs] = useState([]);
    const [totalDuration, setTotalDuration] = useState('');


    useEffect(() => {
        const fetchPlaylistData = async () => {
            try {
                // Hacer una solicitud GET para obtener la playlist por ID
                const playlistResponse = await axios.get(`/api/playlists/${id}`);


                const filteredSongs = playlistResponse.data.songs.map(song => ({
                    ...song,
                    audioUrl: `/music/${song.albumId}/${song.id}.mp3`  
                }));

                console.log(filteredSongs)
                // Establecer la playlist obtenida en el estado
                setPlaylist(playlistResponse.data.playlist);

                // Establecer las songs obtenida en el estado
                setPlayListSongs(filteredSongs);
                // console.log(playlistResponse.data)

                
                // Establecer las canciones filtradas y calcular la duración total
                
                const totalSeconds = filteredSongs.reduce((total, song) => {
                    // console.log(song.title)
                    return total + durationToSeconds(song.duration);
                }, 0);
                
                const formattedDuration = secondsToHoursMinutes(totalSeconds);
                setTotalDuration(formattedDuration);
                
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };
        
        fetchPlaylistData();
    }, [id]);
    
    // Función para convertir duración "minutos:segundos" a segundos
    const durationToSeconds = (duration) => {
        const [minutes, seconds] = duration.split(':');
        return parseInt(minutes) * 60 + parseInt(seconds);
    };
    
    // Función para convertir segundos a formato "horas:minutos"
    const secondsToHoursMinutes = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        
        if (hours > 0) {
            return `${hours} h ${minutes} min`;
        } else {
            return `${minutes} min`;
        }
    };
    
    if (!playlist) {
        return <div>Loading...</div>;
    }
    
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
                <div className="card-meta-button">
                    <PlayButton id={id} />
                </div>
        </header>

        <div className="songs-list">
                {playListSongs.map((song) => (
                    <CardSong
                    key={song.id} song={song}
                    />
                    
                ))}
                
            </div>
        </>
        
    )
}
