
export default function Navbar({ children }) {
    return (
        <div
            id="collapseNavbar"
            className={`collapse navbar-collapse justify-content-center`}
        >
            {children}
        </div>
    );
};