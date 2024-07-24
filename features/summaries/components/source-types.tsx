import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const backgroundVariants = cva(
  "space-y-2 rounded-sm p-2 size-12 sm:size-16 lg:size-20 border flex justify-center items-center cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-zinc-100 border-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400",
        text: "bg-purple-100 border-purple-200 text-purple-400 dark:bg-purple-950 dark:border-purple-700/35 dark:text-purple-600",
        url: "bg-blue-100 border-blue-200 text-blue-400 dark:bg-blue-950 dark:border-blue-700/35 dark:text-blue-600",
        document: "bg-yellow-100 border-yellow-200 text-yellow-400 dark:bg-yellow-950 dark:border-yellow-700/35 dark:text-yellow-600",
        image: "bg-green-100 border-green-200 text-green-400 dark:bg-green-950 dark:border-green-700/35 dark:text-green-600",
        youtube: "bg-red-100 border-red-200 text-red-400 dark:bg-red-950 dark:border-red-700/35 dark:text-red-600",
        audio: "bg-orange-100 border-orange-200 text-orange-400 dark:bg-orange-950 dark:border-orange-700/35 dark:text-orange-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;

interface SourceBadgeProps extends BackgroundVariantsProps {
  icon: LucideIcon;
}

export const SourceTypes = ({ icon: Icon, variant }: SourceBadgeProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
          <div className={cn(backgroundVariants({ variant }))}>
            <Icon size={35} />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>
            {variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : ""}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};