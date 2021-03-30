import { ADDREMOVEFAVOURITE } from "../Constants/FavouriteConstant";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDREMOVEFAVOURITE.ADD_FAVOURITE:
      const localStorageFav = localStorage.getItem("favourites");

      if (localStorageFav == null) {
        const localFavourites = [];
        const newLocalFavourites = [...localFavourites, action.payload];
        localStorage.setItem("favourites", JSON.stringify(newLocalFavourites));
        //console.log(newLocalFavourites);
      } else {
        const getLocalStorage = localStorage.getItem("favourites");
        //console.log(JSON.parse(getLocalStorage));
        const newLocalStorage = [
          ...JSON.parse(getLocalStorage),
          action.payload,
        ];
        localStorage.setItem("favourites", JSON.stringify(newLocalStorage));
      }

      return { ...state, favourites: [...state.favourites, action.payload] };

    case ADDREMOVEFAVOURITE.REMOVE_FAVOURITE:
      const localStr = localStorage.getItem("favourites");
      const newLocalStr = JSON.parse(localStr).filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
      localStorage.setItem("favourites", JSON.stringify(newLocalStr));
      const newState = state.favourites.filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
      return { ...state, favourites: newState };
    default:
      return state;
  }
};

export default favouriteReducer;
