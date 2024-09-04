import ModelDialog from "@/components/model-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import UploadFile from "./upload-file";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { IconLoader, IconX } from "@tabler/icons-react";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title required",
    })
    .max(120, { message: "Title must be less than 120 words" }),
  description: z.string().min(1, { message: "Description required" }),
  file: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  tagId: z.array(z.number().min(1, "Tag required")),
});

const CreateModel = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      file: null,
      tagId: [],
    },
  });

  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Post</Button>
      <ModelDialog open={open} setOpen={setOpen}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((value) => console.log(value))}
            className=" flex flex-col gap-4"
            action=""
          >
            <FormField
              control={form.control}
              name="file"
              render={() => {
                return (
                  <FormItem>
                    <FormLabel className=" block">Image</FormLabel>
                    <FormControl>
                      <UploadFile
                        form={form}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="title"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="description"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="tagId"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block">Tags</FormLabel>
                    <DropdownMenu>
                      <FormControl>
                        <DropdownMenuTrigger className=" w-full">
                          <div className=" bg-gray-100 w-full flex items-center gap-3 rounded-md  h-[40px] ">
                            {field.value.length !== 0 ? (
                              <>
                                {data.map(
                                  (item) =>
                                    field.value.includes(item.id) && (
                                      <div key={item.id}>
                                        <Badge className=" relative ">
                                          {item.tag}
                                          <IconX
                                            size={15}
                                            onClick={() =>
                                              field.onChange(
                                                field.value.filter(
                                                  (d) => d !== item.id
                                                )
                                              )
                                            }
                                            className=" absolute top-[-5px] shadow right-[-5px] rounded-full bg-white text-black "
                                          />
                                        </Badge>
                                      </div>
                                    )
                                )}
                              </>
                            ) : (
                              <p className=" pl-2 text-sm text-gray-500">
                                Select your tags
                              </p>
                            )}
                          </div>
                        </DropdownMenuTrigger>
                      </FormControl>
                      <DropdownMenuContent className=" w-[500px]">
                        {!data ? (
                          <div className=" flex items-center justify-center h-[100px]">
                            <IconLoader className=" animate-spin" />
                          </div>
                        ) : (
                          <>
                            {data.map((item) => {
                              return (
                                <DropdownMenuCheckboxItem
                                  checked={field.value.includes(item.id)}
                                  onCheckedChange={(value) => {
                                    if (value) {
                                      field.onChange([...field.value, item.id]);
                                    } else {
                                      field.onChange(
                                        field.value.filter((v) => v !== item.id)
                                      );
                                    }
                                  }}
                                  key={item.id}
                                >
                                  {item.tag}
                                </DropdownMenuCheckboxItem>
                              );
                            })}
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormItem>
                );
              }}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ModelDialog>
    </>
  );
};

export default CreateModel;

const data = [
  {
    id: 1,
    tag: "Programming",
  },
  {
    id: 2,
    tag: "Technology",
  },
];
