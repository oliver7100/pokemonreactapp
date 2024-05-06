import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShopContext } from "../../Context/ShopContext";
import { IoCloseOutline } from "react-icons/io5";

export const Modal = ({ isOpen, onClose }) => {
  const { pokemonCards, cartItems } = useContext(ShopContext);
  console.log("Cart items in Cart component:", cartItems); // Log cartItems

  if (!isOpen) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll shadow-xl bg-primaryColor">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between ">
                        <Dialog.Title className="font-sans text-4xl font-medium text-primaryTextColor ">
                          Cart
                        </Dialog.Title>
                        <button
                          type="button"
                          className="relative flex items-center justify-center p-2 text-3xl text-white border border-transparent rounded-md shadow-lg w-14 h-14 hover:text-gray-500 shadow-accentColor/40 bg-accentColor hover:bg-indigo-700"
                          onClick={onClose}
                        >
                          <IoCloseOutline></IoCloseOutline>
                        </button>
                      </div>
                      <div className="mb-8">
                        <button className="underline text-secondaryTextColor">
                          Clear All
                        </button>
                      </div>
                      <div className="flex justify-between pb-2 mb-2 border-b border-buttonColor text-primaryTextColor">
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Price</p>
                      </div>
                      <div className="">
                        <div className="flow-root">
                          {pokemonCards.map((pokemonCard) => {
                            const cartQuantity = cartItems[pokemonCard.id];
                            if (cartQuantity !== 0) {
                              return (
                                <>
                                  <li
                                    key={pokemonCard.id}
                                    className="flex py-6"
                                  >
                                    <div className="flex-shrink-0 w-20 overflow-hidden border border-gray-200 rounded-md h-28">
                                      <img
                                        src={pokemonCard.images.small}
                                        alt={pokemonCard.name}
                                        className="object-cover object-center w-full h-full"
                                      />
                                    </div>

                                    <div className="flex flex-col flex-1 ml-4">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-primaryTextColor ">
                                          <h3>{pokemonCard.name}</h3>

                                          <p className="ml-4">
                                            €{" "}
                                            {
                                              pokemonCard.cardmarket?.prices
                                                .averageSellPrice
                                            }
                                          </p>
                                        </div>
                                        <div>
                                          <h3 className="text-secondaryTextColor">
                                            €{" "}
                                            {
                                              pokemonCard.cardmarket?.prices
                                                .averageSellPrice
                                            }
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <div className="flex items-center justify-center gap-4 text-primaryTextColor">
                                    <button className="w-16 px-4 py-2 text-xl font-bold rounded bg-buttonColor h-14 hover:bg-gray-400">
                                      +
                                    </button>
                                    <p className="w-9/12 py-2 text-xl font-bold text-center rounded bg-buttonColor h-14 hover:bg-gray-400">
                                      {cartQuantity}
                                    </p>
                                    <button className="w-16 px-4 py-2 text-xl font-bold rounded bg-buttonColor h-14 hover:bg-gray-400">
                                      -
                                    </button>
                                  </div>
                                </>
                              );
                            } else {
                              return null; //If cart quantity is 0, don't render the cards
                            }
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-buttonColor sm:px-6">
                      <div className="flex justify-between mb-3 text-base font-medium text-gray-900">
                        <p className="text-secondaryColor">Total card amount</p>
                        <p className="text-primaryTextColor">1</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="text-secondaryColor">Total price</p>
                        <p className="text-primaryTextColor">$262.00</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center px-6 py-3 text-base font-medium border border-transparent rounded-md shadow-lg shadow-accentColor/40 text-primaryTextColor bg-accentColor hover:bg-indigo-700"
                        >
                          Continue to Payment
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
