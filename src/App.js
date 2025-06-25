
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar';
import Footer from './Components/footer';

import Homepage from './pages/homepage';
import OurStory from './pages/Our Story';
import OurApproach from './pages/Our Approach';
import Team from './pages/Team';
import ImpactFramework from './pages/Impact framework';
import EarlyChildhood from './pages/Earlychildhood';
import Stories from './pages/Stories';
import Opportunities from './pages/Opportunities';
import Funding from './pages/Funding';
import Volunteering from './pages/Volunteering';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/team" element={<Team />} />
            <Route path="/impact-framework" element={<ImpactFramework />} />
            <Route path="/early-childhood" element={<EarlyChildhood />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/volunteering" element={<Volunteering />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
