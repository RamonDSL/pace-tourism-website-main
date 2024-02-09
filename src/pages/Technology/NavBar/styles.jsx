import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    @media screen and (min-width: 950px) {        
        ul {
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
        }
    }
`;

export const TechItem = styled(Link)`
    color: ${props => props.theme.colors.secundary};
    font-family: ${props => props.theme.fonts.serif};
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.secundary};
    padding: 12px 18px;
    transition: 
        color .5s ease-out,
        background-color .5s ease-out, 
        border-color .5s ease-out;

    &.selected {
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.tertiary};
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media screen and (min-width: 950px) {
        font-size: 2.5rem;
        padding: 15px 25px;

        &:hover:not(.selected) {
            color: ${props => props.theme.colors.specfics.navbarHover};
            border-color: ${props => props.theme.colors.specfics.navbarHover};
        }
    }
`;