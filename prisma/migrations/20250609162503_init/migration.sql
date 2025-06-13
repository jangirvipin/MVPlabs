-- CreateTable
CREATE TABLE "Queries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Queries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "meeting" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
