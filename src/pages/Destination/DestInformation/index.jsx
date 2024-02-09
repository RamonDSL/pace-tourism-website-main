import React from 'react';

import { Container, InformationText, SubHeadiing } from './styles';

function DestInformation({ informationName, informationValue }) {
  return (
    <Container>
      <SubHeadiing>{informationName}</SubHeadiing>

      <InformationText>{informationValue}</InformationText>
    </Container>
  );
}

export default DestInformation;