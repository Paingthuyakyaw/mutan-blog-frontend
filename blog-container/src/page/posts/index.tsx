import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import IconEye from "../../common/Icon/IconEye";
import usePagination from "../../hook/usePagination";
import IconBack from "../../common/Icon/IconBack";

const Posts = () => {
  const navigate = useNavigate();
  const { data, totalPage, page, setPage } = usePagination({ size: 8 });

  return (
    <div className=" container max-w-full">
      <div
        onClick={() => navigate(-1)}
        className=" cursor-pointer flex min-[801px]:mt-10 max-[800px]:mt-5 items-center gap-2"
      >
        <IconBack />
        Back
      </div>
      <div className=" mt-5 space-y-14 md:space-y-3">
        {data.map((post) => (
          <div
            onClick={() => navigate(`/posts/${post.id}`)}
            className=" cursor-pointer grid grid-cols-1 items-center gap-5 md:grid-cols-2"
            key={post.id}
          >
            {/* responsive for sm */}
            <div className="  md:hidden col-span-1">
              <div className=" space-y-3">
                <p className=" uppercase space-x-3 text-[12px] tracking-widest  text-gray-500">
                  {post.type.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </p>
                <h3 className=" font-libre text-xl ">{post.name}</h3>
              </div>
            </div>
            <div className=" col-span-1">
              <Image
                src={post.image}
                alt={post.name}
                className=" lg:h-[250px] max-[500px]:w-full min-[600px]:w-[500px]  object-cover  "
              />
            </div>
            <div className=" max-[759px]:hidden min-[760px]:block  col-span-1">
              <div className=" space-y-3">
                <p className=" uppercase space-x-3 text-sm tracking-widest  text-black/70">
                  {post.type.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </p>
                <h3 className=" font-libre text-2xl ">{post.name}</h3>
                <p className=" md:line-clamp-3 lg:line-clamp-none  text-sm text-black/80 ">
                  {post.details.description}
                </p>
                <div className=" flex items-center justify-between">
                  <div className=" flex items-center gap-1 ">
                    {post.viewer}
                    <IconEye />
                  </div>
                  <div className="  text-sm text-black/60">
                    {post.create_date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" max-[800px]:mt-8 flex max-[800px]:flex-col min-[801px]:flex-row  justify-between items-center">
        <p>
          Total Page : {page}/{totalPage}
        </p>
        <div className=" flex items-center gap-8  my-10 ">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className=" rounded-md disabled:bg-gray-300 active:scale-90 bg-black text-white border px-8 h-10"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPage}
            className=" rounded-md disabled:bg-gray-300 active:scale-90 bg-black text-white border px-8 h-10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
