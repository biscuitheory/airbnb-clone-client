import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import { AuthContext } from './context/auth';

import './App.scss';

import Places from './components/pages/Places';
import Place from './components/pages/Place';
import Booking from './components/pages/Booking';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

const App = (props) => {
  return (
    //pour tester les PrivateRoute faudra mettre la value à false}
    // <AuthContext.Provider value={true}>
    <AuthContext.Provider>
      <Router>
        <>
          <Route exact path="/" component={Places} />
          <Route exact path="/rooms/:id" component={Place} />
          {/* <PrivateRoute exact path="/rooms/:id/booking" component={Booking} /> */}
          <Route exact path="/rooms/:id/booking" component={Booking} />
          <Route exact path="/signup" component={Signup} />
        </>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
