-- CreateEnum
CREATE TYPE "AvatarImageType" AS ENUM ('userGenerated', 'modelGenerated');

-- CreateEnum
CREATE TYPE "AvatarVideoStatus" AS ENUM ('Pending', 'Done', 'Error');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avatar" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvatarImage" (
    "id" SERIAL NOT NULL,
    "avatarId" INTEGER NOT NULL,
    "type" "AvatarImageType" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "AvatarImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvatarVideo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "startFrame" TEXT NOT NULL,
    "endFrame" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "status" "AvatarVideoStatus" NOT NULL,

    CONSTRAINT "AvatarVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoModelReference" (
    "id" SERIAL NOT NULL,
    "avatarVideoId" INTEGER NOT NULL,
    "avatarId" INTEGER NOT NULL,

    CONSTRAINT "VideoModelReference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvatarImage" ADD CONSTRAINT "AvatarImage_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvatarVideo" ADD CONSTRAINT "AvatarVideo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoModelReference" ADD CONSTRAINT "VideoModelReference_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoModelReference" ADD CONSTRAINT "VideoModelReference_avatarVideoId_fkey" FOREIGN KEY ("avatarVideoId") REFERENCES "AvatarVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
