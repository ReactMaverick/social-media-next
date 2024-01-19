'use client'
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import HeaderAll from "@/components/header/headerAll";
import HeaderContainer from '@/components/header/headerContainer';
import NavbarHeader from '@/components/header/navbarHeader';
import Navbar from '@/components/header/navBar';
import NavbarForm from '@/components/header/navbarForm';
import NavbarMenu from '@/components/header/navbarMenu';
import { useEffect } from "react";
import Link from "next/link";


export default function TimelineLayout({ children }) {

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
                {/* Header Element Start */}
                <HeaderAll>
                    <HeaderContainer>
                        <NavbarHeader />
                        <Navbar>
                            <NavbarForm />
                            <NavbarMenu currentUser={currentUser} />
                        </Navbar>
                    </HeaderContainer>
                </HeaderAll>
                {/* Header Element End */}

                {children}

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
}