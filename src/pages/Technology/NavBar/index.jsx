import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../../../Store/MyProvider';

import { Container, TechItem } from './styles';

function NavBar() {
  const [links, setLinks] = useState({launchVehicle: "", spaceport: "", spaceCapsule: ""})
  const { contentToShowOnEachPage, changeContentToShowOnEachPage } = useContext(MyContext)
  
  const alternateDataInShow = event => {
    const posOfTheNewLinkSelectedInLinks = changeLinkSelected(event.currentTarget.dataset.link)
    
    changeContentToShowOnEachPage(posOfTheNewLinkSelectedInLinks)
  }

  const changeLinkSelected = linkClicked => {
    const newLinksState = {launchVehicle: "", spaceport: "", spaceCapsule: ""}

    newLinksState[linkClicked] = "selected"

    setLinks(newLinksState)

    return Object.getOwnPropertyNames(links).indexOf(linkClicked)
  }

  useEffect(() => {
    changeLinkSelected(Object.keys(links)[contentToShowOnEachPage.technology])
  }, [])
  
  return (
    <Container>
        <ul>
          <li>
            <TechItem
              data-link="launchVehicle"
              className={links.launchVehicle}
              onClick={alternateDataInShow}>1</TechItem>
          </li>
          <li>
            <TechItem
              data-link="spaceport"
              className={links.spaceport}
              onClick={alternateDataInShow}>2</TechItem>
          </li>
          <li>
            <TechItem
              data-link="spaceCapsule"
              className={links.spaceCapsule}
              onClick={alternateDataInShow}>3</TechItem>
          </li>
        </ul>
    </Container>
  );
}

export default NavBar;