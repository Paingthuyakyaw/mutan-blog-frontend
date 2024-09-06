import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface imageProp {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  style?: string;
}

const Image = ({ w, h, src, alt, style }: imageProp) => {
  const [pending, setPending] = useState(true);
  return (
    <div>
      {pending && (
        <Skeleton
          style={{
            width: w,
            height: h,
            borderRadius: style ? style : "",
          }}
          className={` w-[${w}px] rounded-full absolute z-20  h-[${h}px]  `}
        />
      )}
      <img
        src={src}
        style={{
          width: w,
          height: h,
        }}
        onLoad={() => setPending(false)}
        className={` w-[${w}px]  h-[${w}px] object-cover rounded-full `}
        alt={alt}
      />
    </div>
  );
};

export default Image;
