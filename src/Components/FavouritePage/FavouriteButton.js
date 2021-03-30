import React, { useEffect, useState } from "react";
import { ADDREMOVEFAVOURITE } from "../../Store/Constants/FavouriteConstant";
import { connect } from "react-redux";

import "../../Styles/FavouriteButton.scss";

function FavouriteButton(props) {
  const [index, setIndex] = useState(false);

  useEffect(() => {
    if (props.favourites.includes(props.info) === true) {
      return setIndex(true);
    } else {
      return setIndex(false);
    }
  }, [props.favourites, props.info]);

  return (
    <div>
      {index ? (
        <button
          className={"button button__remove"}
          onClick={() => props.removeFavourite(props.info)}
        >
          Remove
        </button>
      ) : (
        <button
          className={"button button__add"}
          onClick={() => props.addFavourite(props.info)}
        >
          Add to Favourite
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favourites: state.FavouriteReducer.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (item) =>
      dispatch({ type: ADDREMOVEFAVOURITE.ADD_FAVOURITE, payload: item }),
    removeFavourite: (item) =>
      dispatch({ type: ADDREMOVEFAVOURITE.REMOVE_FAVOURITE, payload: item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);
