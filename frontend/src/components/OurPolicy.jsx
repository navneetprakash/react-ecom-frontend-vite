import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="our policy" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p>We offer easy exchange policy on our products</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="our policy" />
        <p className="font-semibold">7 days return policy</p>
        <p>We provide 7 days return policy</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="our policy" />
        <p className="font-semibold">Best customer support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;