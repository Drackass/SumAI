import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  LucideIcon,
  TextSearch,
  Globe,
  File,
  FileImage,
  Youtube,
  AudioLines,
} from "lucide-react";
const backgroundVariants = cva(
  "rounded-sm border flex items-center gap-2 p-1 px-2 w-fit",
  {
    variants: {
      variant: {
        text: "bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-950 dark:border-purple-700/35 dark:text-purple-600",
        url: "bg-blue-100 border-blue-200 text-blue-500 dark:bg-blue-950 dark:border-blue-700/35 dark:text-blue-600",
        document:
          "bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-950 dark:border-yellow-700/35 dark:text-yellow-600",
        image:
          "bg-green-100 border-green-200 text-green-500 dark:bg-green-950 dark:border-green-700/35 dark:text-green-600",
        youtube:
          "bg-red-100 border-red-200 text-red-500 dark:bg-red-950 dark:border-red-700/35 dark:text-red-600",
        audio:
          "bg-orange-100 border-orange-200 text-orange-500 dark:bg-orange-950 dark:border-orange-700/35 dark:text-orange-600",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

const icons = {
  text: TextSearch,
  url: Globe,
  document: File,
  image: FileImage,
  youtube: Youtube,
  audio: AudioLines,
} as const;

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;

interface SourceBadgeProps extends BackgroundVariantsProps {}

export const SourceDatatable = ({ variant }: SourceBadgeProps) => {
  const Icon = variant ? (icons[variant]) : null;
  return (
    <div className={cn(backgroundVariants({ variant }))}>
      {Icon && <Icon className="size-4" />}
      {variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : ""}
    </div>
  );
};
