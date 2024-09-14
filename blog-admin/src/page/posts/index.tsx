import { Input } from "@/components/ui/input";
import CreateModel from "./components/create-post";
import TablePost from "./components/table-post";
import { useState } from "react";
import useSearch from "@/hook/useSearch";

const Posts = () => {
  const [value, setValue] = useState("");
  const { filterByData, page, setPage, totalPages } = useSearch({
    value,
    pageSize: 8,
  });

  console.log(page);

  return (
    <div className=" w-full">
      <div className=" flex items-center justify-between">
        <div className="">
          <h3 className=" font-libre text-xl font-bold text-slate-700">
            Posts
          </h3>
          <p className=" text-sm text-gray-500">You can view your's posts</p>
        </div>
        <div className=" flex gap-5">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search your post"
            className=" w-[300px]"
          />
          <CreateModel />
        </div>
      </div>
      <div className=" mb-5 mt-5">
        <TablePost
          page={page}
          setPage={setPage}
          total={totalPages}
          data={filterByData}
        />
      </div>
    </div>
  );
};

export default Posts;
