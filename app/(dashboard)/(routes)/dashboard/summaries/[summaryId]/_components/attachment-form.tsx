"use client";

import { useState } from "react";

import { File, Loader2, PlusCircle, X } from "lucide-react";
import { toast } from "sonner";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Summary, Attachment } from "@/db/schema";
import { FileUpload } from "@/components/file-upload";

interface AttachmentFormProps {
  initialData: Omit<Summary, "createdAt" | "updatedAt"> & { createdAt: string; updatedAt: string; };
  summaryId: Summary["id"];
}

const formSchema = z.object({
  url: z.string().min(1)
});

export const AttachmentForm = ({ initialData, summaryId }: AttachmentFormProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);


  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${summaryId}/attachments`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${summaryId}/attachments/${id}`);
      toast.success("Attachment deleted");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="mt-6 border bg-muted/40 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Attachments
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an file
            </>
          )}
        </Button>
      </div>
      {/* {!isEditing &&
        (
          <>
          {!initialData.attachmentId && (
            <p className="text-sm mt-2 text-slate-500 italic">
              No attachments yet
            </p>
          )}
          {initialData.attachmentId && (
            <div className="space-y-2">

                <div
                key={initialData.attachmentId}
                className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-xs line-clamp-1">
                    {initialData.attachmentId.name}
                  </p>
                  {deletingId === initialData.attachments.id && (
                    <div>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== initialData.attachments.id && (
                    <button className="ml-auto hover:opacity-75 transition"
                    onClick={() => onDelete(initialData.attachments.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
            </div>
          )}
          </>
        )} */}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your students might need to complete the course
          </div>
        </div>
      )}
    </div>
  );
};
