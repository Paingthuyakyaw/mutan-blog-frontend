import { postData, postDataProp } from "@/assets/post-data";
import { useState, useEffect, useMemo } from "react";

const useSearch = ({
  value,
  pageSize,
}: {
  value: string;
  pageSize: number;
}) => {
  const [filterData, setFilterData] = useState<postDataProp[]>([]);
  const [page, setPage] = useState(1);

  // Effect to handle filtering based on the search value
  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = postData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filtered);
      setPage(1); // Reset to the first page whenever the search value changes
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  // Calculate the paginated data using useMemo to optimize performance
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filterData.slice(startIndex, endIndex);
  }, [filterData, page, pageSize]);

  // Total number of pages
  const totalPages = Math.ceil(filterData.length / pageSize);

  return {
    paginatedData,
    currentPage: page,
    totalPages,
    setPage,
  };
};

export default useSearch;
