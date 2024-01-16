'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';

export default function ProfilePage({ params }) {

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => {
        console.log('Redux state:', state);
        return selectCurrentUser(state);
    });
    console.log('Current User in ProfilePage:', currentUser);

    const { data: session, status } = useSession()

    console.log(session, status);

    // console.log(params.profileId);

    if (status === "authenticated") {
        // Authenticated User
        if (params.profileId === session.user.profileId) {
            return (
                <main>
                    <p>Signed in as {session.user.email}</p>
                </main>
            )
        } else {
            return (
                <main>
                    <p>The page you are looking for, is not available for you</p>
                </main>
            )
        }
    } else if (status === "loading") {
        // Fetching Authentication
        return (
            <main>
                <p>Please wait....</p>
            </main>
        )

    } else {
        // User not logged in
        return (
            <main>
                <p>Please sign in to see this page or check the url.</p>
                <Link href='/auth/signin'>Sign In</Link>
            </main>
        )
    }
}