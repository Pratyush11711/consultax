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
    title: "Audit & Assurance",
    description:
      "Senectus accumsan malesuada cursus dapibus sem primis cubilia, per potenti fermentum massa pulvinar turpis taciti, pellentesque.",
    icon: <Umbrella size={32} color="#ff6600" />,
  },
  {
    title: "Financial Consulting",
    description:
      "Justo luctus mus ultricies habitasse dictumst senectus habitant, primis erat mauris odio faucibus cras non interdum purus sociis.",
    icon: <Box size={32} color="#ff6600" />,
  },
  {
    title: "Trades & Stocks",
    description:
      "Risus aenean ultricies integer purus sociis luctus tristique, sodales fusce ante maecenas massa cum est, ligula hac cursus.",
    icon: <BarChart size={32} color="#ff6600" />,
  
  },
  {
    title: "Strategic Planning",
    description:
      "Mus leo mauris nec erat ullamcorper orci nascetur, est faucibus auctor natoque tempus eu, eros condimentum et taciti rhoncus.",
    icon: <List size={32} color="#ff6600" />,
  },
  {
    title: "Financial Projections",
    description:
      "Varius scelerisque tristique condimentum habitant dui euismod auctor lacinia maecenas cubilia eleifend erat, purus malesuada.",
    icon: <DollarSign size={32} color="#ff6600" />,
  },
  {
    title: "Bonds & Commodities",
    description:
      "Dis vel quam parturient et molestie at morbi vehicula mus phasellussenectus congue lacinia pulvinar turpis taciti, pellentesque.",
    icon: <FileText size={32} color="#ff6600" />,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-subtitle">OUR SERVICES</p>
        <h2>What we bring to you</h2>
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
