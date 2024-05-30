
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlayer: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
};

    const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        setIsPlayer(state, action) {
        state.isPlayer = action.payload;
        },
        toggleIsPlayer(state) {
            state.isPlayer = !state.isPlayer;
        },
        setCurrentMusic(state, action) {
            const { songs, playlist, songId } = action.payload;
            // ││││
            const song = songs.find(s => s.id === songId) || (songs.length > 0 ? songs[0] : null);
            state.currentMusic = {
                playlist,
                songs,
                song,
            };
        },
        setVolume(state, action) {
            state.volume = action.payload;
        },
        
    },
});

export const { setIsPlayer, toggleIsPlayer, setCurrentMusic,  setVolume } = playSlice.actions;
export default playSlice.reducer;


// const song = songs.find(s => s.id === songId) || (songs.length > 0 ? songs[0] : null);
// Busca la canción en el array songs que coincida con el id proporcionado (songId).
// Si se encuentra, esa será la canción seleccionada (song). 
// Si no se encuentra ninguna canción con ese id,
// el operador || proporciona una canción predeterminada, 
// que es la primera canción del array songs si hay alguna, de lo contrario, se asigna null.
