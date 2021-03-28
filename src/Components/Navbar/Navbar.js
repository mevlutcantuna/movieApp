import React from 'react';
import '../../Styles/Navbar.scss';
import {Link} from "react-router-dom";
import {routes} from "../../Router/Routes";
import {getSearchItems} from "../../Store/Actions/SearchAction";
import {HANDLESEARCH} from "../../Store/Constants/SearchConstant";
import {connect} from "react-redux";
import { SearchRounded } from '@material-ui/icons';


function Navbar(props) {

    const handleClick = () => {
        props.getSearchItems(props.name,'','');
    }

    return (
        <div className='navbar'>
            <div className='navbar__right'>
                <div className='navbar__right__title'>
                    <span className='navbar__right__title__movie'>Movie</span>
                    <span className='navbar__right__title__up'>Up</span>
                </div>
                <div className='navbar__right__link'>
                    <Link style={linkStyle} to={routes.Home.path}>{routes.Home.title}</Link>
                    <Link style={linkStyle} to={routes.Favourites.path}>{routes.Favourites.title}</Link>
                </div>
            </div>
            <div className='navbar__left'>
                    <input onChange={props.handleName} value={props.name} placeholder='Enter movie name here' className='navbar__left__input'/>
                    <div className={'navbar__left__icon'}>
                        <Link onClick={handleClick} to={routes.Search.path}>
                            <SearchRounded style={{fontSize:'24px',color:'grey',paddingTop:'5px'}}/>
                        </Link>
                    </div>
            </div>
        </div>
    );
}

const linkStyle = {
    textDecoration: 'none',
    marginRight:'1rem',
    color:'black',
    fontSize:'16px'
}

const mapStateToProps = (state) => {
    return{
        name : state.SearchReducer.name,
        searchItems: state.SearchReducer.searchItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSearchItems : (name,year,type) => dispatch(getSearchItems(name,year,type)),
        handleName : (e) => dispatch({type:HANDLESEARCH.HANDLE_SEARCH_NAME, payload: e.target.value}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);