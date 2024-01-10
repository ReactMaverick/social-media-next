import AuthProvider from "@/utils/authProvider";
import StoreProvider from "@/utils/storeProvider";
import SpinnerWrapper from '@/components/spinnerWrapper/spinnerWrapper';

export default function ProfileLayout({ children }) {
    return (
        <main>
            <StoreProvider>
                <AuthProvider>
                    {children}
                    <SpinnerWrapper />
                </AuthProvider>
            </StoreProvider>
        </main>
    )
}