import AuthProvider from "@/utils/authProvider";
import StoreProvider from "@/utils/storeProvider";

export default function ProfileLayout({ children }) {
    return (
        <main>
            <StoreProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </StoreProvider>
        </main>
    )
}