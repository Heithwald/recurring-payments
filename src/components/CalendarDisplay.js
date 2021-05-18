import React from "react";

const openCalendar = (event) => {
  const calendarDisplay = document.querySelector(".calendar-display");

  calendarDisplay.classList.toggle("visible");
};

const CalendarDisplay = () => {
  return (
    <div className="calendar-display">
      <div className="calendar-display__item">
        <button onClick={openCalendar} className="date-picker">
          Выбрать даты
        </button>
        <p className="calendar-display__placeholder">Здесь будет календарь</p>
      </div>
    </div>
  );
};

export default CalendarDisplay;
