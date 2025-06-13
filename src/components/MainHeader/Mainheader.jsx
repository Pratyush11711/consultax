import "./Mainheader.css";

const Mainheader = () => {
  return (
    <div className="main-header">
      <div className="main-head-cont">
        <div className="left-section">
          <div className="logo-section">
           <a href="https://www.worldfinancialgroup.com/"> <img src="/logos/svg330.svg" alt="logo" /></a>
          </div>
          <div className="address-section">
            <span>Address:</span>
            <p>One Park Plaza, Suite 600
              <br />Irvine, CA 92614
            </p>
          </div>
        </div>
        <div className="call-section">
          <span>Office call:</span>
          <h2>(949) 438-0484</h2>
        </div>
      </div>
    </div>

  );
};

export default Mainheader;
