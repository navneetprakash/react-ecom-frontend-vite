import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from 'prop-types';

// export this context to be used in other components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch
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
