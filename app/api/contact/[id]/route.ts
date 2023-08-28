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

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const {id} = params;
  console.log("passla");
  try {
    const requestBody = await request.json();
    console.log(requestBody);
    const { firstname, lastname, email, birth, information }: Contact = requestBody;
    
    // if (!firstname || !lastname || !email || !birth || !information) {
    //   return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    // }

    const result = await prisma.contact.update({
      where: {id: Number(id)},
      data: { firstname, lastname, email, birth, information },
    });

    return NextResponse.json(result);
  }
  catch (error) {
    console.error("Erreur lors de la création de l'objet contact",error);
    return NextResponse.error();
  }}  