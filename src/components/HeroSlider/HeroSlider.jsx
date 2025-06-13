import React from "react";
import Slider from "react-slick";
import "./HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slide data
const slides = [
  {
    tagline: "Financial Independence For Everyone",
    heading: " Life-insurance & wealth planning solutions",
    contact: [
      "Office Phone: (949) 438-0484",
      "Cell Phone: (408) 375-5030",
      "Email: dan.whitson.wfg@gmail.com",
    ],
    buttonText: "Schedule Appointment",
    image: "/heroimg/image-removebg-preview.png",
    alt: "Businessman",
  },

];

// Custom arrow components
function NextArrow({ onClick }) {
  return <div className="arrow next" onClick={onClick}>❯</div>;
}

function PrevArrow({ onClick }) {
  return <div className="arrow prev" onClick={onClick}>❮</div>;
}

export default function SimpleSlider() {
  const showArrows = slides.length > 1;

  const settings = {
    dots: false,
    arrows: showArrows,
    infinite: slides.length > 1,        // ✅ no loop if only 1 slide
    autoplay: slides.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="slide-content">
              <div className="text-content">
                <p className="tagline">{slide.tagline}</p>
                <h1>{slide.heading}</h1>
                <div className="description">
                  {slide.contact.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <button
                  className="quote-btn"
                  onClick={() => {
                    const target = document.getElementById("callback");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Schedule Appointment
                </button>
              </div>
              <div className="image-content">
                <div className="image-wrapper">
                  <img className="person-img" src={slide.image} alt={slide.alt} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
