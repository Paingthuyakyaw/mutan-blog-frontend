import { navLink } from "@/assets/slide-nav";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

const SliderLayout = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className=" flex flex-col gap-7">
      {navLink.map((nav) => (
        <Fragment key={nav.id}>
          <Link
            to={nav.path}
            key={nav.id}
            className={`flex items-center z-20 relative w-full gap-2 py-[10px] pl-6 2xl:pl-10 ${
              pathname === nav.path ? "text-white" : "text-black"
            }`}
          >
            <span>{nav.icon}</span> {nav.name}
            <AnimatePresence>
              {pathname === nav.path && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="
                   absolute bg-blogPrimary before:absolute before:border-[22px] before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-50 before:right-[-1px] before:top-0    w-full -z-10  left-0 h-full
                    after:absolute after:border-[22px] after:left-0 after:border-r-0 after:border-t-gray-50 after:border-b-gray-50  after:rotate-180 after:border-l-transparent 
                   "
                ></motion.span>
              )}
            </AnimatePresence>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default SliderLayout;
