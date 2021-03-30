import React from "react";
import "../../Styles/CardItem.scss";
import CardButton from "./CardButton";

function CardItem(props) {
  const { item } = props;

  return (
    <div className={"cardItem"}>
      <div className={"cardItem__image"}>
        {item.Poster === "N/A" ? (
          <img
            alt={"poster"}
            src={
              "https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg"
            }
          />
        ) : (
          <img alt={"poster"} src={item.Poster} />
        )}
      </div>
      <div className={"cardItem__rate"}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
          }
          alt={"logo"}
        />
        <span>N/A</span>
      </div>
      <div className={"cardItem__title"}>
        <div className={"cardItem__title__title"}>
          <span>{item.Year}</span>
          <span>{item.Title}</span>
        </div>
        <div className={"cardItem__title__fav"}>
          <CardButton info={item} />
        </div>
      </div>
      <div className={"cardItem__content"}>
        The aging patriarch of an organized crime dynasty transfers control of
        his clandestine empire to his reluctant son.
      </div>
    </div>
  );
}

export default CardItem;
