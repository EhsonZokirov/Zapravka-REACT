import React from "react";
import appstore from "../images/appstore.png";
function Seventh() {
  return (
    <div>
      <div className="text-center p-10 md:w-[50%] m-auto space-y-10">
        <p>Download</p>
        <h1 className="font-bold md:text-[30px]">It's available right now!</h1>
        <p>
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
          convallis risus egestas non.
        </p>
        <img className="m-auto" src={appstore} alt="appstore" />
      </div>
    </div>
  );
}

export default Seventh;
