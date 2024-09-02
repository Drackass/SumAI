"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { toast } from "sonner";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteSummary } from "@/features/summaries/api/use-delete-summary";
import { summary } from "@/db/schema";
import { useEditSummary } from "@/features/summaries/api/use-edit-summary";

interface ActionsProps {
  summaryId: string;
  isPublished: boolean | null;
}

export const Actions = ({ summaryId, isPublished }: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);
  const deleteMutation = useDeleteSummary(summaryId);
  const editMutation = useEditSummary(summaryId);
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this summary."
  );

  const onClick = async () => {
    editMutation.mutate(
      {
        isPublished: !isPublished,
      },
      {
        onSuccess: () => {
          if (!isPublished) {
            confetti.onOpen();
          }
        },
      }
    );
  };

  const onDelete = async () => {
    setIsLoading(true);
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          router.push(`/dashboard/summaries`);
          setIsLoading(false);
        },
      });
    }
    else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ConfirmDialog />
      <div className="flex items-center gap-x-2">
        <Button
          onClick={onClick}
          disabled={isLoading}
          variant="outline"
          size="sm"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </Button>
        <Button size="sm" disabled={isLoading} onClick={onDelete}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
