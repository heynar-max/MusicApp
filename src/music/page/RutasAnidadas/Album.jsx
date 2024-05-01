import { playlists } from "../../../lib/data"
import { CardAlbum } from "../../components/CardAlbum"


export const Album = () => {
    return (
        <div className="cards__card">
        {playlists.map((playlist, index) => <CardAlbum key={playlist.id} playlist={playlist} index={index} />)}
        </div>
    )
}
