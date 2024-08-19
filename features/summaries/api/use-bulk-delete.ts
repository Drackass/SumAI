import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient} from "@tanstack/react-query"

import { client } from "@/lib/hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.summaries["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.summaries["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteSummaries = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.summaries["bulk-delete"]["$post"]({ json });
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Summaries deleted");
            queryClient.invalidateQueries({ queryKey: ["summaries"] });
        },
        onError: () => {
            toast.error("Failed to delete summaries");
        },
    });

    return mutation;
}