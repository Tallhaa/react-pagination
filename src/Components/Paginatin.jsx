import React from "react";

const Paginatin = ({ data, total, page, setPage }) => {
  let pgNo = Math.ceil(total / 5);

  let result = [];
  for (let i = 1; i <= pgNo; i++) {
    result.push(i);
  }
  console.log(result);
  const handleNext = () => {
    if (page === pgNo) {
      return page;
    } else {
      return setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page === 1) {
      return page;
    } else {
      setPage(page - 1);
    }
  };
  const handlePagination = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      {data.length > 0 ? (
        <div className="pagination">
          <button
            onClick={handlePrev}
            className={page <= 1 ? "pagination-disabled" : ""}
          >
            Prev
          </button>
          {result.map((item, i) => (
            <button
              onClick={() => handlePagination(item)}
              key={i}
              className={page === item ? "pagination-selected" : ""}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleNext}
            className={page >= pgNo ? "pagination-disabled" : ""}
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Paginatin;
