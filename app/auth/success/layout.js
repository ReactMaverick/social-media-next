import StoreProvider from "@/utils/storeProvider";

export default function ProfileLayout({ children }) {
    return (
        <main>
            <StoreProvider>

                {children}

            </StoreProvider>
        </main>
    )
}