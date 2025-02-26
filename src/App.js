import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Transcriptions from './pages/Transcriptions';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> | 
        <Link to="/upload">Upload</Link> | 
        <Link to="/transcriptions">Transcrições</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/transcriptions" element={<Transcriptions />} />
      </Routes>
    </Router>
  );
};

export default App;