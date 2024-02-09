'use client'
import { useState } from "react";
import Link from 'next/link';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import styles from '@/components/bannerSection/signUpForm.module.css';
import { useRouter } from "next/navigation";

const SignUpFormContainer2 = styled.div`
  box-sizing: border-box;
  background: linear-gradient(rgba(43, 57, 144, 0.8), rgb(39, 170, 225) 65%);
  padding: 10px 30px 0 30px;
  position: absolute;
  width: 340px;
  min-height: 600px;
  top: 0px;
  text-align: center;
  color: rgb(255, 255, 255);
  z-index: 1000;
`;

const LogoLinkResetPassword = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: rgb(255, 255, 255);
`;


const LogoImageResetPassword = styled.img`
  border: 0px;
  vertical-align: middle;
  margin: auto;
  margin-top: 25px;
`;

const Title2 = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  line-height: 1.1;
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin: 20px 0px 80px;
  font-family: 'Agdasima', sans-serif;
`;


const LineDivider2 = styled.div`
  box-sizing: border-box;
  background: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: auto auto 10px;
  height: 1px;
  width: 180px;
`;

const FormWrapper2 = styled.div`
  box-sizing: border-box;
  padding: 20px 20px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-image: initial;
  border-top: none;
  margin-bottom: 50px;
`;


const ResetPasswordButton = styled(Button)`
  box-sizing: border-box;
  margin: 0px;
  font: inherit;
  overflow: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;
  font-family: inherit;
  line-height: inherit;
  background: linear-gradient(rgb(109, 110, 113), rgb(0, 0, 0));
  padding: 0px 40px;
  border: none;
  outline: none;
  min-height: 36px;
  font-size: 18px;
  color: rgb(255, 255, 255);
  border-radius: 17px;
  position: relative;
  top: 20px;
`;

const StyledLink2 = styled.a`
    display: block; 
  box-sizing: border-box;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: rgb(255, 255, 255);
`;

const FormShadow2 = styled.img`
  box-sizing: border-box;
  border: 0px;
  vertical-align: middle;
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 100%;
`;

const CustomStyledTextField2 = styled(TextField)`
  /* Add custom styles here */
  && .MuiInputBase-root {
    background-color: #fff;
    border-radius: 20px;
  }

  && .MuiInputBase-input {
    padding-top: 20px;
    color: #939598;
  }

  && .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root::before,
  && .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root::after {
    border-bottom: 0;
  }

  /* Add additional styles as needed */
`;

export default function ResetPassword({ params, searchParams }) {
    // console.log("Params ==> ", params); // This should be resetPassword
    // console.log("Search Params ==> ", searchParams); // This should be token, tokenId

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    const resetPassword = async () => {
        if (password !== confirmPassword) {
            // Handle error
            swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Passwords do not match. Please try again.',
            })
            return;
        }

        // console.log("Password ==> ", password);

        try {
            const response = await fetch('/api/auth/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: searchParams.token,
                    newPassword: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data); // Log the response from the server

                Swal.fire({
                    icon: 'success',
                    title: 'Password reset Successful!',
                    text: 'Your password is successfully reset.',
                }).then((result) => {
                    // This code will be executed after the user clicks "OK"
                    if (result.isConfirmed) {
                        // console.log("User clicked OK");

                        router.push('/0/');
                    }
                });
            } else {
                const errorData = await response.json();
                // console.error('Error:', errorData);

                Swal.fire({
                    icon: 'error',
                    title: 'Password validation error',
                    text: errorData.error,
                });
            }
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    if (params.resetPassword === 'resetPassword' && searchParams.token) {
        return (
            <SignUpFormContainer2 className={styles.signUpForm}>
                <LogoLinkResetPassword href='/'>

                    <LogoImageResetPassword
                        alt="Friend Finder"
                        src={process.env.BASE_URL + "/images/logo.png"}
                    />

                </LogoLinkResetPassword>

                <Title2>Find My Friends</Title2>


                <LineDivider2 />
                <FormWrapper2>
                    <form action="#"
                    // onSubmit={handleSubmit}
                    >
                        {/* Add your Material-UI components here */}

                        <CustomStyledTextField2
                            id="password"
                            label="Enter new password"
                            variant="filled"
                            type="password"
                            fullWidth
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            margin="dense"
                            required
                            autoComplete='off'
                        />
                        <CustomStyledTextField2
                            id="confirmPassword"
                            label="Confirm new password"
                            variant="filled"
                            type="password"
                            fullWidth
                            name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            margin="dense"
                            required
                            autoComplete='off'
                        />

                        {/* Repeat for other form fields */}


                        <ResetPasswordButton
                            type="button"
                            variant="contained"
                            onClick={resetPassword}
                        >
                            Reset Password
                        </ResetPasswordButton>

                    </form>

                </FormWrapper2>

                <StyledLink2 href="/0/"
                >
                    Create a new account or Sign in
                </StyledLink2>

                <FormShadow2 src={process.env.BASE_URL + "/images/signup_form_bottom_shadow.png"} />
            </SignUpFormContainer2 >
        );
    }
}