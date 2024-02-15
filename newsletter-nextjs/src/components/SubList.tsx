'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface Subscribers {
  create_time: Date;
  update_time: Date;
  name: string;
  email: string;
  id: number;
}

const SubList = () => {
  const [subscribers, setSubscribers] = useState<Subscribers[]>([]);

  const getSubs = async () => {
    try {
        const response = await axios.get("https://newsletter-next-js.vercel.app/api/subscribers");
        const data = response.data;
      setSubscribers(data);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  useEffect(() => {
    getSubs();
  }, []);

  return (
    <>
      {JSON.stringify(subscribers)}
    </>
  );
};

export default SubList;
