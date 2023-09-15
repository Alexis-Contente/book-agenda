import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const result = await prisma.contact.findMany()
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {

    if(!request.body) {

      return NextResponse.json({
        status: 400,
        body: "Missing body",
      });
    }

    const body =  request.body

    
    const result = await prisma.contact.create({
      data: body,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
