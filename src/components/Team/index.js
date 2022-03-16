import React from 'react'
import {
TeamContainer,
TeamH2,
TeamWrapper,
TeamCard,
TeamIcon,
TeamP
} from './TeamElemets'
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Team = ({data}) => {

    return (
        <TeamContainer id="teamDetails">
            <TeamWrapper>
                {data.map((item,index) => {
                    return(
                    <TeamCard key={index}>
                        <LazyLoadImage alt={"Images"} height="200px" width="200px" src={item.img} effect="blur"/>
                        <TeamH2>{item.title}</TeamH2>
                        <TeamH2>{item.name}</TeamH2>
                        <TeamP>{item.desc}</TeamP>
                    </TeamCard>
                    )
                })}
            </TeamWrapper>
        </TeamContainer>
    )
}
