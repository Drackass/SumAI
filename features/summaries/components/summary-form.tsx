import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  TextSearch,
  Globe,
  File,
  FileImage,
  Youtube,
  AudioLines,
} from "lucide-react";
import { SourceTypes } from "@/features/summaries/components/source-types";
import { insertSummarySchema } from "@/db/schema";

const formSchema = insertSummarySchema
  .pick({
    title: true,
    sourceType: true,
  });

type FormValues = z.infer<typeof formSchema>;

type Props = {
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  disabled?: boolean;
};

const sourceTypes = {
  text: TextSearch,
  url: Globe,
  document: File,
  image: FileImage,
  youtube: Youtube,
  audio: AudioLines,
} as const;

type SourceTypesKeys = keyof typeof sourceTypes;

export const SummaryForm = ({ defaultValues, onSubmit, disabled }: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      sourceType: "text",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 mt-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary Title</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
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
          <Button type="submit" disabled={disabled}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
