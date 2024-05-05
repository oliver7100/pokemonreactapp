import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div class="lg:w-3/5 w-full  flex items-center justify-between border-t border-primaryColor">
        <div class="flex items-center pt-3 text-white hover:text-accentColor cursor-pointer">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-xl ml-3 font-medium leading-none ">Previous</p>
        </div>
        <div class="sm:flex hidden">
          {pages.map((page, index) => {
            return (
              <p
                onClick={() => setCurrentPage(page)}
                key={index}
                className={
                  page == currentPage
                    ? "text-xl font-medium leading-none cursor-pointer text-accentColor border-t border-accentColor pt-3 mr-4 px-2"
                    : "px-2 pt-3 mr-4 text-xl font-medium leading-none text-white border-t border-transparent cursor-pointer hover:text-accentColor hover:border-accentColor"
                }
              >
                {page}
              </p>
            );
          })}
        </div>
        <div class="flex items-center pt-3 text-white hover:text-accentColor cursor-pointer">
          <p class="text-xl font-medium leading-none mr-3">Next</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
