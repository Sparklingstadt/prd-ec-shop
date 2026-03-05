import { NextRequest, NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: Promise<{ id: number }>}){
  const { id } = await params
  
  return NextResponse.json({
    message: `GET /products/[id]`,
    params: id
  })
}

export async function PUT(_: Request, { params }: { params: Promise<{ id: number }>}){
  const { id } = await params

  return NextResponse.json({
    message: "PUT /products/[id]",
    params: id
  })
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: number }>}){
  const { id } = await params

  return NextResponse.json({
    message: "DELETE /products/[id]",
    params: id
  })
}