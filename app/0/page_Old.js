'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import { signOut } from 'next-auth/react';
import Link from "next/link";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

const headerStyle = {
    marginBottom: '20px',
};

const authLinksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

const authLinkStyle = {
    margin: '10px 0',
    textDecoration: 'none',
};

const buttonStyle = {
    padding: '8px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#089e08',
    color: 'white',

};

export default function Home() {

    const router = useRouter();

    const { data: session, status } = useSession()

    console.log(session, status);

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => {
        console.log('Redux state:', state);
        return selectCurrentUser(state);
    });

    console.log('Current User in Home (/0) Page:', currentUser);

    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            console.log(session.user);
            dispatch(setCurrentUser(session.user));
        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, router, session]);

    const handleSignOut = async () => {

        const result = await signOut({ redirect: false });

        dispatch(clearCurrentUser());

        // Check the result object if needed
        console.log('Sign-out result:', result);

        if (result?.url) {
            router.push(result.url);
        } else {
            console.error("Error Signing-out user");
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Social Media</h1>
            {session ? (
                <main>

                    <button style={buttonStyle} onClick={handleSignOut}>Sign Out</button>

                    <Link href="/0/profile" style={authLinkStyle}>

                        <button style={buttonStyle}>Profile</button>

                    </Link>

                    <Link href="/0/profile/12345" style={authLinkStyle}>

                        <button style={buttonStyle}>Your Profile</button>

                    </Link>

                </main>
            ) : (
                <div style={authLinksContainerStyle}>
                    <Link href="/auth/register" style={authLinkStyle}>

                        <button style={buttonStyle}>Register</button>

                    </Link>
                    <Link href="/auth/signin" style={authLinkStyle}>

                        <button style={buttonStyle}>Sign In</button>

                    </Link>
                </div>
            )}

            {session && (
                <p style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(session, null, 2)}</p>
            )}
        </div>
    )
}

