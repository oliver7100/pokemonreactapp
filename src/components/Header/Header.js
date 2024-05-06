import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Modal } from "../Modal/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="py-4 bg-gray-800">
        <div className="container relative flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white mr-14">
              Pokemon market
            </h1>
          </div>
          <div className="flex items-center ml-auto">
            <div class="relative">
              <input
                className="w-48 px-3 py-2 pl-10 mr-4 leading-tight text-white transition-colors border-2 rounded-md appearance-none bg-backgroundColor border-buttonColor hover:border-white focus:outline-none focus:ring-white focus:border-white focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search by Name"
              />

              <div class="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={openModal}
              className="flex items-center justify-center w-12 h-12 px-4 py-2 text-white rounded-lg shadow-lg shadow-accentColor/40 bg-accentColor"
            >
              <FiShoppingBag />
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
          </div>
          <div className="mt-20">
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-buttonColor "></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
