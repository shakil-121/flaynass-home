import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="bgc px-16 py-8 my-8">
      <div className="my-16 max-w-screen-xl mx-auto">
        <div>
          <h1 className="text-indigo-900 font-pppins my-4 text-4xl font-bold">
            Common Frequently Asked Questions
          </h1>
          <p className="font-pppins">
            orem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            earum laboriosam <br /> reiciendis numquam error impedit quod,
            obcaecati ullam.
          </p>
        </div>
        <div className="collapse rounded-none collapse-plus py-2 bg-blue-900 mt-8 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: What does Loxicat industrial do?
          </div>
          <div className="collapse-content">
            <p>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              earum laboriosam reiciendis numquam error impedit quod, obcaecati
              ullam.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none collapse-plus py-2 bg-blue-900 mt-3 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: How much cost for industrial service?
          </div>
          <div className="collapse-content">
            <p>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              earum laboriosam reiciendis numquam error impedit quod, obcaecati
              ullam.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none collapse-plus py-2 bg-blue-900 mt-3 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: How does the industrial process work?
          </div>
          <div className="collapse-content">
            <p>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              earum laboriosam reiciendis numquam error impedit quod, obcaecati
              ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
