import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Banner from './Banner';
import FeaturedDestination from './FeaturedDestination/FeaturedDestination';
import Subscribe from './Subscribe';
// import FeaturedDestination from './FeaturedDestination';
import TopTour from './TopTour/TopTour';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Search ></Search>
            <FeaturedDestination></FeaturedDestination>
            <TopTour></TopTour>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;