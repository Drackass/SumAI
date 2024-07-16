"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  TextSearch,
  Globe,
  File,
  FileImage,
  Youtube,
  AudioLines,
} from "lucide-react";
import { SourceTypes } from "./_components/source-types";
import { insertSummarySchema } from "@/db/schema";
import { useCreateSummary } from "@/features/summaries/api/use-create-summary";

// const formSchema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   type: z.enum(["text", "url", "document", "image", "youtube", "audio"], {
//     required_error: "Please select a source type.",
//   }),
// });

const formSchema = insertSummarySchema.pick({
  title: true,
  sourceType: true,
});

type FormValues = z.infer<typeof formSchema>;

const sourceTypes = {
  text: TextSearch,
  url: Globe,
  document: File,
  image: FileImage,
  youtube: Youtube,
  audio: AudioLines,
} as const;

type SourceTypesKeys = keyof typeof sourceTypes;

export default function CreatePage() {
  const mutation = useCreateSummary();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      sourceType: "text",
    },
  });

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={mutation.isPending}
                      placeholder="e.g 'Advanced Web Development'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A descriptive title for your summary
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sourceType"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Source Type</FormLabel>

                  <FormMessage />
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap pt-2"
                  >
                    {Object.entries(sourceTypes).map(([key, Icon]) => (
                      <FormItem key={key}>
                        <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                          <FormControl>
                            <RadioGroupItem value={key} className="sr-only" />
                          </FormControl>
                          <SourceTypes
                            variant={key as SourceTypesKeys}
                            icon={Icon}
                          />
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                  <FormDescription>
                    The type of source you want to summarize
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/dashboard/summaries">
                <Button variant="ghost" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={mutation.isPending}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
