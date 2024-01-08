'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import styles from './signUpForm.module.css';

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
  font-family: 'Agency FB', sans-serif;
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

  function handleSignInClick() {
    setSignInInterface(true);
  };

  function handleSignUpClick() {
    setSignInInterface(false);
  };

  return (
    <SignUpFormContainer className={styles.signUpForm}>
      <LogoLink href="/0/">
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

        <form action="#">
          {/* Add your Material-UI components here */}
          {(!signInInterface) &&
            (<FlexContainer>
              <CustomStyledTextFieldFirstName
                id="firstName"
                label="First name"
                variant="filled"
                fullWidth
                name="firstName"
                margin="dense"
                required
              />
              <CustomStyledTextFieldLastName
                id="lastName"
                label="Last name"
                variant="filled"
                fullWidth
                name="lastName"
                margin="dense"
                required
              />
            </FlexContainer>)}
          <CustomStyledTextField
            id="emailId"
            label="Enter email Id"
            variant="filled"
            type="email"
            fullWidth
            name="email"
            margin="dense"
            required
          />
          <CustomStyledTextField
            id="password"
            label="Enter password"
            variant="filled"
            type="password"
            fullWidth
            name="password"
            margin="dense"
            required
          />
          {(!signInInterface) &&
            (<>
              <CustomStyledTextField
                id="phoneNumber"
                label="Enter phone number"
                variant="filled"
                fullWidth
                name="phone"
                margin="dense"
              />
              <CustomStyledTextField
                id="dateOfBirth"
                label="Date of birth"
                variant="filled"
                type="date"
                name="dob"
                fullWidth
                margin="dense"
                required
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
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </CustomStyledFormControl>
            </>)}
          {/* Repeat for other form fields */}
        </form>

        {(signInInterface) ? (
          <p style={{ boxSizing: 'border-box', margin: '0px 0px 10px' }}>
            By signing in you agree to the terms
          </p>
        ) : (
          <p style={{ boxSizing: 'border-box', margin: '0px 0px 10px' }}>
            By signing up you agree to the terms
          </p>
        )}

        {(signInInterface) ? (
          <SignupButton variant="contained">Signin</SignupButton>
        ) : (
          <SignupButton variant="contained">Signup</SignupButton>
        )}

      </FormWrapper>
      {(signInInterface) ? (
        <StyledLink href="#" onClick={handleSignUpClick}>Create a new account</StyledLink>
      ) : (
        <StyledLink href="#" onClick={handleSignInClick}>Already have an account?</StyledLink>
      )}

      <FormShadow src="images/signup_form_bottom_shadow.png" />
    </SignUpFormContainer>
  );
}
