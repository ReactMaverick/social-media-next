'use client'
import React from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'
import theme from '@/utils/theme';
import Link from 'next/link'
import HeaderAll from '@/components/header/headerAll';
import HeaderContainer from '@/components/header/headerContainer';
import NavbarHeader from '@/components/header/navbarHeader';
import Navbar from '@/components/header/navbar';
import NavbarForm from '@/components/header/navbarForm';
import NavbarMenu from '@/components/header/navbarMenu';
import AuthProvider from "@/utils/authProvider";
import StoreProvider from "@/utils/storeProvider";
import SpinnerWrapper from '@/components/spinnerWrapper/spinnerWrapper';
import Footer from '@/components/footer/footer';
import Script from 'next/script';
import NavbarButton from '@/components/header/navbarButton';

export default function NotFound() {
    return (
        <>
            <StoreProvider>
                <AuthProvider>

                    {/* Header Element Start */}
                    <HeaderAll>
                        <HeaderContainer>
                            <NavbarHeader />
                            <NavbarButton />
                            <Navbar>
                                <NavbarForm />
                                <NavbarMenu />
                            </Navbar>
                        </HeaderContainer>
                    </HeaderAll>
                    {/* Header Element End */}
                    <Container maxWidth="lg" sx={{ height: "100%" }}>
                        <Box sx={{
                            padding: "50px 0",
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Box
                                    sx={{
                                        width: "30%",
                                    }}
                                    src={
                                        process.env.BASE_URL + "/images/404_error.png"
                                    }
                                    component={"img"}
                                />

                            </Box>
                            <Box sx={{
                                textAlign: "center",
                            }}>
                                <Typography sx={{
                                    fontSize: "50px",
                                    fontWeight: "500",
                                    margin: "20px 0 10px",
                                    color: theme.palette.primary.LogoColor,
                                    textShadow: `2px 2px 4px  ${theme.palette.primary.ParaColor}`,
                                }} component="h1">
                                    Whoops!
                                </Typography>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "400",
                                    margin: "0 0 10px",
                                    color: theme.palette.primary.ParaColor,
                                }} component="p">
                                    Looks like you are lost. But don't worry there is plenty to see!!
                                </Typography>

                                <Box sx={{
                                    marginTop: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}

                                    component={"a"} href={process.env.BASE_URL}>
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.White,
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            lineHeight: "26px",
                                            backgroundColor: theme.palette.primary.LogoColor,
                                            borderRadius: "30px",
                                            padding: "7px 25px",
                                            marginLeft: {
                                                xs: "0",
                                                sm: "0",
                                                md: "10px",
                                                lg: "10px",
                                            },
                                            width: {
                                                xs: "50%",
                                                sm: "30%",
                                                md: "15%",
                                                lg: "15%",
                                            },
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.LogoColor,
                                            },
                                        }}
                                    >Go to HomePage!</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Container>
                    <SpinnerWrapper />
                    <Footer />
                </AuthProvider>
            </StoreProvider>
            <Script src={process.env.BASE_URL + "/jquery/jquery-3.7.0.min.js"} /> {/* Import jQuery */}
            <Script src={process.env.BASE_URL + "/bootstrap.bundle.min.js"} /> {/* Import Bootstrap JS */}
            <Script src={process.env.BASE_URL + "/sweetalertPopup/sweetalert2.all.min.js"} /> {/* Import SweetalertPopup JS */}
            <Script src={process.env.BASE_URL + "/incrementalCounter/jquery.incremental-counter.js"} /> {/* Import Incremental Counter */}
            <Script src={process.env.BASE_URL + "/js/mainScript.js"} /> {/* Import Custom Script */}
        </>
    )
}