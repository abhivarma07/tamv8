import React from "react";
import { Button , Button1 } from "../ButtomElement";
import {
  InfoContainer,
  Column2,
  ImgWrap,
  InfoWrapper,
  InfoRow,
  Column1,
  BtnWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  BtnWrap1,
} from "./InfoElements";

export const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  linkS,
  linkR,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to
}) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBg={lightBg}>{headline}</Heading>
                <Subtitle lightBg={lightBg}>{description}</Subtitle>
                <BtnWrap linkS={linkS}>
                  <Button
                    to={to}
                    smooth= "true"
                    duration={500}
                    exact="true"
                    offset={100}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
                <BtnWrap1 linkR={linkR}>
                  <Button1
                    to={to}
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={100}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    target = "_blank"
                  >
                    {buttonLabel}
                  </Button1>
                </BtnWrap1>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
