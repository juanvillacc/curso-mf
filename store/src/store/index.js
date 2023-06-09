import { configureStore }  from '@reduxjs/toolkit';
import { favColorSlice }  from '../features/favColorList/favColorListSlice';

export {useFavColorListStore} from './useFavColorListStore'
export const store = configureStore({
    reducer: favColorSlice.reducer
})