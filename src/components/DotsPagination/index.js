import React from "react";
import { Pagination, DotPagination } from "./styles";
import { primary, white } from "../../../variables";

const DotsPagination = ({ items, activeIndex }) => (
  <Pagination>
    {items.map((_, i) => (
      <DotPagination
        key={i}
        style={{
          backgroundColor: i === activeIndex ? primary : white
        }}
      ></DotPagination>
    ))}
  </Pagination>
);

export default DotsPagination;
