import React from 'react';
import '../../../Styles/CarouselItem.scss';
import {routes} from "../../../Router/Routes";
import {connect} from "react-redux";
import {ADDREMOVEFAVOURITE} from "../../../Store/Constants/FavouriteConstant";
import FavouriteButton from "../../FavouritePage/FavouriteButton";

function CarouselItem(props) {

    //console.log(props.info);

    const click = (e) => {
        if(props.info.imdbID === e){
            let changeID = routes.Details.path.replace(':id',props.info.imdbID);
            props.handlePageChange(changeID);
        }
    }

    return (
        <div className="carouselItem">
            <div className="carouselItem__image">
                <img alt={'poster'} src={props.info.Poster} />
            </div>

            <div className="carouselItem__side">
                <div className="carouselItem__side__top">
          <span>
            <img
                alt={'logo'}
                className="carouselItem__side__top__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
            />
          </span>
                    <span className="carouselItem__side__top__title">N/A</span>
                </div>
                <div className="carouselItem__side__text">
          <span className="carouselItem__side__text__date">
            {props.info.Year}
          </span>
                    <span className="carouselItem__side__text__title">
            {props.info.Title}
          </span>
                    <span className="carouselItem__side__text__summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
                </div>
                <div className="carouselItem__side__fav">
                    <FavouriteButton info={props.info}/>
                    <button onClick={() => click(props.info.imdbID)} className="carouselItem__side__fav__detail">View Detail</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        favourites: state.FavouriteReducer.favourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addFavourite: (item) => dispatch({type:ADDREMOVEFAVOURITE.ADD_FAVOURITE,payload: item})
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CarouselItem);