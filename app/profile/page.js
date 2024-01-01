'use client'
import { useSession } from "next-auth/react"

export default function Profile() {
    const { data: session, status } = useSession()

    // console.log(data);

    return (
        <main>
            {JSON.stringify(session)}
        </main>
    )
}