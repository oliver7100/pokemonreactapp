import React, { useState, useEffect } from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // State for total number of pages and visible pages
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update total number of pages when totalPosts or postsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(totalPosts / postsPerPage));
  }, [totalPosts, postsPerPage]);

  // Effect to update window width state on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to calculate and update visible pages based on window width
  useEffect(() => {
    let visiblePagesCount = 3; // Default 3 visible pages

    // Adjust visible pages count based on window width
    if (windowWidth >= 768) {
      visiblePagesCount = 6; // On medium and large screens, display 6 pages
    }

    const totalPagesCount = Math.ceil(totalPosts / postsPerPage);
    const currentPageIndex = currentPage - 1;

    // Calculate the range of pages to display
    let start = Math.max(
      0,
      currentPageIndex - Math.floor(visiblePagesCount / 2)
    );
    let end = Math.min(totalPagesCount - 1, start + visiblePagesCount - 1);

    // Adjust start and end if the visible pages would go out of bounds
    if (end - start + 1 < visiblePagesCount) {
      start = Math.max(0, end - visiblePagesCount + 1);
    }

    // Generate the array of visible pages
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i + 1);
    }

    setVisiblePages(pages);
  }, [totalPosts, postsPerPage, currentPage, windowWidth]);

  // Function to go to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      window.scrollTo({ top: 0 }); //Added scroll to top for user experince
      return prevPage + 1; //Increment current page by 1
    });
  };

  // Function to go to the previous page
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => {
      window.scrollTo({ top: 0 });
      return prevPage - 1; /// Decrement current page by 1
    });
  };

  // Function to go to a specific page
  const goToPage = (page) => {
    setCurrentPage(() => {
      window.scrollTo({ top: 0 });
      return page; //// Set current page to the specified page
    });
  };

  return (
    <>
      <ul className="inline-flex mb-5 -space-x-px text-lg">
        {/* Previous page button */}
        <li>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
        </li>
        {/* Visible page buttons */}
        {visiblePages.map((page) => (
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
        {/* Ellipsis button if there are more pages */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <li>
            <button className="pagination-button" disabled>
              ...
            </button>
          </li>
        )}
        {/* Next page button */}
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
