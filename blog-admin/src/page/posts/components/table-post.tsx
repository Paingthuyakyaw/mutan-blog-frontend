import { postDataProp } from "@/assets/post-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TablePost = ({ data }: { data: postDataProp[] }) => {
  return (
    <>
      <Table className=" border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Viewer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className=" text-end">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.viewer}</TableCell>
              <TableCell>{item.details.rating}</TableCell>
              <TableCell>{item.create_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TablePost;
