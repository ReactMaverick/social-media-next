'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/utils/hooks';
import { setCurrentUser } from '@/utils/features/userSlice';

export default function AuthSuccess() {
    const router = useRouter();
    const { data: session } = useSession();
    const dispatch = useAppDispatch();

    // console.log(session, dispatch);

    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            console.log(session.user);
            dispatch(setCurrentUser(session.user));
        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, router, session]);

    return <p>Redirecting...</p>;
}
