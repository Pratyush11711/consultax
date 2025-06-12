import React from "react";
import "./HeroBox.css";
import { Medal, Lightbulb, Wallet, Headphones } from "lucide-react";

const features = [
  {
    icon: <Medal size={36} color="#f26522" />,
    title: "Quality Services",
    description: "Conubia ut aliquam cub gravida sed morbi accumsа.",
  },
  {
    icon: <Lightbulb size={36} color="#f26522" />,
    title: "Valuable Ideas",
    description: "Ante pharetra posuere blandit aliquam fusce sollicitudin.",
  },
  {
    icon: <Wallet size={36} color="#f26522" />,
    title: "Budget Friendly",
    description: "Lacinia nisl accumsа sceleris phasellus venenatis don,",
  },
  {
    icon: <Headphones size={36} color="#f26522" />,
    title: "Suport 24/7",
    description: "Etiam sollicitudin sagittis justo at ullamcorper potenti.",
  },
];

const HeroBox = () => {
  return (
    <div className="hero-box-container">
      {features.map((item, index) => (
        <div className="hero-box" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroBox;
