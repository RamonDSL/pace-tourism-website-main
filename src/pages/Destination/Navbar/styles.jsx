import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
    padding: 15px 0;

    ul {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    @media screen and (min-width: 490px) {   
        ul {
            gap: 30px;
        }
    }

    @media print {
        display: none;
    }
`;

export const DestinationLink = styled(Link)`
    color: ${props => props.theme.colors.secundary};
    font-family: ${props => props.theme.fonts.sans_serif};
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 4px solid transparent;
    border-radius: 2px;
    padding-bottom: 5px;
    transition: color .5s ease-out, border-color .5s ease-out;
    
    &.selected {
        color: ${props => props.theme.colors.tertiary};
        border-color: ${props => props.theme.colors.tertiary};
    }
    
    @media screen and (min-width: 769px) {
        &:hover:not(.selected) {
            color: ${props => props.theme.colors.specfics.navbarHover};
            border-color: ${props => props.theme.colors.specfics.navbarHover};

        }      
    }
`;