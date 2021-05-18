import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import PaymentWindow from "./components/PaymentWindow";
import PaymentApplies from "./components/PaymentApplies";
import CalendarDisplay from "./components/CalendarDisplay";
import PaymentFrequency from "./components/PaymentFrequency";
import PaymentTime from "./components/PaymentTime";
import PaymentQuantity from "./components/PaymentQuantity";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <PaymentWindow>
          <PaymentFrequency />
          <PaymentTime />
          <PaymentQuantity />
          <PaymentApplies />
        </PaymentWindow>
        <CalendarDisplay />
      </div>
    </Provider>
  );
}

export default App;
