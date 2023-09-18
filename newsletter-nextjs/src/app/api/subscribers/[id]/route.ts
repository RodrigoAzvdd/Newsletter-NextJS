import connection from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, context) {
  try {
    const id = context.params.id;
    await connection.execute('DELETE FROM subscribers WHERE id = ?', [id]);
    return NextResponse.json({ deleted: true });
  } catch (error) {
    return NextResponse.json({status: 500, message: `Failed to delete subscriber: ${error}`});
  }
}