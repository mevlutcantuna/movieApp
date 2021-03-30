import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function CardButton(props) {
  console.log(props.info);

  return (
    <div>
      <FavoriteIcon style={{ fontSize: "30px", color: "#F5C518" }} />
    </div>
  );
}

export default CardButton;
