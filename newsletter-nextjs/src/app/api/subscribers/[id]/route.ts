import connection from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params.id;
    await connection.execute('DELETE FROM subscribers WHERE id = ?', [id]);
    return NextResponse.json({ deleted: true });
  } catch (error) {
    return NextResponse.json({ status: 500, message: `Failed to delete subscriber: ${error}` });
  }
}

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params.id;
    const { email } = await request.json()
    await connection.execute("UPDATE subscribers SET email = ? WHERE id = ?", [email, id]);
    return NextResponse.json({ updated: true });
  } catch (error) {
    return NextResponse.json({ status: 500, message: `Failed to delete subscriber: ${error}` });
  }
}