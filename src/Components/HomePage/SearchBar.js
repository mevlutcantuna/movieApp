import React from 'react';

import '../../Styles/SearchBar.scss';

import {connect} from 'react-redux';

import {Link} from "react-router-dom";
import {routes} from '../../Router/Routes';

import {getSearchItems} from "../../Store/Actions/SearchAction";
import {HANDLESEARCH} from "../../Store/Constants/SearchConstant";

function SearchBar(props) {

    const handleClick = () => {
            props.getSearchItems(props.name,props.year,props.type);
    }

    console.log(props.searchItems);

    return (
        <div className="searchBar">
            <div className="searchBar__year">
                <input type={'Number'} onChange={props.handleYear} value={props.year} placeholder={'Year'}/>
            </div>
            <div className="searchBar__type">
                <select  onChange={props.handleType} value={props.type}>
                    <option>Movie</option>
                    <option>Series</option>
                </select>
            </div>
            <div>
                <input type={'text'} onChange={props.handleName} value={props.name} placeholder={'Enter Movie Name Here'}/>
            </div>
            <div>
                <Link onClick={handleClick} style={LinkStyle} to={routes.Search.path}>
                    Search
                </Link>

            </div>
        </div>
    );
};

const LinkStyle = {
    padding:'0.6rem 1rem',
    borderRadius:'8px',
    backgroundColor:'#F5C518',
    textDecoration: 'none',
    fontWeight:'bold',
    color:'white',
    cursor:'pointer',
}

const mapStateToProps = (state) => {
    return{
        name : state.SearchReducer.name,
        year : state.SearchReducer.year,
        type : state.SearchReducer.type,
        searchItems: state.SearchReducer.searchItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSearchItems : (name,year,type) => dispatch(getSearchItems(name,year,type)),
        handleName : (e) => dispatch({type:HANDLESEARCH.HANDLE_SEARCH_NAME, payload: e.target.value}),
        handleYear : (e) => dispatch({type:HANDLESEARCH.HANDLE_SEARCH_YEAR, payload: e.target.value}),
        handleType : (e) => dispatch({type:HANDLESEARCH.HANDLE_SEARCH_TYPE, payload: e.target.value}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);