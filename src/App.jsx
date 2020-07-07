import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Places from './components/pages/Places';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Places} />
      </>
    </Router>
  );
}

export default App;
