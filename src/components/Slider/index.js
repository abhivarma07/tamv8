import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider({data}) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
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
