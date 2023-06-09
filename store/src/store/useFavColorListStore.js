import {useSelector, useDispatch} from 'react-redux';
import {incrementFavColorsCount } from '../features/favColorList/favColorListSlice';

export const useFavColorListStore = ()=>{
    const favColorsCount = useSelector((state) => state.favColorsCount);
    const dispatch= useDispatch();

    return {
        favColorsCount,
        incrementFavColorsCount: () => dispatch(incrementFavColorsCount()),        
    };
}