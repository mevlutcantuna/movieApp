import React from 'react';
import {connect} from "react-redux";

function SearchPage(props) {
    console.log(props.searchItems);
    return (
        <div>Can Tuna</div>
    );
}
const mapStateToProps = (state) => {
    return{
        searchItems: state.SearchReducer.searchItems,
    }
}

export default  connect(mapStateToProps,null)(SearchPage);