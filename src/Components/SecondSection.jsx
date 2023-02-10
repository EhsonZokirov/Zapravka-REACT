import {  } from "@mui/material";
import React from "react";
import img1 from "../images/Frame.png";
import img2 from "../images/Frame (1).png";
function SecondSection() {
  return (
    <div className="bg-[#222222]">
      <div className="text-center py-10 my-10 px-5 md:w-[30%] m-auto text-white">
        <p>Features</p>
        <h1 className="font-semibold md:text-[30px] ">The latest & greatest in phone photography.</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5  px-5 w-[80%] m-auto ">
        <div>
          <img className="w-[400px] " src={img1} alt="img1" />
        </div>
        <div>
          <img className="w-[400px]" src={img2} alt="img1" />
        </div>
        <div>
          <img className="w-[400px]" src={img1} alt="img1" />
        </div>
        <div>
          <img className="w-[400px]" src={img2} alt="img1" />
        </div>
        <div>
          <img className="w-[400px]" src={img1} alt="img1" />
        </div>
        <div>
          <img className="w-[400px]" src={img2} alt="img1" />
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-3 bg-[#FF5437] text-white my-10 items-center text-center">
        <div className="p-5">
          <h1 className="md:text-[50px] text-[25px] font-bold ">400+</h1>
          <p>Pictures analyzed</p>
        </div>
        <div className="p-5 border-y-[1px] border-[#222222]">
          <h1 className="md:text-[50px] text-[25px] font-bold ">25+</h1>
          <p>Operations per minute</p>
        </div>
        <div className=" p-5">
          <h1 className="md:text-[50px] text-[25px] font-bold ">95%</h1>
          <p>Accuracy</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
