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
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import NavbarButton from '@/components/header/navbarButton';
import SpinnerWrapper from "@/components/spinnerWrapper/spinnerWrapper";

export default function TimelineLayout({ children }) {

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
                {/* Header Element Start */}
                <HeaderAll>
                    <HeaderContainer>
                        <NavbarHeader />
                        <NavbarButton />
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

        return <SpinnerWrapper />


    } else {
        // User not logged in
        return (
            <main>
                <p>Please create an account or sign in to see this page or check the url.</p>
                <Link href={process.env.BASE_URL}>Create an account or sign in</Link>
            </main>
        )
    }
}