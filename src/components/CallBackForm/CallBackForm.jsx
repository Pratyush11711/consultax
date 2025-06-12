
import "./CallbackForm.css";

const CallbackForm = () => {
  return (
    <section className="callback-section">
      <div className="callback-container">
        <div className="callback-text">
          <h2>
            Request a Free <br /> Call Back
          </h2>
          <p>
            Provide discussion information and we’ll get back to <br />
            you as soon as possible
          </p>
        </div>

        <form className="callback-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <select>
              <option>Audit & Assurance</option>
              <option>Finance</option>
              <option>Tax</option>
            </select>
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default CallbackForm;
