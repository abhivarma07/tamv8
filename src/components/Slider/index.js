import React , {useState , useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';


function ImageSlider({data , autoplay}) {


    function autop(){
      if(!autoplay){
        return false 
      }

      return true 
    }

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
            return 3 
        }

        else if(width > 550){
            return 2
        }

        else{
            return 1
        }

      }

  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: slider(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    lazyLoad : true , 
    pauseOnHover : true , 
  };

  return (
    <Slider {...settings}>
        {data.map((item,index) => {
            return(
                <div className="card-wrapper" key={item}>
                <div className="card">
                    <div className="card-image">
                        <LazyLoadImage src={item.img} effect="blur" height="100%" width="100%"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href={item.form} target={item.tar}><i className="fa fa-facebook">{item.role}</i></a></li>
                    </ul>
                    <div className="details">
                        <h2>{item.name}<span className="job-title">{item.desc}</span></h2>
                    </div>
                </div>
            </div>
            )
        })}            
    </Slider>
  );
}

export default ImageSlider;
