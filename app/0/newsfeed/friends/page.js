'use client'
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import NewsfeedFriendsPage from "@/components/newsfeed/newsfeedFriendsPage";

export default function Newsfeed() {

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => {
        // console.log('Redux state:', state);
        return selectCurrentUser(state);
    });

    // console.log('Current User in ProfilePage:', currentUser);

    const { data: session, status } = useSession()

    // console.log(session, status);

    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            // console.log(session.user);
            dispatch(setCurrentUser(session.user));
        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, session]);

    if (status === "authenticated") {
        // Authenticated User

        return (
            <>
                {/* Newsfeed Start */}
                <NewsfeedFriendsPage currentUser={currentUser} />
                {/* Newsfeed End */}

            </>
        )
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
                <p>Please create an account or sign in to see this page or check the url.</p>
                <Link href='/'>Create an account or sign in</Link>
            </main>
        )
    }
};