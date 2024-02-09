import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../Store/MyProvider';

import { Container } from './styles';

function BtnMenu() {
  const { menuOpen, changeMenuState, deviceLayout } = useContext(MyContext)

  useEffect(() => {
    if (menuOpen) changeMenuState()
  }, [deviceLayout])
  
  return (
    <Container onClick={changeMenuState}>
        <img 
          src={`./shared/icon-${menuOpen ? "close" : "hamburger"}.svg`} 
          alt="menu icon" 
        />
    </Container>
  );
}

export default BtnMenu;