import React, { useContext } from 'react';
import { Breakpoint } from 'react-socks';

import { AuthContext } from '../../context/auth';

import LoggedBottomNav from './LoggedBottomNav';
import GuestBottomNav from './GuestBottomNav';

const BottomNav = () => {
  const { state: authState } = useContext(AuthContext);

  if (authState.isAuthenticated) {
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
