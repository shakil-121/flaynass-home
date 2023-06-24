import { TbTruckDelivery } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";


const ChooseUs = () => {
    return (
        <div>
            <h1 className="text-5xl font-semibold font-pppins text-center mt-28 mb-20">Why Choose us?</h1>
            <div 
            data-aos="fade-left"
            data-aos-anchor=".example-anchor"
            data-aos-duration="1500" 
            data-aos-delay="100"
            className="example-anchor grid grid-cols-4 gap-10 max-w-screen-xl mx-auto">
                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Super first Delivery</h1>
                    <p className="font-pppins text-gray-500">Next Day doorstep Delivery inside Dhaka. 24- 72 hours Delivery for rest of Bangladesh</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Cash on Delivery Service</h1>
                    <p className="font-pppins text-gray-500">Payment collection after successful delivery</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <GrMapLocation className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Realtime Tracking</h1>
                    <p className="font-pppins text-gray-500">International standard tracking via online</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Completely Own Setup</h1>
                    <p className="font-pppins text-gray-500">A fleet of own vehicles and people</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Cashless Pay</h1>
                    <p className="font-pppins text-gray-500">Pay with Bkash, Nagad, Debit and Credit cards during doorstep delivery</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Smart log</h1>
                    <p className="font-pppins text-gray-500">Detail visibility on return orders & correspondence between Paperfly and customers</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Automated billing</h1>
                    <p className="font-pppins text-gray-500">Hassle free automated billing system</p>
                </div>

                <div className="border p-6 rounded-2xl text-center bg-[#E8F6FC]">
                    <div className="flex justify-center">
                        <TbTruckDelivery className="text-7xl text-[#FF3333] mb-4 p-2 rounded-full shadow-lg" />
                    </div>
                    <h1 className="text-xl font-pppins font-semibold mb-3">Smart Check</h1>
                    <p className="font-pppins text-gray-500">Access to customers’ previous delivery records to determine possible delivery or return</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;