'use client'
import TimelinePage from "@/components/timeline/timelinePage";
import TimelineEditPage from "@/components/timeline//timelineEditPage";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import { useEffect } from "react";

export default function Timeline({ params }) {
    // console.log(params);

    const [profileId, page] = params.timelineAction;

    // console.log(profileId, page);

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => {
        // console.log('Redux state:', state);
        return selectCurrentUser(state);
    });

    // console.log('Current User in Timeline Page:', currentUser);

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

        switch (page) {
            case 'edit':
                return (
                    <TimelineEditPage timelineUser={profileId} />
                )

            case 'about':
                return (
                    <div>About Page</div>
                )

            case 'album':
                return (
                    <div>Album Page</div>
                )

            case 'friends':
                return (
                    <div>Friends Page</div>
                )

            default:
                return (
                    <TimelinePage timelineUser={profileId} />
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
                <p>Please create an account or sign in to see this page or check the url.</p>
                <Link href='/'>Create an account or sign in</Link>
            </main>
        )
    }

}