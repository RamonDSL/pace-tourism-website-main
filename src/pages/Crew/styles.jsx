import styled from 'styled-components';
import { Title } from '../../components/PageTitle/styles';

export const Container = styled.main`
    gap: 25px;

    @media screen and (min-width: 990px) {
        ${Title} {
            margin-bottom: -100px;
        }
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 10px;

    @media screen and (min-width: 490px) {
        flex-direction: column;
        gap: 15px;
    }

    @media screen and (min-width: 769px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    padding: 0 15px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 10px;
    }

    @media screen and (min-width: 490px) {
        gap: 35px;
        flex-direction: column;

        & > div > p {
            max-width: 420px;
        }
    }

    @media screen and (min-width: 769px) {
        text-align: left;
        align-items: flex-start;
        padding: unset;

        & > div {
            padding: unset;

            h3 {
                max-width: 420px;
            }

            & > p {
                max-width: 360px;
            }
        }
    }
`;

export const Role = styled.h2`
    color: ${props => props.theme.colors.secundary};
    font-family: ${props => props.theme.fonts.serif};
    font-size: 1.6rem;
    filter: brightness(.5);
    text-transform: uppercase;

    @media screen and (min-width: 490px) {
        font-size: 2.1rem;
    }

    @media screen and (min-width: 769px) {
        font-size: 2.5rem;
        margin-top: 40px;
    }
`;

export const CrewMemberImage = styled.img`
    width: 42%;
    
    @media screen and (min-width: 490px) and (max-width: 768px) {
        width: 60%;
        max-width: 350px;
    }
`;