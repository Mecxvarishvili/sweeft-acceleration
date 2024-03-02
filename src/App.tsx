import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="history" element={<History />} />
    </Routes>
  );
}

export default App;
