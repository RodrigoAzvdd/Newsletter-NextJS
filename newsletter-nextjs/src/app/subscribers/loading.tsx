import Loader from "@/components/Loader";

export default function Loading() {
    return (
        <table className="min-w-full">
            <thead>
                <tr className="text-left">
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">ID</th>
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/2">Nome</th>
                    <th className="font-semibold px-5 border-b-2 border-gray-500 text-white text-lg p-2 w-1/4">CRIADO EM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={3} className="py-8" style={{ paddingLeft: '46%' }}>
                        <Loader />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
