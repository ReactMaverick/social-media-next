'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

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
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

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
            // Replace this with your actual API endpoint
            const response = await fetch('/api/register', {
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
                    text: 'User registered successfully.',
                });
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);

                Swal.fire({
                    icon: 'error',
                    title: 'Registration Error',
                    text: 'Error registering user. Please try again.',
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
                <TextField
                    label="Username"
                    variant="outlined"
                    name="username"
                    value={formData.username}
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
                <RegisterButton type="submit">Register</RegisterButton>
            </RegisterForm>

        </RegisterContainer>
    );
};

export default RegisterPage;