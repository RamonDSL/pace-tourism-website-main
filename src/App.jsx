import React, { useContext, useEffect } from 'react';

import { Container } from './styles/appStyles';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MyContext } from './Store/MyProvider';

function App() {
  const { currentPage, deviceLayout, setScreenConfigs } = useContext(MyContext)

  useEffect(() => {
    setScreenConfigs()
    window.addEventListener("resize", setScreenConfigs)
  }, [])
  
  return ( 
    <Container
      $currentpage={currentPage}
      $devicelayout={deviceLayout}
    >
      <Header />

      <Outlet />
      
      <Footer />
    </Container>
  );
}

export default App;