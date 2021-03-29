import { ADDREMOVEFAVOURITE } from "../Constants/FavouriteConstant";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDREMOVEFAVOURITE.ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.payload] };
    case ADDREMOVEFAVOURITE.REMOVE_FAVOURITE:
      const newState = state.favourites.filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
      return { ...state, favourites: newState };
    default:
      return state;
  }
};

export default favouriteReducer;
