import React from 'react';
import { Breakpoint } from 'react-socks';

import BottomNavbar from './BottomNavbar';

function NavBis() {
  return (
    <>
      <nav className="nav-wrapper">
        <Breakpoint small down>
          <div className="nav">
            <BottomNavbar />
          </div>
        </Breakpoint>

        <Breakpoint medium up />
      </nav>
    </>
  );
}
export default NavBis;
