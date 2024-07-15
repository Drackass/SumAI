import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient} from "@tanstack/react-query"

import { client } from "@/lib/hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.summaries.$post>;
type RequestType = InferRequestType<typeof client.api.summaries.$post>["json"];

export const useCreateSummary = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.summaries.$post({ json });
            return await response.json();
        },
        onSuccess: (data) => {
            toast.success("Summary created");
            queryClient.invalidateQueries({ queryKey: ["summaries"] });
            'data' in data && router.push(`/dashboard/summaries/${data.data.id}`);
        },
        onError: () => {
            toast.error("Failed to create summary");
        },
    });

    return mutation;
}