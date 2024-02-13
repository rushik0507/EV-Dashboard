import "../stylesheet/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <div className="dashboard-side-section">
          <div className="side-section-evs"></div>
          <div className="side-section-states"></div>
          <div className="side-section-logo"></div>
        </div>
        <div className="dashboard-main-section">
          <div className="main-upper-section">
            <div className="upper-section-kms"></div>
            <div className="upper-section-trips"></div>
            <div className="upper-section-carbon"></div>
          </div>
          <div className="main-lower-section"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
