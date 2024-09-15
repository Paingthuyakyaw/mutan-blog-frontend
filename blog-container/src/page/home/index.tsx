import { Image } from "@nextui-org/react";
import HeroImage from "../../assets/hero.jpg";
import LatestPost from "./components/latest-post";

const Home = () => {
  return (
    <div className=" max-w-full container">
      <div className=" relative">
        <Image
          src={HeroImage}
          width={"100%"}
          alt="Hero Image"
          className=" 2xl:h-[600px] object-cover h-[300px] md:h-[500px] w-full"
        />
        <div className=" p-5 md:p-0 space-y-4 bg-white md:w-[450px] md:px-6 md:pt-20 md:pb-14 md:left-10 object-cover absolute top-40 shadow md:shadow-none md:top-0">
          <div className=" space-y-1">
            <p className=" text-black/50 uppercase text-[9px] md:text-[12px] tracking-[0.2rem]">
              online publishing platform
            </p>
            <h2 className=" font-bold sm:text-xl text-2xl lg:text-3xl 2xl:text-3xl xl:text-3xl   font-libre">
              Mutan WordCraft
            </h2>
          </div>
          <div className=" text-[12px] md:text-medium flex justify-end items-center gap-2">
            <span className="  text-black/50">Project Initiation :</span>
            <span className=" text-black/50 text-[10px] md:text-[14px]">
              Aug 21 , 2024
            </span>
          </div>
          <p className=" text-justify text-[12px] md:text-[15px] text-black/60">
            <span className=" text-black font-libre  md:text-xl">Mutan</span> is
            an online publishing platform where anyone can write and share
            articles on a wide range of topics, including personal experiences,
            technical insights, and opinion pieces. It also features a
            community-driven environment, allowing writers to reach a broad
            audience and engage with readers through comments and discussions.
          </p>
        </div>
      </div>

      <div className=" w-full h-[100px]  md:hidden lg:hidden "></div>
      <LatestPost />
    </div>
  );
};

export default Home;
