import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(
  "pk_test_51PPkjWIdc4tah2gnLshB3YWmzLKYBIezbK2fPEVwBGlbMrTuPIG6WW7FjqrAoProxeX8sbWIY5tToMGfuPd9eFmj00JGwYlJyk"
);
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOut></CheckOut>
    </Elements>
  );
};

export default Payment;
