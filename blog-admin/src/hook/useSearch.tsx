import { postData, postDataProp } from "@/assets/post-data";
import { useState, useEffect, useMemo } from "react";

const useSearch = ({
  value,
  pageSize = 10,
}: {
  value: string;
  pageSize: number;
}) => {
  const [filterData, setFilterData] = useState<postDataProp[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = postData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filtered);
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filterData.slice(startIndex, endIndex);
  }, [filterData, page, pageSize]);

  // Total number of pages
  const totalPages = Math.ceil(filterData.length / pageSize);

  return {
    filterByData: paginatedData,
    page,
    totalPages,
    setPage,
  };
};

export default useSearch;
