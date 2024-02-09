import React, { createContext, useState } from 'react';
import { usePersistedState } from './store';

export const MyContext = createContext()

function MyProvider({ children }) { 
    const [currentPage, setCurrentPage] = useState("home")
    const [deviceLayout, setDeviceLayout] = useState("mobile")
    const [menuOpen, setMenuOpen] = useState(false)
    const [orientation, setOrientation] = useState("")
    const [contentToShowOnEachPage, setContentToShowOnEachPage] = usePersistedState("pageData", {destination: 0, crew: 0, technology: 0,})
   
    const changeCurrentPage = () => {
        const pageName = getPageName()
        
        setCurrentPage(pageName ? pageName : "home")
    }

    const getPageName = () => location.pathname.match(/(\w+)/)?.[1]
    
    const changeDeviceLayout = () => {
        const tabletBreakPoint = 490
        let desktopBreakPoint

        switch (currentPage) {
            case "destination":
                desktopBreakPoint = 990
                setDeviceLayout(verifybreakPoints(tabletBreakPoint, desktopBreakPoint))
                
                break;
            
            case "technology":
                desktopBreakPoint = 950
                setDeviceLayout(verifybreakPoints(tabletBreakPoint, desktopBreakPoint))

                break;
        
            default:
                desktopBreakPoint = 769
                setDeviceLayout(verifybreakPoints(tabletBreakPoint, desktopBreakPoint))
                break;
        }
    }

    const verifybreakPoints = (tabletBreakPoint, desktopBreakPoint) => {
        const screenWidth = getScreenWidth()
        let layout;

        if (screenWidth < tabletBreakPoint) {
            layout = "mobile"
        } else if (screenWidth < desktopBreakPoint) {
            layout = "tablet"
        } else {
            layout = "desktop"
        }

        return layout
    }

    const getScreenWidth = () => screen.width

    const changeMenuState = () => {
        if (deviceLayout !== "mobile") setMenuOpen(false)
        
        setMenuOpen(!menuOpen)
        document.documentElement.style.overflow = menuOpen ? "hidden" : "visible" 
    }

    const changeScreenOrientation = () => {
        const newOrientation = window.screen.orientation.type.split("-")[0] 

        setOrientation(newOrientation)
    }

    const setScreenConfigs = () => {
        changeDeviceLayout()
        changeScreenOrientation()
    }
    
    const changeContentToShowOnEachPage = newDataToShow => {
        const pageName = getPageName()

        if (!pageName) return
        
        setContentToShowOnEachPage(prevState => ({...prevState, [pageName]: newDataToShow}))
    }

    return (
        <MyContext.Provider value={{
            currentPage,
            changeCurrentPage,
            getPageName,
            deviceLayout,
            menuOpen,
            changeMenuState,
            orientation,
            setScreenConfigs,
            contentToShowOnEachPage,
            changeContentToShowOnEachPage,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;