import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "./CardForm";

const stripePromise = loadStripe(
  "pk_test_51IgojZHhYS38BWUkdOr69CKzaeemWKgr7jPeR4CTeyK0YjPrv6DSdu76fSHBQJ38WxXXl3xmYt2Tvn9vCfn6qZhx00SF6ENjwL"
);
const Payment = ({ handlepayment }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CardForm handlepayment={handlepayment} />
      </Elements>
    </div>
  );
};

export default Payment;
