/* eslint-disable @typescript-eslint/no-explicit-any */
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IconUpload } from "@tabler/icons-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface uploadDto {
  form: UseFormReturn<
    {
      title: string;
      description: string;
      tagId: number[];
      file?: any;
    },
    any,
    undefined
  >;
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const UploadFile = ({ form, selectedImage, setSelectedImage }: uploadDto) => {
  return (
    <>
      <input
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return;
          form.setValue("file", e.target.files[0]);
          setSelectedImage(e?.target?.files?.[0]);
        }}
        type="file"
        hidden
        id="file"
      />
      {selectedImage ? (
        <AspectRatio className=" mt-2" ratio={18 / 9}>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Image"
            className=" w-full h-full rounded-md object-cover"
          />
        </AspectRatio>
      ) : (
        <AspectRatio className=" mt-2" ratio={18 / 9}>
          <label
            htmlFor="file"
            className=" w-full rounded-md  h-full flex items-center justify-center border border-dashed"
          >
            <IconUpload size={35} />
          </label>
        </AspectRatio>
      )}
    </>
  );
};

export default UploadFile;
