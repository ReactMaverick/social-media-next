'use client'
import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { Icon } from '@iconify/react';

const StyledFeatureItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingRight: '10px',
    paddingLeft: '10px',
}));

const StyledFeatureIcon = styled(Box)(({ theme }) => ({
    background: `linear-gradient(rgba(43, 57, 144, 0.8), rgba(39, 170, 225, 0.8) 65%) center center / cover, url("${process.env.BASE_URL}/images/icon_blur.png") no-repeat`,
    borderRadius: '55px',
    margin: 'auto',
    border: '6px solid rgb(255, 255, 255)',
    width: '110px',
    height: '110px',
    boxShadow: 'rgba(39, 170, 225, 0.3) 0px 12px 12px',
    cursor: 'pointer',
    fontSize: '35px',
    color: 'rgb(255, 255, 255)',
    lineHeight: '100px',

    '&:hover': {
        background: '#27aae1',
        transition: 'all 1s',
    },
}));

const StyledIcon = styled(Icon)({
    boxSizing: 'border-box',
});

export default function FeatureRowItems() {
    return (
        <>
            <StyledFeatureItem className="feature-item col-md-2 col-sm-6 col-xs-6 offset-md-2">
                <StyledFeatureIcon className="feature-icon">
                    <StyledIcon className="icon" icon="ion:person-add" />
                </StyledFeatureIcon>
                <Typography
                    component="h3"
                    fontWeight={500}
                    lineHeight={1.1}
                    marginTop="20px"
                    marginBottom="10px"
                    fontSize="24px"
                    fontFamily='"Agdasima", sans-serif'
                    color="rgb(147, 149, 152)"
                >
                    Make Friends
                </Typography>
            </StyledFeatureItem>
            <StyledFeatureItem className="feature-item col-md-2 col-sm-6 col-xs-6">
                <StyledFeatureIcon className="feature-icon">
                    <StyledIcon className="icon" icon="ion:images-outline" />
                </StyledFeatureIcon>
                <Typography
                    component="h3"
                    fontWeight={500}
                    lineHeight={1.1}
                    marginTop="20px"
                    marginBottom="10px"
                    fontSize="24px"
                    fontFamily='"Agdasima", sans-serif'
                    color="rgb(147, 149, 152)"
                >
                    Publish Posts
                </Typography>
            </StyledFeatureItem>
            <StyledFeatureItem className="feature-item col-md-2 col-sm-6 col-xs-6">
                <StyledFeatureIcon className="feature-icon">
                    <StyledIcon className="icon" icon="ion:chatbox-ellipses" color="white" hFlip={true} />
                </StyledFeatureIcon>
                <Typography
                    component="h3"
                    fontWeight={500}
                    lineHeight={1.1}
                    marginTop="20px"
                    marginBottom="10px"
                    fontSize="24px"
                    fontFamily='"Agdasima", sans-serif'
                    color="rgb(147, 149, 152)"
                >
                    Private Chats
                </Typography>
            </StyledFeatureItem>
            <StyledFeatureItem className="feature-item col-md-2 col-sm-6 col-xs-6">
                <StyledFeatureIcon className="feature-icon">
                    <StyledIcon className="icon" icon="fluent:compose-24-filled" color="white" />
                </StyledFeatureIcon>
                <Typography
                    component="h3"
                    fontWeight={500}
                    lineHeight={1.1}
                    marginTop="20px"
                    marginBottom="10px"
                    fontSize="24px"
                    fontFamily='"Agdasima", sans-serif'
                    color="rgb(147, 149, 152)"
                >
                    Create Polls
                </Typography>
            </StyledFeatureItem>
        </>
    );
};

