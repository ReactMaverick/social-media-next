import AuthProvider from "@/utils/authProvider";
import StoreProvider from "@/utils/storeProvider";
import SpinnerWrapper from '@/components/spinnerWrapper/spinnerWrapper';
import Footer from "@/components/footer/footer";

export default function ProfileLayout({ children }) {
    return (
        <main>
            <StoreProvider>
                <AuthProvider>
                    {children}
                    {/* <SpinnerWrapper /> */}
                    <Footer />
                </AuthProvider>
            </StoreProvider>
        </main>
    )
}