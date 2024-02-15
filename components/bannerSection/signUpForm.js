'use client'
import { signIn } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import Link from 'next/link';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import styles from './signUpForm.module.css';
import { useRouter } from "next/navigation";
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";

const SignUpFormContainer = styled.div`
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

const LogoLink = styled(Link)`
  box-sizing: border-box;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: rgb(255, 255, 255);
`;

const LogoImage = styled.img`
  box-sizing: border-box;
  border: 0px;
  vertical-align: middle;
  margin: auto;
`;

const LogoImageSignin = styled.img`
  box-sizing: border-box;
  border: 0px;
  vertical-align: middle;
  margin: auto;
  margin-top: 25px;
`;

const Title = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  line-height: 1.1;
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin: 20px 0px 20px;
  font-family: 'Agdasima', sans-serif;
`;

const TitleSignIn = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  line-height: 1.1;
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin: 100px 0px 20px;
  font-family: 'Agdasima', sans-serif;
`;

const LineDivider = styled.div`
  box-sizing: border-box;
  background: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: auto auto 10px;
  height: 1px;
  width: 180px;
`;

const FormWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 20px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-image: initial;
  border-top: none;
  margin-bottom: 30px;
`;

const SignupText = styled.p`
  box-sizing: border-box;
  margin: 0px 0px 10px;
  font-size: 15px;
`;

const SignupButton = styled(Button)`
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

const StyledLink = styled.a`
  box-sizing: border-box;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: rgb(255, 255, 255);
`;

const FormShadow = styled.img`
  box-sizing: border-box;
  border: 0px;
  vertical-align: middle;
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 100%;
`;

const CustomStyledTextField = styled(TextField)`
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

