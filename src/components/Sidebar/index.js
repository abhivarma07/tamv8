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
                    <SidebarLink 
                        to="help" 
                        onClick={toggle} 
                        smooth = {true} 
                        duration={500}
                        spy={true}
                        exact='true'>Help</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
