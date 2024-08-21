import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

// export this context to be used in other components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error("Please select size");
      return;
    }

    // clone cart items
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = { [size]: 1 };
    } else {
      if (!cartData[itemId][size]) {
        cartData[itemId][size] = 1;
      } else {
        cartData[itemId][size]++;
      }
    }
    setCartItems({ ...cartData });

  };

  // get cart count
  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          // EDIT LATER
          toast.error(error);
        }
      }
    }
    return totalCount;
  };

  // context value to be passed to other components
  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, getCartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

// propTypes is used to validate the props passed to the component
ShopContextProvider.propTypes = {
  children: PropTypes.any
};

export default ShopContextProvider;
