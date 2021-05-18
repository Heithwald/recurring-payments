import React from "react";
import FormControl from "./FormControl";

import { connect } from "react-redux";
import {
  setPaymentQuantity,
  setPaymentQuantityTimes,
  setPaymentQuantityTill,
} from "../redux";

const PaymentQuantity = (props) => {
  return (
    <div className="form-control">
      <label className="form-control__label" htmlFor="quantity">
        Кол-во
      </label>

      <div className="input-group">
        <div className="input-group__section">
          <input
            className="radio-button"
            type="radio"
            id="unlimited"
            name="quantity"
            onChange={(event) => props.setPaymentQuantity(event.target.id)}
          />
          <label className="radio-button__label" htmlFor="unlimited">
            неограниченно
          </label>

          <input
            className="radio-button"
            type="radio"
            id="nTimes"
            name="quantity"
            onChange={(event) => props.setPaymentQuantity(event.target.id)}
          />

          <input
            className="text-input w-xs"
            type="text"
            id="nTimes"
            name="quantity"
            onChange={(event) =>
              props.setPaymentQuantityTimes(event.target.value)
            }
          />
          <label className="text-input__label" htmlFor="nTimes">
            раз(-а)
          </label>

          <input
            className="radio-button"
            type="radio"
            id="till"
            name="quantity"
            onChange={(event) => props.setPaymentQuantity(event.target.id)}
          />

          <label className="text-input__label" htmlFor="till">
            до
          </label>
          <input
            className="text-input"
            type="text"
            id="till"
            name="quantity"
            onChange={(event) =>
              props.setPaymentQuantityTill(event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    paymentQuantity: state.paymentQuantity,
    paymentQuantityTimes: state.paymentQuantityTimes,
    paymentQuantityTill: state.paymentQuantityTill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPaymentQuantity: (paymentQuantity) =>
      dispatch(setPaymentQuantity(paymentQuantity)),
    setPaymentQuantityTimes: (paymentQuantityTimes) =>
      dispatch(setPaymentQuantityTimes(paymentQuantityTimes)),
    setPaymentQuantityTill: (paymentQuantityTill) =>
      dispatch(setPaymentQuantityTill(paymentQuantityTill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentQuantity);
