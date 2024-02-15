// pages/api/users-proxy/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

interface ErrorResponse {
    error: string;
}

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get("https://test-db-prod.vercel.app/api/users");
        res.status(200).json(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ErrorResponse>;
            const status = axiosError.response?.status || 500;
            const errorMessage = axiosError.response?.data.error || "Internal Server Error";
            console.error("Error fetching data from API:", errorMessage);
            res.status(status).json({ error: errorMessage });
        } else {
            console.error("Error fetching data from API:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
