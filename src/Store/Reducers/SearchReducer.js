import {GETSEARCHITEMS, HANDLESEARCH} from "../Constants/SearchConstant";

const initialState = {
    searchItems:{},
    name:'galaxy',
    year:'2012',
    type:'Movie',
    fetched:true,
    isLoading:true,
    error: null
}

const searchReducer = (state=initialState,action) => {
    switch (action.type){
        case GETSEARCHITEMS.GET_SEARCH_ITEMS_SUCCESS:
            console.log('can');
            return {...state,name:'',year:'',type:'movie',isLoading: false,fetched: true,error: null ,searchItems: action.payload};
        case GETSEARCHITEMS.GET_SEARCH_ITEMS_ISLOADING:
            return {...state,isLoading: true,fetched: false,error: null}
        case HANDLESEARCH.HANDLE_SEARCH_NAME:
            return {...state,name : action.payload}
        case HANDLESEARCH.HANDLE_SEARCH_YEAR:
            return {...state,year : action.payload}
        case HANDLESEARCH.HANDLE_SEARCH_TYPE:
            return {...state,type: action.payload}
        default:
            return state;
    }
}

export default searchReducer;