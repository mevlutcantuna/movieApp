import axios from "axios";

import {GETSEARCHITEMS, HANDLESEARCH} from "../Constants/SearchConstant";


export const getSearchItems = (name,year,type) => {
    console.log('can');
    return{
        type: GETSEARCHITEMS.GET_SEARCH_ITEMS,
        payload: axios.get(`http://www.omdbapi.com/?s=${name}&type=${type}&y=${year}&apikey=9bea682b&`,{})
    }
}

export const handleName = () => {
    return{
        type: HANDLESEARCH.HANDLE_SEARCH_NAME,
    }
}

export const handleType = () => {
    return{
        type: HANDLESEARCH.HANDLE_SEARCH_TYPE,
    }
}

export const handleYear = () => {
    return{
        type: HANDLESEARCH.HANDLE_SEARCH_YEAR,
    }
};