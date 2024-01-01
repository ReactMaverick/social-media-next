import AuthProvider from "@/utils/authProvider";

export default function ProfileLayout({ children }) {
    return (
        <main>
            <AuthProvider>
                {children}
            </AuthProvider>
        </main>
    )
}