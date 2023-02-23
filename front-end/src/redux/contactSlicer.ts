import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'contact',
    initialState: {
        name: '',
        email: '',
        feedback: '',
    },
    reducers: {
        saveName(state, { payload }) {
            return { ...state, name: payload }
        },
        saveEmail(state, { payload }) {
            return { ...state, email: payload }
        },
        saveFeedback(state, { payload }) {
            return { ...state, feedback: payload }
        }
    }
})

export const { saveName, saveEmail, saveFeedback } = slice.actions;

export default slice.reducer;