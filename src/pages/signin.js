import ImageSlider from "../components/Slider/index.js";
import "../css/slider.css"

const Signin = ({data}) =>  {
  return (
    <div className="body">
      <ImageSlider data = {data} />
    </div>
  );
}

export default Signin;
