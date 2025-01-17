import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetSummary = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["summary", { id }],
    queryFn: async () => {
      const response = await client.api.summaries[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
