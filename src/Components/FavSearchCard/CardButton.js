import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { connect } from "react-redux";
import { ADDREMOVEFAVOURITE } from "../../Store/Constants/FavouriteConstant";

function CardButton(props) {
  console.log(props.info);

  return (
    <div>
      <FavoriteIcon
        onClick={() => props.addFavourite(props.info)}
        style={{ fontSize: "30px", color: "#F5C518" }}
      />
      {/*<FavoriteBorderIcon
            onClick={() => props.removeFavourite(props.info)}
            style={{ fontSize: "30px", color: "#F5C518" }}
        />*/}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (item) =>
      dispatch({ type: ADDREMOVEFAVOURITE.ADD_FAVOURITE, payload: item }),
    removeFavourite: (item) =>
      dispatch({ type: ADDREMOVEFAVOURITE.REMOVE_FAVOURITE, payload: item }),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);
