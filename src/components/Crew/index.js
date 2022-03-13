import React from "react";
import {InfoSection} from "../InfoSection/index"
import {tech , marketing, events , photo, vfx, wiz , stage, board} from "../InfoSection/Data"
import {HeroSection} from "../HeroSection/index"
import { Dcrew } from "../HeroSection/data";
import Signin from "../../pages/signin";
import { Tech , Market , Event , VFX , Wizards , Photo , Stage , Board} from "../Slider/data";
import { Footer } from "../Footer";

const Crew = () => {
  return (
    <>
    <HeroSection data={Dcrew} />
    <InfoSection {...board}/>
    <Signin data={Board}/>
    <InfoSection {...marketing}/>
    <Signin data={Market}/>  
    <InfoSection {...events}/>
    <Signin data={Event}/>  
    <InfoSection {...tech}/>
    <Signin data={Tech}/> 
    <InfoSection {...wiz}/>
    <Signin data={Wizards}/>
    <InfoSection {...vfx}/>
    <Signin data={VFX}/>
    <InfoSection {...photo}/>
    <Signin data={Photo}/>
    <InfoSection {...stage}/>
    <Signin data={Stage}/>   
    <Footer/>
     </>
  );
}

export default Crew;