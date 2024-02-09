import styled from 'styled-components';

export const Container = styled.footer`
  color: ${props => props.theme.colors.secundary};
  padding: 20px;

  p {
    font-size: 1.2rem;
    font-family: ${props => props.theme.fonts.secundary};
    
    a {
        color: goldenrod;
        font-size: 1.2em;
    }
  }
`;
