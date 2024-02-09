import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 1.75px;
`;

export const SubHeadiing = styled.h3`
    color: ${props => props.theme.colors.secundary}; 
    font-family: ${props => props.theme.fonts.sans_serif};
    font-size: 1.4rem;
    filter: brightness(.7);
`;

export const InformationText = styled.p`
    color: ${props => props.theme.colors.tertiary}; 
    font-family: ${props => props.theme.fonts.serif};
    font-size: 2.4rem;
`;