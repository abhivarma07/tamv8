import React , {useState} from 'react'
import { Navbar } from '../components/Navbar'
import {Sidebar} from '../components/Sidebar'
import {HeroSection} from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne , homeObjTwo , homeObjThree, homeObjFour , homeObjFive} from '../components/InfoSection/Data'
import { Team } from '../components/Team'
import { Footer } from '../components/Footer'
import Signin from './signin'
import {Quiz , Events} from "../components/Slider/data"
import {TeamDetails } from "../components/Team/data"
import { main } from '../components/HeroSection/data'
const Home = () => {

    const [isOpen, setisOpen] = useState(false)


    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} /> 
         <HeroSection data={main}/> 
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <Signin data={Events} autoplay={"true"}/>
         <InfoSection {...homeObjFive}/>
         <Signin data={Quiz} autoplay={"true"}/>
         <InfoSection {...homeObjThree}/>
         <Team data={TeamDetails}/>
         <InfoSection {...homeObjFour}/>
         <Footer/>
        </>
    )
}

export default Home
