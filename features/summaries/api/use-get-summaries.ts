import { useQuery } from '@tanstack/react-query';

import { client } from '@/lib/hono';

export const useGetSummaries = () => {
    const query = useQuery({
        queryKey: ["summaries"],
        queryFn: async () => {
            const response = await client.api.summaries.$get();

            if (!response.ok) {
                throw new Error("Failed to fetch summaries");
            }

            const { data } = await response.json();
            return data;
        },
    })

    return query;
}