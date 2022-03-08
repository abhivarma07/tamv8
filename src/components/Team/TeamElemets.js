import styled from "styled-components";

export const TeamContainer = styled.div`
    height : 800px ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items: center ;
    background : #fff ;

    @media screen and (max-width: 800px){
        height: 1400px ;
    }

    @media screen and (max-width: 571px){
        display:none ;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1000px ;
    margin : 0 auto ; 
    display : grid ;
    grid-template-columns : 1fr 1fr 1fr 1fr ;
    align-items : center ;
    grid-gap : 20px ;
    padding: 0 50px ;

    @media screen and (max-width: 800px){
    grid-template-columns : 1fr 1fr ;
    }
    
`

export const TeamCard = styled.div`
    background : #000 ;
    display : flex ;
    flex-direction : column ;
    justify-content: flex-start ;
    align-items : center ;
    border-style : solid ;
    border-color : #fff ;
    border-radius : 10px ;
    max-height : 340px ;
    padding : 30px ;
    box-shadow : 0 1px 3px rgba(0,0,0,0.2) ;
    transition : all 0.2s ease-in-out ;

    &:hover{
        tranform: scale(1.02) ;
        transition : all 0.2s ease-in-out ;
        cursor : pointer;
    }

    @media screen and (max-width: 800px){
        max-height : 300px ;
    }
`

export const TeamIcon = styled.img`
    height : 160px ;
    width : 160px ;
    margin-bottom : 10px ;
`

export const TeamH1 = styled.h1`
    font-size : 2.5rem ;
    color : #fff ;
    margin-bottom : 64px ;

    @media screen and (max-width: 480px)
    {
        font-size: 2rem ;
    }
`

export const TeamH2 = styled.h2`
    font-size : 1rem ;
    margin-bottom: 10px ;
    color : #fff ;
`

export const TeamP = styled.p`
    font-size : 1rem ;
    text-align : center ;
    color : #fff ;
`


