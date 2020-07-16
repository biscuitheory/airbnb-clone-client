import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import { AuthContext } from './context/auth';

import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/nav/BottomNav';

import Places from './components/pages/Places';
import Place from './components/pages/Place';
import Reserver from './components/pages/Reserver';
import Booking from './components/pages/Booking';
import Bookings from './components/pages/Bookings';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Enregistres from './components/pages/Enregistres';
import Messages from './components/pages/Messages';
import Profil from './components/pages/Profil';

import './App.scss';

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BreakpointProvider>
        <div className="App">
          <Header />
          <Router>
            <>
              <BottomNav />
              <Switch>
                <Route exact path="/" component={Places} />
                <Route exact path="/rooms/:id" component={Place} />
                <Route exact path="/rooms/:id/reserver" component={Reserver} />
                <Route exact path="/rooms/:id/booking" component={Booking} />
                <Route state={state} exact path="/bookings" component={Bookings} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/wishlists" component={Enregistres} />
                <Route exact path="/inbox" component={Messages} />
                <Route exact path="/account-settings" component={Profil} />
              </Switch>
            </>
          </Router>

          <Footer />
        </div>
      </BreakpointProvider>
    </AuthContext.Provider>
  );
}

export default App;
