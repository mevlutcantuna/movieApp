import SearchReducer from './SearchReducer';
import CarouselReducer from './CarouselReducer';
import FavouriteReducer from  './FavouriteReducer';
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    SearchReducer,
    CarouselReducer,
    FavouriteReducer,
})

export default rootReducer;