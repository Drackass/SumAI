import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Delete, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import Link from "next/link";
import { useDeleteSummary } from "@/features/summaries/api/use-delete-summary";
import { useConfirm } from "@/hooks/use-confirm";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  const deleteMutation = useDeleteSummary(id);
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this summary."
  );

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate();
    }
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/dashboard/summaries/${id}`}>
            <DropdownMenuItem
              disabled={false}
              onClick={() => console.log("Edit")}
            >
              <Edit className="size-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </Link>
            <DropdownMenuItem
              disabled={false}
              onClick={onDelete}
            >
              <Trash2 className="size-4 mr-2" />
              Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
