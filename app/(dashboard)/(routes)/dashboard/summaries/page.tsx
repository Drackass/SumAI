"use client";

import { useGetSummaries } from "@/features/summaries/api/use-get-summaries";
import { useBulkDeleteSummaries } from "@/features/summaries/api/use-bulk-delete";
import { Atom, CirclePlus, Loader2 } from "lucide-react";
import { columns } from "./_components/columns";
import { DataTable } from "@/components/data-table";
import WelcomeBack from "./_components/welcome-back";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const summariesQuery = useGetSummaries();
  const deleteSummaries = useBulkDeleteSummaries();
  const summaries = summariesQuery.data || [];

  const isDisabled = summariesQuery.isLoading || deleteSummaries.isPending;

  return (
    <>
      <WelcomeBack />

      {summariesQuery.isLoading && (
        <div className="h-[500px] w-full flex items-center justify-center">
          <Loader2 className="size-6 text-muted-foreground/50 animate-spin" />
        </div>
      )}

      {summariesQuery.isFetched && summaries.length === 0 && (
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no summaries
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start by adding a new summary
            </p>
            <Link href="/dashboard/summaries/create">
              <Button className="mt-4 flex gap-2 items-center">
                <CirclePlus size={17} />
                Add Summary
              </Button>
            </Link>
          </div>
        </div>
      )}

      {summariesQuery.isFetched && summaries.length > 0 && (
        <div>
          <div className="flex justify-between items-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Summaries page
            </h3>
            <Link href="/dashboard/summaries/create">
              <Button className="flex gap-2 items-center" size="sm">
                <CirclePlus size={17} />
                Add Summary
              </Button>
            </Link>
          </div>

          <DataTable
            columns={columns}
            data={summaries}
            filterKey="title"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteSummaries.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </div>
      )}
    </>
  );
}
