import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../Store/MyProvider';

import { Container, DestinationLink } from './styles';

function Navbar() {
  const [links, setLinks] = useState({ moon: "", mars: "", europa: "", titan: "" })
  const { contentToShowOnEachPage, changeContentToShowOnEachPage } = useContext(MyContext)
  
  const alternateDataInShow = event => {
    const posOfTheNewLinkSelectedInLinks = changeLinkSelected(event.currentTarget.dataset.link)
    
    changeContentToShowOnEachPage(posOfTheNewLinkSelectedInLinks)
  }

  const changeLinkSelected = linkClicked => {
    const newLinksState = { moon: "", mars: "", europa: "", titan: "" }

    newLinksState[linkClicked] = "selected"

    setLinks(newLinksState)

    return Object.getOwnPropertyNames(links).indexOf(linkClicked)
  }

  useEffect(() => {
    changeLinkSelected(Object.keys(links)[contentToShowOnEachPage.destination])
  }, [])

  return (
    <Container>
      <ul>
        <li>
          <DestinationLink
            data-link="moon"
            className={links.moon}
            onClick={alternateDataInShow}>moon</DestinationLink>
        </li>
        <li>
          <DestinationLink
            data-link="mars"
            className={links.mars}
            onClick={alternateDataInShow}>mars</DestinationLink>
        </li>
        <li>
          <DestinationLink
            data-link="europa"
            className={links.europa}
            onClick={alternateDataInShow}>europa</DestinationLink>
        </li>
        <li>
          <DestinationLink
            data-link="titan"
            className={links.titan}
            onClick={alternateDataInShow}>titan</DestinationLink>
        </li>
      </ul>
    </Container>
  );
}


export default Navbar;