import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FiShoppingBag } from "react-icons/fi";

const PokemonCard = ({ productname, price, amount, image, id }) => {
  const { addtoCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="max-w-xs px-5 mx-auto">
      <div className="flex justify-center">
        <div className="flex items-center justify-center h-16 mt-14 w-28">
          <img
            className="object-cover object-center w-full rounded-lg"
            src={image}
            alt={productname}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between p-2 shadow rounded-xl bg-primaryColor w-52 h-52">
        <div>
          <div className="flex items-center justify-center">
            <p className="pl-4 font-bold text-white">{productname}</p>
          </div>
          <div className="flex justify-center">
            <p className="text-sm font-semibold text-secondaryTextColor">
              € {price}
            </p>
            <p className="ml-3 text-sm font-semibold text-gray-700 ">•</p>
            <p className="text-sm font-semibold text-secondaryTextColor">
              {amount} Cards
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => addtoCart({ productname, price, amount, image, id })}
            className="w-4/6 text-white text-center bg-buttonColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-auto"
          >
            Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
