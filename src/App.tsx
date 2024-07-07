import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main.tsx';
import PersonDetail from './components/PersonDetail/PersonDetail.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/person/:url" element={<PersonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
