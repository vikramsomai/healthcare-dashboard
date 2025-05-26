import "./CalendarView.css";
import AppointmentCard from "../AppointmentCard/AppointmentCard";

const CalendarView = ({ calendarMonth, timeSlots, appointmentCards }) => {
  return (
    <div className="calendar-view">
      <div className="calendar-row">
        <div className="month-display">
          {calendarMonth.month} {calendarMonth.year}
        </div>

        <div className="navigation-controls">
          <button className="nav-button">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="nav-button">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="calendar-grid-wrapper">
        <div className="calendar-grid">
          {calendarMonth.days.map((day, index) => (
            <div
              key={day.day}
              className={`calendar-column ${
                index === 1 ? "highlight-col" : ""
              } ${index === 6 ? "highlight-sun" : ""}
              `}
            >
              <div className="calendar-day-header">{day.day}</div>
              <div className="calendar-date">{day.date}</div>
              <div className={`day-slots ${index >= 5 ? "weekend-slots" : ""}`}>
                {timeSlots[index].map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`time-slot ${slot.status} ${
                      slot.highlight ? "highlight-slot" : ""
                    } ${
                      slot.time === "09:00" && index === 1
                        ? "selected-slot"
                        : ""
                    } ${slot.time === "09:00" && index === 6 ? "high-slot" : ""}
                   ${
                     slot.time === "12:00" && index === 5 ? "weekend-slot" : ""
                   }`}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card) => (
          <AppointmentCard
            key={card.id}
            title={card.title}
            time={card.time}
            doctor={card.doctor}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
