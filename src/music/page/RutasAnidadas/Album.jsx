import { useEffect, useState } from "react";
import { CardAlbum } from "../../components/CardAlbum"
import axios from "axios";


export const Album = () => {

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        // Función para realizar la solicitud HTTP usando Axios
        const fetchPlaylists = async () => {
            try {
                // Realizar la solicitud GET a la URL de la API
                const response = await axios.get('/api/playlists');

                // Actualizar el estado con los datos recibidos
                setPlaylists(response.data);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };
        fetchPlaylists();
    }, []); 


    return (
        <div className="cards__card">
        {playlists.map((playlist, index) => <CardAlbum key={playlist.id} playlist={playlist} index={index} />)}
        </div>
    )
}
