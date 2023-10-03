import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/2" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RoutesTree;