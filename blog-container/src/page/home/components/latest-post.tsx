import { RoughNotation } from "react-rough-notation";
import { postData } from "../../../assets/post-data";
import { Image } from "@nextui-org/react";
import IconEye from "../../../common/Icon/IconEye";
import { useNavigate } from "react-router-dom";
const LatestPost = () => {
  const navigate = useNavigate();
  return (
    <div className=" container mt-10">
      <div className=" text-2xl font-libre font-semibold flex items-center justify-center">
        <RoughNotation
          type="underline"
          animationDuration={1000}
          strokeWidth={1.5}
          iterations={3}
          show
        >
          <h4>Latest Blog</h4>
        </RoughNotation>
      </div>
      <div className=" space-y-14 md:space-y-3 mt-10">
        {postData
          .reverse()
          .slice(0, 4)
          .map((post) => (
            <div
              onClick={() => navigate(`/posts/${post.id}`)}
              className=" cursor-pointer grid grid-cols-1 items-center gap-5 md:grid-cols-2"
              key={post.id}
            >
              {/* responsive for sm */}
              <div className="  md:hidden col-span-1">
                <div className=" space-y-3">
                  <p className=" uppercase space-x-3 text-[12px] tracking-widest font-thin text-gray-500">
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
                  <p className=" uppercase space-x-3 text-sm tracking-widest font-thin text-black/70">
                    {post.type.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </p>
                  <h3 className=" font-libre text-2xl ">{post.name}</h3>
                  <p className=" md:line-clamp-3 lg:line-clamp-none font-thin text-sm text-black/80 ">
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
    </div>
  );
};

export default LatestPost;
