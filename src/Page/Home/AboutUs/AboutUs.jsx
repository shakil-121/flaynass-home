import { PiRocketLaunchBold } from "react-icons/pi";
import { BsPatchCheck } from "react-icons/bs";
import { FcDam } from "react-icons/fc";
import cavervan from "../..//../assets/aboutus/cover-van.png";
const AboutUs = () => {
  return (
    <div className="about-anchor max-w-screen-xl mx-auto mt-48">
      <div className="grid grid-cols-2 justify-items-center">
        <div>
          <h1 className="uppercase font-roboto font-semibold text-3xl mb-8">
            About us
          </h1>
          <p className="text-xl text-gray-500 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi hic
            commodi nobis eaque, temporibus provident ut ipsam nam quo in?
          </p>
          <div
            data-aos="fade-down-left"
            data-aos-anchor=".about-anchor"
            data-aos-duration="1200"
            data-aos-delay="500"
            className="flex items-center gap-5 mb-5"
          >
            <PiRocketLaunchBold className="text-5xl" />
            <div>
              <h3 className="text-xl font-bold mb-2">fast Devlivery</h3>
              <p className="text-gray-500 font-pppins">
                Duis autem vel eum iriure dolor
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-anchor=".about-anchor"
            data-aos-duration="2200"
            data-aos-delay="1500"
            className="flex items-center gap-5 mb-5"
          >
            <BsPatchCheck className="text-5xl" />
            <div>
              <h3 className="text-xl font-bold mb-2">fast Devlivery</h3>
              <p className="text-gray-500 font-pppins">
                Duis autem vel eum iriure dolor
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-anchor=".about-anchor"
            data-aos-duration="3000"
            data-aos-delay="2000"
            className="flex items-center gap-5"
          >
            <FcDam className="text-5xl" />
            <div>
              <h3 className="text-xl font-bold mb-2">fast Devlivery</h3>
              <p className="text-gray-500 font-pppins">
                Duis autem vel eum iriure dolor
              </p>
            </div>
          </div>
        </div>
        <img
          data-aos-anchor=".about-anchor"
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-[650px]"
          src={cavervan}
          alt=""
        />
      </div>
      <hr className="border-4 border-[#FF3333]" />
    </div>
  );
};

export default AboutUs;
