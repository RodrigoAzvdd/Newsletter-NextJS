import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const response = await axios.get("https://test-db-prod.vercel.app/api/users");
        NextResponse.json(response)
    } catch (error: any) {
        NextResponse.json(error)
    }
}