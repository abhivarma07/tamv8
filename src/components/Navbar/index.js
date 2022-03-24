import React , {useState , useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Nav , 
    NavbarContainer ,
     NavLogo , 
     MobileIcon , 
     NavMenu , 
     NavItem , 
     NavLinks , 
     Logo,
     NavBtn,
     NavBtnLink,
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import tamLogo from '../../images/tamLogo.png'



export const Navbar = ({toggle}) => {

    const [scrollNav , setscrollNav] = useState(false) 

    const changeNav = () => {
        if(window.scrollY>=80){
            setscrollNav(true) 
        }

        else
        {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop() ;
    }

    const img = require('../../images/TAMv8.png')

    return (
       <>
       <IconContext.Provider value={{color : '#fff'}} >
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                        <Logo src={img} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth = {true} 
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={20}
                        activeClass='active'
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="events"
                        smooth = {true} 
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={60}
                        activeClass='active'
                        >Events</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="quiz"
                        smooth = {true} 
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={60}
                        activeClass='active'
                        >Quizzes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team"
                        smooth = {true} 
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={60}
                        activeClass='active'
                        >Team</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="advisor"
                        smooth = {true} 
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={75}
                        activeClass='active'
                        >Advisor</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="princi"
                        smooth = {true} 
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={75}
                        activeClass='active'
                        >Principal</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="help"
                        smooth = {true} 
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={60}
                        activeClass='active'
                        >Help</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/timeline" target="_blank">Register</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
         </Nav>
         </IconContext.Provider>
       </>
    )
}
