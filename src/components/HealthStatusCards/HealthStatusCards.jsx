import "./HealthStatusCards.css";

const HealthStatusCards = ({ healthStatusCards }) => {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((card) => (
        <div key={card.id} className="health-status-card">
          <div className="card-header">
            <div className={`card-icon ${card.id}`}>
              <img src={card.image} alt={card.name} className="card-image" />
              <h3 className="card-title">{card.name}</h3>
            </div>
            <div className="card-info">
              <p className="card-date">Date: {card.date}</p>
            </div>
          </div>

          <div className="progress-container">
            <div className="progress-track">
              <div
                className="progress-bar"
                style={{
                  width: `${card.status}%`,
                  backgroundColor: card.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <div className="card-footer">
        Details<i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default HealthStatusCards;
