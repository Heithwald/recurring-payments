import React from "react";
import { connect } from "react-redux";
import {
  setFrequency,
  setFrequencyDay,
  setPaymentTime,
  setPaymentQuantity,
  setPaymentQuantityTimes,
  setPaymentQuantityTill,
} from "../redux";

const PaymentApplies = (props) => {
  const currentWeekDay = new Date().getDay(),
    currentDay = new Date().getDate(),
    currentMonth = new Date().getMonth(),
    currentYear = new Date().getFullYear();

  const normalizedDay = (day) => {
    return day === 0 ? 7 : day;
  };

  const firstPaymentDate = () => {
    const paymentHour = props.paymentTime.split(":")[0],
      paymentMinute = props.paymentTime.split(":")[1];

    const paymentDay =
      props.frequency === "weekly"
        ? normalizedDay(currentDay) +
          (7 - normalizedDay(currentWeekDay)) +
          normalizedDay(parseInt(props.frequencyDay))
        : props.frequency === "monthly"
        ? parseInt(props.frequencyDay)
        : 0;

    let paymentMonth = null;
    if (props.frequency === "monthly") {
      if (props.frequencyDay > currentDay) {
        paymentMonth = currentMonth;
      } else {
        paymentMonth = currentMonth + 1;
      }
    } else {
      paymentMonth = currentMonth;
    }

    let paymentYear = null;
    paymentMonth > 11
      ? (paymentYear = currentYear + 1)
      : (paymentYear = currentYear);

    const paymentDate = new Date(
      paymentYear,
      paymentMonth,
      paymentDay,
      paymentHour,
      paymentMinute
    );

    return paymentDate;
  };

  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  console.log(firstPaymentDate());

  return (
    <div className="form-control">
      <label className="form-control__label" htmlFor="time">
        Сработает
      </label>
      <div className="input-group">
        <div className="input-group__section">
          <ul className="date-list">
            <li>{`<${props.frequency}>, <${props.frequencyDay}>, <${props.paymentTime}>`}</li>
            <li>{`<${props.paymentQuantity}>, ${props.paymentQuantityTimes} раз(-а), до: ${props.paymentQuantityTill}`}</li>
          </ul>
        </div>
        <button
          className="payment-form__submit-button"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    frequency: state.frequency,
    frequencyDay: state.frequencyDay,
    paymentTime: state.paymentTime,
    paymentQuantity: state.paymentQuantity,
    paymentQuantityTimes: state.paymentQuantityTimes,
    paymentQuantityTill: state.paymentQuantityTill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFrequency: (frequency) => dispatch(setFrequency(frequency)),
    setFrequencyDay: (frequencyDay) => dispatch(setFrequencyDay(frequencyDay)),
    setPaymentTime: (paymentTime) => dispatch(setPaymentTime(paymentTime)),
    setPaymentQuantity: (paymentQuantity) =>
      dispatch(setPaymentQuantity(paymentQuantity)),
    setPaymentQuantityTimes: (paymentQuantityTimes) =>
      dispatch(setPaymentQuantityTimes(paymentQuantityTimes)),
    setPaymentQuantityTill: (paymentQuantityTill) =>
      dispatch(setPaymentQuantityTill(paymentQuantityTill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentApplies);
