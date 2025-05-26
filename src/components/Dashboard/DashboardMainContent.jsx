import "./DashboardMainContent.css";
import DashboardOverview from "../DashboardOverview/DashboardOverview";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const DashboardMainContent = ({
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
      <div className="dashboard-content">
        <div className="dashboard-left">
          <DashboardOverview
            healthIndicators={healthIndicators}
            healthStatusCards={healthStatusCards}
          />

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

export default DashboardMainContent;
