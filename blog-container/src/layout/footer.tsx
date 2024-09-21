import IconGmail from "../common/Icon/IconGmail";
import IconLinkedin from "../common/Icon/IconLinkedin";
import IconPhone from "../common/Icon/IconPhone";

const Footer = () => {
  return (
    <div className=" mt-10 bg-black ">
      <div className=" py-10 flex  justify-center text-white">
        <div className=" min-[800px]:w-[900px] ">
          <h3 className=" text-center text-2xl font-libre font-semibold">
            Want to connect?
          </h3>
          <div className=" flex items-center justify-center text-white/80 text-sm mt-2">
            <p className=" tracking-wide w-[300px] text-center">
              I am a Frontend Developer from Myanmar, and I excel at creating
              the best websites using React and Next.js
            </p>
          </div>
          {/* //==================== web view  ====================// */}
          <div className=" max-[800px]:hidden  mt-5 min-[800px]:]:flex lg:flex xl:flex justify-end">
            <div className=" w-1/2 flex justify-center items-center gap-5">
              <IconPhone />
              <p>09 6627 66 003</p>
            </div>
            <div className=" justify-end w-1/2 flex items-center gap-5">
              <IconGmail />
              <p>paingthurakyaw16102003@gmail.com</p>
            </div>
          </div>
          <div className=" flex items-center justify-center mt-5">
            <div className=" flex items-center gap-4">
              <IconLinkedin />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paing-thura-kyaw-0584b6259/"
              >
                Linkedin
              </a>
            </div>
          </div>
          {/* //====================  mobile views  ====================// */}
          <div className=" md:hidden space-y-3 mt-3">
            <div className=" flex items-center gap-4">
              <IconGmail />
              <p>paingthurakyaw16102003</p>
            </div>
            <div className=" flex items-center gap-4">
              <IconPhone />
              <p>09 6627 66003</p>
            </div>
            <div className=" flex items-center gap-4">
              <IconLinkedin />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paing-thura-kyaw-0584b6259/"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
