import React , {useState, useEffect} from 'react'
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

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      } 

      const { height, width } = useWindowDimensions();

      function slider() {

        if(width > 1000){
            return "200px"
        }

        else if(width > 800){
            return "150px"
        }

        else{
            return "100px"
        }

      }

    return (
        <TeamContainer id="teamDetails">
            <TeamWrapper>
                {data.map((item,index) => {
                    return(
                    <TeamCard key={index}>
                        <LazyLoadImage alt={"Images"} height={slider()} width={slider()} src={item.img} effect="blur"/>
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
