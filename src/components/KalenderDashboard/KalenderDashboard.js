import React from "react";
import "./KalenderDashboard.css";

const KalenderDashboard = () => {
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
  const currentMonth = currentDate.toLocaleString("id-ID", { month: "long" }); // Full month name in Indonesian
  const currentDateNumber = currentDate.getDate();

  const getDatesOfWeek = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(currentDateNumber - currentDay + i);
      dates.push(date.getDate());
    }
    return dates;
  };

  const datesOfWeek = getDatesOfWeek();

  return (
    <div className="KalenderDashboard-Container">
      <div className="KalendarDashboard">
        <div className="Kalender-month">{currentMonth}</div>
        <div className="Kalender-week">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`Kalender-day ${
                index === currentDay ? "Kalender-current" : ""
              }`}
            >
              <div className="Kalenderday-name">{day}</div>
              <div className="Kalenderday-number">{datesOfWeek[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KalenderDashboard;
