import { postDataProp } from "@/assets/post-data";
import Image from "@/components/fetch-image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TablePost = ({
  data,
  setPage,
  total,
  page,
}: {
  data: postDataProp[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  page: number;
}) => {
  return (
    <>
      <div className=" min-h-60">
        <Table className="  border">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className=" text-center">Viewer</TableHead>
              <TableHead className=" text-center">Rating</TableHead>
              <TableHead className=" text-end">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className=" flex items-center gap-2">
                  <Image src={item.image} alt={item.name} w={40} h={40} />
                  <p>{item.name}</p>
                </TableCell>
                <TableCell className=" text-center">{item.viewer}</TableCell>
                <TableCell className=" text-center">
                  {item.details.rating}
                </TableCell>
                <TableCell className=" text-end">{item.create_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className=" mt-5 flex items-center justify-end gap-5">
        <Button
          disabled={page <= 1}
          onClick={() => setPage((p) => (p > 1 ? p - 1 : p))}
          className=" w-[100px] "
          variant={"outline"}
        >
          Prev
        </Button>
        <Button
          disabled={page >= total}
          onClick={() => setPage((p) => (p < total ? p + 1 : p))}
          className=" w-[100px] "
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default TablePost;
