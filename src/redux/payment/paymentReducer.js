import SET_FREQUENCY from "./paymentTypes";
import {
  SET_FREQUENCYDAY,
  SET_PAYMENTTIME,
  SET_PAYMENTQUANTITY,
  SET_PAYMENTQUANTITY_TIMES,
  SET_PAYMENTQUANTITY_TILL,
} from "./paymentTypes";

const initialState = {
  frequency: "",
  frequencyDay: 0,
  paymentTime: "00:00",
  paymentQuantity: "",
  paymentQuantityTimes: "",
  paymentQuantityTill: "",
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FREQUENCY:
      return {
        ...state,
        frequency: action.payload,
      };
    case SET_FREQUENCYDAY:
      return {
        ...state,
        frequencyDay: action.payload,
      };
    case SET_PAYMENTTIME:
      return {
        ...state,
        paymentTime: action.payload,
      };
    case SET_PAYMENTQUANTITY:
      return {
        ...state,
        paymentQuantity: action.payload,
      };
    case SET_PAYMENTQUANTITY_TIMES:
      return {
        ...state,
        paymentQuantityTimes: action.payload,
      };
    case SET_PAYMENTQUANTITY_TILL:
      return {
        ...state,
        paymentQuantityTill: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
