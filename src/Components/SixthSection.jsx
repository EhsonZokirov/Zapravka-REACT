import React from "react";
import pharagraph1 from '../images/pharaph.png';
import pharagraph2 from '../images/pharaph2.png';
import pharagraph3 from '../images/pharaph3.png';
function SixthSection() {
  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className="text-center">
        <p>Testimonials</p>
        <h1 className="font-bold md:text-[30px]">
          Don't take our word for it.
        </h1>
        <p>See what our customers are saying.</p>
      </div>
      <div className="grid md:grid-cols-3 container mx-auto text-center m-auto gap-5 my-10 ">
        <div>
            <img className="w-[300px] m-auto" src={pharagraph1} alt="pharagraph" />
        </div>
        <div>
            <img className="w-[300px] m-auto" src={pharagraph2} alt="pharagraph" />
        </div>
        <div>
            <img className="w-[300px] m-auto" src={pharagraph3} alt="pharagraph" />
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
