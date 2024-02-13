import "../stylesheet/Dashboard.css";
import src from "../assets/react.svg";
import speedometer from "../assets/speedometer.svg";
import caricon from "../assets/caricon.svg";
import co2 from "../assets/CO2.svg";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <div className="dashboard-side-section">
          <div className="side-section-evs data">
            <img src={src} alt="" />
            <span>
              <h3>EVs</h3>
              <h1>36</h1>
            </span>
          </div>
          <div className="side-section-states">
            <div className="data">
              <img src={src} alt="" />
              <span>
                <h3>Utilization</h3>
              </span>
            </div>
            <div className="data ev-states">
              <img src={src} alt="" />
              <span>
                <h3>Trips/Day</h3>
                <h2>3.5</h2>
              </span>
            </div>
            <div className="data ev-states">
              <img src={src} alt="" />
              <span>
                <h3>KM/Trip</h3>
                <h2>25</h2>
              </span>
            </div>
            <div className="data ev-states">
              <img src={src} alt="" />
              <span>
                <h3>Daily utilisation</h3>
                <h2>13 hours</h2>
              </span>
            </div>
          </div>
          <div className="side-section-logo"></div>
        </div>
        <div className="dashboard-main-section">
          <div className="main-upper-section">
            <div className="upper-section-kms data">
              <img src={speedometer} alt="" />
              <span>
                <h3>Green Kilometer</h3>
                <h1>3366</h1>
              </span>
            </div>
            <div className="upper-section-trips data">
              <img src={caricon} alt="" />
              <span>
                <h3>Trips</h3>
                <h1>236</h1>
              </span>
            </div>
            <div className="upper-section-carbon data">
              <img src={co2} alt="" />
              <span>
                <h3>Carbon Emission</h3>
                <h1>36</h1>
              </span>
            </div>
          </div>
          <div className="main-lower-section"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
