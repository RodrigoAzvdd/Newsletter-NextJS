'use client'

import axios from "axios"
import { useEffect, useState } from "react"

interface Subscribers {
    create_time: Date,
    update_time: Date,
    email: string,
    id: number
}

const SubList = () => {

    const [subscribers, setSubscribers] = useState<Subscribers[]>([])

    const getSubs = async () => {
        setSubscribers((await axios.get('http://localhost:3000/api/subscribers')).data)
    }

    useEffect(() => {
        getSubs()
    }, [subscribers])

    return (
        <section>
            <ul>
                {subscribers.map((sub: Subscribers) => (
                    <li key={sub.id}>Email: {sub.email}</li>
                ))}
            </ul>
        </section>
    )
}

export default SubList