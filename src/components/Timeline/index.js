import React , {useEffect} from "react";

import "../../App.css";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/work.svg";

import timelineElements from "./timelineElements";

import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";



const HeroBg = styled.div`
    position : absolute ;
    top : 0 ;
    right : 0 ; 
    bottom : 0 ;
    left : 0 ;
    width : 100%;
    height : 100% ;
    overflow : hidden ;
`

const VideoBg = styled.video`
    width : 100%;
    height : 100%;
    -o-object-fit : cover ;
    object-fit : cover ;
    background : #232a24 ;
    position : fixed ; 
`

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div classname="timeBody">
      <HeroBg>
      <VideoBg autoPlay loop muted src="https://ik.imagekit.io/o3b14qow3gqi/Vids/video_Oond4OT3EU.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1646989290529" type="video/mps" />
      </HeroBg>
      <h1 className="title">TAM v8 Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                  target = "_blank"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;