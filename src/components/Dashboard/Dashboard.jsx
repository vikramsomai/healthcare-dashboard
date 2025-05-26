import "./Dashboard.css";
import DashboardOverview from "../DashboardOverview/DashboardOverview";
import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const Dashboard = ({
  healthIndicators,
  healthStatusCards,
  calendarMonth,
  timeSlots,
  appointmentCards,
  upcomingAppointments,
  activityData,
}) => {
  return (
    <main className="dashboard-main">
      {/* <DashboardOverview /> */}

      <div className="dashboard-content">
        <div className="dashboard-left">
          <DashboardOverview />
          <div className="main-section">
            <AnatomySection healthIndicators={healthIndicators} />
            <HealthStatusCards healthStatusCards={healthStatusCards} />
          </div>
          <div className="activity-feed-header">
            <ActivityFeed activityData={activityData} />
          </div>
        </div>

        <div className="dashboard-right">
          <CalendarView
            calendarMonth={calendarMonth}
            timeSlots={timeSlots}
            appointmentCards={appointmentCards}
          />

          <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
