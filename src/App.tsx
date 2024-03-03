import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import SearchHistoryContext from './SearchHistoryContext';
import "./App.css"

function App() {
const [ history, setHistory ] = useState([])

  return (
    <SearchHistoryContext.Provider value={{history, setHistory}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Routes>
    </SearchHistoryContext.Provider>
  );
}

export default App;
