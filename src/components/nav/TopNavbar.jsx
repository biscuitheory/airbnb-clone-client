import React, { useContext } from 'react';
// import { Breakpoint } from 'react-socks';

import { AuthContext } from '../../context/auth';

import LoggedTopNav from './LoggedTopNav';
import GuestTopNav from './GuestTopNav';

const TopNavbar = () => {
  const { state: authState } = useContext(AuthContext);

  if (authState.isAuthenticated) {
    return (
      <>
        <LoggedTopNav />
      </>
    );
  }
  return (
    <>
      <GuestTopNav />
    </>
  );
};

export default TopNavbar;
