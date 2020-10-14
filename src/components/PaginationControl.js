import React, { useState, useEffect } from "react";

const PaginationControl = ({ pages, ...props }) => {
  const [pagesArr, setPages] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < pages; i++) {
      temp.push(i + 1);
    }
    console.log(temp);
    setPages(temp);
  }, []);

  if (pagesArr.length == 0) return null;

  return (
    <div>
      {pagesArr.map((page, index) => {
        return (
          <span
            key={index}
            style={{ marginLeft: "20px", cursor: "pointer", color: "blue" }}
            onClick={() => props.change(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default PaginationControl;
