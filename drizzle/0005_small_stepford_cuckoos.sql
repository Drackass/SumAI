ALTER TABLE "summary" RENAME COLUMN "attachmentIds" TO "attachmentId";--> statement-breakpoint
ALTER TABLE "summary" DROP CONSTRAINT "summary_attachmentIds_attachment_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "summary" ADD CONSTRAINT "summary_attachmentId_attachment_id_fk" FOREIGN KEY ("attachmentId") REFERENCES "public"."attachment"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
