import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../../Store/MyProvider';

import { Container, DestinationLink } from './styles';

function Navbar() {
  const [links, setLinks] = useState({douglasHurley: "", markShuttleworth: "", victorGlover: "", anoushehAnsari: ""})
  const { contentToShowOnEachPage, changeContentToShowOnEachPage } = useContext(MyContext)
  
  const alternateDataInShow = event => {
    const posOfTheNewLinkSelectedInLinks = changeLinkSelected(event.currentTarget.dataset.link)
    
    changeContentToShowOnEachPage(posOfTheNewLinkSelectedInLinks)
  }

  const changeLinkSelected = linkClicked => {
    const newLinksState = {douglasHurley: "", markShuttleworth: "", victorGlover: "", anoushehAnsari: ""}

    newLinksState[linkClicked] = "selected"

    setLinks(newLinksState)

    return Object.getOwnPropertyNames(links).indexOf(linkClicked)
  }

  useEffect(() => {
    changeLinkSelected(Object.keys(links)[contentToShowOnEachPage.crew])
  }, [])
  
  return (
    <Container>
        <ul>
            <li>
              <DestinationLink
                data-link="douglasHurley"
                className={links.douglasHurley}
                onClick={alternateDataInShow}></DestinationLink>
            </li>
            <li>
              <DestinationLink
                data-link="markShuttleworth"
                className={links.markShuttleworth}
                onClick={alternateDataInShow}></DestinationLink>
            </li>
            <li>
              <DestinationLink
                data-link="victorGlover"
                className={links.victorGlover}
                onClick={alternateDataInShow}></DestinationLink>
            </li>
            <li>
              <DestinationLink
                data-link="anoushehAnsari"
                className={links.anoushehAnsari}
                onClick={alternateDataInShow}></DestinationLink>
            </li>
        </ul>
    </Container>
  );
}

export default Navbar;