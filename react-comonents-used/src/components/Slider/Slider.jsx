import Slider from "react-slick";
import "./Slider.css"

function CustomSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="container">
            <img src="https://picsum.photos/id/1018/200/300" alt="1" />
            <img src="https://picsum.photos/id/1019/200/300" alt="2" />
            <img src="https://picsum.photos/id/1020/200/300" alt="3" />
          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default CustomSlider;
