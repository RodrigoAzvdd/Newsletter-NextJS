import SubList from "@/components/SubList";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
    title: 'INSIGHTS | Assinantes',
    description: 'Generated by create next app',
}

export default function Subscribers() {
    return (
        <Suspense fallback={<Loading />}>
            <SubList />
        </Suspense>
    )
}