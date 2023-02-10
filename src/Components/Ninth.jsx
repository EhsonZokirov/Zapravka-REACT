import React from "react";
import logo from "../images/IMAGE.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
function Ninth() {
  return (
    <div className="text-center my-10 space-y-5">
      <img className="m-auto" src={logo} alt="logo" />
      <div>
        <IconButton>
          <TwitterIcon />
        </IconButton>

        <IconButton>
          <FacebookIcon />
        </IconButton>

        <IconButton>
          <InstagramIcon />
        </IconButton>
      </div>

      <p className="text-slate-400">
        Powered by <span className="text-black"> Webflow</span>. All rights
        reserved by Happy Apps, Inc.
        <span className="text-black"> Licensing </span>
      </p>
    </div>
  );
}

export default Ninth;
