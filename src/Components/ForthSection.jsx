import React from "react";
import FOR from "../images/FORsection.png";
import FORdark from "../images/FORdark.png";
function ForthSection() {
  return (
    <div className="bg-[rgb(34,34,34)] text-white p-10">
      <div className="text-center">
        <p>DARK MODE</p>
        <h1 className="font-bold md:text-[30px]">Also available in dark.</h1>
        <p>
          Don't get blinded when using the H(app)y app at night, just turn off
          the lights. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div >
        <div className="">
          <img className=" m-auto w-[250px] md:w-[500px]" src={FOR} alt="FOR" />
        <div  className="border-t-[2px]  m-auto">
          <img className=" m-auto" src={FORdark} alt="FORdark" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ForthSection;
