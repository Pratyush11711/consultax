
import "./CallBackForm.css";

const CallBackForm = () => {
  return (
    <section className="callback-section" id="callback">
              <h2 className="head">Brochure</h2>
      <div className="callback-container">

        <div className="callback-text">
          <h2>
           Download Indexed  <br /> Universal Life
          </h2>
          <p>
          A guide to help you understand the features and benefits of Indexed Universal Life (IUL) insurance, including interest-rate caps, guaranteed minimum interest rates, fee structures, and tax advantages and the complexities of this type of insurance.
          </p>
        </div>

        <form className="callback-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />

          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <button type="submit">Download Now</button>
        </form>
      </div>
    </section>
  );
};

export default CallBackForm;
