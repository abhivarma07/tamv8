import React from "react";
import {InfoSection} from "../InfoSection/index"
import {tech , marketing, events} from "../InfoSection/Data"
import {HeroSection} from "../HeroSection/index"
import { Dcrew } from "../HeroSection/data";
import Signin from "../../pages/signin";
import { Tech } from "../Slider/data";

const Crew = () => {
  return (
    <>
    <HeroSection data={Dcrew} />
    <InfoSection {...tech}/>
    <Signin data={Tech}/>  
    <InfoSection {...marketing}/>
    <Signin data={Tech}/>  
    <InfoSection {...events}/>
    <Signin data={Tech}/> 
    <InfoSection {...events}/>
    <Signin data={Tech}/>
    <InfoSection {...events}/>
    <Signin data={Tech}/>
    <InfoSection {...events}/>
    <Signin data={Tech}/>
    <InfoSection {...events}/>
    <Signin data={Tech}/>   
     </>
  );
}

export default Crew;