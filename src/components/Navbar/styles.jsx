import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
    display: none;
    background-color: ${props => props.theme.colors.specfics.menuBg};
    backdrop-filter: blur(16px);
    
    &.active {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 65vw;
        height: 100%;
        z-index: 1;

        ul {
            display: flex;
            flex-direction: column;
            gap: 28px;
            padding-top: 16vh;
            padding-left: 30px;
        }
    }

    @media screen and (min-width: 490px) {
        display: block;
        padding: 25px 25px 0 25px;

        ul {
            display: flex;
            gap: 30px;
        }
    }
    
    @media screen and (min-width: 769px) {
        ul {
            gap: 40px;
        }
    }

    @media screen and (min-width: 950px) {
        padding: 25px 6% 0 6%;
    }
`;

export const PageLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 1.6rem;
    font-family: ${props => props.theme.fonts.sans_serif};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    
    border-right: 3px solid transparent;
    transition: border-color .5s ease-out;

    &.selected {
        border-color: ${props => props.theme.colors.tertiary};
    }

    @media screen and (min-width: 490px) {   
        border-right: unset;
        border-bottom: 3px solid transparent;
        padding-bottom: 25px;
        
        &.selected {
            border-color: ${props => props.theme.colors.tertiary};
        }

    } 
    
    @media screen and (min-width: 769px) {
        &:hover:not(.selected) {
            border-color: ${props => props.theme.colors.specfics.navbarHover};
        }
    }
`;

export const PageNumber = styled.span`
    color: ${props => props.theme.colors.tertiary};
    font-weight: bolder;

    @media screen and (min-width: 490px) {
        display: none;
    }

    @media screen and (min-width: 769px) {
        display: initial;
    }
`;

export const PageName = styled.span`
    color: ${props => props.theme.colors.secundary};
`;