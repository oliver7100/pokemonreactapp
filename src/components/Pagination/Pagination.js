import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      window.scrollTo({ top: 0 });
      return prevPage + 1;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => {
      window.scrollTo({ top: 0 });
      return prevPage - 1;
    });
  };

  const goToPage = (page) => {
    setCurrentPage(() => {
      window.scrollTo({ top: 0 });
      return page;
    });
  };

  return (
    <>
      <ul className="inline-flex -space-x-px text-lg">
        <li>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => goToPage(page)}
              className={
                page === currentPage
                  ? "pagination-button current-page"
                  : "pagination-button"
              }
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
