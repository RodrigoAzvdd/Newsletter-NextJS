import SubList from "@/components/SubList";
import { ReactNode } from "react";

export default function SubscribersLayout({ children }: {
    children: ReactNode
}) {
    return (
        <main className="flex flex-col gap-10 flex-1 justify-center px-52 py-28 text-white">
            <section className="bg-neutral-900 py-16 px-16">
                <h1 className="text-center font-semibold text-4xl pb-10 pl-14">Assinantes</h1>
                {children}
            </section>
        </main >
    )
}