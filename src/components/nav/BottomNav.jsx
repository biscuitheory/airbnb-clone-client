import React from 'react';
import { Breakpoint } from 'react-socks';

import LoggedBottomNav from './LoggedBottomNav';
import GuestBottomNav from './GuestBottomNav';

const BottomNav = (props) => {
  console.log('props : ', props.state.isAuthenticated);

  if (props.state.isAuthenticated) {
    return (
      <>
        <nav className="nav-wrapper">
          <Breakpoint small down>
            <LoggedBottomNav />
          </Breakpoint>
          <Breakpoint medium up />
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="nav-wrapper">
        <Breakpoint small down>
          <GuestBottomNav />
        </Breakpoint>
        <Breakpoint medium up />
      </nav>
    </>
  );
};

export default BottomNav;
