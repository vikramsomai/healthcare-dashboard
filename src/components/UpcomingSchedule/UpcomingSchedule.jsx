import "./UpcomingSchedule.css";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";

const UpcomingSchedule = ({ upcomingAppointments }) => {
  return (
    <div className="upcoming-schedule">
      <div className="schedule-header">
        <h2 className="schedule-title">The Upcoming Schedule</h2>
      </div>

      {upcomingAppointments.map((daySchedule) => (
        <div key={daySchedule.day} className="day-schedule">
          <h3 className="day-title">On {daySchedule.day}</h3>
          <div className="day-appointments">
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
