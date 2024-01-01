'use client'
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import { signOut } from 'next-auth/react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const SignOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px
`;

const SignOutText = styled.div`
display: flex;
font-weight: 500;
font-size: 24px;
`;

const SignOutButton = styled(Button)`
  && {
    background-color: #f44336; /* Red color */
    color: white;

    &:hover {
      background-color: #d32f2f; /* Darker red color on hover */
    }
  }
`;

export default function SignOut() {

  const router = useRouter();

  const handleSignOut = async () => {

    const result = await signOut({ redirect: false });

    // Check the result object if needed
    console.log('Sign-out result:', result);

    if (result?.url) {
      router.push(result.url);
    } else {
      console.error("Error Signing-out user");
    }
  };

  return (
    <SignOutContainer>
      <SignOutText>Do you really want to sign out?</SignOutText>
      <SignOutButton type="button" onClick={handleSignOut}>
        Sign Out
      </SignOutButton>
    </SignOutContainer>
  );
}
