"use client";
import { z } from "zod";
import { SummaryForm } from "@/features/summaries/components/summary-form";
import { insertSummarySchema } from "@/db/schema";
import { useCreateSummary } from "@/features/summaries/api/use-create-summary";

const formSchema = insertSummarySchema.pick({
  title: true,
  sourceType: true,
});

type FormValues = z.infer<typeof formSchema>;

export default function CreatePage() {
  const mutation = useCreateSummary();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  }

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your summary</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your summary ? Don&apos;t worry, you can
          change this later.
        </p>

        <SummaryForm 
          onSubmit={onSubmit} 
          disabled={mutation.isPending}
          defaultValues={{
            title: "",
            sourceType: "text",
          }}
        />
      </div>
    </div>
  );
}
