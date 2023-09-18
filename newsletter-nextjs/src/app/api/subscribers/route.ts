import { NextResponse } from "next/server";
import connection from "@/db";

export async function GET(request: Request) {
    const [rows, fields] = await connection.execute('SELECT * FROM subscribers');
    return NextResponse.json(rows)
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        await connection.execute('INSERT INTO subscribers (email) VALUES (?)', [email]);
        return NextResponse.json({ created: true });
    } catch (error) {
        return NextResponse.json({ created: false, message: error });
    }
}