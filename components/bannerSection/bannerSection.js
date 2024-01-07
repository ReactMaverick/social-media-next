'use client'
import styled from 'styled-components';
import { Container } from '@mui/material';

const BannerSectionWrapper = styled.section`
  box-sizing: border-box;
  display: block;
  background: url("images/homepage_bg.jpg") center center / cover no-repeat fixed;
  width: 100%;
  min-height: 550px;
  position: relative;
  top: 0;
`;

const StyledContainer = styled(Container)`
  && {
    padding: 20px; /* Adjust padding as needed */
  }
`;

const BannerSection = ({ children }) => {
    return (
        <BannerSectionWrapper id="banner">
            <StyledContainer>
                {children}
            </StyledContainer>
        </BannerSectionWrapper>
    );
};

export default BannerSection;
