import { Image } from "@nextui-org/react";
import HeroImage from "../../assets/hero.jpg";
import LatestPost from "./components/latest-post";

const Home = () => {
  console.log("hello");

  return (
    <div className=" max-w-full container">
      <div className=" relative">
        <Image
          src={HeroImage}
          width={"100%"}
          alt="Hero Image"
          className=" 2xl:h-[600px] object-cover h-[500px] w-full"
        />
        <div className=" space-y-4 bg-white w-[450px] px-6 pt-20 pb-14 left-10 object-cover absolute top-0">
          <div className=" space-y-1">
            <p className=" text-black/50 uppercase text-[12px] tracking-[0.2rem]">
              online publishing platform
            </p>
            <h2 className=" font-bold text-3xl font-libre">Mutan WordCraft</h2>
          </div>
          <div className=" flex justify-end items-center gap-2">
            <span className="  text-black/50">Project Initiation :</span>
            <span className=" font-thin text-black/40 text-[14px]">
              Aug 21 , 2024
            </span>
          </div>
          <p className=" text-justify text-[15px] text-black/60">
            <span className=" text-black font-libre text-xl">Mutan</span> is an
            online publishing platform where anyone can write and share articles
            on a wide range of topics, including personal experiences, technical
            insights, and opinion pieces. It also features a community-driven
            environment, allowing writers to reach a broad audience and engage
            with readers through comments and discussions.
          </p>
        </div>
      </div>
      <LatestPost />
    </div>
  );
};

export default Home;
