import React from "react";

const PaymentWindow = (props) => {
  return (
    <div className="payment-window">
      <h2 className="payment-window__title">Настройка повтора платежей</h2>
      <form className="payment-form">{props.children}</form>
    </div>
  );
};

export default PaymentWindow;
