import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import TabsNav from './components/TabsNav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <TabsNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
