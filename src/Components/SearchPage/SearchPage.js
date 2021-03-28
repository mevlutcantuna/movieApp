import React from 'react';
import {connect} from "react-redux";
import SearchBar from "../HomePage/SearchBar";
import {Link} from "react-router-dom";
import {routes} from "../../Router/Routes";
import '../../Styles/SearchPage.scss';

function SearchPage(props) {
    console.log(props.searchItems.data);
    const item = props.searchItems.data;

    return (
        <div className={'searchPage'}>
            <div className={'searchPage__toHome'}>
                <Link style={LinkStyle} to={routes.Home.path}>Home / </Link>
                <span>Search Results</span>
            </div>
            <div className={'searchPage__searchBar'}>
                <SearchBar/>
            </div>
        </div>
    );
}

const LinkStyle = {
    color:'#F5C518',
    textDecoration:'none',
}

const mapStateToProps = (state) => {
    return{
        searchItems: state.SearchReducer.searchItems,
    }
}

export default  connect(mapStateToProps,null)(SearchPage);