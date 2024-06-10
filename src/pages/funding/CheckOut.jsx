import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublice from "../../hooks/useAxiosPublice";

const CheckOut = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [price, setPrice] = useState(0);
  const elements = useElements();
  const stripe = useStripe();
  const axiosPublic = useAxiosPublice();
  const [load, setLoad] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  //   const price = Math.floor(Math.random() * 100)

  useEffect(() => {
    if (price > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: price })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosPublic, price]);

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
      console.log(error);
    } else {
      console.log(paymentMethod);
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
      Swal.fire({
        icon: "error",
        title: "Somthing Wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        setLoad(!load);
        if (paymentIntent.id) {
          const paymentInfo = {
            email: user?.email,
            name: user?.displayName,
            transictionId: paymentIntent.id,
            date: moment().format("lll"),
            price: price,
            status: paymentIntent.status,
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
                navigate("/fundings");
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
      className="mt-32 md:w-[400px] py-8 mx-auto card-shadow p-4 rounded-md space-y-8"
    >
      <div>
        <input
          type="number"
          placeholder="amount"
          className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2 card-shadow"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

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
          className="button "
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
