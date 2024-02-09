import React from 'react';

import { Container, Logo } from './styles';
import BtnMenu from "/src/components/BtnMenu";
import Navbar from "/src/components/Navbar";

function Header() {
  return (
    <Container>      
        <Logo 
          src="./shared/logo.svg"
          alt="logo icon"
        />

        <hr />

        <BtnMenu />

        <Navbar />        
    </Container>
  );
}

export default Header;