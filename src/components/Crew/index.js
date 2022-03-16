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
    <Signin data={Board} autoplay={false}/>
    <InfoSection {...marketing}/>
    <Signin data={Market} autoplay={false} />  
    <InfoSection {...events}/>
    <Signin data={Event} autoplay={false}/>  
    <InfoSection {...tech} />
    <Signin data={Tech} autoplay={false}/> 
    <InfoSection {...wiz}/>
    <Signin data={Wizards} autoplay={false}/>
    <InfoSection {...vfx}/>
    <Signin data={VFX} autoplay={false}/>
    <InfoSection {...photo} />
    <Signin data={Photo} autoplay={false}/>
    <InfoSection {...stage}/>
    <Signin data={Stage} autoplay={false}/>   
    <Footer/>
     </>
  );
}

export default Crew;