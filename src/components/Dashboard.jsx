import "../stylesheet/Dashboard.css";
import { fleetData } from "./fleetdata";
import Heatmap from "./Heatmap";
import src from "../assets/react.svg";
import speedometer from "../assets/speedometer.svg";
import caricon from "../assets/caricon.svg";
import co2 from "../assets/CO2.svg";

function Dashboard() {
  const totalKilometers = fleetData.vehicles.reduce((total, vehicle) => {
    return (
      total +
      vehicle.metrics.kilometers_traveled.reduce(
        (acc, curr) => acc + curr.value,
        0
      )
    );
  }, 0);

  const totalCarbonEmissions = fleetData.vehicles.reduce((total, vehicle) => {
    return (
      total +
      vehicle.metrics.carbon_emissions.reduce(
        (acc, curr) => acc + curr.value,
        0
      )
    );
  }, 0);

  const totalTrips = fleetData.vehicles.reduce((total, vehicle) => {
    return total + vehicle.metrics.kilometers_traveled.length;
  }, 0);

  const noOfevs = fleetData.vehicles.length;

  const totaltime = fleetData.vehicles.reduce((total, vehicle) => {
    return (
      total +
      vehicle.metrics.triptime.reduce((acc, curr) => acc + curr.value, 0)
    );
  }, 0);

  const dailytime = (totaltime / totalTrips).toFixed(2);
  const kmprtrip = totalKilometers / totalTrips;
  const tripsprday = totalTrips / fleetData.dates.length;

  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <div className="dashboard-side-section">
          <div className="side-section-evs data">
            <img src={src} alt="" />
            <span>
              <h3>EVs</h3>
              <h1>{noOfevs}</h1>
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
                <h2>{tripsprday}</h2>
              </span>
            </div>
            <div className="data ev-states">
              <img src={src} alt="" />
              <span>
                <h3>KM/Trip</h3>
                <h2>{kmprtrip}</h2>
              </span>
            </div>
            <div className="data ev-states">
              <img src={src} alt="" />
              <span>
                <h3>Daily utilisation</h3>
                <h2>{dailytime}</h2>
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
                <h1>{totalKilometers}</h1>
              </span>
            </div>
            <div className="upper-section-trips data">
              <img src={caricon} alt="" />
              <span>
                <h3>Trips</h3>
                <h1>{totalTrips}</h1>
              </span>
            </div>
            <div className="upper-section-carbon data">
              <img src={co2} alt="" />
              <span>
                <h3>Carbon Emission</h3>
                <h1>{totalCarbonEmissions}</h1>
              </span>
            </div>
          </div>
          <div className="main-lower-section">
            <Heatmap  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
