
import React from 'react';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Map from './pages/map';
import Iot from './pages/iot';
import Home from './student/home';
import Campus from './student/campus-map';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
       <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/campus-map" element={<Campus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
