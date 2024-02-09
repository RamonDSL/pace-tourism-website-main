import React from 'react';
import PropTypes from "prop-types";

import { ContentText, Title } from './styles';

function PageContent({contentTitle, convertToH2, children}) {
  return (
    <>
    <Title 
      as={convertToH2 ? "h2" : ""}
    >
      {contentTitle}
    </Title>
    
    <ContentText>
      {children}
    </ContentText>
    </>
  );
}

PageContent.prototype = {
    contentTitle: PropTypes.string.isRequired,
    convertToH2: PropTypes.bool,
}

export default PageContent;