

export const filterSongs = (songs, albumId) => {
    return songs.filter((song) => song.albumId === albumId);
};