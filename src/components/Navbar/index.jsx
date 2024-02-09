import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../../Store/MyProvider';

import { Container, PageLink, PageNumber, PageName } from './styles';

function Navbar() {
    const { changeCurrentPage, getPageName, menuOpen } = useContext(MyContext)
    const [links, setLinks] = useState({home: "", destination: "", crew: "", technology: ""})
    const pageUrl = useLocation().pathname
    
    const changeLinkSelected = () => {
        const newLinksState = {home: "", destination: "", crew: "", technology: ""}
        const pageName = getPageName()
        
        newLinksState[pageName ? pageName : "home"] = "selected"

        setLinks(newLinksState)
    }
    
    useEffect(() => {
        changeCurrentPage()
        changeLinkSelected()
    }, [pageUrl])

    return (
        <Container className={menuOpen ? "active" : ""}>
            <ul>
                <li>
                    <PageLink 
                        to="/"
                        className={links.home}>
                        <PageNumber>00</PageNumber>
                        <PageName>home</PageName>
                    </PageLink>
                </li>
                <li>
                    <PageLink 
                        to="destination"
                        className={links.destination}>
                        <PageNumber>01</PageNumber>
                        <PageName>destination</PageName>
                    </PageLink>
                </li>
                <li>
                    <PageLink 
                        to="crew"
                        className={links.crew}>
                        <PageNumber>02</PageNumber>
                        <PageName>crew</PageName>
                    </PageLink>
                </li>
                <li>
                    <PageLink 
                        to="technology"
                        className={links.technology}>
                        <PageNumber>03</PageNumber>
                        <PageName>technology</PageName>
                    </PageLink>
                </li>
            </ul>
        </Container>
    );
}

export default Navbar;