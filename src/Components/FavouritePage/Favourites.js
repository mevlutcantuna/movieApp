import React from 'react';
import {connect} from "react-redux";

function Favourites(props) {

    return (
        <div>
            Favourites
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        favourites : state.FavouriteReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favourites);