import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FiShoppingBag } from "react-icons/fi";

const PokemonCard = ({ productname, price, amount, image, id }) => {
  // Accessing ShopContext for cart-related functions and data
  const { addtoCart, cartItems } = useContext(ShopContext);

  // Get the amount of this card in the cart
  const cartItemAmount = cartItems[id];

  // Determine if the card is on sale
  const isOnSale = price !== "Not on sale";

  return (
    <div className="px-5">
      {/* Image container */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center h-16 mt-14 w-28">
          <img
            className="object-cover object-center w-full rounded-lg"
            src={image}
            alt={productname}
          />
        </div>
      </div>
      {/* Card details */}
      <div className="flex flex-col justify-between p-2 shadow rounded-xl bg-primaryColor w-52 h-52">
        {/* Product name */}
        <div className="relative mt-10">
          <div className="flex items-center justify-center">
            <p className="pl-4 font-bold text-white">{productname}</p>
          </div>
        </div>
        {/* Price and amount */}
        <div className="flex justify-center mt-4">
          {/* Display price and amount if the card is on sale */}
          {isOnSale ? (
            <>
              <p className="text-sm font-semibold text-secondaryTextColor">
                € {price}
              </p>
              <p className="ml-3 text-sm font-semibold text-gray-700 ">•</p>
              <p className="text-sm font-semibold text-secondaryTextColor">
                {amount} Cards
              </p>
            </>
          ) : (
            // Display "Not on sale" if the card is not on sale
            <p className="text-sm font-semibold text-gray-500">Not on sale</p>
          )}
        </div>
        {/* Add to cart button */}
        <div className="flex justify-center mt-1">
          <button
            type="button"
            onClick={() => addtoCart({ productname, price, amount, image, id })}
            // Conditionally apply styles based on sale status
            className={`flex items-center justify-center w-44 h-11 ${
              isOnSale
                ? "bg-buttonColor hover:bg-gray-500 text-white"
                : "bg-disabledColor cursor-not-allowed text-gray-500"
            } focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}
            // Disable button if the card is not on sale
            disabled={!isOnSale}
          >
            {/* Shopping bag icon */}
            <FiShoppingBag className="mr-2" /> Add to cart{" "}
            {/* Display cart item amount if it's greater than 0 */}
            {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
