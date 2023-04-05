import React, { useState } from 'react';
import FirstNav from './FirstNav';
import LogoNav from './LogoNav';
import BottomNav from './BottomNav';
import SideDrawer from '../../SideDrawer';
import Backdrop from '../../Backdrop';

function NavBars() {
  const [open, setOpen] = useState(false);
  const handleOpenClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <React.Fragment>
      {open && <Backdrop onClick={handleOpenClick}/>}
      <SideDrawer open={open} handleOpenClick={handleOpenClick}/>
      <FirstNav handleOpenClick={handleOpenClick} />
      <LogoNav />
      <BottomNav />
    </React.Fragment>
  );
}

export default NavBars;
