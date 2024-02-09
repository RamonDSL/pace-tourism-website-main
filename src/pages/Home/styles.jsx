import styled from 'styled-components';
import { Name, Title } from '../../components/PageTitle/styles';

export const Container = styled.main`
    gap: 15px;
    
    ${Title} {
        gap: 0;
        
        ${Name} {
            color: ${props => props.theme.colors.secundary};
        }
    }
    
    @media screen and (min-width: 490px) {   
        gap: unset;

        & > header {
            justify-content: center;
            padding-left: unset;
        }
    } 

    @media screen and (min-width: 769px) {
        & > header {
            justify-content: flex-start;
        }
    }   
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    
    @media screen and (min-width: 490px) {
        gap: 70px;
    }

    @media screen and (min-width: 769px) {
        flex-direction: row;
    }    
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
    padding: 15px;

    & > h2 {
        font-size: 7.5rem;
    }
    
    @media screen and (min-width: 490px) {   
        gap: 10px;

        & > h2 {
            font-size: 12rem;
        }
        
        & > p {
            max-width: 400px;
        }
    } 

    @media screen and (min-width: 769px) {
        align-items: flex-start;
        text-align: justify;
        padding-left: unset;
        
        & > p {
            max-width: 365px;
        }
    }   
`;

export const Border = styled.span`
    @media screen and (min-width: 769px) {
        border: 50px solid transparent;
        border-radius: 50%;
        transition: border-color .5s ease-out;
        filter: invert(.2);
        
        &:hover {
            cursor: pointer;
            border-color: ${props => props.theme.colors.primary};
        }
    }    
`;

export const BtnExplore = styled.button`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.serif};
    font-size: 1.6rem;
    letter-spacing: 1.50px;
    text-transform: uppercase;
    padding: 50px 25px;
    background-color: ${props => props.theme.colors.tertiary};
    border: none;
    border-radius: 50%;
    
    @media screen and (min-width: 490px) {   
        font-size: 2rem; 
        padding: 65px 30px;
    } 

    @media screen and (min-width: 769px) {
        font-size: 2.8rem; 
        padding: 85px 40px;
        
        ${Border}:hover > & {
            cursor: pointer;
        }
    }    
`; 