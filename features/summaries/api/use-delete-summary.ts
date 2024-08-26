import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient} from "@tanstack/react-query"

import { client } from "@/lib/hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.summaries[":id"]["$delete"]>;
type RequestType = InferRequestType<typeof client.api.summaries[":id"]["$delete"]>;

export const useDeleteSummary = (id?: string) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async () => {
            const response = await client.api.summaries[":id"]["$delete"]({ 
                param: { id },
             });
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Summary delete");
            queryClient.invalidateQueries({ queryKey: ["summaries", { id }] });
            queryClient.invalidateQueries({ queryKey: ["summaries"] });
        },
        onError: () => {
            toast.error("Failed to delete summary");
        },
    });

    return mutation;
}