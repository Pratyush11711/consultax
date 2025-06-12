import "./Mainheader.css";

const Mainheader = () => {
  return (
<div className="main-header">
  <div className="main-head-cont">
    <div className="left-section">
      <div className="logo-section">
        <img src="/logo-white.svg" alt="logo" />
      </div>
      <div className="address-section">
        <span>Address:</span>
        <p>121 King Street<br />Melbourne Victoria 3000 Australia</p>
      </div>
    </div>
    <div className="call-section">
      <span>Free call:</span>
      <h2>(917) 814 - 3527</h2>
    </div>
  </div>
</div>

  );
};

export default Mainheader;
