import React from "react";
import { connect } from "react-redux";
import { setPaymentTime } from "../redux";

const PaymentTime = (props) => {
  return (
    <div className="form-control">
      <label className="form-control__label" htmlFor="time">
        Время
      </label>

      <div className="input-group">
        <div className="input-group__section">
          <input
            className="text-input"
            type="text"
            id="time"
            name="time"
            defaultValue={props.paymentTime}
            onChange={(event) => {
              props.setPaymentTime(event.target.value);
            }}
          />
          <label className="text-input__label fancy" htmlFor="time">
            (+4 UTC, время московское)
          </label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    paymentTime: state.paymentTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPaymentTime: (paymentTime) => dispatch(setPaymentTime(paymentTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTime);
