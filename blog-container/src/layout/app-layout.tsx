import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" w-full">
      <Outlet />
    </div>
  );
};

export default AppLayout;
