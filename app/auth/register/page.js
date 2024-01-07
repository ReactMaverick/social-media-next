'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
`;

const RegisterButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const RegisterPage = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        dob: '',
        gender: 'Male', // Set a default value
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
        hobbies: [],
        follow_me: true,
        send_notification: true,
        enable_tagging: true,
        profileId: '2024' + Math.floor(Math.random() * Math.pow(10, 17)).toString().padStart(17, '0'), // A 21 digit unique id
    });

    const handleSignIn = () => {
        router.push('/auth/signin');
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
                console.log(data); // Log the response from the server

                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'You are successfully registered.',
                }).then((result) => {
                    // This code will be executed after the user clicks "OK"
                    if (result.isConfirmed) {
                        router.push('/auth/signin');
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

    return (
        <RegisterContainer>
            <h1>Register</h1>
            <RegisterForm onSubmit={handleSubmit}>
                {/* Existing fields */}
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {/* New fields */}
                <TextField
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <TextField
                    label="Date of Birth"
                    variant="outlined"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        label='Gender'
                        required
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>
                {/* Add more fields based on your schema */}
                <RegisterButton type="submit">Register</RegisterButton>
                <RegisterButton type="button" onClick={handleSignIn}>Sign In</RegisterButton>
            </RegisterForm>
        </RegisterContainer>
    );
};

export default RegisterPage;