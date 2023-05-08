-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "content" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);
