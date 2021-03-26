import SearchReducer from './SearchReducer';
import CarouselReducer from './CarouselReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    SearchReducer,
    CarouselReducer
})

export default rootReducer;