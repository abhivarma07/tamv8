import React from "react";
import {InfoSection} from "../InfoSection/index"
import {tech , marketing, events} from "../InfoSection/Data"
import {HeroSection} from "../HeroSection/index"
import { Dcrew } from "../HeroSection/data";
import Signin from "../../pages/signin";
import { Tech , Market , Event , VFX , Wizards , Photo , Stage } from "../Slider/data";

const Crew = () => {
  return (
    <>
    <HeroSection data={Dcrew} />
    <InfoSection {...marketing}/>
    <Signin data={Market}/>  
    <InfoSection {...events}/>
    <Signin data={Event}/>  
    <InfoSection {...tech}/>
    <Signin data={Tech}/> 
    <InfoSection {...events}/>
    <Signin data={Wizards}/>
    <InfoSection {...events}/>
    <Signin data={VFX}/>
    <InfoSection {...events}/>
    <Signin data={Photo}/>
    <InfoSection {...events}/>
    <Signin data={Stage}/>   
     </>
  );
}

export default Crew;