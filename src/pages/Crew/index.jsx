import React, { useContext } from 'react';

import { Article, Container, Section, CrewMemberImage, Role } from './styles';
import PageTitle from '/src/components/PageTitle';
import PageContent from '/src/components/PageContent';
import Navbar from './Navbar';

import { useLoaderData } from 'react-router-dom';
import { MyContext } from '../../Store/MyProvider';

function Crew() {
  const { contentToShowOnEachPage, deviceLayout } = useContext(MyContext)
  const crewData = useLoaderData()
  
  return (
    <Container>
        <PageTitle
          pageNumber="02"
          pageName="Meet your crew"
        />

        <Section>
          <Article>
            <div>
              <Role>{crewData[contentToShowOnEachPage.crew].role}</Role>
              
              <PageContent contentTitle={crewData[contentToShowOnEachPage.crew].name}>
                {crewData[contentToShowOnEachPage.crew].bio}
              </PageContent>
            </div>

            <Navbar />
          </Article>
          
          <CrewMemberImage 
            src={crewData[contentToShowOnEachPage.crew].images[deviceLayout === "desktop" ? "png" : "webp"]}
            alt="crew member image"
          />
        </Section>
    </Container>
  );
}

export default Crew;