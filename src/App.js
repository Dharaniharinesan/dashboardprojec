import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Login page component
import Home from './Home'; // Home page component
const App = () => {

  

  return (
    <div>
        <Router>
      <Routes>
        {/* Define the route for the LoginPage */}
        <Route path="/" element={<Login />} />
        
        {/* Define the route for the HomePage */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
     
    </div>
  );
};

export default App;
