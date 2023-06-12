import { CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";


const Cheakoutfrom = () => {
    const stripe = useState();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
      

    }

    return (
        <div className="w-96 mt-10">
              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center mt-5">
      <button className="btn btn-outline btn-primary px-10 btn-sm " type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
      
    </form>
        </div>
    );
};

export default Cheakoutfrom;