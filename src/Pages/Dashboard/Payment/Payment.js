import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { appoinmentId } = useParams();
  const [appoinment, setAppoinment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appoinments/${appoinmentId}`)
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51Jvkr6GYnyvognqVdV67N82l3Ni7SMfkrPP8QOd0U7iAdJcor5AMtQrKyIpoLzJXfnQEQjORbccGUWcxMzLIG7RN00NmVgEA8R"
  );
  return (
    <div>
      <h2>Payment for: {appoinment.serviceType}</h2>
      <h3> Price: ${appoinment.price}</h3>
      {appoinment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appoinment={appoinment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
