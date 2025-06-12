
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-image">
        <img src="/bgimg/bg-home1.jpg" alt="Handshake" />
      </div>
      <div className="who-content">
        <p className="subheading">WHO WE ARE</p>
        <h2>Our Mission,<br />Values and Motto</h2>
        <p className="description">
          A putrid, nicotine-shaded mist loomed over Beijing on Thursday after a
          massive sandstorm slammed into the Chinese capital bringing the latest
          airpocalypse to this smog-choked city.
        </p>
        <div className="signature">
          <img src="/sign1.png" alt="Signature" />
          <div>
            <h4>James Patterson</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
