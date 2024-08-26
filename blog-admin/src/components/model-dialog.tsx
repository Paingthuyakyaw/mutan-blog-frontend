import { ReactNode } from "react";
import { Dialog, DialogContent, DialogPortal, DialogTitle } from "./ui/dialog";

const ModelDialog = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent className=" max-w-xl ">
          <DialogTitle></DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ModelDialog;
