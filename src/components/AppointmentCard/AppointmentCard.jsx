import "./AppointmentCard.css";

const AppointmentCard = ({ title, time, doctor, icon, color }) => {
  return (
    <div className={`appointment-card ${color}`}>
      <div className="appointment-header">
        <h3 className="appointment-title">{title}</h3>
        <div className="appointment-icon">
          <img src={icon} height={25}></img>
        </div>
      </div>
      <p className="appointment-time">{time}</p>
      <p className="appointment-doctor">{doctor}</p>
    </div>
  );
};

export default AppointmentCard;
