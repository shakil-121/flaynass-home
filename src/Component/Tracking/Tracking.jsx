import React from 'react';

const Tracking = () => {
    return (
        <div className="form-control w-1/2 bg-slate-300 shadow-lg p-8 mx-auto -mt-12 rounded-lg">
            <div className="relative">
                <input type="text" placeholder="Tracking Id" className="input input-bordered w-full pr-16" />
                <button className="btn bg-[#03011E] hover:bg-[#FF3333] text-white absolute top-0 right-0 rounded-l-none">Tracking</button>
            </div>
        </div>
    );
};

export default Tracking;