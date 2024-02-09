import styled from 'styled-components';

export const Title = styled.h3`
    color: ${props => props.theme.colors.tertiary};
    font-family: ${props => props.theme.fonts.serif};
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    @media screen and (min-width: 490px) {
        font-size: 3.2rem;
    }

    @media screen and (min-width: 769px) {
        font-size: 4rem;
    }
`;

export const ContentText = styled.p`
    color: ${props => props.theme.colors.secundary};
    font-family: ${props => props.theme.fonts.sans_serif};
    font-size: 1.5rem;
    letter-spacing: 1.25px;
    line-height: 2.5rem;
`;
