import React from 'react';
import '../../Styles/HomePage.scss';
import HomePageTop from "./HomePageTop,";
import SearchBar from "./SearchBar";
import CarouselPage from "./Carousel/CarouselPage";

function HomePage() {
    return (
        <div className={'homePage'}>
            <HomePageTop/>
            <SearchBar/>
            <CarouselPage/>

        </div>
    );
}

export default HomePage;