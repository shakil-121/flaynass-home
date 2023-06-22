import bannerAnimation from "../../assets/banner/Delivery BAKE новая попытка.json"
import Lottie from "lottie-react";

const HomeBanner = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="">
                <h1>Express <span>Home Delivery</span></h1>
            </div>
            <div className="w-96">
                <Lottie animationData={bannerAnimation} loop={true} />;
            </div>
        </div>
    );
};

export default HomeBanner;



// #F7C606 #E8F6FC