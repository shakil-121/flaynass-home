import React from 'react';
import HomeBanner from './HomeBanner';
import Tracking from '../../Component/Tracking/Tracking';
import Testimonials from '../../Component/Testimonials/Testimonials';
import Faq from '../../Component/Faq';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tracking></Tracking>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;