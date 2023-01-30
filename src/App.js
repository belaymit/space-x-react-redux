import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Rockets from './pages/home/Rockets';
import Mission from './pages/missions/Missions';
import MyProfile from './pages/my-profile/MyProfile';
import './App.scss';
import HorizontalDivider from './components/ui/HorizontalDivider';

const App = () => (
  <>
    <Navbar />
    <HorizontalDivider />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
