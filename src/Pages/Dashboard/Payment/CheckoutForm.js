import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
const CheckoutForm = ({ appoinment }) => {
  const { price, patient_name, _id } = appoinment;
  const stripe = useStripe();
  const elements = useElements();
  const [err, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const {currentUser} = useAuth()
  useEffect(() => {
    axios
      .post(`https://dry-mesa-73416.herokuapp.com/create-payment-intent`, { price })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient_name,
            email: currentUser?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment process successfully.");
      setProcessing(false);

      console.log(paymentIntent)
      const payment ={
        amount:paymentIntent.amount,
        created:paymentIntent.created,
        last4:paymentIntent.last4,
        transation:paymentIntent.client_secret.split("_secret")[0]
      }

      // set data in data base
      axios.put(`https://dry-mesa-73416.herokuapp.com/appoinments/${_id}`, payment)
        .then(res => {
          if(res.data.modifiedCount){
            alert("Your payment is successfully")
          }
        })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay $ {price}
          </button>
        )}
      </form>
      {err && <p style={{ color: "red" }}>{err} </p>}
      {success && <p style={{ color: "green" }}>{success} </p>}
    </>
  );
};

export default CheckoutForm;
