import { RoughNotation } from "react-rough-notation";
import { Link, useLocation } from "react-router-dom";
import IconSearch from "../common/Icon/IconSearch";
import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import IconBaseLine from "../common/Icon/IconBaseLine";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className=" py-4 flex items-center max-w-full justify-between container">
      <div className=" flex items-center gap-20">
        <div className="">
          <h2 className=" font-bold relative  font-libre md:text-2xl lg:text-2xl ">
            <span className=" pt-2 pl-2 bg-black text-white">Mut</span>an
            WordCraft
          </h2>
        </div>
        <div className=" max-[767px]:hidden  md:flex gap-6">
          <RoughNotation type="highlight" show={pathname === "/"}>
            <Link className={pathname === "/" ? "text-white" : ""} to={"/"}>
              Home
            </Link>
          </RoughNotation>
          <RoughNotation type="highlight" show={pathname === "/posts"}>
            <Link
              className={pathname === "/posts" ? "text-white" : ""}
              to={"/posts"}
            >
              Posts
            </Link>{" "}
          </RoughNotation>
          <RoughNotation type="highlight" show={pathname === "/about"}>
            <Link
              className={pathname === "/about" ? "text-white" : ""}
              to={"/about"}
            >
              About
            </Link>
          </RoughNotation>
        </div>
      </div>
      {/* search */}
      <div className=" flex items-center gap-5">
        <IconSearch />
        <Button className=" hidden md:block lg:block rounded-md border border-black ">
          Login
        </Button>
        <Button onClick={() => setOpen(!open)} className=" md:hidden p-0">
          <IconBaseLine />
        </Button>
      </div>

      {/* slide bar mobile view */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            className=" fixed bg-black/50 h-screen w-full z-30 right-0 bottom-0 md:hidden"
          >
            <div className=" flex flex-col gap-10 text-2xl justify-center items-center h-[90vh]">
              <RoughNotation
                color="white"
                iterations={10}
                type="underline"
                show={pathname === "/"}
              >
                <Link
                  onClick={() => setOpen(false)}
                  className={pathname === "/" ? "text-white" : " text-white"}
                  to={"/"}
                >
                  Home
                </Link>
              </RoughNotation>
              <RoughNotation
                color="white"
                iterations={10}
                type="underline"
                show={pathname === "/posts"}
              >
                <Link
                  onClick={() => setOpen(false)}
                  className={
                    pathname === "/posts" ? "text-white" : " text-white"
                  }
                  to={"/posts"}
                >
                  Posts
                </Link>{" "}
              </RoughNotation>
              <RoughNotation
                color="white"
                iterations={10}
                type="underline"
                show={pathname === "/about"}
              >
                <Link
                  onClick={() => setOpen(false)}
                  className={
                    pathname === "/about" ? "text-white" : " text-white"
                  }
                  to={"/about"}
                >
                  About
                </Link>
              </RoughNotation>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
