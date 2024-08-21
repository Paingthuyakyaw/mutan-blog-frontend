import { RoughNotation } from "react-rough-notation";
const LatestPost = () => {
  return (
    <div className=" mt-10">
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
    </div>
  );
};

export default LatestPost;
