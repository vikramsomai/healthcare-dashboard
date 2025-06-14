import "./AnatomySection.css";
import { imageLink } from "../../data/imageLinks";
const AnatomySection = ({ healthIndicators }) => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-placeholder">
          <img src={imageLink.human} alt="Anatomy Placeholder" />
        </div>

        {healthIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className={`health-indicator ${indicator.id}`}
            style={{
              ...indicator.position,
            }}
          >
            {indicator.id === "heart" && (
              <span className="indicator-icon">
                <img src={imageLink.heart} alt="Heart Icon" />
              </span>
            )}
            {indicator.id === "legss" && (
              <span className="indicator-icon">
                <img src={imageLink.leg} alt="Leg Icon" />
              </span>
            )}
            <span className="indicator-text">{indicator.name}</span>
          </div>
        ))}

        <div className="zoom-control">
          <div className="zoom-track">
            <div className="zoom-handle"></div>
          </div>
        </div>
      </div>

      <button className="search-anatomy-btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default AnatomySection;
