import React from "react";
import "./exercise7.css";
import carImage from "./xe.png"

function App() {
  return (
    <div className="container">
      <div className="section-title">Cards Columns</div>

      <div className="card-row">
        {/* Card 1 */}
        <div className="card-box border-blue">
          <img src={carImage} alt="Car 1" className="card-img" />
          <div className="card-text bg-blue">
            Some text inside the first card
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-box border-yellow">
          <img src={carImage} alt="Car 2" className="card-img" />
          <div className="card-text bg-yellow">
            Some text inside the first card
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-box border-red">
          <img src={carImage} alt="Car 3" className="card-img" />
          <div className="card-text bg-red">
            Some text inside the first card
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
