import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient} from "@tanstack/react-query"

import { client } from "@/lib/hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.summaries[":id"]["$patch"]>;
type RequestType = InferRequestType<typeof client.api.summaries[":id"]["$patch"]>["json"];

export const useEditSummary = (id?: string) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.summaries[":id"]["$patch"]({ 
                param: { id },
                json
             });
            return await response.json();
        },
        onSuccess: (data) => {
            toast.success("Summary updated");
            queryClient.invalidateQueries({ queryKey: ["summaries", { id }] });
            queryClient.invalidateQueries({ queryKey: ["summaries"] });
            'data' in data && router.push(`/dashboard/summaries/${data.data.id}`);
        },
        onError: () => {
            toast.error("Failed to edit summary");
        },
    });

    return mutation;
}