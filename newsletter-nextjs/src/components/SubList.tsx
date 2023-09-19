'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface Subscribers {
    create_time: Date;
    update_time: Date;
    email: string;
    id: number;
}

const SubList = () => {
    const [subscribers, setSubscribers] = useState<Subscribers[]>([]);

    const getSubs = async () => {
        setSubscribers((await axios.get("http://localhost:3000/api/subscribers")).data);
    };

    useEffect(() => {
        getSubs();
    }, [subscribers]);

    return (
        <section>
            <table className="min-w-full">
                <thead>
                    <tr className="text-left">
                        <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">ID</th>
                        <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/2">EMAIL</th>
                        <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">CRIADO EM</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map((sub: Subscribers) => (
                        <tr key={sub.id}>
                            <td className="px-5 text-lg border-none">{sub.id}</td>
                            <td className="px-5 text-lg border-none">{sub.email}</td>
                            <td className="px-5 text-lg border-none">
                                {new Date(sub.create_time).toLocaleDateString()} as {new Date(sub.create_time).toLocaleTimeString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default SubList;
