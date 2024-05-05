import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const PokemonCard = ({ productname, price, amount, image, id }) => {
  const { addtoCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <div className="px-5 mx-auto ">
        <div className="max-w-xs p-2 duration-150 rounded-lg shadow cursor-pointer bg-primaryColor hover:scale-105 hover:shadow-md">
          <img
            className="object-cover object-center w-full rounded-lg"
            src={image}
            alt={productname}
          />
          <div className="flex items-center justify-center">
            <p className="pl-4 my-4 font-bold text-white">{productname}</p>
          </div>
          <div className="flex justify-center">
            <p className="mb-4 ml-4 text-xl font-semibold text-secondaryTextColor">
              € {price}
            </p>
            <p className="mb-4 ml-4 text-xl font-semibold text-secondaryTextColor">
              {amount} Cards
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                addtoCart({ productname, price, amount, image, id })
              }
              className="w-4/6 text-white text-center bg-buttonColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
