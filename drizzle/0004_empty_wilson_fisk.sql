CREATE TABLE IF NOT EXISTS "attachment" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "summary" ADD COLUMN "attachmentIds" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "summary" ADD CONSTRAINT "summary_attachmentIds_attachment_id_fk" FOREIGN KEY ("attachmentIds") REFERENCES "public"."attachment"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
