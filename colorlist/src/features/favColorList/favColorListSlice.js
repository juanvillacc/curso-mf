import { createSlice }  from '@reduxjs/toolkit';

export const favColorSlice = createSlice({
    name : "favColors",
    initialState: {
        favColorsCount:0,
    },
    reducers: {
        incrementFavColorsCount: (state) => {
            state.favColorsCount++;
        }
    }
});

export const {incrementFavColorsCount } = favColorSlice.actions;