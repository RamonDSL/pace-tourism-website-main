import React, { useContext } from 'react';

import { Article, Container, Section, TechDescription, TechImage } from './styles';
import PageTitle from '/src/components/PageTitle';
import PageContent from '/src/components/PageContent';
import NavBar from './NavBar';

import { MyContext } from '../../Store/MyProvider';
import { useLoaderData } from 'react-router-dom';

function Technology() {
  const { contentToShowOnEachPage, orientation } = useContext(MyContext)
  const technologyData = useLoaderData()
  
  return (
    <Container>
        <PageTitle 
          pageNumber="03" 
          pageName="Space launch 101" 
        />

        <Section>
          <Article>
            <TechDescription>
              <h2>the terminology</h2>

              <PageContent contentTitle={technologyData[contentToShowOnEachPage.technology].name}>
                {technologyData[contentToShowOnEachPage.technology].description}
              </PageContent>
            </TechDescription>
            
            <NavBar />
          </Article>
          
          <TechImage 
            src={technologyData[contentToShowOnEachPage.technology].images[orientation]}
            alt="technology image"
          />
        </Section>
    </Container>
  );
}

export default Technology;