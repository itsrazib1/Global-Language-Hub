import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Pages/Shared/Sectiontitle/Sectiontitle";
import Cheakoutfrom from "./Cheakoutfrom";
import useCart from "./useCart";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl"> Pay Your Class Price...</h2>
      <Elements stripe={stripePromise}>
        <Cheakoutfrom cart={cart} price={price}></Cheakoutfrom>
      </Elements>
    </div>
  );
};

export default Payment;
