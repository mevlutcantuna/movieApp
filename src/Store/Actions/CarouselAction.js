import axios from "axios";

import {GETCAROUSELITEMS} from "../Constants/CarouselConstant";

export const getCarouselItems = () => dispatch => {
    const API = 'http://www.omdbapi.com/?s=god&apikey=9bea682b';
    axios.get(API)
        .then((res) => dispatch({
            type: GETCAROUSELITEMS.GET_CAROUSEL_ITEMS_SUCCESS,
            payload: res.data
        }))
        .catch((err) => dispatch({
            type:GETCAROUSELITEMS.GET_CAROUSEL_ITEMS_ERROR,
            payload:err
        }))
}

