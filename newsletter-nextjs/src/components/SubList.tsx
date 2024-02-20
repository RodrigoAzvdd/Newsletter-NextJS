'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface Subscribers {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  id: number;
}

const SubList = () => {
  const [subscribers, setSubscribers] = useState<Subscribers[]>([])

  useEffect(() => {
    const getSubs = async () => {
      try {
        const response = await axios.get("https://test-db-prod.vercel.app/api/users")
        const data = response.data
        setSubscribers(data.users)
      } catch (error) {
        console.error("Error fetching subscribers:", error)
      }
    }
    getSubs()
  }, [])

  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="text-left">
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">ID</th>
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/2">NOME</th>
            <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">CRIADO EM</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((sub: Subscribers) => (
            <tr key={sub.id} className="h-10">
              <td className="px-5 text-lg border-none">{sub.id}</td>
              <td className="px-5 text-lg border-none">{sub.name}</td>
              <td className="px-5 text-lg border-none">
                {new Date(sub.createdAt).toLocaleDateString()} as {new Date(sub.createdAt).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SubList
