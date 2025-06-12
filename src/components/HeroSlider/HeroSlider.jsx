import React from "react";
import Slider from "react-slick";
import "./HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBox from "../HeroBox/HeroBox";

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return <div className="arrow next" onClick={onClick}>❯</div>;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow prev" onClick={onClick}>❮</div>;
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <div className="text-content">
              <p className="tagline">We're Consultax</p>
              <h1>Help You To Grow Your Business</h1>
              <p className="description">
                Gugue cubilia habitasse nostra sed dui facilisi lacus varius, porttitor gravida
                ultrices tristique hendrerit quisque congue facilisis.
              </p>
              <button className="quote-btn">Get Quote</button>
            </div>
            <div className="image-content">
              <img src="/heroimg/man-slide.png" alt="Businessman" />
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="slide-content">
            <div className="text-content">
              <p className="tagline">We're Consultax</p>
              <h1>Finance Focus Road to Success</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Jure iste beatae ea architecto, velit ratione optio officia.
              </p>
              <button className="quote-btn">Get Quote</button>
            </div>
            <div className="image-content">
              <img src="/heroimg/woman-slide.png" alt="Businesswoman" />
            </div>
          </div>
        </div>
      </Slider>

    </div>
  );
}
