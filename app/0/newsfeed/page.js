'use client'
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import NewsfeedPage from '@/components/newsfeed/newsfeedPage';
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import SpinnerWrapper from "@/components/spinnerWrapper/spinnerWrapper";

export default function Newsfeed() {

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => {
        // console.log('Redux state:', state);
        return selectCurrentUser(state);
    });

    // console.log('Current User in ProfilePage:', currentUser);

    const { data: session, status } = useSession()

    const users = useAppSelector(selectAllUsers);

    // console.log(session, status);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);



    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            // console.log(session.user);
            users?.forEach((user) => {
                if (user._id === session.user.id)
                    dispatch(setCurrentUser(user));
            })

        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, session, users]);

    if (status === "authenticated") {
        // Authenticated User

        return (
            <>
                {/* Newsfeed Start */}
                <NewsfeedPage currentUser={currentUser} />
                {/* Newsfeed End */}
                <SpinnerWrapper />

            </>
        )
    } else if (status === "loading") {
        // Fetching Authentication

        <SpinnerWrapper />


    } else {
        // User not logged in
        return (
            <main>
                <p>Please create an account or sign in to see this page or check the url.</p>
                <Link href='/'>Create an account or sign in</Link>
                <SpinnerWrapper />
            </main>
        )
    }
};