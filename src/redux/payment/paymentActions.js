import SET_FREQUENCY, {
  SET_FREQUENCYDAY,
  SET_PAYMENTTIME,
  SET_PAYMENTQUANTITY,
  SET_PAYMENTQUANTITY_TIMES,
  SET_PAYMENTQUANTITY_TILL,
} from "./paymentTypes";

export const setFrequency = (value) => {
  return {
    type: SET_FREQUENCY,
    payload: value,
  };
};

export const setFrequencyDay = (value) => {
  return {
    type: SET_FREQUENCYDAY,
    payload: value,
  };
};

export const setPaymentTime = (value) => {
  return {
    type: SET_PAYMENTTIME,
    payload: value,
  };
};

export const setPaymentQuantity = (value) => {
  return {
    type: SET_PAYMENTQUANTITY,
    payload: value,
  };
};

export const setPaymentQuantityTimes = (value) => {
  return {
    type: SET_PAYMENTQUANTITY_TIMES,
    payload: value,
  };
};

export const setPaymentQuantityTill = (value) => {
  return {
    type: SET_PAYMENTQUANTITY_TILL,
    payload: value,
  };
};
