import React from "react";
import { connect } from "react-redux";
import { setFrequency, setFrequencyDay } from "../redux";

import FormControl from "./FormControl";

const PaymentFrequency = (props) => {
  // Handler для клика на "Выбрать даты" //
  const openCalendar = (event) => {
    event.preventDefault();
    const calendarDisplay = document.querySelector(".calendar-display");
    calendarDisplay.classList.toggle("visible");
  };

  // Массив для рендера 31-го дня в select //
  const month = new Array(31);

  for (let i = 1; i < 32; i++) {
    month[i - 1] = i;
  }

  return (
    <FormControl name={"Частота"}>
      <div className="input-group">
        <div className="input-group__section">
          <input
            className="radio-button"
            type="radio"
            id="weekly"
            name="frequency"
            onChange={(event) => props.setFrequency(event.target.id)}
          />
          <label className="radio-button__label" htmlFor="weekly">
            еженедельно в
          </label>
          <select
            className="radio-button__dropdown"
            onChange={(event) =>
              props.setFrequencyDay(event.target.selectedOptions[0].dataset.day)
            }
          >
            <option></option>
            <option data-day="1">понедельник</option>
            <option data-day="2">вторник</option>
            <option data-day="3">среда</option>
            <option data-day="4">четверг</option>
            <option data-day="5">пятница</option>
            <option data-day="6">суббота</option>
            <option data-day="0">воскресенье </option>
          </select>
        </div>

        <div className="input-group__section">
          <input
            className="radio-button"
            type="radio"
            id="monthly"
            name="frequency"
            defaultValue={props.frequencyDay}
            onChange={(event) => props.setFrequency(event.target.id)}
          />
          <label className="radio-button__label" htmlFor="monthly">
            ежемесячно
          </label>
          <select
            className="radio-button__dropdown"
            defaultValue=""
            onChange={(event) => props.setFrequencyDay(event.target.value)}
          >
            <option></option>
            {month.map((day) => {
              return <option key={day}>{day}</option>;
            })}
          </select>
        </div>

        <div className="input-group__section">
          <button className="date-picker" onClick={openCalendar}>
            Выбрать даты
          </button>
        </div>
      </div>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    frequency: state.frequency,
    frequencyDay: state.frequencyDay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFrequency: (frequency) => dispatch(setFrequency(frequency)),
    setFrequencyDay: (frequencyDay) => dispatch(setFrequencyDay(frequencyDay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentFrequency);
