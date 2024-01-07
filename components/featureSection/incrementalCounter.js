'use client'
import { Box } from '@mui/material';
import { styled } from 'styled-components';

const StyledIncrementalCounter = styled(Box)({
    textAlign: 'center',
});

const StyledNum = styled(Box)({
    background: 'none 0px 0px repeat scroll rgb(248, 248, 248)',
    border: '1px solid rgb(255, 255, 255)',
    borderRadius: '4px',
    margin: '0px 4px 20px',
    color: 'rgb(39, 170, 225)',
    display: 'inline-block',
    height: '64px',
    lineHeight: '62px',
    position: 'relative',
    left: '-1px',
    textAlign: 'center',
    width: '50px',
    fontSize: '3.72625em',
    fontWeight: 'normal',
    fontFamily: '"Agency FB", sans-serif',
});

const IncrementalCounter = () => {
    return (
        <StyledIncrementalCounter id="incremental-counter">
            {[1, 0, 1, 2, 4, 2].map((value, index) => (
                <StyledNum key={index}>{value}</StyledNum>
            ))}
        </StyledIncrementalCounter>
    );
};

export default IncrementalCounter;