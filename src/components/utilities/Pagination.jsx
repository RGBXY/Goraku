import PreviousMap from "postcss/lib/previous-map";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const firstPage = () => {
    setPage((page = 1));
    scrollTop();
  };

  return (
    <div className="flex justify-center py-4 px-2 gap-4 text-color-primary text-base flex-wrap">
      {page <= 1 ? null : (
        <>
          <button onClick={firstPage} className="transition-all hover:text-color-accent border border-color-primary py-2 px-4">
            first
          </button>
          <button onClick={handlePrevPage} className="transition-all hover:text-color-accent border border-color-primary py-2 px-4">
            Prev
          </button>
        </>
      )}

      {page >= lastPage ? null : (
        <button onClick={handleNextPage} className="transition-all hover:text-color-accent border border-color-primary py-2 px-4">
          Next
        </button>
      )}

      {page == lastPage ? null : (
        <button onClick={handleLastPage} className="transition-all hover:text-color-accent border border-color-primary py-2 px-4">
          last
        </button>
      )}

      <div className="py-2 px-4 bg-color-accent text-color-dark">
        <p>
          {page} of {lastPage}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
