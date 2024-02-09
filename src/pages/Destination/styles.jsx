import styled from 'styled-components';

export const Container = styled.main`
    gap: 30px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 990px) {
        flex-direction: row;       
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const DestImage = styled.img`
    width: 50%;

    @media screen and (min-width: 990px) {
        width: 38%;
        margin-left: 80px;
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 25px;

    & > h2 {
        font-size: 4.5rem;
    }

    hr {
        background-color: ${props => props.theme.colors.secundary};
        width: 100%;
        opacity: .3;
        margin: 15px 0;
    }

    @media screen and (min-width: 490px) {   
        & > h2 {
            font-size: 6rem;
        }
        
        & > p {
            max-width: 530px;
        }
    }

    @media screen and (min-width: 990px) {
        max-width: 360px;
        align-items: flex-start;
        text-align: left;
        padding: 0;
        gap: 20px;

        & > h2 {
            font-size: 8rem;
        }
    }
`;

export const DestInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    
    @media screen and (min-width: 490px) {   
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 990px) {
        justify-content: flex-start;
        gap: 50px;
    }
`;