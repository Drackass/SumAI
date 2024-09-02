"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { useGetSummary } from "@/features/summaries/api/use-get-summary";
import TitleForm from "./_components/title-form";
import { ArrowLeft, Captions, Settings } from "lucide-react";
import { Summary, summary } from "@/db/schema";
import { Actions } from "./_components/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { is } from "drizzle-orm";
import { AttachmentForm } from "./_components/attachment-form";
import Link from "next/link";

export default function SummaryIdPage({
  params,
}: {
  params: { summaryId: string };
}) {
  const { summaryId } = params;
  const summaryQuery = useGetSummary(summaryId);

  if (!summaryQuery.data) {
    return <div>Loading...</div>;
  }

  const defaultValues = summaryQuery.data;

  return (
    <div className="h-full p-4">
      <Link href={"/dashboard/summaries/"} className="flex gap-2 items-center hover:opacity-75 transition mb-6">
      <ArrowLeft className="size-4"/>
      Back to summaries dashboard
      </Link>
      <ResizablePanelGroup
        direction="horizontal"
        className="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3"
      >
        <ResizablePanel
          defaultSize={30}
          minSize={30}
          className="relative hidden flex-col items-start gap-8 xl:flex"
        >
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-x-2">
              <h2 className="text-2xl font-medium">Customize your summary</h2>
            </div>
            {summaryQuery.data && (
              <>
                <TitleForm initialData={defaultValues} summaryId={summaryId} />
                <AttachmentForm
                  initialData={defaultValues}
                  summaryId={summaryId}
                />
              </>
            )}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="hidden xl:flex" />
        <ResizablePanel minSize={30} className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Edit</TabsTrigger>
                  <TabsTrigger value="password">Preview</TabsTrigger>
                </TabsList>
              </Tabs>

              <Button variant="ghost">
                <Captions className="size-4 mr-2"/> Transcription
              </Button>
            </div>
            <Actions
              summaryId={summaryId}
              isPublished={defaultValues.isPublished}
            />
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 border p-4 md:col-span-2">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden rounded-full"
                >
                  <Settings />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Configuration</DrawerTitle>
                  <DrawerDescription>
                    Configure the settings for the model and messages.
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
            <Badge variant="outline" className="absolute right-3 top-3">
              Preview output
            </Badge>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
