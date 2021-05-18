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

const RenderRecurringPayments = (props) => {
  let result;

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

  if (props.paymentQuantity === "unlimited") {
    if (props.frequency === "weekly") {
      let nextWeeklyDate = new Date(firstPaymentDate());
      let weeklyPayments = [];

      for (let i = 0; i < 5; i++) {
        nextWeeklyDate = new Date(
          nextWeeklyDate.paymentYear,
          nextWeeklyDate.paymentMonth,
          nextWeeklyDate.paymentDay + 7 * i
        );
        weeklyPayments.push(
          `${nextWeeklyDate.paymentDay + 7 * i} ${
            monthNames[nextWeeklyDate.paymentMonth]
          } ${nextWeeklyDate.paymentHour}:${nextWeeklyDate.paymentMinute}`
        );
      }
      result = weeklyPayments.map((payment) => <li>{payment}</li>);
    } else if (props.frequency === "monthly") {
      let nextMonthlyDate = new Date(firstPaymentDate());
      let monthlyPayments = [];

      for (let i = 0; i < 5; i++) {
        nextMonthlyDate = new Date(
          nextMonthlyDate.paymentYear,
          nextMonthlyDate.paymentMonth + i,
          nextMonthlyDate.paymentDay
        );
        monthlyPayments.push(
          `${nextMonthlyDate.paymentDay} ${
            monthNames[nextMonthlyDate.paymentMonth + i]
          } ${nextMonthlyDate.paymentHour}:${nextMonthlyDate.paymentMinute}`
        );
      }
      result = monthlyPayments.map((payment) => <li>{payment}</li>);
    }
  } else if (props.paymentQuantity === "nTimes") {
    if (props.frequency === "weekly") {
      let nextWeeklyDate = new Date(firstPaymentDate());
      let weeklyTimes =
        parseInt(props.paymentQuantityTimes) < 5
          ? parseInt(props.paymentQuantityTimes)
          : 5;
      let weeklyPayments = [];

      for (let i = 0; i < weeklyTimes; i++) {
        nextWeeklyDate = new Date(
          nextWeeklyDate.paymentYear,
          nextWeeklyDate.paymentMonth,
          nextWeeklyDate.paymentDay + 7 * i
        );
        weeklyPayments.push(
          `${nextWeeklyDate.paymentDay + 7 * i} ${
            monthNames[nextWeeklyDate.paymentMonth]
          } ${nextWeeklyDate.paymentHour}:${nextWeeklyDate.paymentMinute}`
        );
      }
      result = weeklyPayments.map((payment) => <li>{payment}</li>);
    } else if (props.frequency === "monthly") {
      let nextMonthlyDate = new Date(firstPaymentDate());
      let monthlyTimes =
        parseInt(props.paymentQuantityTimes) < 5
          ? parseInt(props.paymentQuantityTimes)
          : 5;
      let monthlyPayments = [];

      for (let i = 0; i < monthlyTimes; i++) {
        nextMonthlyDate = new Date(
          nextMonthlyDate.paymentYear,
          nextMonthlyDate.paymentMonth + i,
          nextMonthlyDate.paymentDay
        );
        result = (
          <li>{`${nextMonthlyDate.paymentDay} ${
            monthNames[nextMonthlyDate.paymentMonth + i]
          } ${nextMonthlyDate.paymentHour}:${
            nextMonthlyDate.paymentMinute
          }`}</li>
        );
      }
      result = monthlyPayments.map((payment) => <li>{payment}</li>);
    } else {
      return null;
    }
  }
  return <div>{result}</div>;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderRecurringPayments);
