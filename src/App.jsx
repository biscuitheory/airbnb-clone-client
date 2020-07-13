import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';

import './App.scss';

import Places from './components/pages/Places';
import Place from './components/pages/Place';
import Bookings from './components/pages/Bookings';
import Booking from './components/pages/Booking';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

const initialState = {
  isAuthenticated: false,
  token: null,
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

const App = () => {
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
          <Route exact path="/" component={Places} />
          <Route exact path="/rooms/:id" component={Place} />
          {/* <PrivateRoute exact path="/rooms/:id/booking" component={Booking} /> */}
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/rooms/:id/booking" component={Booking} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
