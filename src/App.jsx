import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';

import Places from './components/pages/Places';
import Place from './components/pages/Place';
import Bookings from './components/pages/Bookings';
import Booking from './components/pages/Booking';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Enregistres from './components/pages/Enregistres';
import Messages from './components/pages/Messages';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

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
    <div className="App">
      <Header />

      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Router>
          <>
            <Nav />
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

      <Footer />
    </div>
  );
}

export default App;
