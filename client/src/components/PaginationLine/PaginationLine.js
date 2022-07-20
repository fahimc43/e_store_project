import React from "react";
import Pagination from "@mui/material/Pagination";

function PaginationLine({ setCurrentPage, products }) {
  const handleChange = (page) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="flex justify-center items-center">
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        count={products}
        shape="rounded"
      />
    </div>
  );
}

export default PaginationLine;
