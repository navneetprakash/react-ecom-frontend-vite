import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);



  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className='overflow-hidden'>
        <img className='hover:scale-100 transition ease-in-out' src={image[0]} alt="product images" />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link >
  );
};

// PropTypes is used to validate the props passed to the component
ProductItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.number
};

export default ProductItem;