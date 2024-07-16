"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Atom, CirclePlus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Welcome Back{isLoaded ? ", " : ""}
          {user?.lastName} 👋
        </h1>
      </div>
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
    </>
  );
}
