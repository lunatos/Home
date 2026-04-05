import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './components/pages/bio';
import Projects from './components/pages/projects';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/bio' exact element={<Bio />} />
            <Route path='/projects' exact element={<Projects />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
