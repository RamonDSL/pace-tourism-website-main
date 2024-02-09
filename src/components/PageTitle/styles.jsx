import styled from 'styled-components';

export const Container = styled.header`  
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-top: 50px;

    @media screen and (min-width: 490px) {
        justify-content: flex-start;
        padding-left: 25px;
    }

    @media screen and (min-width: 769px) {
        margin-top: unset;
        padding-left: unset;
    }
`;

export const Title = styled.h1`
    display: flex;
    gap: 20px;
    font-family: ${props => props.theme.fonts.sans_serif};
    font-size: 1.7rem;
    text-transform: uppercase;
    letter-spacing: 2.75px;

    @media screen and (min-width: 769px) {
        font-size: 2.2rem;
        letter-spacing: 4px;
    }    
`;

export const Number = styled.span`
    color: ${props => props.theme.colors.secundary};
    filter: opacity(.4);
`;

export const Name = styled.span`
    color: ${props => props.theme.colors.tertiary};
    filter: brightness(.8);
`;