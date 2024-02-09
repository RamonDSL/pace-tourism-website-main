import styled from 'styled-components';

export const Container = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 2;

    @media screen and (min-width: 490px) {
        display: none;
    }
`;
