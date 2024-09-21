import { useState } from "react";
import { postData } from "../assets/post-data";

const usePagination = ({ size }: { size: number }) => {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(postData.length / size);
  const currentPage = (page - 1) * size;
  const lastPage = page * size;
  const data = postData.slice(currentPage, lastPage);

  return { data, page, setPage, totalPage };
};

export default usePagination;
