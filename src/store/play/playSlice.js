
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlayer: false,
    currentMusic: { playlist: null, song: null, songs: [] },
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
            const { songs, playlist } = action.payload;
            state.currentMusic = {
                playlist,
                songs,
                song: songs.length > 0 ? songs[0] : null, // Assuming you want to set the first song as the current song
            };
        },
    },
});

export const { setIsPlayer, toggleIsPlayer, setCurrentMusic } = playSlice.actions;
export default playSlice.reducer;