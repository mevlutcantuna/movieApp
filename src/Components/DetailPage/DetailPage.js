import React,{useEffect,useState} from 'react';
import '../../Styles/DetailPage.scss';

import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {routes} from "../../Router/Routes";
import {ADDREMOVEFAVOURITE} from "../../Store/Constants/FavouriteConstant";
import {connect} from "react-redux";
import FavouriteButton from "../FavouritePage/FavouriteButton";

function DetailPage(props) {

    //console.log(props.favourites);

    const [item,setItem] = useState([]);

    useEffect(() => {
        const ID = props.match.params.id
        axios.get(`http://www.omdbapi.com/?i=${ID}&apikey=9bea682b`)
            .then(res => setItem(res.data))
    },[props]);

    return (
        <div className={'detailPage'}>
            <div className={'detailPage__toHome'}>
                <Link style={LinkStyle} to={routes.Home.path}>Home / </Link>
                <span>{item.Title}</span>
            </div>
            <div className={'detailPage__item'}>
                <div className={'detailPage__item__left'}>
                    <img alt={'#'} src={item.Poster}/>
                </div>
                <div className={'detailPage__item__right'}>
                    <div className={'detailPage__item__right__top'}>
                        <div className={'detailPage__item__right__top__rating'}>
                            <img alt={'logo'} className={'detailPage__item__right__top__rating__logo'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"/>
                            <span>{item.imdbRating}</span>
                        </div>
                        <div className={'detailPage__item__right__top__fav'}>
                            <FavouriteButton info={item}/>
                        </div>
                    </div>
                    <div className={'detailPage__item__right__middle'}>
                        <div className={'detailPage__item__right__middle__title'}>
                            <span className={'detailPage__item__right__middle__title__year'}>{item.Year}</span>
                            <span className={'detailPage__item__right__middle__title__title'}>{item.Title}</span>
                        </div>
                        <div className={'rgba(0, 0, 0, 0.5)'}>
                            {item.Plot}
                        </div>
                    </div>
                    <div className={'detailPage__item__right__bottom'}>
                        <div className={'detailPage__item__right__bottom__date'}>
                            Released Date : {item.Released}
                        </div>
                        <div className={'detailPage__item__right__bottom__director'}>
                            {item.Director}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LinkStyle = {
    color:'#F5C518',
    textDecoration:'none',
}

const mapStateToProps = state => {
    return{
        favourites: state.FavouriteReducer.favourites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addFavourite: (item) => dispatch({type:ADDREMOVEFAVOURITE.ADD_FAVOURITE,payload: item})
    }
}

export default  connect(mapStateToProps,mapDispatchToProps) (withRouter(DetailPage));