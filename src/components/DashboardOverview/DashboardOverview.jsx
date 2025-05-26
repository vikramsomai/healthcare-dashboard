import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="row">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="dashboard-controls">
          <div className="week-selector">
            <span>This Week</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
