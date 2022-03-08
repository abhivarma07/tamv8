import React from 'react'
import {
TeamContainer,
TeamH2,
TeamWrapper,
TeamCard,
TeamIcon,
TeamP
} from './TeamElemets'

export const Team = ({data}) => {

    return (
        <TeamContainer id="teamDetails">
            <TeamWrapper>
                {data.map((item,index) => {
                    return(
                    <TeamCard>
                        <TeamIcon src={item.img}/>
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
