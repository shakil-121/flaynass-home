import React from "react";

const Tracking = () => {
  return (
    <div className="form-control w-1/2 bg-slate-300 shadow-lg p-8 mx-auto -mt-12 rounded-lg">
      <div className="relative">
        <input
          type="text"
          placeholder="Tracking Id"
          className="input input-bordered w-full pr-16"
        />
        {/* <button className="btn bg-[#03011E] hover:bg-[#FF3333] text-white absolute top-0 right-0 rounded-l-none">
         
        </button> */}
        {/* Open the modal using ID.showModal() method */}
        <button className="btn  bg-[#03011E] hover:bg-[#FF3333] text-white absolute top-0 right-0 rounded-l-none" onClick={() => window.my_modal_5.showModal()}>
        Tracking
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Tracking Status</h3>
            <p className="py-4">
              Tracking not found !
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Tracking;
