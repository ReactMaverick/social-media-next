'use client';
import { useSession, signIn } from "next-auth/react";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
`;

const SignInButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const GoogleSignInButton = styled(Button)`
  && {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
    }
  }

  .google-icon {
    margin-right: 8px;
  }
`;

const FacebookSignInButton = styled(Button)`
  && {
    background-color: #006aff;
    color: white;

    &:hover {
      background-color: rgba(0, 106, 255, 0.8);
    }
  }

  .facebook-icon {
    margin-right: 8px;
  }
`;

export default function SignIn() {

  const { data: session, status } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async () => {

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log("Result ==> ", result);

    //*** If result exists and result.error exists */
    if (result?.error) {
      console.error('Sign-in error:', result.error);
      // Handle error, show message, etc.
    }

    if (result?.ok) {
      router.push('/auth/success');
    }

  };

  const handleGoogleSignIn = async () => {
    // Perform the Google Sign-In using the next-auth library
    await signIn('google');

  };

  const handleFacebookSignIn = async () => {
    // Perform the Google Sign-In using the next-auth library
    await signIn('facebook');

    // console.log("Log In with Facebook");

  };

  if (status === "authenticated") {
    // Authenticated User

    return (
      <main>
        <p>You are already logged in</p>
      </main>
    )

  } else if (status === "loading") {
    // Fetching Authentication
    return (
      <main>
        <p>Please wait....</p>
      </main>
    )

  } else {
    // User not logged in
    return (
      <SignInContainer>
        <h1>Sign In</h1>
        <SignInForm>
          <TextField
            label="Email Id"
            variant="outlined"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SignInButton type="button" onClick={handleSignIn}>
            Sign In
          </SignInButton>
          {/* Google Sign-In Button */}
          <GoogleSignInButton type="button" onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Sign In with Google
          </GoogleSignInButton>
          <FacebookSignInButton type="button" onClick={handleFacebookSignIn}>
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            Sign In with Facebook
          </FacebookSignInButton>
        </SignInForm>
      </SignInContainer>
    );
  }


}

