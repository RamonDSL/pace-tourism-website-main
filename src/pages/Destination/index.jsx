import React, { useContext, useEffect } from 'react';

import { Article, Container, Section, DestImage, DestInformations } from './styles';
import PageTitle from '/src/components/PageTitle';
import Navbar from './Navbar';
import PageContent from '/src/components/PageContent';
import DestInformation from './DestInformation'; 

import { MyContext } from '../../Store/MyProvider';
import { useLoaderData } from 'react-router-dom';

function Destination() {
  const { contentToShowOnEachPage, deviceLayout, changeCurrentPage } = useContext(MyContext)
  const destinationsData = useLoaderData()
  
  useEffect(() => {
    changeCurrentPage()
  }, [])
  
  return (
    <Container>
        <PageTitle
          pageNumber="01"
          pageName="Pick your destination"
        />

        <Section>
          <DestImage 
            src={destinationsData[contentToShowOnEachPage.destination].images[deviceLayout === "desktop" ? "png" : "webp"]}
            alt="destination image"
          />
          
          <Article>
            <Navbar />

            <PageContent 
              contentTitle={destinationsData[contentToShowOnEachPage.destination].name} 
              convertToH2={true}>
              {destinationsData[contentToShowOnEachPage.destination].description}
            </PageContent>

            <hr />

            <DestInformations>
              <DestInformation 
                informationName="avg. distance"
                informationValue={destinationsData[contentToShowOnEachPage.destination].distance}
              />

              <DestInformation 
                informationName="est travel time"
                informationValue={destinationsData[contentToShowOnEachPage.destination].travel}
              />
            </DestInformations>
          </Article>
        </Section>
    </Container>
  );
}

export default Destination;