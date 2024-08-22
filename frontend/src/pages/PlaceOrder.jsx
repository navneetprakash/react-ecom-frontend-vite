import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

const Placeorder = () => {

  const [paymentMethod, setPaymentMethod] = useState('cod');

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5sm:pt-14 min-h-[80vh border-t]">

      {/* -------Left side------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="First Name" type="text" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Last  Name" type="text" />
        </div>

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Email address
        " type="email" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Street address
        " type="text" />

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Suburb" type="text" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="City" type="text" />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Zipcode" type="number" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Contact number" type="number" />
        </div>
      </div>

      {/* -------Right side------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* -------Payment method selection------ */}
          <div className="flex items-center gap-3 flex-col lg:flex-row">
            <div onClick={() => setPaymentMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="stripe logo" />
            </div>

            <div onClick={() => setPaymentMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="razorpay logo" />
            </div>

            <div onClick={() => setPaymentMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>

        </div>
      </div>

    </div>);
};

export default Placeorder;
