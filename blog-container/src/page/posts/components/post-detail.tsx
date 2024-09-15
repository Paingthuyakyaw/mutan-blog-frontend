import { useParams } from "react-router-dom";
import { postData } from "../../../assets/post-data";
import { Image } from "@nextui-org/react";

const PostDetail = () => {
  const { id } = useParams();

  const data = postData.filter((item) => item.id === Number(id))[0];

  console.log(data);

  return (
    <div className=" pt-5 max-w-full container">
      <Image
        src={data.image}
        width={"100%"}
        className=" rounded-md h-auto lg:h-[600px] object-cover "
      />
      <div className=" max-w-full container max-[600px]:mt-5 lg:mt-10 xl:mt-10 2xl:mt-10 md:mt-10">
        <div className=" uppercase space-x-3 max-[600px]:text-[10px] md:text-sm tracking-widest  text-black/50">
          {data.type.map((cat, idx) => (
            <span className=" uppercase" key={idx}>
              {cat}
            </span>
          ))}
        </div>
        <h3 className=" font-libre md:text-3xl max-[600px]:text-2xl lg:text-4xl">
          {data.name}
        </h3>

        <div className=" text-justify mt-5 space-y-5 max-[600px]:text-sm  text-black/50 ">
          <p>{data.details.description}</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium nulla inventore soluta amet modi, ullam beatae minima
            sapiente commodi illo deserunt quos alias molestiae dolorem dolore
            at, incidunt quisquam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maxime cum eos totam eveniet reprehenderit. Laborum sapiente
            mollitia tempore libero illum, omnis nihil delectus vero quas, at
            suscipit quibusdam commodi hic veritatis asperiores placeat sint
            fuga adipisci repudiandae laboriosam necessitatibus in, beatae rem!
            Sit, expedita alias commodi magni illum adipisci quasi dolorum
            provident rerum doloremque deleniti deserunt dolore fuga placeat est
            odit labore, ad quae facilis, soluta illo libero sed excepturi sint!
            Numquam facilis sunt magni quia nulla modi vero nesciunt alias nam
            natus fuga quasi veniam assumenda, esse maxime? Nisi et libero
            maxime odio soluta exercitationem, nesciunt fuga ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
