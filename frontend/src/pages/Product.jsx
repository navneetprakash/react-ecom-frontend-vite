import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      {/* -----product data----- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* ------product images----- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              // set the image when clicked on the image and display it in the main image container
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="product images" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="featured product image" />
          </div>

        </div>

        {/* -------product information----- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">{currency} {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col fap-1">
            <p>100% Original product.</p>
            <p>Fast delivery NZ wide.</p>
            <p>Easy return policy within 7 days.</p>
          </div>
        </div>

      </div>
      {/* ---------Description & Review Section----- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>A lightweight pullover shirt, typically made from knit fabric, is designed to be close-fitting and features a round neckline along with short sleeves. This versatile garment can be worn both as an undershirt, providing an additional layer underneath other clothing, or as an outer layer on its own.</p>
          <p> Its snug fit and simple design make it suitable for various occasions, whether as a base layer for added warmth or as a standalone piece for casual wear. The round neckline contributes to its classic and timeless style, while the short sleeves ensure comfort and ease of movement. This type of shirt is often chosen for its practicality and comfort, serving as a fundamental piece in both casual and layered outfits.</p>
        </div>
      </div>

      {/* ------Related Products Section------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>) : <div className="opacity-0"></div>;
};

export default Product;
