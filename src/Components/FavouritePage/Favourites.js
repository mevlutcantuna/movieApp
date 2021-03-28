import React from 'react';
import {connect} from "react-redux";

function Favourites(props) {
        console.log(props.favourites)
    return (
        <div>
            {props.favourites.map((item) => (
                <div>{item.Title}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        favourites : state.FavouriteReducer.favourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favourites);