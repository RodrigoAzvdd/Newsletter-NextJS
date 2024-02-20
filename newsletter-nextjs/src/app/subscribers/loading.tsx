export default function Loading() {
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
                <tr className="text-center">
                    <td className="text-center pt-10 text-xl" colSpan={3}>Carregando Dados...</td>
                </tr>
            </tbody>
        </table>
    )
}