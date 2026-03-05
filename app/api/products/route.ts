import { NextResponse } from "next/server"

export function GET(){
  return NextResponse.json({
    message: "GET /products"
  })
}

export function POST(){
  return NextResponse.json({
    message: "POST /products"
  })
}

export function PUT(){
  return NextResponse.json({
    message: "PUT /products"
  })
}

export function DELETE(){
  return NextResponse.json({
    message: "DELETE /products"
  })
}