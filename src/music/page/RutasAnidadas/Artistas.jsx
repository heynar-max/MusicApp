import { playlists } from "../../../lib/data"
import { CardArtist } from "../../components/CardArtist"


export const Artistas = () => {
    return (
        <div className="cards__card">
        {playlists.map((playlist, index) => <CardArtist key={playlist.id} playlist={playlist} index={index} />)}
        </div>
    )
}

