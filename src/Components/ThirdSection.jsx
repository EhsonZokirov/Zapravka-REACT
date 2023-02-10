import React from "react";
import sec3 from "../images/3sec.png";
import sec32 from "../images/phone1.png";
function ThirdSection() {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        <div className="md:w-[50%] px-10 my-[5%]">
          <p className="text-slate-500">TEchnology</p>
          <h1 className="font-bold text-[20px] md:text-[50px]">
            Use H(app)y to give your digital photos some pop.
          </h1>
          <p className="text-slate-500 text-justify w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div>
          <img className="w-[350px]" src={sec3} alt="sec3" />
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly md:flex-row-reverse bg-[#F2F2F2] pt-20">
        <div className="md:w-[50%] px-10 my-[5%]">
          <p className="text-slate-500">Speed & security</p>
          <h1 className="font-bold text-[20px] md:text-[50px]">
            State-of-the-art processing capabilities.
          </h1>
          <p className="text-slate-500 text-justify w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div>
          <img className="w-[350px]" src={sec32} alt="sec3" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
