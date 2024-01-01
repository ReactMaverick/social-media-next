import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Link from "next/link";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const headerStyle = {
  marginBottom: '20px',
};

const authLinksContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const authLinkStyle = {
  margin: '10px 0',
  textDecoration: 'none',
};

const buttonStyle = {
  padding: '8px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#089e08',
  color: 'white',

};

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Social Media</h1>
      {session ? (
        <Link href="/auth/signout" style={authLinkStyle}>

          <button style={buttonStyle}>Sign Out</button>

        </Link>
      ) : (
        <div style={authLinksContainerStyle}>
          <Link href="/auth/register" style={authLinkStyle}>

            <button style={buttonStyle}>Register</button>

          </Link>
          <Link href="/auth/signin" style={authLinkStyle}>

            <button style={buttonStyle}>Sign In</button>

          </Link>
        </div>
      )}

      {session && (
        <p style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(session, null, 2)}</p>
      )}
    </div>
  )
}

