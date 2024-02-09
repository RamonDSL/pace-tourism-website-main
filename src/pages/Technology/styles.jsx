import styled from 'styled-components';

export const Container = styled.main`
    gap: 20px;

    @media screen and (min-width: 950px) {
        padding-right: unset;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 15px;
    margin-top: 10px;

    @media screen and (min-width: 490px) {
        gap: 25px;
    }

    @media screen and (min-width: 950px) {
        flex-direction: row;
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
    padding: 20px;

    @media screen and (min-width: 490px) {
        gap: 45px;
    }

    @media screen and (min-width: 950px) {
        flex-direction: row-reverse;
        align-items: stretch;
        padding: unset;
    }
`;

export const TechDescription = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;

    h2 {
        color: ${props => props.theme.colors.secundary};
        font-family: ${props => props.theme.fonts.sans_serif};
        font-size: 1.4rem;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        filter: brightness(.7);
    }

    h3 {
        padding-bottom: 5px;
    }

    @media screen and (min-width: 490px) {
        p {
            max-width: 405px;
        }
    }

    @media screen and (min-width: 950px) {
        text-align: left;

        p {
            max-width: 356px;
        }
    }
`;

export const TechImage = styled.img`
    width: 100%;

    @media screen and (min-width: 950px) {
        width: 41%;
        margin-left: auto;
    }
`;