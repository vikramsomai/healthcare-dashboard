import "./App.css";
import DashboardMainContent from "./components/Dashboard/DashboardMainContent";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { healthIndicators, healthStatusCards } from "./data/healthData";
import {
  calendarMonth,
  timeSlots,
  appointmentCards,
} from "./data/calenderData";
import { upcomingAppointments } from "./data/appointmentsData";
import { activityData } from "./data/activityData";
function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <Header />
        <DashboardMainContent
          healthIndicators={healthIndicators}
          healthStatusCards={healthStatusCards}
          calendarMonth={calendarMonth}
          timeSlots={timeSlots}
          appointmentCards={appointmentCards}
          upcomingAppointments={upcomingAppointments}
          activityData={activityData}
        />
      </div>
    </div>
  );
}

export default App;
