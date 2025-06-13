
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Client.css";

const testimonials = [
  {
    name: "Quynh Anh",
    city: "Hanoi",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    stars: 4.5,
    text: "Dan helped me secure my family’s future with an affordable life-insurance plan."
  },
  {
    name: "Nora Roberts",
    city: "Paris",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 4.5,
    text: "Thanks to Dan’s guidance, I launched my WFG business and hit my first $5,000 month within six months."
  },
  {
    name: "John Doe",
    city: "Beijing",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    stars: 4.5,
    text: "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now."
  },
];

const Client = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992, // tablets and below
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-header">
        <p className="sub-heading">Testimonial & Partner</p>
        <h2 className="main-heading">What our clients says?</h2>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-top">
                <img src={t.img} alt={t.name} className="profile-img" />
                <div>
                  <h3>{t.name}</h3>
                  <p className="city">from {t.city}</p>
                </div>
              </div>
              <hr />
              <div className="testimonial-body">
                <div className="stars">★★★★★</div>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="partner-logos">
        <img src="/projectimg/logo1.png" alt="Partner 1" />
        <img src="/projectimg/logo2.png" alt="Partner 2" />
        <img src="/projectimg/logo3.png" alt="Partner 3" />
        <img src="/projectimg/logo4.png" alt="Partner 4" />
      </div>
    </div>
  );
};

export default Client;
