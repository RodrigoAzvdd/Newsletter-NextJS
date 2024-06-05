'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/app/subscribers/loading";

interface Subscribers {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  id: number;
}

const SubList = () => {
  const [subscribers, setSubscribers] = useState<Subscribers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSubs = async () => {
      try {
        const response = await axios.get("https://test-db-prod.vercel.app/api/users");
        const data = response.data;
        setSubscribers(data.users);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar assinantes:", error);
        setLoading(false);
      }
    };

    getSubs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-sm sm:text-lg p-2">ID</th>
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-sm sm:text-lg p-2">Nome</th>
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-sm sm:text-lg p-2">CRIADO EM</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((sub) => (
            <tr key={sub.id} className="text-sm lg:text-lg border-none">
              <td className="px-5 text-sm lg:text-lg border-none">{sub.id}</td>
              <td className="px-5 text-sm lg:text-lg border-none">{sub.name}</td>
              <td className="px-5 text-sm lg:text-lg border-none">
                {new Date(sub.createdAt).toLocaleDateString()} às {new Date(sub.createdAt).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubList;
