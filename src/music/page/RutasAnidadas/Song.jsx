
import { songs } from "../../../lib/data"
import { CardSong } from "../../components/CardSong"


export const Song = () => {
    // Ordenar las canciones por título alfabéticamente
    const sortedSongs = [...songs].sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    return (
        <div className="song-list">
            {/* Mapear las canciones ordenadas */}
            {sortedSongs.map((song) => (
                <CardSong key={`${song.albumId}-${song.id}`} song={song} />
            ))}
        </div>
    );
};
