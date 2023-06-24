import bannerAnimation from "../../assets/banner/Delivery BAKE новая попытка.json";
import Lottie from "lottie-react";
import "./HomeBanner.css";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const HomeBanner = () => {
  return (
    <div className="rabbi px-20">
      <div className="max-w-screen-xl  mx-auto grid md:grid-cols-2 justify-items-center py-32">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-anchor=".example1-anchor"
          className="text-white example1-anchor"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2500"
            className="text-[70px] font-bold font-pppins"
          >
            Express <br />
            <span className="text-[#FF3333]">Home Delivery</span>
          </h1>
          <p
            className="text-xl leading-9 mb-6"
          >
            Curabitur imperdiet varius lacus, id placerat purus vulputate non.
            Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
            gravida vel porttitor et, pretium ac sapien.
          </p>
          <button className="btn font-semibold">
            REGISTER NOW <FaAngleRight></FaAngleRight>
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
          className=""
        >
          <Lottie animationData={bannerAnimation} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

// #F7C606 #E8F6FC