const CustomStyledTextFieldFirstName = styled(TextField)`
  /* Add custom styles here */
  && .MuiInputBase-root {
    background-color: #fff;
    border-radius: 20px 0 0 20px;
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

const CustomStyledTextFieldLastName = styled(TextField)`
  /* Add custom styles here */
  && .MuiInputBase-root {
    background-color: #fff;
    border-radius: 0 20px 20px 0;
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

const CustomStyledFormControl = styled(FormControl)`
  /* Add custom styles here */
  && .MuiInputBase-root {
    background-color: #fff;
    border-radius: 20px;
  }

  && .MuiSelect-select {
    padding-top: 20px;
  }

  && .css-utk17j-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root::before,
  && .css-utk17j-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root::after {
    border-bottom: 0;
  }

  /* Add additional styles as needed */
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1px; 
`;


export default function SignUpForm() {

  const [signInInterface, setSignInInterface] = useState(false);
  const [forgotPasswordInterface, setForgotPasswordInterface] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    gender: 'Male', // Set a default value
    city: '',
    country: '',
    latitude: '',
    longitude: '',
    about_me: '',
    university_name: '',
    passout_year: '',
    education_details: '',
    company_name: '',
    work_details: '',
    designation: '',
    company_city: '',
    image: '',
    coverImage: '',
    hobbies: [],
    follow_me: true,
    send_notification: true,
    enable_tagging: true,
    profileId: '2024' + Math.floor(Math.random() * Math.pow(10, 17)).toString().padStart(17, '0'), // A 21 digit unique id
  });

  const router = useRouter();

  const { data: session, status } = useSession()

  // console.log(session, status);

  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => {
    // console.log('Redux state:', state);
    return selectCurrentUser(state);
  });

  const users = useAppSelector(selectAllUsers);

  // console.log(session, status);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  // console.log('Current User in Home (/0/) Page:', currentUser);

  useEffect(() => {
    if (session?.user) {
      // Dispatch action to set current user in Redux store
      // console.log(session.user);
      users?.forEach((user) => {
        if (user._id === session.user.id)
          dispatch(setCurrentUser(user));
      })

    }

    // Redirect to the desired page
    // router.push('/profile');
  }, [dispatch, session, users]);

  function handleSignInClick(e) {
    e.preventDefault();
    setSignInInterface(true);
    setForgotPasswordInterface(false);
  };

  function handleSignUpClick(e) {
    e.preventDefault();
    setSignInInterface(false);
    setForgotPasswordInterface(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // console.log("Formdata ==> ", formData);

      // Add more fields to the body of the request
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data); // Log the response from the server

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You are successfully registered.',
        }).then((result) => {
          // This code will be executed after the user clicks "OK"
          if (result.isConfirmed) {
            setSignInInterface(true); // Change the signup interface to signin interface
          }
        });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);

        Swal.fire({
          icon: 'error',
          title: 'Registration error',
          text: errorData.error,
        });
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignIn = async () => {

    const result = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    // console.log("Result ==> ", result);

    //*** If result exists and result.error exists */
    if (result?.error) {
      // console.error('Sign-in error:', result.error);
      Swal.fire({
        icon: 'error',
        title: 'Signin error',
        text: result.error,
      });
    }

    if (result?.ok) {
      // console.log("Successful Sign in.");
      router.push('/');
    }

  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();

    // console.log("Forgot password clicked.");

    setForgotPasswordInterface(true);

  }

  const resetPasswordRequest = async () => {

    // console.log("Password ==> ", password);

    try {
      const response = await fetch('/api/auth/resetPasswordRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data); // Log the response from the server

        Swal.fire({
          icon: 'success',
          title: 'Password reset link sent!',
          text: 'Your password reset link is successfully sent to your email.',
        }).then((result) => {
          // This code will be executed after the user clicks "OK"
          if (result.isConfirmed) {
            // console.log("User clicked OK");
          }
        });
      } else {
        const errorData = await response.json();
        // console.error('Error:', errorData);

        Swal.fire({
          icon: 'error',
          title: 'Reset password error',
          text: errorData.error,
        });
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <SignUpFormContainer className={styles.signUpForm}>
      <LogoLink href='/'>
        {(signInInterface) ? (
          <LogoImageSignin alt="Friend Finder" src="images/logo.png" />
        ) : (
          <LogoImage alt="Friend Finder" src="images/logo.png" />
        )}

      </LogoLink>
      {(signInInterface) ? (
        <TitleSignIn>Find My Friends</TitleSignIn>
      ) : (
        <Title>Find My Friends</Title>
      )}

      <LineDivider />
      <FormWrapper>
        {(signInInterface) ? (
          <SignupText>Signin now and meet awesome people around the world</SignupText>
        ) : (
          <SignupText>Signup now and meet awesome people around the world</SignupText>
        )}

        <form action="#" onSubmit={handleSubmit}>
          {/* Add your Material-UI components here */}
          {(!signInInterface) &&
            (<FlexContainer>
              <CustomStyledTextFieldFirstName
                id="firstName"
                label="First name"
                variant="filled"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="dense"
                required
                autoComplete='off'
              />
              <CustomStyledTextFieldLastName
                id="lastName"
                label="Last name"
                variant="filled"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="dense"
                required
                autoComplete='off'
              />
            </FlexContainer>)}
          <CustomStyledTextField
            id="email"
            label="Enter email Id"
            variant="filled"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="dense"
            required
            autoComplete='off'
          />
          {!forgotPasswordInterface &&
            <CustomStyledTextField
              id="password"
              label="Enter password"
              variant="filled"
              type="password"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="dense"
              required
              autoComplete='off'
            />
          }

          {(!signInInterface) &&
            (<>
              <CustomStyledTextField
                id="phoneNumber"
                label="Enter phone number"
                variant="filled"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="dense"
                autoComplete='off'
              />
              <CustomStyledTextField
                id="dateOfBirth"
                label="Date of birth"
                variant="filled"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                margin="dense"
                required
                autoComplete='off'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <CustomStyledFormControl
                fullWidth
                variant="filled"
                margin="dense"
                required
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  label='Gender'
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </CustomStyledFormControl>
            </>)}
          {/* Repeat for other form fields */}


          {(signInInterface) ? (
            <p style={{ boxSizing: 'border-box', margin: '0px 0px 10px' }}>
              By signing in you agree to the terms
            </p>
          ) : (
            <p style={{ boxSizing: 'border-box', margin: '0px 0px 10px' }}>
              By signing up you agree to the terms
            </p>
          )}

          {(signInInterface && !forgotPasswordInterface) ? (
            <SignupButton type="button" variant="contained" onClick={handleSignIn}>Sign In</SignupButton>
          ) : (forgotPasswordInterface) ? (
            <SignupButton type="button" variant="contained" onClick={resetPasswordRequest}>Confirm</SignupButton>
          ) :
            (
              <SignupButton type="submit" variant="contained">Sign Up</SignupButton>
            )
          }

        </form>

      </FormWrapper>
      {(signInInterface) ? (
        <>
          <StyledLink href="" onClick={handleSignUpClick}>Create a new account</StyledLink>
          <StyledLink
            href=""
            onClick={handleForgotPasswordClick}
            style={{ display: 'block' }}
          >Forgot password?
          </StyledLink>
        </>
      ) : (
        <StyledLink href="" onClick={handleSignInClick}>Already have an account?</StyledLink>
      )}

      <FormShadow src="images/signup_form_bottom_shadow.png" />
    </SignUpFormContainer>
  );
}
