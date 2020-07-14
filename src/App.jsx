import React from 'react';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="App">
      <Header />

      <Nav />

      <Footer />
    </div>
>>>>>>> a0b0ee9... refactoriser navbar
  );
}

export default App;
