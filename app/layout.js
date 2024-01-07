import CustomHead from "@/components/customHead/customHead"
import './globals.css';

export const metadata = {
  title: 'Friend Finder | A Complete Social Network',
  description: 'Generated by Websadroit'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomHead />
      <body>
        {children}
        <script src="../bootstrap.bundle.min.js"></script> {/* Import Bootstrap JS */}
        <script src="../sweetalertPopup/sweetalert2.all.min.js"></script> {/* Import SweetalertPopup JS */}
        <script src="../jquery/jquery-3.7.0.min.js"></script> {/* Import jQuery */}
        <script src="../js/mainScript.js"></script> {/* Import Custom Script */}
      </body>
    </html>
  )
}
