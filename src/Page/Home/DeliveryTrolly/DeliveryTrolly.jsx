import trolley from "../../../assets/Trolley/deliveryTorrley.png";

const DeliveryTrolly = () => {
    return (
        <div className='relative flex flex-col items-center mt-28 mb-36'>
            <div className='border-4 h-72 w-[500px] mt-24'>

            </div>
            <div className='absolute grid grid-cols-2 max-w-screen-xl mx-auto  items-center'>
                <div className="ms-14">
                    <h1 className='uppercase text-3xl font-pppins font-semibold mb-5'>Get the <span className='text-[#FF3333] font-pppins font-bold'>fastest</span> product delivery</h1>
                    <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis consectetur, impedit quod id laboriosam dolorem cumque iste asperiores! Nisi dolorum culpa distinctio cupiditate, assumenda nesciunt maiores commodi provident beatae!</p>
                </div>
                <img className="h-[500px]" src={trolley} alt="" />
            </div>
        </div>
    );
};

export default DeliveryTrolly;