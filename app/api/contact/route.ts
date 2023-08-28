import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

type Contact = {
  firstname: string;
  lastname: string;
  email: string;
  birth: string;
  information: string;
}

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const result = await prisma.contact.findMany()
    // console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    // console.log(requestBody);
    const { firstname, lastname, email, birth, information }: Contact = requestBody;
    
    if (!firstname || !lastname || !email || !birth || !information) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const result = await prisma.contact.create({
      data: { firstname, lastname, email, birth, information },
    });

    // console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur lors de la création de l'objet contact",error);
    return NextResponse.error();
  }
}