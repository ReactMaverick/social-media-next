import CustomHead from "@/components/customHead/customHead"

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
        <script src="bootstrap.bundle.min.js"></script> {/* Import Bootstrap JS */}
        <script src="sweetalertPopup/sweetalert2.all.min.js"></script> {/* Import SweetalertPopup JS */}
      </body>
    </html>
  )
}
