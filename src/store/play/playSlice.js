
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
        state.currentMusic = action.payload;
        },
    },
});

export const { setIsPlayer, toggleIsPlayer, setCurrentMusic } = playSlice.actions;
export default playSlice.reducer;