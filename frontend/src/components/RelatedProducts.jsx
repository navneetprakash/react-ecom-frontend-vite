import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import PropTypes from 'prop-types';
import Title from "./Title";
import ProductItem from "./ProductItem";


const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {

    const filteredProducts = products.filter(
      (item) => item.category === category && item.subCategory === subCategory
    );
    setRelated(filteredProducts.slice(0, 5));

  }, [products, category, subCategory]);

  RelatedProducts.propTypes = {
    category: PropTypes.string,
    subCategory: PropTypes.string
  };


  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;