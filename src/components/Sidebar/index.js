import React from 'react'
import {SidebarContainer , Icon , CloseIcon, SideBtnWrap , SidebarLink , SidebarRoute , SidebarWrapper, SidebarMenu} from './SidebarElements'


export const Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to="about" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>About</SidebarLink>
                    <SidebarLink 
                        to="events" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Events</SidebarLink>
                        <SidebarLink 
                        to="quiz" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Quizzes</SidebarLink>
                    <SidebarLink to="team" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Team</SidebarLink>
                    <SidebarLink to="advisor" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Advisor</SidebarLink>
                    <SidebarLink to="princi" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Principal</SidebarLink>
                    <SidebarLink 
                        to="help" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Help</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/timeline">Register</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
