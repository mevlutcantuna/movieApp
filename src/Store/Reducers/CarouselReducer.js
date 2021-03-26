import {GETCAROUSELITEMS} from "../Constants/CarouselConstant";

const initialState = {
    carouselItems:{},
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type){
        case GETCAROUSELITEMS.GET_CAROUSEL_ITEMS_SUCCESS:
            return {...state,carouselItems: action.payload};
        default:
            return state;
    }
}

export default carouselReducer;