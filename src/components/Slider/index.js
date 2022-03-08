import React , {useState , useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider({data}) {

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

        if(width > 760){
            return 3 
        }

        else if(width > 450){
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
  };

  const color = getComputedStyle(document.documentElement).getPropertyValue('--background')
  console.log(color) 

  return (
    <Slider {...settings}>
        {data.map((item,index) => {
            return(
                <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={item.img} />
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