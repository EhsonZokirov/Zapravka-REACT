import React from "react";
import "../App.css";
import logo from "../images/IMAGE.png";
import phone1 from "../images/phone1.png";
import { Button, Grid,  } from "@mui/material";
function FirstSection() {
  return (
    <div>
        <div className="BAR  p-5 mb-10 items-center m-auto w-[100%] text-center grid md:grid-cols-2 shadow-lg ">
        <div >
          <img className=" m-auto md:ml-[20%] cursor-pointer " src={logo} alt="logo" />
        </div>
        <Grid >
          <Button sx={{color:'gray', "&:hover":{color:'black', bgcolor:"transparent"}} }>Features</Button>
          <Button sx={{color:'gray', "&:hover":{color:'black', bgcolor:"transparent"}} }>Pricing</Button>
          <Button sx={{color:'gray', "&:hover":{color:'black', bgcolor:"transparent"}} }>Testimonials</Button>
          <Button sx={{color:'gray', "&:hover":{color:'black', bgcolor:"transparent"}} }>Instructions</Button>
          <Button sx={{color:'white', "&:hover":{color:'white', bgcolor:"black"}, bgcolor:'black'} }>Get template</Button>
        </Grid>
      </div>
      <div className=" mt-[10%] flex flex-wrap text-center md:text-start justify-evenly">
        <div className="font-extralight mt-10 px-5 md:w-[25%]">
          <img className="w-[200px] m-auto md:m-0" src={logo} alt="logo" />
          <h1 className="font-semibold text-[20px] xl:text-[50px]">The future of digital photos.</h1>
          <p className="text-[15px]">The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</p>
  <div className=" my-5">
          <Button sx={{color:'white', "&:hover":{color:'white', bgcolor:"black"}, bgcolor:'black', margin:'5px'} }>Download</Button>
          <Button sx={{color:'white', "&:hover":{color:'white', bgcolor:"black"}, bgcolor:'black', margin:'5px'} }>Get Started</Button>
    </div>  
        </div>
        <div  className="">
          <img className="w-[200px] md:w-[100%]" src={phone1} alt="phone1" />
        </div>
      </div>
      
    </div>
  )
}

export default FirstSection