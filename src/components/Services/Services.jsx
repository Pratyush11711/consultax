import React from "react";
import {
  Umbrella,
  Box,
  BarChart,
  List,
  DollarSign,
  FileText,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "Insurance Protection",
    description:
      "The most important part of preparing for the future is protecting it. As a WFGIA insurance agent, I can help you prepare for uncertainty. Whether you outlive your retirement, pass away unexpectedly or become disabled, there are products that can help protect the life you’ve built for yourself and your loved ones.",
    icon: <Umbrella size={32} color="#ff6600" />,
  },
  {
    title: "Retirement Strategies",
    description:
      "The key to a successful retirement is one that doesn’t require you to compromise your lifestyle or wonder if and when your nest egg will run out. As a WFGIA Insurance Agent, I can provide a variety of options to help you prepare for your leisure years without sacrificing your quality of life.",
    icon: <Box size={32} color="#ff6600" />,
  },
  {
    title: "Business Strategies",
    description:
      "Small business owners need financial and insurance options for themselves and their employees, and they need to ensure the future safety of their businesses. I can help structure strategies so that if something happens, owners and employees are protected.",
    icon: <BarChart size={32} color="#ff6600" />,
  
  },
  {
    title: "Long Term Care",
    description:
      "Long-term care planning is often overlooked but can be a key component of a solid financial foundation as people live longer. Plan now to help ensure expenses are covered if and when extended care is needed.",
    icon: <List size={32} color="#ff6600" />,
  },
  {
    title: "Life Insurance",
    description:
      "A comprehensive life insurance policy is key to protecting those you care about most. Whether you want simple coverage or a policy with retirement-income benefits, I can walk you through the main types and help you decide which is right for you.",
    icon: <DollarSign size={32} color="#ff6600" />,
  },
  {
    title: "Disability Insurance",
    description:
      "Don’t let an unexpected disability compromise your prime earning years. With disability insurance you can still receive income even if you’re unable to work due to injury or illness.",
    icon: <FileText size={32} color="#ff6600" />,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-subtitle">OUR SERVICES</p>
        <h2>Services Offered by Dan</h2>
        <a href="#" className="services-link">
          All services
        </a>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
