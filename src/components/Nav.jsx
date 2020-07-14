import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../context/auth';

import Places from './pages/Places';
import Place from './pages/Place';
import Bookings from './pages/Bookings';
import Booking from './pages/Booking';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Enregistres from './pages/Enregistres';
import Messages from './pages/Messages';

import { ReactComponent as ExplorerIcon } from '../assets/images/icons/explorer.svg';
import { ReactComponent as EnregistresIcon } from '../assets/images/icons/enregistres.svg';
import { ReactComponent as ConnexionIcon } from '../assets/images/icons/connexion.svg';
import { ReactComponent as VoyagesIcon } from '../assets/images/icons/vali.svg';
import { ReactComponent as MessagesIcon } from '../assets/images/icons/message.svg';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

function Nav() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <>
          <nav className="nav">
            <Link className="nav__link" to="/">
              <ExplorerIcon className="nav__link__icon" />
              <span>
                <strong>Explorer</strong>
              </span>
            </Link>
            <Link className="nav__link" to="/wishlists">
              <EnregistresIcon className="nav__link__icon" />
              <span>
                <strong>Enregistres</strong>
              </span>
            </Link>
            <Link className="nav__link" to="/bookings">
              <VoyagesIcon className="nav__link__icon" />
              <span>
                <strong>Voyages</strong>
              </span>
            </Link>
            <Link className="nav__link" to="/inbox">
              <MessagesIcon className="nav__link__icon" />
              <span>
                <strong>Messages</strong>
              </span>
            </Link>
            <Link className="nav__link" to="/login">
              <ConnexionIcon className="nav__link__icon" />
              <span>
                <strong>Connexion</strong>
              </span>
            </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Places} />
            <Route exact path="/rooms/:id" component={Place} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/rooms/:id/booking" component={Booking} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/wishlists" component={Enregistres} />
            <Route exact path="/inbox" component={Messages} />
          </Switch>
        </>
      </Router>
    </AuthContext.Provider>
  );
}

export default Nav;
