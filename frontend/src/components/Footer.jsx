import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo image footer" />
          <p className="w-full md:w-2/3 text-gray-600">Style Haven is a registered trademark of Style Haven Private Limited. Website developed by <a href="https://github.com/navneetprakash" target="_blank" rel="noreferrer" className="text-[#414141] underline">Navneet Prakash</a></p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>(+64)23 456 78900</li>
            <li>info@stylehaven.co.nz</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center"> Copyright &copy; 2024@stylehaven.co.nz - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;