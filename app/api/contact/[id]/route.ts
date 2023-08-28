import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const {id} = params;
    const result = await prisma.contact.findUnique({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  console.log("dpassla");
  try {
    const {id} = params;
    console.log("api", id);
    const result = await prisma.contact.delete({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}