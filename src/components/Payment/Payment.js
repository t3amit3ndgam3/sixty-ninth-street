import React from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "./CardForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	"pk_test_51IgojZHhYS38BWUkdOr69CKzaeemWKgr7jPeR4CTeyK0YjPrv6DSdu76fSHBQJ38WxXXl3xmYt2Tvn9vCfn6qZhx00SF6ENjwL"
);

const Payment = ({handlepayment}) => {
	return (
		<div>
			<Elements stripe={stripePromise}>
                <CardForm handlepayment={handlepayment}/>
			</Elements>
		</div>
	);
};

export default Payment;
