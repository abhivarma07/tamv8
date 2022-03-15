import ImageSlider from "../components/Slider/index.js";
import "../css/slider.css"

const Signin = ({data , autoplay}) =>  {
  return (
    <div className="body">
      <ImageSlider data = {data} autoplay={autoplay}/>
    </div>
  );
}

export default Signin;
