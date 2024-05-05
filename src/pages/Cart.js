import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { pokemonCards, cartItems } = useContext(ShopContext);

  console.log("Cart items in Cart component:", cartItems); // Log cartItems

  return (
    <div>
      <h1>Cart Items</h1>
      <div>
        {pokemonCards.map((pokemonCard) => {
          const cartQuantity = cartItems[pokemonCard.id];
          if (cartQuantity !== 0) {
            return (
              <div key={pokemonCard.id}>
                <img src={pokemonCard.images.small} alt={pokemonCard.name} />
                <p>{pokemonCard.name}</p>
                <p>Quantity: {cartQuantity}</p>
              </div>
            );
          } else {
            return null; // If cart quantity is 0, don't render the card
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
