import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Posts = () => {
  return (
    <div className=" w-full">
      <div className=" flex items-center justify-between">
        <div className="">
          <h3 className=" font-libre text-xl font-bold text-slate-700">
            Posts
          </h3>
          <p className=" text-sm text-gray-500">You can view your's posts</p>
        </div>
        <div className=" flex gap-5">
          <Input placeholder="Search your post" className=" w-[300px]" />
          <Button>Create Post</Button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
