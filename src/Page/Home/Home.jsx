import React from 'react';
import HomeBanner from './HomeBanner';
import Tracking from '../../Component/Tracking/Tracking';
import Testimonials from '../../Component/Testimonials/Testimonials';
import Faq from '../../Component/Faq';
import ChooseUs from './ChooseUs';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tracking></Tracking>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;