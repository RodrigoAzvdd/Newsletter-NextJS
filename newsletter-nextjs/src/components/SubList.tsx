import axios from "axios";

interface Subscribers {
    create_time: Date;
    update_time: Date;
    email: string;
    id: number;
}

const SubList = async () => {
    const subscribers = await (await axios.get("https://newsletter-next-js.vercel.app/api/subscribers")).data

    return (
        <table className="min-w-full">
            <thead>
                <tr className="text-left">
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">ID</th>
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/2">EMAIL</th>
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">CRIADO EM</th>
                </tr>
            </thead>
            <tbody>
                {subscribers.length === 0 ?
                    <tr className="text-center">
                        <td className="text-center pt-10" colSpan={3}>Nenhum Assinante...</td>
                    </tr>
                    :
                    subscribers.map((sub: Subscribers) => (
                        <tr key={sub.id} className="h-10">
                            <td className="px-5 text-lg border-none">{sub.id}</td>
                            <td className="px-5 text-lg border-none">{sub.email}</td>
                            <td className="px-5 text-lg border-none">
                                {new Date(sub.create_time).toLocaleDateString()} as {new Date(sub.create_time).toLocaleTimeString()}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default SubList;
