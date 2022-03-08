import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./heroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtomElement";

export const HeroSection = ({data}) => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (

    <>
      <HeroContainer wid = {data.width}>
        <HeroBg>
          <VideoBg autoPlay loop muted src={data.vid} type="video/mps" />
        </HeroBg>
        <HeroContent>
          <HeroH1>{data.heading} </HeroH1>
          <HeroP>{data.desc}</HeroP>
          <HeroBtnWrapper flag = {data.btn}>
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={100}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
