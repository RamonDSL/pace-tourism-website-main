import React from 'react';

import { Container, Title, Number, Name } from './styles';

function PageTitle({ pageNumber, pageName }) {
  return (
    <Container>
        <Title>
            <Number>{pageNumber}</Number>
            <Name>{pageName}</Name>
        </Title>
    </Container>
  );
}

export default PageTitle;