import React from "react";
import "./HeroBox.css";
import { Medal, Lightbulb, Wallet, Headphones } from "lucide-react";

const features = [
  {
    icon: <Medal size={36} color="#f26522" />,
    title: "Customized Planning",
    description: "Tailored approach to retirement & wealth goals, wherever you are in life",
  },
  {
    icon: <Lightbulb size={36} color="#f26522" />,
    title: "Inclusive & Diverse",
    description: "Making financial independence possible for all backgrounds & communities",
  },
  {
    icon: <Wallet size={36} color="#f26522" />,
    title: "Turnkey Business Model",
    description: "Step-by-step support for entrepreneurial-minded individuals",
  },
  {
    icon: <Headphones size={36} color="#f26522" />,
    title: "Experienced Leadership",
    description: "Decades of industry expertise guiding your financial journey",
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
