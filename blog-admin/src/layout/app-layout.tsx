import { Outlet } from "react-router-dom";
import SliderLayout from "./slide-layout";

const AppLayout = () => {
  return (
    <div className=" flex  ">
      <div className=" md:w-[340px] 2xl:w-[400px] 2xl:px-14 min-h-screen bg-gray-50 hidden lg:block text-white  px-5 pt-3">
        <div className=" font-libre font-bold 2xl:text-2xl  text-gray-600 text-xl">
          Mutan WorldCraft
        </div>
        <div className=" mt-4">
          <SliderLayout />
        </div>
      </div>
      <div className=" mt-4 px-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
