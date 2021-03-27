import React from 'react';

import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import Favourites from "./FavouritePage/Favourites";

import {routes} from '../Router/Routes';
import {Router,Switch,Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import SearchPage from "./SearchPage/SearchPage";
import DetailPage from "./DetailPage/DetailPage";

const history = createBrowserHistory();

function MasterPage(props) {

    const handlePageChange = (activePage) => {
        history.push(activePage);
    }

    return (
        <Router history={history}>
            <Navbar/>
            <Switch>
                <Route exact path={routes.Home.path}>
                    <HomePage handlePageChange={handlePageChange}/>
                </Route>
                <Route exact path={routes.Favourites.path}>
                    <Favourites/>
                </Route>
                <Route exact path={routes.Search.path}>
                    <SearchPage/>
                </Route>
                <Route exact path={routes.Details.path}>
                    <DetailPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default MasterPage;