import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-info">
        <h4 className="simple-appointment-title">{title}</h4>
        <p className="simple-appointment-time">{time}</p>
      </div>
      <div className={`simple-appointment-icon ${icon}`}>
        <img src={icon} height={30} />
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
