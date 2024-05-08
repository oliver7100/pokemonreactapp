import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Modal } from "../Modal/Modal";

const Header = ({ handleSearch }) => {
  // State for modal open/close and search query
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle search input change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <>
      {/* Header navigation */}
      <nav className="py-4 bg-backgroundColor">
        <div className="container relative flex flex-col items-center justify-between mx-auto md:flex-row">
          {/* Logo and mobile cart button */}
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white mr-14">
              Pokemon market
            </h1>
            <button
              onClick={openModal}
              className="flex items-center justify-center w-12 h-12 px-4 py-2 text-white rounded-lg shadow-lg shadow-accentColor/40 bg-accentColor md:hidden"
            >
              <FiShoppingBag />
            </button>
          </div>
          {/* Search input and desktop cart button */}
          <div className="flex flex-col items-center md:flex-row md:ml-auto">
            <div className="relative">
              <input
                className="w-full px-3 py-2 pl-10 mr-4 leading-tight text-white transition-colors border-2 rounded-md appearance-none md:w-48 bg-backgroundColor border-borderColor hover:border-white focus:outline-none focus:ring-white focus:border-white focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={handleChange}
              />

              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={openModal}
              className="items-center justify-center hidden w-12 h-12 px-4 py-2 text-white rounded-lg shadow-lg md:flex shadow-accentColor/40 bg-accentColor"
            >
              <FiShoppingBag />
            </button>
            {/* Modal for cart */}
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
          </div>
          {/* Divider line */}
          <div className="mt-6 md:mt-20">
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-borderColor "></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
