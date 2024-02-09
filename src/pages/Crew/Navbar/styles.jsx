import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 20px;

    &::before {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors.secundary};
        opacity: .2;
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    @media screen and (min-width: 490px) {
        &::before {
            display: none;
        }
    }

    @media screen and (min-width: 990px) {
        margin-top: 20%;
    }
`;

export const DestinationLink = styled(Link)`
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 50%;
    padding: 1px 6px;
    filter: brightness(.3);    
    transition: filter .5s ease-out, background-color .5s ease-out;
    
    &.selected {
        background-color: ${props => props.theme.colors.tertiary};
        filter: brightness(1);
    }
    
    @media screen and (min-width: 769px) {
        &:hover:not(.selected) {
            cursor: pointer;
            background-color: ${props => props.theme.colors.specfics.nabarHover};
            filter: brightness(.6); 
        }
    }
`;
