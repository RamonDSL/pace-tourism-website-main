import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    width: 100%;

    hr {
        display: none;
    }

    @media screen and (min-width: 490px) {
        padding: unset;
        padding-left: 25px;
    }
    
    @media screen and (min-width: 769px) {
        gap: 25px;
        padding-top: 40px;
        padding-left: 30px;

        hr {
            display: block;
            z-index: 1;
            color: ${props => props.theme.colors.secundary};
            width: 100%;
            margin-right: -35px;
            opacity: .3;
        }
    }
`;

export const Logo = styled.img`
    width: 4rem;
`;