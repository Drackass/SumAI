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
  "rounded-sm flex items-center gap-2 p-1 px-2 w-fit",
  {
    variants: {
      variant: {
        text: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
        url: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
        document:
          "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400",
        image:
          "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
        youtube:
          "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
        audio:
          "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
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
  const Icon = variant ? icons[variant] : null;
  return (
    <div className={cn(backgroundVariants({ variant }))}>
      {Icon && <Icon className="size-4" />}
      {variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : ""}
    </div>
  );
};
