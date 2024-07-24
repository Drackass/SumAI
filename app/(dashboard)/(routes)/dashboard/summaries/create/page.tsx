"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { insertSummarySchema } from "@/db/schema";
import { useCreateSummary } from "@/features/summaries/api/use-create-summary";
import { SummaryForm } from "@/features/summaries/components/summary-form";

const formSchema = insertSummarySchema.pick({
  title: true,
  sourceType: true,
});

type FormValues = z.infer<typeof formSchema>;

export default function CreatePage() {
  const mutation = useCreateSummary();
  const router = useRouter();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: (data) => {
        "data" in data && router.push(`/dashboard/summaries/${data.data.id}`);
      },
    });
  };
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
