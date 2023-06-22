import bannerAnimation from "../../assets/banner/Delivery BAKE новая попытка.json"
import Lottie from "lottie-react";
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='rabbi'>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 justify-items-center py-72">
                <div className="text-white">
                    <h1 className="text-[80px] font-bold">Express <br /><span className="text-[#FF3333]">Home Delivery</span></h1>
                    <p className="">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in <br /> felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor <br /> et, pretium ac sapien.</p>
                    <button className="btn btn-secondary">Button</button>
                </div>
                <div className="w-96">
                    <Lottie animationData={bannerAnimation} loop={true} />;
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;



// #F7C606 #E8F6FC