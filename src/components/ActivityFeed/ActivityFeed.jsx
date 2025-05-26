import "./ActivityFeed.css";
import { activityData } from "../../data/activityData";
const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-count">
          {activityData.count} appointment on this week
        </p>
      </div>

      <div className="activity-chart">
        {activityData.days.map((day, index) => (
          <div key={index} className="day-activity">
            <div className="activity-bars">
              <div
                className={`first-line-container  ${
                  day.separate ? "separate" : ""
                }`}
              >
                <span
                  className={`first-line-top ${day.separateColors[0]}`}
                ></span>
                <span
                  className={`first-line-bottom ${day.separateColors[1]}`}
                ></span>
              </div>

              <span className={`second-line ${day.colors[1]}`}></span>

              <div className="third-line">
                <span
                  className={`third-line-part1 ${day.thirdColors[0]}`}
                ></span>
                <span
                  className={`third-line-part2 ${day.thirdColors[1]}`}
                ></span>
              </div>

              <span className={`fourth-line ${day.colors[2]}`}></span>
            </div>
            <div className="day-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
