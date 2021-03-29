import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CardItem from "../FavSearchCard/CardItem";
import { Link } from "react-router-dom";
import { routes } from "../../Router/Routes";
import "../../Styles/Favourites.scss";

function Favourites(props) {
  const [local, setLocal] = useState([]);
  const x = JSON.parse(localStorage.getItem("favourites"));

  const setLocalStorage = () => {
    setLocal(x);
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <div className={"favourites"}>
      <div className={"favourites__route"}>
        <Link style={LinkStyle} to={routes.Home.path}>
          Home /{" "}
        </Link>
        <span>Favourites</span>
      </div>
      <div className={"favourites__cards"}>
        {local.map((item) => (
          <CardItem key={item.imdbID} item={item} />
        ))}
      </div>
    </div>
  );
}

const LinkStyle = {
  color: "#F5C518",
  textDecoration: "none",
};

const mapStateToProps = (state) => {
  return {
    favourites: state.FavouriteReducer.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
