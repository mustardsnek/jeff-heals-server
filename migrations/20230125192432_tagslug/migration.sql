-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "imageURL" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "story" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pfp" TEXT NOT NULL DEFAULT '';