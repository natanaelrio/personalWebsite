-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "view_barang" INTEGER,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);
