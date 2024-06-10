import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublice from "../../hooks/useAxiosPublice";

const CheckOut = () => {
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const axiosPublic = useAxiosPublice();
  const { user } = useAuth();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // fetch("", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    axiosPublic
      .post("/create-payment-intent", { price: 100 })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [axiosPublic]);

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // coonfirm payment

    const { paymentIntent, error: errorConfirm } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "no email",
            name: user?.displayName || "no name",
          },
        },
      });

    if (errorConfirm) {
      console.log("errorConfirm");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        if (paymentIntent.id) {
          const paymentInfo = {
            email: user?.email,
            name: user?.displayName,
            transictionId: paymentIntent.id,
            date: new Date(),
            price: 100,
          };

          axiosPublic
            .post("/payments", paymentInfo)
            .then((res) => {
              console.log(res.data.insertedId);
              if (res.data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Your Funding Succses",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Your Funding Went Wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-32 w-[400px] mx-auto card-shadow p-4 rounded-md"
    >
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
      <div className="text-center">
        <button
          className="button mt-10"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckOut;