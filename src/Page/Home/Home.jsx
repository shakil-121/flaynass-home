import React from 'react';
import HomeBanner from './HomeBanner';
import Tracking from '../../Component/Tracking/Tracking';
import Testimonials from '../../Component/Testimonials/Testimonials';
import Faq from '../../Component/Faq';
import ChooseUs from './ChooseUs';
import AboutUs from './AboutUs/AboutUs';
import DeliveryTrolly from './DeliveryTrolly/DeliveryTrolly';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tracking></Tracking>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
            <Testimonials></Testimonials>
            <DeliveryTrolly></DeliveryTrolly>
        </div>
    );
};

export default Home;