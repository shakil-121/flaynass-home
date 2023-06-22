import React from 'react';
import HomeBanner from './HomeBanner';
import Tracking from '../../Component/Tracking/Tracking';
import Testimonials from '../../Component/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tracking></Tracking>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;