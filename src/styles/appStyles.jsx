import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    background: 
        ${props => props.theme.colors.primary} 
        url("/${props => props.$currentpage}/background-${props => props.$currentpage}-${props => props.$devicelayout}.jpg")
        no-repeat 
        bottom center;
    background-size: cover;
`;