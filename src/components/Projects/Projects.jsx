import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    image: "/projectimg/case-slide4.jpg",
    logo: "/projectimg/logo4.png",
    date: "Contract Project: April 24, 2016",
    title: "Enterprise Loan 2016",
    description:
      "Fames integer pretium commodo sed sed orci magnis euismod a, fusce felis leo habitant ridiculus auctor nisl id, cras nisi porta mus enim dapibus aenean.",
  },
  {
    image: "/projectimg/case-slide1.jpg",
    logo: "/projectimg/logo1.png",
    date: "Contract Project: May 22, 2017",
    title: "Financial Report 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat omnis odio deleniti ducimus obcaecati, velit beatae cumque ipsum dolorum sed fuga in odit laudantium?",
  },
  {
    image: "/projectimg/case-slide2.jpg",
    logo: "/projectimg/logo3.png",
    date: "Contract Project: November 15, 2018",
    title: "Business Growth Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam quidem temporibus error velit beatae! Repellat officiis sequi mollitia obcaecati?",
  },
  {
    image: "/projectimg/case-slide3.jpg",
    logo: "/projectimg/logo2.png",
    date: "Contract Project: September 14, 2017",
    title: "MO Insurance Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel justo dapibus, ullamcorper magna vitae, cursus quam. Praesent vitae nibh ut sapien feugiat porttitor.",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="project-section">
      <div className="project-header">
        <div>
          <p>Our projects</p>
          <h2>We are the leaders</h2>
        </div>
        <div className="project-link">All projects</div>
      </div>
      <Slider {...settings} className="project-slider">
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <div className="project-image">
              <img src={project.image} alt={`slide-${index}`} />
            </div>
           <div className="project-info">
  <div className="project-meta">
    <img src={project.logo} alt="logo" />
    <p className="project-date">{project.date}</p>
  </div>
  <div className="project-text">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="view-details">View details</div>
  </div>
</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
