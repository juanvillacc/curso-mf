import {Provider} from 'react-redux';
import {store } from './store/index';


export {useFavColorListStore} from './store/useFavColorListStore'

export const StoreProvider = ({children})=>{
    return <Provider store={store}>
            {children}
    </Provider>
}
