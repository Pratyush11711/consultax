
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-image">
        <img src="/bgimg/bg-home1.jpg" alt="Handshake" />
      </div>
      <div className="who-content">
        <p className="subheading">WHO WE ARE</p>
        <h2>About Dan & WFG <br />Philosophy</h2>
        <p className="description">
         I’m Dan Whitson, a dedicated World Financial Group financial professional licensed in the United States, the Virgin Islands, Puerto Rico, and Canada. My mission is to empower individuals and families no matter their background to build lasting financial resilience through life-insurance strategies and entrepreneurial opportunity.
        </p>
        <div className="signature">
       
          <div>
            <h4>Dan Whitson</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
