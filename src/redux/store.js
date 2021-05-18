import { createStore } from "redux";
import paymentReducer from "./payment/paymentReducer";

const store = createStore(paymentReducer);

export default store;
