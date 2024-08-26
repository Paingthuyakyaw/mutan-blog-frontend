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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
                console.log(field, "option");

                return (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {DataPost.data.map((option) => (
                          <SelectItem
                            value={option.id.toString()}
                            key={option.id}
                          >
                            {option.tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

//==================== dummy data  ====================//
export const DataPost = {
  success: true,
  data: [
    {
      id: 1,
      tag: "Programming",
      created_at: "2024-08-18T15:02:06.642Z",
      updated_at: "2024-08-18T15:02:06.642Z",
    },
    {
      id: 2,
      tag: "Technology",
      created_at: "2024-08-18T15:02:06.642Z",
      updated_at: "2024-08-18T15:02:06.642Z",
    },
  ],
  message: "All tags",
};
